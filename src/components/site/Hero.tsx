export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-7 lift">
            <div className="flex items-center gap-4 mb-10">
              <span className="eyebrow">001 — Advisory</span>
              <span className="h-px w-16 bg-foreground/30" />
              <span className="eyebrow">Europe</span>
            </div>

            <h1 className="font-serif text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] leading-[1.02] tracking-[-0.015em] text-foreground max-w-[20ch]">
              Residential value <span className="italic text-bronze">starts</span> before the visible work begins.
            </h1>

            <p className="mt-10 text-lg md:text-xl text-foreground/80 max-w-[44ch] leading-relaxed font-light">
              Strategic advisory for branded living, branded residences and premium residential concepts across Europe.
            </p>

            <p className="mt-6 text-base text-taupe max-w-[52ch] leading-relaxed">
              We help developers, investors and brands align concept, positioning, design intent and market promise — before key decisions become expensive to change.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[0.72rem] tracking-[0.22em] uppercase hover:bg-umber transition-colors"
              >
                Start the conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#perspective"
                className="text-[0.72rem] tracking-[0.22em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-bronze hover:text-bronze transition-colors"
              >
                Explore the perspective
              </a>
            </div>
          </div>

          {/* Right — abstract identity visual */}
          <div className="col-span-12 lg:col-span-5">
            {/* Replace .hero-block background with a real cropped architectural image when ready */}
            <div className="hero-identity-visual">
              <div className="hero-block" aria-hidden />
              <div className="hero-thread" aria-hidden />

              <div className="hero-marker" style={{ top: "5%", left: "5%" }}>
                BL — EU / 2026
              </div>
              <div className="hero-marker" style={{ bottom: "5%", left: "5%" }}>
                Fig. 001 · Threshold
              </div>
              <div className="hero-marker" style={{ bottom: "5%", right: "5%" }}>
                48°N · 19°E
              </div>
            </div>

            <div className="mt-6 flex justify-between items-baseline">
              <span className="eyebrow">Strategic Advisory</span>
              <span className="text-xs text-taupe italic font-serif">— a coherent thread</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
