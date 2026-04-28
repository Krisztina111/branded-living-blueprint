import clientInterior from "@/assets/client-fix-interior-image.png";

export function WhyItMatters() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <img
        src={clientInterior}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[640px]">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[4rem] leading-[1.05] text-foreground">
            You might be our <span className="italic text-bronze">client if…</span>
          </h2>

          <ul className="mt-14 space-y-8 max-w-[52ch] border-l border-bronze/40 pl-8">
            {[
              "Your project feels premium, but the market logic is still not fully clear.",
              "Multiple disciplines are shaping the outcome, but no single thread is holding it together.",
              "You need earlier clarity between positioning, product logic and commercial intent.",
            ].map((line) => (
              <li key={line}>
                <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/90">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
