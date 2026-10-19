"use client";

import { useId, useState } from "react";
import { services } from "@/content/site";

export function ServiceList() {
  // First row starts open so the section never looks empty before interaction.
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <ol className="mt-12 border-t border-white/10">
      {services.items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <li
            key={item.title}
            className="reveal group relative border-b border-white/10"
            style={{ transitionDelay: `${i * 0.07}s` }}
            onMouseEnter={() => setOpen(i)}
          >
            {/* Accent line slides in under the open row. */}
            <span
              className={`absolute -bottom-px left-0 h-px bg-lava transition-[width] duration-700 motion-reduce:transition-none ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "w-full" : "w-0"}`}
              aria-hidden="true"
            />
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-6 py-6 text-left sm:gap-10"
              >
                <span className={`font-orb text-xs transition-colors duration-300 ${isOpen ? "text-lava" : "text-bone/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 font-bebas text-[clamp(1.272rem,3vw,2.058rem)] leading-none tracking-wide transition-[color,transform] duration-500 motion-reduce:transition-none ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "translate-x-2 text-bone" : "text-bone/70 group-hover:text-bone"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border text-lg transition-all duration-500 motion-reduce:transition-none ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "rotate-90 border-lava bg-lava text-void" : "border-white/15 text-bone/70"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-label={item.title}
              className={`grid transition-[grid-template-rows,opacity] duration-500 motion-reduce:transition-none ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 pb-8 pl-0 sm:pl-[4.75rem] lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <p className="max-w-[52ch] text-lead leading-relaxed text-bone/80">{item.body}</p>
                    <p className="mt-4 flex gap-3 text-sm text-bone/60">
                      <span className="font-orb text-xs tracking-[0.2em] text-crimson">PROOF</span>
                      {item.proof}
                    </p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2">
                    {item.tools.map((tool) => (
                      <li key={tool} className="chip rounded-full border border-white/10 px-3 py-1 text-sm text-bone/75">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
