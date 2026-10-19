import Link from "next/link";
import { footer, nav, profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 py-8 text-xs text-bone/40 sm:px-6">
      <p>{footer}</p>
      <ul className="flex flex-wrap gap-5">
        {nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition hover:text-lava">
              {item.label}
            </Link>
          </li>
        ))}
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-lava">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
