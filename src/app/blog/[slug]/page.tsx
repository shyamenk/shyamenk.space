import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderActions, PageHeader } from "@/components/page-header";
import { formatDate, getPost, getPosts, tagSlug } from "@/lib/content";

// Unknown slugs must render fully before responding; otherwise the fallback shell ships a 200 before notFound() runs.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article" },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { meta, html } = post;
  const posts = getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <main>
      <PageHeader
        back={{ label: "All posts", href: "/blog" }}
        eyebrow={`${formatDate(meta.date)} · ${meta.readTime}`}
        title={meta.title}
        intro={meta.excerpt}
        long
      />
      <HeaderActions label="Tags">
        {meta.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tags/${tagSlug(tag)}`}
            className="chip rounded-full border border-white/15 px-4 py-1.5 text-sm text-bone/75"
          >
            #{tag}
          </Link>
        ))}
      </HeaderActions>

      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <Image
          src={meta.image}
          alt=""
          width={1200}
          height={630}
          loading="eager"
          sizes="(min-width: 768px) 720px, 100vw"
          className="reveal mt-12 w-full rounded-2xl border border-white/10"
        />
        {/* Trusted, build-time HTML rendered from this repo's own Markdown files. */}
        <div className="prose prose-lg prose-lava mt-12 max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <nav aria-label="More posts" className="mx-auto mt-20 grid max-w-3xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
        {newer ? (
          <Link href={`/blog/${newer.slug}`} className="card rounded-2xl border border-white/10 bg-void p-5">
            <span className="text-xs uppercase tracking-[0.2em] text-bone/50">← Newer</span>
            <span className="mt-2 block hover:text-lava">{newer.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {older && (
          <Link href={`/blog/${older.slug}`} className="card rounded-2xl border border-white/10 bg-void p-5 text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-bone/50">Older →</span>
            <span className="mt-2 block hover:text-lava">{older.title}</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
