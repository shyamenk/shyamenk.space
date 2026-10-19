import Image from "next/image";
import Link from "next/link";
import { formatDate, tagSlug, type PostMeta } from "@/lib/content";

export function PostCard({ post, index = 0 }: { post: PostMeta; index?: number }) {
  return (
    <article
      className="reveal card flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-void"
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="overflow-hidden border-b border-white/10">
        <Image
          src={post.image}
          alt=""
          width={1200}
          height={630}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="card-img aspect-[1200/630] w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[13px] text-bone/55">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
        </p>
        <h3 className="mt-2 font-bebas text-h4 leading-tight tracking-wide">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 hover:text-lava">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-bone/60">{post.excerpt}</p>
        <ul className="relative z-10 mt-auto flex flex-wrap gap-1.5 pt-5">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blog/tags/${tagSlug(tag)}`}
                className="chip inline-block rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-bone/60"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
