import ceAerial from "@/assets/ce-aerial-image.jpg";

export function Europe() {
  return (
    <section className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[900px]">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-foreground max-w-[22ch]">
            The Central Europe <span className="italic text-bronze">opportunity.</span>
          </h2>

          <p className="mt-10 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-[56ch]">
            Central Europe is still an emerging branded residential landscape.
          </p>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
            The opportunity is not simply to import hospitality logic into housing, but to shape stronger residential propositions with clearer positioning, more disciplined alignment and, where relevant, service standards informed by hospitality.
          </p>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
            That makes the region especially sensitive to clarity. In markets where the branded residential language is still evolving, coherence matters even more.
          </p>
          <p className="mt-8 font-serif italic text-2xl md:text-3xl text-foreground leading-snug">
            Not as decoration. <span className="text-bronze">As structure.</span>
          </p>
        </div>

        <div className="mt-14 md:mt-20 overflow-hidden">
          <img
            src={ceAerial}
            alt="Central European cityscape aerial view"
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
