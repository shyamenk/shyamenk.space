import Link from "next/link";
import { HeaderActions } from "@/components/page-header";
import { getTags } from "@/lib/content";

export function TagList({ active }: { active?: string }) {
  const tags = getTags();
  const base = "chip rounded-full border px-4 py-1.5 text-sm";
  const on = "border-lava bg-lava text-void";
  const off = "border-white/15 text-bone/75";

  return (
    <nav aria-label="Filter posts by tag">
      <HeaderActions>
        <Link href="/blog" aria-current={active ? undefined : "page"} className={`${base} ${active ? off : on}`}>
          All
        </Link>
        {tags.map(({ tag, slug, count }) => (
          <Link
            key={slug}
            href={`/blog/tags/${slug}`}
            aria-current={active === slug ? "page" : undefined}
            className={`${base} ${active === slug ? on : off}`}
          >
            {tag} <span className="opacity-60">{count}</span>
          </Link>
        ))}
      </HeaderActions>
    </nav>
  );
}
