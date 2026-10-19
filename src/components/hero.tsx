import Image from "next/image";
import Link from "next/link";
import { hero, profile } from "@/content/site";

export function Hero() {
  // Words rise one after another, delayed by their position in the headline.
  const words = hero.headline.flat();
  const delayFor = (index: number) => `${(0.15 + index * 0.09).toFixed(2)}s`;

  return (
    <section className="px-3 pt-12 sm:px-6 sm:pt-[4.5rem]">
      <div className="lava-glow relative mx-auto grid min-h-[58vh] max-w-6xl items-center overflow-hidden rounded-[28px] border border-white/5 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10 px-6 py-10 text-center sm:px-10 lg:py-14 lg:text-left">
          <p
            className="fade inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/60 px-3 py-1 text-xs"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative h-2 w-2 rounded-full bg-green-400" />
            </span>
            {hero.badge}
          </p>

          <h1 className="mt-6 font-bebas text-[clamp(2.6rem,6.5vw,5rem)] uppercase leading-[1.12] tracking-wide">
            {hero.headline.map((line, i) => (
              <span key={i} className="block">
                {line.map((word) => (
                  <span key={word} className="word mr-[0.25em]">
                    <span style={{ animationDelay: delayFor(words.indexOf(word)) }}>{word}</span>
                  </span>
                ))}
              </span>
            ))}
            <span className="word">
              <span className="text-lava" style={{ animationDelay: delayFor(words.length) }}>
                {hero.headlineAccent}
              </span>
            </span>
          </h1>

          <p className="fade mx-auto mt-5 max-w-[42ch] text-body font-light text-bone/85 lg:mx-0" style={{ animationDelay: "0.75s" }}>
            {hero.sub}
          </p>
          <Link
            href={hero.cta.href}
            className="ember-btn fade mt-7 inline-block rounded-full bg-void px-7 py-2.5 text-sm font-medium"
            style={{ animationDelay: "0.9s" }}
          >
            {hero.cta.label}
          </Link>
        </div>

        <figure className="fade relative z-10 flex justify-center pb-10 lg:justify-end lg:pb-0 lg:pr-10" style={{ animationDelay: "0.4s" }}>
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={400}
            height={400}
            loading="eager"
            fetchPriority="high"
            className="h-[210px] w-[210px] rounded-full object-cover shadow-[0_0_80px_-10px_#ff4d00] sm:h-[270px] sm:w-[270px] lg:h-[340px] lg:w-[340px]"
          />
          <figcaption className="absolute bottom-6 right-6 text-left lg:bottom-6 lg:right-14">
            <span className="block bg-crimson px-3 py-1 font-bebas text-lg tracking-wide">{profile.name}</span>
            <span className="block bg-blood px-3 py-1 text-xs">{profile.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
