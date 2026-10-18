import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { MailIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { LocalTime } from "@/components/local-time";
import { contact, profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.intro,
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow={
          <span className="flex flex-wrap items-center gap-3 normal-case tracking-normal">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/60 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-green-400" />
              </span>
              {contact.badge}
            </span>
            <span className="rounded-full border border-white/15 bg-void/60 px-3 py-1 font-orb tracking-[0.15em]">
              {profile.location.toUpperCase()} · IST <LocalTime />
            </span>
          </span>
        }
        title={contact.title}
        intro={contact.intro}
      />

      {/* Email + channels */}
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <article className="reveal card flex flex-col justify-between rounded-[28px] border border-crimson/50 bg-void p-8 sm:p-10">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-bone/50">
              <MailIcon /> {contact.email.label}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 block font-bebas text-[clamp(1.9rem,4vw,3.25rem)] leading-none tracking-wide [overflow-wrap:anywhere] transition hover:text-lava"
            >
              {profile.email}
            </a>
            <p className="mt-4 max-w-[42ch] text-bone/65">{contact.email.note}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="ember-btn rounded-full bg-pit px-6 py-3 text-sm">
              Open mail app ↗
            </a>
            <CopyEmail email={profile.email} />
          </div>
        </article>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contact.channels.map((channel, i) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                className="reveal card flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-void px-6 py-5"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span>
                  <span className="flex items-baseline gap-3">
                    <span className="font-bebas text-2xl tracking-wide">{channel.label}</span>
                    <span className="text-sm text-lava">{channel.handle}</span>
                  </span>
                  <span className="mt-1 block text-sm text-bone/55">{channel.note}</span>
                </span>
                <span className="card-arrow text-xl text-bone/60" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* What to include */}
      <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
        <div className="reveal rounded-[28px] border border-white/10 bg-void p-8 sm:p-10">
          <h2 className="font-bebas text-4xl tracking-wide">{contact.include.title}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {contact.include.items.map((item, i) => (
              <li key={item} className="card flex gap-4 rounded-2xl border border-white/10 bg-pit p-5">
                <span className="font-orb text-sm text-crimson">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-bone/80">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sign-off */}
      <section className="px-3 sm:px-6" aria-hidden="true">
        <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-void">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(60%_90%_at_50%_100%,#b1122666,transparent)]" />
          <p className="flicker relative select-none whitespace-nowrap pt-10 text-center font-bebas text-[17vw] leading-[0.8] text-crimson/80 lg:text-[11.5rem]">
            {profile.name}
          </p>
        </div>
      </section>
    </main>
  );
}
