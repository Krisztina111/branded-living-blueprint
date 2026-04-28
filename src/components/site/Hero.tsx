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
      <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[60ch]">
          <img
            src={logoMonogram}
            alt="Branded Living CE monogram"
            className="h-20 md:h-28 w-auto mb-10"
            loading="eager"
          />

          <h1 className="font-serif text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] leading-[1.02] tracking-[-0.015em] text-white max-w-[20ch]">
            Every strong project starts with a{" "}
            <span className="italic font-semibold text-bronze">clear thread.</span>
          </h1>

          <p className="mt-10 font-serif italic text-xl md:text-2xl text-white/90 max-w-[44ch] leading-snug">
            Coherence creates value.
          </p>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-[52ch] leading-relaxed font-light">
            We help shape residential and branded living projects at the point where positioning, concept clarity and commercial logic still have room to influence the outcome.
          </p>

          <div className="mt-12">
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
