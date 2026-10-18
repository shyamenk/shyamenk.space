import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/post-card";
import { TagList } from "@/components/tag-list";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts on backend engineering, databases, security, system design and the web.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main>
      <PageHeader
        eyebrow={`${posts.length} posts`}
        title="Blog"
        intro="One real problem per post: what broke, why, and the fix. Backend, databases, security and system design."
      />
      <TagList />
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </section>
    </main>
  );
}
