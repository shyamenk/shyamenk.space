import { skills } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <h2 className="reveal font-bebas text-6xl tracking-wide">{skills.title}</h2>
      <p className="reveal mt-4 max-w-[60ch] text-bone/70">{skills.intro}</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <article
            key={group.name}
            className="reveal card rounded-2xl border border-white/10 bg-void p-6"
            style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
          >
            <h3 className="font-bebas text-2xl tracking-wide text-crimson">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip rounded-full border border-white/10 px-3 py-1 text-sm text-bone/75">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="reveal mt-10 flex flex-wrap items-center gap-3 text-sm text-bone/60">
        <span className="text-xs uppercase tracking-[0.2em]">Certifications</span>
        {skills.certifications.map((c) => (
          <span key={c} className="rounded-full border border-crimson/50 px-3 py-1">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
