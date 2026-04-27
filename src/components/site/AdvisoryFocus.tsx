const blocks = [
  {
    no: "A",
    title: "Project positioning",
    body: "Clarifying the project's market role, buyer promise and strategic narrative.",
  },
  {
    no: "B",
    title: "Branded living strategy",
    body: "Translating brand meaning into a credible residential experience.",
  },
  {
    no: "C",
    title: "Concept coherence",
    body: "Aligning design intent, service layer, material direction, buyer perception and commercial logic.",
  },
  {
    no: "D",
    title: "Value creation review",
    body: "Identifying early misalignments that may later affect pricing confidence, absorption, investor clarity or long-term asset value.",
  },
];

export function AdvisoryFocus() {
  return (
    <section id="work" className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-baseline justify-between mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">Where we work</h2>
          <span className="eyebrow hidden md:block">Focus — 003</span>
        </div>

        <div className="border-t border-foreground/20">
          {blocks.map((b) => (
            <article
              key={b.no}
              className="grid grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-b border-foreground/20 group hover:bg-background/40 transition-colors"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-serif italic text-2xl text-bronze">{b.no}</span>
              </div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-serif text-2xl md:text-[2rem] leading-tight text-foreground">
                  {b.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-[48ch]">
                  {b.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
