import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Legal Notice | Branded Living CE" },
      {
        name: "description",
        content:
          "Legal Notice for Branded Living CE. Provider identification, registered address and contact details.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  // Editable placeholder — content can be reviewed and updated by a legal professional later.
  const updated = "28 April 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="wordmark text-foreground">
            Branded Living <span className="text-bronze">CE</span>
          </Link>
          <Link
            to="/"
            className="text-[0.7rem] tracking-[0.18em] uppercase text-foreground/80 hover:text-bronze transition-colors"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[820px] px-6 md:px-12 py-20 md:py-28">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-foreground">
          Legal <span className="italic text-bronze">Notice</span>
        </h1>
        <p className="mt-6 text-sm text-taupe">Last updated: {updated}</p>

        <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed text-base md:text-lg font-light">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Provider</h2>
            <p>Szabó-Vedress Krisztina e.v.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Registered address</h2>
            <p>1032 Budapest, Bécsi út 185, Hungary</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Tax number</h2>
            <p>67317152-1-41</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Represented by</h2>
            <p>Szabó-Vedress Krisztina</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:hello@brandedlivingce.com" className="text-bronze hover:underline">
                hello@brandedlivingce.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+36302484242" className="text-bronze hover:underline">
                +36 30 248 4242
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Online</h2>
            <p>
              Website:{" "}
              <a href="https://brandedlivingce.com" className="text-bronze hover:underline">
                brandedlivingce.com
              </a>
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/krisztina-szabo-vedress/"
                target="_blank"
                rel="noreferrer"
                className="text-bronze hover:underline"
              >
                linkedin.com/in/krisztina-szabo-vedress
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Responsible for content</h2>
            <p>Szabó-Vedress Krisztina.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Disclaimer</h2>
            <p>
              Content on this website is provided for general informational purposes regarding strategic advisory
              services and does not constitute legal, financial or investment advice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Copyright</h2>
            <p>
              All content, layout, branding, photography and texts on this website are protected by copyright and may
              not be reproduced or used without prior written consent.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            to="/"
            className="text-[0.72rem] tracking-[0.22em] uppercase text-foreground/80 hover:text-bronze transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
