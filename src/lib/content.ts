import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const contentDir = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
  readTime: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

function readCollection(collection: "blog" | "projects") {
  const dir = path.join(contentDir, collection);
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return { fileSlug: file.replace(/\.mdx?$/, ""), data, content };
    });
}

const byDateDesc = (a: { date: string }, b: { date: string }) => b.date.localeCompare(a.date);

export function getPosts(): PostMeta[] {
  return readCollection("blog")
    .map(({ fileSlug, data }) => ({
      slug: fileSlug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags ?? [],
      image: data.featuredImage,
      readTime: data.readTime,
    }))
    .sort(byDateDesc);
}

export function getProjects(): ProjectMeta[] {
  return readCollection("projects")
    .map(({ fileSlug, data }) => ({
      slug: data.slug ?? fileSlug,
      title: data.title,
      description: data.description,
      date: String(data.date),
      image: data.image,
      technologies: data.technologies ?? [],
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
      featured: Boolean(data.featured),
    }))
    .sort(byDateDesc);
}

export const tagSlug = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function getTags(): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getPosts()) for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts]
    .map(([tag, count]) => ({ tag, slug: tagSlug(tag), count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

async function renderMarkdown(markdown: string) {
  // The page header already shows the title; drop a leading "# Title" to avoid a duplicate h1.
  markdown = markdown.replace(/^\s*# .*\n/, "");
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeHighlight, { detect: false })
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

export async function getPost(slug: string) {
  const entry = readCollection("blog").find((e) => e.fileSlug === slug);
  if (!entry) return null;
  const meta = getPosts().find((p) => p.slug === slug)!;
  return { meta, html: await renderMarkdown(entry.content) };
}

export async function getProject(slug: string) {
  const entry = readCollection("projects").find((e) => (e.data.slug ?? e.fileSlug) === slug);
  if (!entry) return null;
  const meta = getProjects().find((p) => p.slug === slug)!;
  return { meta, html: await renderMarkdown(entry.content) };
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
