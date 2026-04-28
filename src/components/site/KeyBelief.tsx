import callThread from "@/assets/call-thread-phone.jpg";

export function KeyBelief() {
  return (
    <section
      id="value"
      className="py-32 md:py-48 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.265 0.014 45)" }}
    >
      <img
        src={callThread}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.265 0.014 45 / 0.92) 0%, oklch(0.265 0.014 45 / 0.7) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-2">
            <span
              className="eyebrow"
              style={{ color: "oklch(0.685 0.085 55)" }}
            >
              Call us — 005
            </span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] max-w-[20ch]"
              style={{ color: "oklch(0.957 0.012 84)" }}
            >
              Call us <span className="italic" style={{ color: "oklch(0.685 0.085 55)" }}>when…</span>
            </h2>

            <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
              {[
                "you need clearer positioning",
                "you need stronger coherence",
                "you need earlier decision clarity",
                "you need more defensible value",
                "you need stronger internal alignment",
              ].map((line) => (
                <p
                  key={line}
                  className="font-serif italic text-xl md:text-2xl leading-snug"
                  style={{ color: "oklch(0.957 0.012 84)" }}
                >
                  …{line}.
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
