import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { about, profile } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${about.lead} ${about.current.role} at ${about.current.company}.`,
};

const next = [
  { label: "See the projects", href: "/projects" },
  { label: "Read the blog", href: "/blog" },
  { label: "Get in touch", href: "/contact" },
];

// Same width as the header card and the same padded card as the Contact page.
const card = "rounded-[28px] border border-white/10 bg-void p-6 sm:p-10";

export default function AboutPage() {
  const { current } = about;

  return (
    <main>
      <PageHeader eyebrow={profile.role} title={about.title} intro={about.lead} />

      {/* Intro: photo + currently + story */}
      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className={`reveal grid gap-10 md:grid-cols-[240px_1fr] md:gap-14 ${card}`}>
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={400}
            height={400}
            loading="eager"
            className="h-60 w-60 rounded-full object-cover"
          />

          <div>
            <div className="border-l-2 border-lava pl-6">
              <p className="text-xs uppercase tracking-[0.25em] text-lava">{current.label}</p>
              <p className="mt-3 font-bebas text-4xl leading-none tracking-wide sm:text-5xl">
                {current.role} <span className="text-bone/50">at</span> {current.company}
              </p>
              <p className="mt-2 text-sm text-bone/50">{current.period}</p>
              <p className="mt-4 max-w-[60ch] leading-relaxed text-bone/80">{current.summary}</p>
            </div>

            <div className="mt-10 space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="max-w-[62ch] text-lg leading-relaxed text-bone/75">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
        <div className={`reveal ${card}`}>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-bebas text-5xl tracking-wide">Journey</h2>
            <Link href="/#timeline" className="group text-sm text-bone/60 transition hover:text-lava">
              Full timeline{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <ol className="mt-6 border-t border-white/10">
            {about.journey.map((step) => (
              <li
                key={step.company}
                className="group grid gap-1 border-b border-white/10 py-6 last:border-0 last:pb-0 sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="text-sm text-bone/50">{step.period}</span>
                <span>
                  <span className="block text-lg transition-colors group-hover:text-lava">{step.role}</span>
                  <span className="block text-sm text-bone/60">{step.company}</span>
                </span>
                <span className="text-sm text-bone/50 sm:max-w-[30ch] sm:text-right">{step.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
        <dl className={`reveal grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ${card}`}>
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs uppercase tracking-[0.2em] text-bone/45">{fact.label}</dt>
              <dd className="mt-2 text-bone/85">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="reveal mt-10 flex flex-wrap gap-3">
          {next.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "ember-btn rounded-full bg-void px-6 py-2.5 text-sm"
                  : "chip rounded-full border border-white/15 px-6 py-2.5 text-sm"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
