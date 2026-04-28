import clientInterior from "@/assets/client-fix-interior-image.png";

export function WhyItMatters() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={clientInterior}
                alt="Premium residential interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <span className="eyebrow">Client — 004</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-foreground">
              You might be our <span className="italic text-bronze">client if…</span>
            </h2>

            <ul className="mt-12 space-y-8 max-w-[56ch]">
              {[
                "Your project feels premium, but the market logic is still not fully clear.",
                "Multiple disciplines are shaping the outcome, but no single thread is holding it together.",
                "You need earlier clarity between positioning, product logic and commercial intent.",
              ].map((line) => (
                <li key={line} className="flex gap-5 items-baseline">
                  <span className="font-serif italic text-bronze text-lg shrink-0">—</span>
                  <p className="font-serif text-xl md:text-2xl leading-snug text-foreground">
                    {line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
