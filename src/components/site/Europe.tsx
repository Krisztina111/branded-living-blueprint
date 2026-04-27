export function Europe() {
  return (
    <section className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-7">
            <span className="eyebrow">Region — 007</span>
            <h2 className="mt-8 font-serif text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.08] text-foreground max-w-[22ch]">
              The Central European <span className="italic text-bronze">opportunity.</span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Central Europe is still an emerging branded residential landscape. The opportunity is not simply to import hospitality logic into housing.
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              It is to shape stronger residential propositions — with clearer positioning, more disciplined alignment and, where relevant, service standards informed by hospitality.
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              That makes the region especially sensitive to clarity. In markets where the branded residential language is still evolving, coherence matters even more.
            </p>
            <p className="mt-8 font-serif italic text-xl md:text-2xl text-foreground max-w-[28ch] leading-snug">
              Not as decoration. <span className="text-bronze">As structure.</span>
            </p>
          </div>

          {/* Editorial map-as-typography */}
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/5] relative border border-foreground/15 p-8 bg-background/40">
              <div className="absolute inset-x-0 top-1/2 h-px bg-foreground/15" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-foreground/15" />

              {[
                { city: "Vienna", x: "44%", y: "52%" },
                { city: "Prague", x: "40%", y: "38%" },
                { city: "Berlin", x: "36%", y: "22%" },
                { city: "Warsaw", x: "58%", y: "26%" },
                { city: "Budapest", x: "56%", y: "58%" },
                { city: "Bratislava", x: "50%", y: "48%" },
                { city: "Bucharest", x: "70%", y: "66%" },
                { city: "Ljubljana", x: "38%", y: "64%" },
              ].map((c) => (
                <div
                  key={c.city}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
                  style={{ left: c.x, top: c.y }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  <span className="font-serif italic text-sm text-foreground">{c.city}</span>
                </div>
              ))}
              <span className="absolute bottom-3 right-4 text-[0.6rem] tracking-[0.2em] uppercase text-taupe">
                Fig. 002 · Region
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
