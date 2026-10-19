import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <h2 className="reveal font-bebas text-h2 tracking-wide">{faq.title}</h2>
      <p className="reveal mt-4 max-w-[60ch] text-body text-bone/70">{faq.intro}</p>
      <div className="reveal mt-10 divide-y divide-white/10 border-y border-white/10">
        {faq.items.map((item, i) => (
          <details key={item.q} className="group px-4 py-6 sm:px-6">
            <summary className="flex cursor-pointer list-none items-center gap-6">
              <span className="font-bebas text-h4 text-bone/50">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 font-bebas text-h4 tracking-wide group-hover:text-lava">{item.q}</span>
              <span className="faq-arrow text-xl" aria-hidden="true">
                ↓
              </span>
            </summary>
            <p className="mt-4 max-w-[65ch] pl-12 text-body text-bone/70">
              {"link" in item && item.link ? (
                <>
                  {item.a.split(item.link.label)[0]}
                  <a className="text-lava hover:underline" href={item.link.href}>
                    {item.link.label}
                  </a>
                  {item.a.split(item.link.label)[1]}
                </>
              ) : (
                item.a
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
