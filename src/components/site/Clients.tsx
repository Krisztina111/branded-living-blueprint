const clients = [
  {
    title: "Developers",
    body: "For premium residential projects that need stronger differentiation, clearer positioning or a more coherent market proposition.",
  },
  {
    title: "Investors",
    body: "For projects where early clarity can support confidence, reduce avoidable risk and strengthen long-term value logic.",
  },
  {
    title: "Brands",
    body: "For brands exploring residential, hospitality-adjacent or lifestyle real estate opportunities.",
  },
  {
    title: "Advisory partners",
    body: "For architects, operators, consultants and commercial teams who need a strategic bridge between brand, design and market value.",
  },
];

export function Clients() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">Who this is for</h2>
          <span className="eyebrow hidden md:block">Clients, 008</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
          {clients.map((c, i) => (
            <div key={c.title} className="bg-background p-8 md:p-10 min-h-[280px] flex flex-col">
              <span className="font-serif italic text-bronze text-sm">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-serif text-2xl md:text-[1.75rem] leading-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-5 text-sm md:text-[0.95rem] text-taupe leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
