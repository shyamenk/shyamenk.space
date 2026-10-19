import { timeline } from "@/content/site";

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <h2 className="reveal font-bebas text-h2 tracking-wide">{timeline.title}</h2>
      <p className="reveal mt-4 max-w-[60ch] text-body text-bone/70">{timeline.intro}</p>

      <ol className="mt-12 border-l border-white/15">
        {timeline.stages.map((stage, stageIndex) => (
          <li key={stage.label} className="reveal relative pb-14 pl-8 last:pb-0 sm:pl-12">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-pit ${
                stageIndex === 0 ? "bg-lava shadow-[0_0_16px_2px_#ff4d00]" : "bg-crimson"
              }`}
              aria-hidden="true"
            />
            <p className="font-orb text-sm tracking-[0.12em] text-bone/70">
              {stage.label.toUpperCase()} · {stage.period.toUpperCase()}
            </p>
            <h3 className="mt-2 font-bebas text-h4 tracking-wide">
              <span className="text-crimson">{stage.role}</span> · {stage.roleSuffix}
            </h3>

            <ul className="mt-5 max-w-[75ch] space-y-3">
              {stage.steps.map((step) => (
                <li key={step.title} className="flex gap-3 text-base text-bone/60">
                  <span className="mt-[0.75em] h-1 w-1 shrink-0 rounded-full bg-lava" aria-hidden="true" />
                  <p>
                    <span className="font-medium text-bone">{step.title}.</span> {step.body}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
