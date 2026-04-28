import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Concept", href: "#perspective" },
  { label: "Central Europe", href: "#europe" },
  { label: "For Whom", href: "#clients" },
  { label: "How We Work", href: "#work" },
  { label: "Founder", href: "#founder" },
  { label: "Get in Touch", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-background/85 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-4 flex items-center justify-between gap-6 flex-nowrap">
          <a href="#top" className="wordmark text-foreground shrink-0 text-[0.72rem]">
            Branded Living <span className="text-bronze">CE</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-nowrap">
            {nav.slice(0, 5).map((item) => (
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
            className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 md:px-5 md:py-3 text-[0.62rem] lg:text-[0.68rem] tracking-[0.18em] uppercase hover:bg-bronze hover:text-background transition-colors whitespace-nowrap shrink-0"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-[60] inline-flex items-center justify-center w-10 h-10 -mr-2 text-foreground hover:text-bronze transition-colors"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile menu — outside the sticky header to avoid backdrop-filter containing-block issues */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-background transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 pt-24 pb-12 gap-2 h-full overflow-y-auto">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-border text-[0.78rem] tracking-[0.18em] uppercase text-foreground/90 hover:text-bronze transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
