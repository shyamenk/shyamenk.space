import Link from "next/link";

export function SectionHeading({
  title,
  intro,
  cta,
}: {
  title: string;
  intro?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="reveal flex flex-wrap items-end justify-between gap-6">
      <div>
        <h2 className="font-bebas text-6xl tracking-wide">{title}</h2>
        {intro && <p className="mt-4 max-w-[60ch] text-bone/70">{intro}</p>}
      </div>
      {cta && (
        <Link
          href={cta.href}
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-lava hover:text-lava"
        >
          {cta.label}
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
