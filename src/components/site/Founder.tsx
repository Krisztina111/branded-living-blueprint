import founderPortrait from "@/assets/founder-portrait-final.png";

export function Founder() {
  return (
    <section className="py-24 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[900px]">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.2rem] leading-[1.1] text-foreground">
            Krisztina <span className="italic text-bronze">Szabó-Vedress</span>
          </h2>
          <p className="mt-3 text-sm tracking-[0.2em] uppercase text-taupe">
            Founder &nbsp;|&nbsp; Strategic Advisory
          </p>

          <p className="mt-10 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-[56ch]">
            Branded Living CE reflects a perspective shaped across design, branding, sales and project thinking.
          </p>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
            With an MBA and more than two decades of experience across premium, buyer-facing and project-led environments, Krisztina has worked in contexts where positioning, buyer perception and commercial logic were never separate from the final outcome.
          </p>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
            Today, that perspective is applied to residential and branded living projects that need clarity early.
          </p>

          <p className="mt-10 font-serif font-semibold text-2xl md:text-3xl text-foreground max-w-[32ch] leading-snug">
            Clarity of concept, clarity of intent and <span className="text-bronze">clarity of value.</span>
          </p>
        </div>

        <div className="mt-14 md:mt-20 overflow-hidden">
          <img
            src={founderPortrait}
            alt="Krisztina Szabó-Vedress portrait"
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
