import { type ChildProcess, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getPosts, getProjects, getTags } from "@/lib/content";

// The 200-instead-of-404 bug only shows up in a production build, so this runs against `next start`.
const PORT = 3123;
const BASE = `http://localhost:${PORT}`;

let server: ChildProcess;

async function status(path: string) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  return res.status;
}

beforeAll(async () => {
  if (!existsSync(".next/BUILD_ID")) {
    throw new Error("No production build found. Run `npm run build` before `npm test`.");
  }
  server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore" });
  for (let i = 0; i < 100; i++) {
    try {
      await fetch(BASE);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error("next start did not come up within 20 seconds");
}, 30_000);

afterAll(() => {
  server?.kill();
});

describe("HTTP status codes in production", () => {
  it.each(["/blog/does-not-exist", "/projects/does-not-exist", "/blog/tags/does-not-exist"])(
    "returns 404 for unknown slug %s",
    async (path) => {
      expect(await status(path)).toBe(404);
    },
  );

  it("keeps returning 404 on a repeat request for the same unknown slug", async () => {
    await status("/blog/does-not-exist");
    expect(await status("/blog/does-not-exist")).toBe(404);
  });

  it("returns 200 for every existing post, project and tag page", async () => {
    const paths = [
      ...getPosts().map((p) => `/blog/${p.slug}`),
      ...getProjects().map((p) => `/projects/${p.slug}`),
      ...getTags().map((t) => `/blog/tags/${t.slug}`),
    ];
    for (const path of paths) {
      expect({ path, status: await status(path) }).toEqual({ path, status: 200 });
    }
  });

  it("still redirects a retired post with 308", async () => {
    expect(await status("/blog/webpack")).toBe(308);
  });
});
