const blocks = [
  {
    no: "01",
    title: "Project Review",
    body: "For projects that already exist, but need clearer positioning, stronger differentiation or a more legible value logic.",
  },
  {
    no: "02",
    title: "Strategic Alignment",
    body: "For projects that need earlier clarity across concept, buyer logic, design direction and commercial intent.",
  },
  {
    no: "03",
    title: "Ongoing Advisory Support",
    body: "For projects that need a more consistent thread as decisions move across teams, stages and disciplines.",
  },
];

export function AdvisoryFocus() {
  return (
    <section id="work" className="py-24 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <span className="eyebrow">How we work — 006</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.08] text-foreground max-w-[26ch]">
          A focused set of advisory formats for projects that need <span className="italic text-bronze">earlier clarity.</span>
        </h2>
        <p className="mt-8 text-lg text-foreground/80 max-w-[60ch] leading-relaxed">
          For residential and branded living projects that need earlier clarity, stronger alignment and a more coherent market proposition.
        </p>

        <div className="mt-16 md:mt-24 border-t border-foreground/20">
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
