export function Founder() {
  return (
    <section className="py-24 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Portrait placeholder — replace background with portrait image */}
          <div className="col-span-12 md:col-span-4">
            <div
              id="founder-portrait-final"
              className="aspect-[4/5] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.78 0.025 70) 0%, oklch(0.55 0.03 55) 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-[0.6rem] tracking-[0.22em] uppercase text-background/80">
                  Krisztina Szabó-Vedress — Portrait
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 md:pl-8">
            <span className="eyebrow">Founder — 009</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-foreground max-w-[22ch]">
              A practice built on the <span className="italic text-bronze">decision layer.</span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Branded Living EU reflects a perspective shaped across design, branding, sales and project thinking — environments where positioning, buyer perception and commercial logic were never separate from the final outcome.
            </p>
            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              With an MBA and more than two decades of premium, buyer-facing and project-led experience, Krisztina Szabó-Vedress works at the point where creative intent, commercial reality and long-term value still need to be aligned.
            </p>

            <p className="mt-8 font-serif italic text-2xl md:text-3xl text-foreground max-w-[28ch] leading-snug">
              Clarity of concept. Clarity of intent. <span className="text-bronze">Clarity of value.</span>
            </p>

            <div className="mt-12 pt-6 border-t border-foreground/20 max-w-md">
              <p className="font-serif text-xl text-foreground">Krisztina Szabó-Vedress</p>
              <p className="mt-1 text-sm text-taupe tracking-wide">
                Founder &nbsp;|&nbsp; Strategic Advisory
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
