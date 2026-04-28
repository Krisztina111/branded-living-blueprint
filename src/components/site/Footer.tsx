export function Footer() {
  return (
    <footer className="pt-20 pb-16 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="font-serif text-2xl md:text-3xl text-foreground/85 max-w-[28ch] leading-snug">
          Coherence <span className="italic text-bronze">creates value.</span>
        </p>
        <div className="mt-4 h-px w-12 bg-bronze/70" />

        <div className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <p className="wordmark text-foreground">
              Branded Living <span className="text-bronze">CE</span>
            </p>
            <p className="mt-4 text-sm text-taupe max-w-md leading-relaxed">
              Strategic advisory for branded living, branded residences and residential value creation across Central Europe.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-wrap md:justify-end gap-x-10 gap-y-3 items-start">
            <a href="/privacy" className="text-[0.72rem] tracking-[0.22em] uppercase text-foreground/80 hover:text-bronze transition-colors">
              Privacy Policy
            </a>
            <a href="/imprint" className="text-[0.72rem] tracking-[0.22em] uppercase text-foreground/80 hover:text-bronze transition-colors">
              Legal Notice
            </a>
            <a href="https://www.linkedin.com/in/krisztina-szabo-vedress/" target="_blank" rel="noreferrer" className="text-[0.72rem] tracking-[0.22em] uppercase text-foreground/80 hover:text-bronze transition-colors">
              LinkedIn
            </a>
            <a href="#contact" className="text-[0.72rem] tracking-[0.22em] uppercase text-foreground/80 hover:text-bronze transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-taupe">© {new Date().getFullYear()} Branded Living CE. All rights reserved.</span>
          <span className="text-xs text-taupe italic font-serif">a coherent thread</span>
        </div>
      </div>
    </footer>
  );
}
