export function KeyBelief() {
  return (
    <section
      id="value"
      className="py-32 md:py-48"
      style={{ backgroundColor: "oklch(0.265 0.014 45)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-2">
            <span
              className="eyebrow"
              style={{ color: "oklch(0.852 0.022 75)" }}
            >
              Belief — 004
            </span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] max-w-[20ch]"
              style={{ color: "oklch(0.957 0.012 84)" }}
            >
              Coherence is not decoration.{" "}
              <span className="italic" style={{ color: "oklch(0.685 0.085 55)" }}>
                It is a commercial asset.
              </span>
            </h2>
            <p
              className="mt-12 text-lg md:text-xl max-w-[56ch] leading-relaxed font-light"
              style={{ color: "oklch(0.852 0.022 75)" }}
            >
              A project can be beautifully built and still feel unclear. The value gap often appears when good decisions are made separately, without a strong enough thread connecting them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
