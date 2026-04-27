const nav = [
  { label: "Perspective", href: "#perspective" },
  { label: "Work", href: "#work" },
  { label: "Value", href: "#value" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#top" className="wordmark text-foreground">
          Branded Living <span className="text-bronze">EU</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-foreground/80 hover:text-bronze transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block text-[0.7rem] tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:border-bronze hover:text-bronze transition-colors"
        >
          Begin
        </a>
      </div>
    </header>
  );
}
