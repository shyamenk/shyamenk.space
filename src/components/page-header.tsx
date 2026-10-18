import Link from "next/link";
import type { ReactNode } from "react";

// One header card for every inner page: same width, same height, same type scale.
// Extra UI (tags, buttons) goes below the card, never inside it.
export function PageHeader({
  eyebrow,
  title,
  intro,
  back,
  long = false,
}: {
  eyebrow?: ReactNode;
  title: string;
  intro?: string;
  back?: { label: string; href: string };
  /** Long titles (posts, case studies) use a smaller size so the card keeps its height. */
  long?: boolean;
}) {
  return (
    <section className="px-3 pt-5 sm:px-6">
      <div className="lava-glow relative mx-auto flex min-h-[300px] max-w-6xl flex-col justify-center overflow-hidden rounded-[28px] border border-white/5 px-6 py-12 sm:h-[340px] sm:min-h-0 sm:px-12">
        {(back || eyebrow) && (
          <div className="fade flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-bone/70">
            {back && (
              <Link
                href={back.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/60 px-3 py-1 normal-case tracking-normal text-bone transition hover:border-lava"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
                  ←
                </span>
                {back.label}
              </Link>
            )}
            {eyebrow}
          </div>
        )}
        <h1
          className={`mt-3 max-w-[24ch] font-bebas uppercase leading-[0.92] tracking-wide ${
            long ? "line-clamp-2 max-w-[32ch] text-[clamp(2rem,4vw,3.25rem)]" : "text-[clamp(2.8rem,7vw,5.5rem)]"
          }`}
        >
          {long ? (
            // line-clamp needs plain inline text, so long titles fade in instead of rising.
            <span className="fade">{title}</span>
          ) : (
            <span className="word">
              <span>{title}</span>
            </span>
          )}
        </h1>
        {intro && (
          <p className="fade mt-5 line-clamp-2 max-w-[60ch] text-lg font-light text-bone/85" style={{ animationDelay: "0.3s" }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

/** Row directly under a PageHeader, for tags, filters and action buttons. */
export function HeaderActions({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="fade flex flex-wrap gap-2" aria-label={label} role={label ? "group" : undefined} style={{ animationDelay: "0.4s" }}>
        {children}
      </div>
    </div>
  );
}
