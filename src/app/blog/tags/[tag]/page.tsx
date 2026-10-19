import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/post-card";
import { TagList } from "@/components/tag-list";
import { getPosts, getTags, tagSlug } from "@/lib/content";

// Unknown slugs must render fully before responding; otherwise the fallback shell ships a 200 before notFound() runs.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getTags().map(({ slug }) => ({ tag: slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/tags/[tag]">): Promise<Metadata> {
  const { tag } = await params;
  const match = getTags().find((t) => t.slug === tag);
  return match ? { title: `#${match.tag}`, description: `Posts tagged ${match.tag}.` } : {};
}

export default async function TagPage({ params }: PageProps<"/blog/tags/[tag]">) {
  const { tag } = await params;
  const match = getTags().find((t) => t.slug === tag);
  if (!match) notFound();

  const posts = getPosts().filter((p) => p.tags.some((t) => tagSlug(t) === tag));

  return (
    <main>
      <PageHeader
        back={{ label: "All posts", href: "/blog" }}
        eyebrow={`${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
        title={`#${match.tag}`}
      />
      <TagList active={tag} />
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </section>
    </main>
  );
}
