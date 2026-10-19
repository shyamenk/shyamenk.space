import Link from "next/link";
import { nav, profile } from "@/content/site";
import { LinkedInIcon, MailIcon, SunMark } from "@/components/icons";

export function SiteHeader() {
  const linkedin = profile.socials.find((s) => s.label === "linkedin");

  return (
    <header className="sticky top-0 z-30 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-void/80 px-4 py-3 backdrop-blur"
      >
        <Link href="/" className="flex items-center gap-2 font-orb text-sm tracking-[0.2em] transition hover:text-lava">
          <SunMark />
          SHYAMENK
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-bone/70 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link className="relative py-1 transition hover:text-bone after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-lava after:transition-transform after:duration-300 hover:after:scale-x-100" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:-translate-y-0.5 hover:border-lava hover:text-lava"
            >
              <LinkedInIcon />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:-translate-y-0.5 hover:border-lava hover:text-lava"
          >
            <MailIcon />
          </a>

          <details className="group relative md:hidden">
            <summary className="grid h-9 w-9 list-none place-items-center rounded-full border border-white/10 transition hover:border-lava" aria-label="Menu">
              <span className="flex flex-col gap-1" aria-hidden="true">
                <span className="block h-px w-4 bg-bone transition group-open:translate-y-[2.5px] group-open:rotate-45" />
                <span className="block h-px w-4 bg-bone transition group-open:-translate-y-[2.5px] group-open:-rotate-45" />
              </span>
            </summary>
            <ul className="absolute right-0 top-12 w-48 rounded-2xl border border-white/10 bg-void p-2 text-sm shadow-2xl">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="block rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-lava" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
