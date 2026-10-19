import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";

const retiredPosts = ["webpack", "database-design", "how-web-works"];
const emptiedTags = ["frontend", "http", "javascript", "tools", "web"];

async function redirects() {
  return (await nextConfig.redirects?.()) ?? [];
}

describe("retired blog URLs", () => {
  it("permanently redirects each removed post to /blog", async () => {
    const list = await redirects();
    for (const slug of retiredPosts) {
      expect(list).toContainEqual({ source: `/blog/${slug}`, destination: "/blog", permanent: true });
    }
  });

  it("permanently redirects tag pages left without posts to /blog", async () => {
    const list = await redirects();
    for (const tag of emptiedTags) {
      expect(list).toContainEqual({ source: `/blog/tags/${tag}`, destination: "/blog", permanent: true });
    }
  });

  it("has no post file left behind for a redirected slug", () => {
    for (const slug of retiredPosts) {
      expect(existsSync(`content/blog/${slug}.mdx`)).toBe(false);
    }
  });
});
