const blocks = [
  {
    no: "A",
    title: "Project Review",
    body: "For projects that already exist, but need clearer positioning, stronger differentiation or a more legible value logic.",
  },
  {
    no: "B",
    title: "Strategic Alignment",
    body: "For projects that need earlier clarity across concept, buyer logic, design direction and commercial intent.",
  },
  {
    no: "C",
    title: "Branded Living Strategy",
    body: "Translating brand meaning into a credible residential experience — not as decoration, as structure.",
  },
  {
    no: "D",
    title: "Ongoing Advisory",
    body: "A consistent thread as decisions move across teams, stages and disciplines. For projects that cannot afford drift.",
  },
];

export function AdvisoryFocus() {
  return (
    <section id="work" className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-baseline justify-between mb-6">
          <span className="eyebrow">Focus — 003</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.08] text-foreground max-w-[24ch] mb-16 md:mb-24">
          A focused set of advisory formats for projects that need <span className="italic text-bronze">earlier clarity.</span>
        </h2>

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
