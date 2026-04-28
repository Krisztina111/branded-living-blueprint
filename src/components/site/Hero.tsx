import heroSide from "@/assets/hero-side-image.png";
import logoMonogram from "@/assets/logo-monogram.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroSide}
        alt="Branded residential building facade at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-12 pt-8 md:pt-10 pb-12 md:pb-16">
        <div className="max-w-[60ch]">
          <img
            src={logoMonogram}
            alt="Branded Living CE monogram"
            className="h-24 md:h-36 w-auto mb-6 md:mb-8"
            loading="eager"
          />

          <h1 className="font-serif text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem] leading-[1.04] tracking-[-0.015em] text-white max-w-[20ch]">
            Every strong project starts with a{" "}
            <span className="italic font-medium text-bronze">clear thread.</span>
          </h1>

          <p className="mt-8 font-serif italic text-3xl md:text-5xl lg:text-[3.4rem] text-bronze max-w-[44ch] leading-[1.05]">
            Coherence creates value.
          </p>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-[52ch] leading-relaxed font-light">
            Strategic advisory for branded residences and premium residential developments across Central Europe — shaping positioning, concept clarity and commercial logic where they still influence outcomes.
          </p>

          <div className="mt-8 md:mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-black px-7 py-4 text-[0.72rem] tracking-[0.22em] uppercase hover:bg-bronze hover:text-white transition-colors"
            >
              Discuss your project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
