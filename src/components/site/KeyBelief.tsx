import callThread from "@/assets/call-thread-phone.jpg";

export function KeyBelief() {
  return (
    <section
      id="value"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: "oklch(0.16 0.006 260)" }}
    >
      <img
        src={callThread}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-95"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.16 0.006 260 / 0.15) 0%, oklch(0.16 0.006 260 / 0.7) 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 text-center">
        <h2
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05]"
          style={{ color: "oklch(0.945 0.004 90)" }}
        >
          Call us <span className="italic text-bronze">when…</span>
        </h2>

        <div className="mt-16 flex flex-col items-center gap-5">
          {[
            "you need clearer positioning",
            "you need stronger coherence",
            "you need earlier decision clarity",
            "you need more defensible value",
            "you need stronger internal alignment",
          ].map((line) => (
            <p
              key={line}
              className="font-sans font-light text-lg md:text-xl leading-relaxed tracking-wide"
              style={{ color: "oklch(0.945 0.004 90)" }}
            >
              …{line}.
            </p>
          ))}
          <div className="mt-6 h-px w-16 bg-bronze" />
        </div>
      </div>
    </section>
  );
}
