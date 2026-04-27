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
              Value leakage often starts <span className="italic text-bronze">quietly.</span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed">
              It may start with a vague brief, an undefined buyer, a diluted concept, repeated design decisions or a service promise that has not been translated into reality.
            </p>

            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
              By the time these gaps appear in sales, pricing pressure or buyer hesitation, they are usually more expensive to correct.
            </p>

            <blockquote className="mt-12 pl-8 border-l-2 border-bronze">
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
