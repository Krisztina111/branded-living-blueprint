import heroSide from "@/assets/hero-side-image.png";
import logoMonogram from "@/assets/logo-monogram.png";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left — copy */}
          <div className="col-span-12 lg:col-span-7 lift">
            <img
              src={logoMonogram}
              alt="Branded Living CE monogram"
              className="h-20 md:h-24 w-auto mb-10"
              loading="eager"
            />

            <h1 className="font-serif text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] leading-[1.02] tracking-[-0.015em] text-foreground max-w-[20ch]">
              Every strong project starts with a <span className="italic text-bronze">clear thread.</span>
            </h1>

            <p className="mt-10 font-serif italic text-xl md:text-2xl text-foreground/90 max-w-[44ch] leading-snug">
              Coherence creates value.
            </p>

            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-[52ch] leading-relaxed font-light">
              We help shape residential and branded living projects at the point where positioning, concept clarity and commercial logic still have room to influence the outcome.
            </p>

            <div className="mt-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[0.72rem] tracking-[0.22em] uppercase hover:bg-umber transition-colors"
              >
                Discuss your project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right — original hero image */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroSide}
                alt="Branded residential building facade at dusk"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
