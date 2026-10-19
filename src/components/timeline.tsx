import type { CSSProperties } from "react";
import { timeline } from "@/content/site";

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <h2 className="reveal font-bebas text-6xl tracking-wide">{timeline.title}</h2>
      <p className="reveal mt-4 max-w-[60ch] text-bone/70">{timeline.intro}</p>

      <ol className="mt-14 space-y-20">
        {timeline.stages.map((stage) => (
          <li key={stage.label} className="reveal">
            <div className="flex flex-wrap items-center gap-8">
              <div className="relative h-40 w-40 shrink-0" aria-hidden="true">
                <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#ffffff20" strokeDasharray="2 6" />
                  <circle
                    className="ring"
                    style={{ "--to": stage.ringOffset } as CSSProperties}
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#b11226"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center font-bebas text-4xl">{stage.label}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-bone/50">{stage.period}</p>
                <h3 className="mt-2 font-bebas text-4xl tracking-wide">
                  <span className="text-crimson">{stage.role}</span> · {stage.roleSuffix}
                </h3>
              </div>
            </div>

            {stage.steps.length > 0 && (
              <ol className="mt-8 grid gap-4 md:grid-cols-3">
                {stage.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className={`card rounded-2xl border bg-void p-6 ${
                      i === stage.highlightStep ? "border-crimson/60 shadow-[0_0_30px_-12px_#ff4d00]" : "border-white/10"
                    }`}
                  >
                    <p className="font-serif text-bone/50" aria-hidden="true">
                      {numerals[i]}
                    </p>
                    <p className="mt-3 text-lg">{step.title}</p>
                    <p className="mt-2 text-sm text-bone/60">{step.body}</p>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
