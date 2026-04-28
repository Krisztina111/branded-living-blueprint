const nav = [
  { label: "Perspective", href: "#perspective" },
  { label: "Europe", href: "#europe" },
  { label: "Clients", href: "#clients" },
  { label: "Call Us", href: "#value" },
  { label: "How We Work", href: "#work" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-5 flex items-center justify-between gap-8">
        <a href="#top" className="wordmark text-foreground shrink-0">
          Branded Living <span className="text-bronze">CE</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.72rem] tracking-[0.18em] uppercase text-foreground/80 hover:text-bronze transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block text-[0.7rem] tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:border-bronze hover:text-bronze transition-colors shrink-0"
        >
          Begin
        </a>
      </div>
    </header>
  );
}
