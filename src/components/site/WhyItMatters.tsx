import clientInterior from "@/assets/client-fix-interior-image.png";

export function WhyItMatters() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[900px]">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-foreground">
            You might be our <span className="italic text-bronze">client if...</span>
          </h2>

          <ul className="mt-12 space-y-8 max-w-[56ch]">
            {[
              "Your project feels premium, but the market logic is still not fully clear.",
              "Multiple disciplines are shaping the outcome, but no single thread is holding it together.",
              "You need earlier clarity between positioning, product logic and commercial intent.",
            ].map((line) => (
              <li key={line}>
                <p className="font-serif font-semibold text-xl md:text-2xl leading-snug text-foreground">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 md:mt-20 overflow-hidden">
          <img
            src={clientInterior}
            alt="Premium residential interior"
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
