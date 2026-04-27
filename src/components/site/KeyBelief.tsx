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
                It is structure.
              </span>
            </h2>
            <p
              className="mt-12 text-lg md:text-xl max-w-[56ch] leading-relaxed font-light"
              style={{ color: "oklch(0.852 0.022 75)" }}
            >
              A project can be beautifully built and still feel unclear. The value gap appears when good decisions are made separately, without a strong enough thread connecting them.
            </p>

            {/* "Call us when..." rhythmic block */}
            <div className="mt-20 pt-10 border-t" style={{ borderColor: "oklch(0.685 0.085 55 / 0.3)" }}>
              <span
                className="eyebrow block mb-10"
                style={{ color: "oklch(0.685 0.085 55)" }}
              >
                Call us when —
              </span>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
                {[
                  "you need clearer positioning",
                  "you need stronger coherence",
                  "you need earlier decision clarity",
                  "you need more defensible value",
                  "you need stronger internal alignment",
                  "the project feels premium, but the market logic is not yet clear",
                ].map((line) => (
                  <p
                    key={line}
                    className="font-serif italic text-xl md:text-2xl leading-snug"
                    style={{ color: "oklch(0.957 0.012 84)" }}
                  >
                    — {line}.
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
