"use client";

import { useId, useState } from "react";
import { skills } from "@/content/site";

export function SkillTabs() {
  // First group starts selected so the panel is never empty.
  const [active, setActive] = useState(0);
  const baseId = useId();
  const group = skills.groups[active];

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-[16rem_1fr] md:gap-12">
      <div
        role="tablist"
        aria-orientation="vertical"
        className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible md:border-l md:border-white/10 md:pb-0"
      >
        {skills.groups.map((g, i) => {
          const selected = i === active;
          return (
            <button
              key={g.name}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-baseline justify-between gap-6 rounded-full border px-5 py-2 text-left transition-colors duration-300 md:-ml-px md:rounded-none md:border-0 md:border-l-2 md:px-6 md:py-4 ${
                selected ? "border-lava text-bone md:border-lava" : "border-white/15 text-bone/50 hover:text-bone md:border-transparent"
              }`}
            >
              <span className="font-bebas text-h4 tracking-wide">{g.name}</span>
              <span className="font-orb text-xs tracking-[0.15em]">{String(g.items.length).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`}>
        <ul key={group.name} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((item) => (
            <li key={item} className="fade chip flex items-center gap-3 rounded-xl border border-white/10 bg-void px-4 py-3 text-base">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lava" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
