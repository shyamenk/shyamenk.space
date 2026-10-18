import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <h2 className="reveal font-bebas text-6xl tracking-wide">{testimonials.title}</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <figure
            key={t.name}
            className="reveal card flex flex-col rounded-2xl border border-crimson/40 bg-void p-7"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <blockquote className="flex-1 font-hand text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blood font-bebas text-xl" aria-hidden="true">
                {t.initials}
              </span>
              <span>
                <span className="block font-bebas text-lg tracking-wide">{t.name}</span>
                <span className="block text-xs text-bone/60">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
