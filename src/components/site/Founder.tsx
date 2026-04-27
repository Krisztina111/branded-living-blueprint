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
              {/* Replace with: <img src="./assets/founder.jpg" alt="Krisztina Szabó-Vedress" className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-[0.6rem] tracking-[0.22em] uppercase text-background/80">
                  Portrait — placeholder
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 md:pl-8">
            <span className="eyebrow">Founder perspective — 009</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-foreground max-w-[22ch]">
              A practice built on the <span className="italic text-bronze">decision layer.</span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Branded Living EU was created by Krisztina Szabó-Vedress, combining more than 20 years of experience across branding, sales, project environments and design-led value creation.
            </p>
            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Her work focuses on the decision layer behind premium residential and branded living projects: the point where creative intent, commercial reality and long-term value need to align.
            </p>

            <div className="mt-12 pt-6 border-t border-foreground/20 max-w-md">
              <p className="font-serif text-xl text-foreground">Krisztina Szabó-Vedress</p>
              <p className="mt-1 text-sm text-taupe tracking-wide">
                Founder &nbsp;|&nbsp; Strategic Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
