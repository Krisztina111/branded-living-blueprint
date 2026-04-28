import ceAerial from "@/assets/ce-aerial-image.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Europe() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="europe"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: "oklch(0.18 0.006 260)" }}
    >
      <img
        src={ceAerial}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.18 0.006 260 / 0.82) 0%, oklch(0.18 0.006 260 / 0.35) 55%, oklch(0.18 0.006 260 / 0.12) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div ref={ref} className="reveal md:ml-auto md:max-w-[640px]">
          <p className="text-[0.6875rem] font-medium tracking-[0.22em] uppercase" style={{ color: "oklch(0.92 0.004 90 / 0.7)" }}>
            <span className="text-bronze">02</span> &nbsp;—&nbsp; Central Europe
          </p>
          <h2
            className="mt-6 font-serif text-4xl md:text-6xl lg:text-[4rem] leading-[1.05]"
            style={{ color: "oklch(0.945 0.004 90)" }}
          >
            The Central Europe <span className="italic text-bronze">opportunity.</span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-[52ch]" style={{ color: "oklch(0.92 0.004 90 / 0.9)" }}>
            Central Europe is still an emerging branded residential landscape.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed max-w-[52ch]" style={{ color: "oklch(0.92 0.004 90 / 0.78)" }}>
            The opportunity is not simply to import hospitality logic into housing, but to shape stronger residential propositions with clearer positioning, more disciplined alignment and, where relevant, service standards informed by hospitality.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed max-w-[52ch]" style={{ color: "oklch(0.92 0.004 90 / 0.78)" }}>
            That makes the region especially sensitive to clarity. In markets where the branded residential language is still evolving, coherence matters even more.
          </p>
          <p className="mt-10 font-serif text-2xl md:text-3xl leading-snug" style={{ color: "oklch(0.945 0.004 90)" }}>
            Not as decoration.<br />
            <span className="font-semibold italic text-bronze">As structure.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
