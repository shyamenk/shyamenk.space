import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { LocalTime } from "@/components/local-time";
import { PageHeader } from "@/components/page-header";
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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/60 px-3 py-1 normal-case tracking-normal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative h-2 w-2 rounded-full bg-green-400" />
            </span>
            {contact.badge}
          </span>
        }
        title={contact.title}
        intro={contact.intro}
      />

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
        {/* Direct details */}
        <aside className="reveal space-y-10 self-start rounded-[28px] border border-white/10 bg-void p-6 sm:p-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-bone/50">Email</h2>
            <a href={`mailto:${profile.email}`} className="mt-3 block text-xl transition hover:text-lava">
              {profile.email}
            </a>
            <div className="mt-4">
              <CopyEmail email={profile.email} />
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-bone/50">Elsewhere</h2>
            <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
              {contact.channels.map((channel) => {
                const internal = channel.href.startsWith("/");
                const className = "group flex items-center justify-between gap-4 py-3.5 transition hover:text-lava";
                const inner = (
                  <>
                    <span>
                      <span className="block">{channel.label}</span>
                      <span className="block text-sm text-bone/50">{channel.handle}</span>
                    </span>
                    <span className="text-bone/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-lava" aria-hidden="true">
                      {internal ? "→" : "↗"}
                    </span>
                  </>
                );
                return (
                  <li key={channel.label}>
                    {internal ? (
                      <Link href={channel.href} className={className}>
                        {inner}
                      </Link>
                    ) : (
                      <a href={channel.href} className={className}>
                        {inner}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-bone/50">Location</h2>
            <p className="mt-3">{profile.location}</p>
            <p className="text-sm text-bone/50">
              Local time: <LocalTime /> IST
            </p>
          </div>
        </aside>

        {/* Form */}
        <div className="reveal rounded-[28px] border border-white/10 bg-void p-6 sm:p-10">
          <h2 className="font-bebas text-4xl tracking-wide">{contact.formTitle}</h2>
          <p className="mt-2 text-bone/60">{contact.formIntro}</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
