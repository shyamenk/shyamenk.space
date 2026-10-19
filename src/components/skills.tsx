import { SkillTabs } from "@/components/skill-tabs";
import { skills } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <h2 className="reveal font-bebas text-h2 tracking-wide">{skills.title}</h2>
      <p className="reveal mt-4 max-w-[60ch] text-body text-bone/70">{skills.intro}</p>

      <div className="reveal">
        <SkillTabs />
      </div>

      <div className="reveal mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8 text-base text-bone/70">
        <span className="mr-2 font-orb text-xs tracking-[0.2em] text-bone/50">CERTIFIED</span>
        {skills.certifications.map((c) => (
          <span key={c} className="rounded-full border border-crimson/50 px-4 py-1.5">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
