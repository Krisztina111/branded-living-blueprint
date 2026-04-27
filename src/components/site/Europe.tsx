export function Europe() {
  return (
    <section className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-7">
            <span className="eyebrow">Europe — 007</span>
            <h2 className="mt-8 font-serif text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.08] text-foreground max-w-[20ch]">
              Built for European <span className="italic text-bronze">complexity.</span>
            </h2>

            <p className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Europe is not one market. Premium expectations, buyer psychology, service maturity, development culture and the meaning of luxury differ from city to city.
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Branded Living EU brings a strategic, commercially grounded view to this landscape, with particular sensitivity to Central European realities and emerging branded living models.
            </p>
          </div>

          {/* Editorial map-as-typography */}
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/5] relative border border-foreground/15 p-8 bg-background/40">
              <div className="absolute inset-x-0 top-1/2 h-px bg-foreground/15" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-foreground/15" />

              {[
                { city: "Vienna", x: "52%", y: "40%" },
                { city: "Berlin", x: "44%", y: "20%" },
                { city: "Prague", x: "48%", y: "32%" },
                { city: "Budapest", x: "60%", y: "44%" },
                { city: "Warsaw", x: "58%", y: "22%" },
                { city: "Milan", x: "32%", y: "56%" },
                { city: "Paris", x: "20%", y: "32%" },
                { city: "Lisbon", x: "12%", y: "70%" },
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
                Fig. 002 · Geography
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
