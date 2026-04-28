import rolledPlans from "@/assets/rolled-plans-image.png";

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
  {
    no: "04",
    title: "Branding Advisory",
    body: "For projects that need a coherent residential brand language — positioning, naming, visual codes and buyer narrative aligned with the architectural and commercial intent.",
  },
];

export function AdvisoryFocus() {
  return (
    <section id="work" className="relative py-32 md:py-48 overflow-hidden">
      <img
        src={rolledPlans}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/85 to-background/95" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[820px]">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.05] text-foreground">
            How we <span className="italic text-bronze">work.</span>
          </h2>
          <p className="mt-10 text-base md:text-lg text-foreground/80 max-w-[60ch] leading-relaxed">
            A focused set of advisory formats for residential and branded living projects that need earlier clarity, stronger alignment and a more coherent market proposition.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
          {blocks.map((b) => (
            <article
              key={b.no}
              className="group relative p-8 md:p-10 border border-foreground/15 bg-background/70 backdrop-blur-sm hover:border-bronze/60 transition-colors"
            >
              <span className="font-serif italic text-bronze text-sm tracking-widest">{b.no}</span>
              <h3 className="mt-4 font-serif text-2xl md:text-[1.7rem] leading-tight text-foreground">
                {b.title}
              </h3>
              <p className="mt-5 text-base text-foreground/75 leading-relaxed">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
