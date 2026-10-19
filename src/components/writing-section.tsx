import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { writing } from "@/content/site";
import { getPosts } from "@/lib/content";

export function WritingSection() {
  const latest = getPosts().slice(0, 3);

  return (
    <section id="writing" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <SectionHeading title={writing.title} intro={writing.intro} cta={writing.cta} compact />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
