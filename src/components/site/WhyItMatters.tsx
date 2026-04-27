export function WhyItMatters() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Risk — 005</span>
          </div>
          <div className="col-span-12 md:col-span-9 max-w-3xl">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-foreground">
              Value leakage starts <span className="italic text-bronze">quietly.</span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed">
              A vague brief. An undefined buyer. A diluted concept. A repeated design decision. A service promise that was never translated into reality.
            </p>

            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
              By the time these gaps surface in sales, pricing pressure or buyer hesitation, they are no longer cheap to correct.
            </p>

            {/* "You might be our client if..." */}
            <div className="mt-16 pt-10 border-t border-foreground/20">
              <span className="eyebrow block mb-8">You might be our client if —</span>
              <ul className="space-y-6">
                {[
                  "Your project feels premium, but the market logic is still not fully clear.",
                  "Multiple disciplines are shaping the outcome, but no single thread is holding it together.",
                  "You need earlier clarity between positioning, product logic and commercial intent.",
                ].map((line) => (
                  <li key={line} className="flex gap-4 items-baseline">
                    <span className="font-serif italic text-bronze text-sm shrink-0">—</span>
                    <p className="font-serif text-xl md:text-2xl leading-snug text-foreground">
                      {line}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="mt-16 pl-8 border-l-2 border-bronze">
              <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground max-w-[36ch]">
                Early strategic clarity is not an extra layer. It protects the value already being created.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
