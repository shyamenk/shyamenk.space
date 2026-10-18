import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-3 pt-5 sm:px-6">
      <div className="lava-glow mx-auto grid min-h-[60vh] max-w-6xl place-items-center rounded-[28px] border border-white/5 px-6 text-center">
        <div>
          <p className="font-orb text-xs tracking-[0.3em] text-bone/70">ERROR 404</p>
          <h1 className="mt-4 font-bebas text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.9]">
            This page <span className="text-lava">crashed</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[40ch] text-bone/80">No logs, no stack trace. Just a link that doesn&apos;t go anywhere.</p>
          <Link href="/" className="ember-btn mt-8 inline-block rounded-full bg-void px-8 py-3 text-sm">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
