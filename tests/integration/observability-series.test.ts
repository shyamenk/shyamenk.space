import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getPosts, getTags } from "@/lib/content";

const SERIES = ["monitoring-vs-observability", "logs-metrics-traces", "what-is-opentelemetry"];

const body = (slug: string) => fs.readFileSync(path.join("content/blog", `${slug}.mdx`), "utf8");

describe("Observability series (#53)", () => {
  it.each(SERIES)("%s has complete front matter and an existing featured image", (slug) => {
    const post = getPosts().find((p) => p.slug === slug);
    expect(post).toBeDefined();
    for (const field of ["title", "date", "excerpt", "image", "readTime"] as const) {
      expect(post?.[field], field).toBeTruthy();
    }
    expect(post?.tags.length).toBeGreaterThan(0);
    expect(fs.existsSync(path.join("public", post!.image))).toBe(true);
  });

  it.each(SERIES)("%s links to the other two parts", (slug) => {
    for (const other of SERIES.filter((s) => s !== slug)) {
      expect(body(slug)).toContain(`](/blog/${other})`);
    }
  });

  it("lists all three parts under the Observability tag", () => {
    const tagged = getPosts().filter((p) => p.tags.includes("Observability"));
    expect(tagged.map((p) => p.slug).sort()).toEqual([...SERIES].sort());
    expect(getTags().find((t) => t.tag === "Observability")?.slug).toBe("observability");
  });

  it("dates each part to its LinkedIn post: Nov 30, Dec 1, Dec 2 (#55)", () => {
    const dates = SERIES.map((slug) => getPosts().find((p) => p.slug === slug)?.date);
    expect(dates).toEqual(["2026-11-30", "2026-12-01", "2026-12-02"]);
  });

  it.each(SERIES)("%s cites its sources", (slug) => {
    expect(body(slug)).toMatch(/^## Sources\n\n- \[.+\]\(https:\/\//m);
  });
});
