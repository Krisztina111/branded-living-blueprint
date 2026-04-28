const nav = [
  { label: "Concept", href: "#perspective" },
  { label: "Central Europe", href: "#europe" },
  { label: "For Whom", href: "#clients" },
  { label: "How We Work", href: "#work" },
  { label: "Founder", href: "#founder" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/85 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-4 flex items-center justify-between gap-6 flex-nowrap">
        <a href="#top" className="wordmark text-foreground shrink-0 text-[0.72rem]">
          Branded Living <span className="text-bronze">CE</span>
        </a>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-nowrap">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.62rem] lg:text-[0.68rem] tracking-[0.16em] uppercase text-foreground/80 hover:text-bronze transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 md:px-5 md:py-3 text-[0.62rem] lg:text-[0.68rem] tracking-[0.18em] uppercase hover:bg-bronze hover:text-background transition-colors whitespace-nowrap shrink-0"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
