export function Perspective() {
  return (
    <section id="perspective" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Perspective — 002</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.1] max-w-[26ch] text-foreground">
              The strongest projects are not only well designed.{" "}
              <span className="italic text-bronze">They are clearly understood.</span>
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                In premium residential development, quality alone is rarely enough. Buyers, investors and partners need to understand what the project stands for, why it feels different and how its promise is carried through the whole experience.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                When concept, spatial logic, services, brand language and market positioning are aligned early, the project becomes easier to read, easier to trust and harder to compare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
