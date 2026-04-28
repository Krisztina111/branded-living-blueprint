import founderPortrait from "@/assets/founder-portrait-final.png";
import { useReveal } from "@/hooks/use-reveal";

export function Founder() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="founder" className="py-24 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="overflow-hidden">
              <img
                src={founderPortrait}
                alt="Krisztina Szabó-Vedress portrait"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div ref={ref} className="reveal md:col-span-7 md:pl-6 md:border-l md:border-bronze/40">
            <p className="eyebrow"><span className="text-bronze">06</span> &nbsp;—&nbsp; Founder</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.05] text-foreground">
              <span className="block">Krisztina</span>
              <span className="block italic text-bronze whitespace-nowrap">Szabó&#8209;Vedress</span>
            </h2>
            <p className="mt-3 text-sm tracking-[0.2em] uppercase text-taupe">
              Founder &nbsp;|&nbsp; Strategic Advisor
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

            <p className="mt-10 font-serif font-semibold text-2xl md:text-3xl text-foreground max-w-[40ch] leading-snug">
              Clarity of concept, clarity of intent and <span className="text-bronze italic text-3xl md:text-4xl">clarity of value.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
