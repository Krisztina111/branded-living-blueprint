import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Branded Living CE" },
      {
        name: "description",
        content:
          "Privacy Policy for Branded Living CE. How personal data is processed when you contact us by email or phone, in line with the EU General Data Protection Regulation (GDPR).",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  // Editable placeholder — to be reviewed by a legal professional before final publication.
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
          Privacy <span className="italic text-bronze">Policy</span>
        </h1>
        <p className="mt-6 text-sm text-taupe">Last updated: {updated}</p>

        <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed text-base md:text-lg font-light">
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">1. Data controller</h2>
            <p>
              Szabó-Vedress Krisztina e.v.
              <br />
              1032 Budapest, Bécsi út 185, Hungary
              <br />
              Tax number: 67317152-1-41
              <br />
              Email:{" "}
              <a href="mailto:hello@brandedlivingce.com" className="text-bronze hover:underline">
                hello@brandedlivingce.com
              </a>
              <br />
              Website:{" "}
              <a href="https://brandedlivingce.com" className="text-bronze hover:underline">
                brandedlivingce.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">2. Scope</h2>
            <p>
              This Policy explains how personal data is processed in connection with this website and direct
              communication with us. Processing is carried out in line with Regulation (EU) 2016/679 (GDPR) and
              applicable Hungarian data protection law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">3. What we do not do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>This website does not use a contact form.</li>
              <li>We do not run a newsletter or marketing email list.</li>
              <li>We do not use analytics, advertising cookies or third-party tracking.</li>
              <li>No cookies are used for profiling or behavioural tracking.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">4. How you can contact us</h2>
            <p>
              You can contact us by email at{" "}
              <a href="mailto:hello@brandedlivingce.com" className="text-bronze hover:underline">
                hello@brandedlivingce.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+36302484242" className="text-bronze hover:underline">
                +36 30 248 4242
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
              5. What data we may process when you contact us
            </h2>
            <p>If you reach out by email or phone, we may process the following data that you choose to share:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name, if provided</li>
              <li>Phone number, if provided</li>
              <li>Content of your message or enquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">6. Purpose and legal basis</h2>
            <p>The purpose of processing is:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>responding to your enquiry,</li>
              <li>communication and follow-up,</li>
              <li>possible business relationship management.</li>
            </ul>
            <p className="mt-4">
              The legal basis is Article 6(1)(b) GDPR (steps prior to entering a contract) and, where relevant,
              Article 6(1)(f) GDPR (legitimate interest in operating an advisory business).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">7. Cookies</h2>
            <p>
              This website uses only strictly necessary technical cookies required to deliver the page. No analytics,
              advertising or tracking cookies are used. If analytics is added in the future, prior consent will be
              requested in line with Article 6(1)(a) GDPR and the ePrivacy Directive.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">8. Recipients and processors</h2>
            <p>
              Your data may be handled by carefully selected service providers acting on our instructions, such as our
              hosting and email infrastructure providers. Where a provider is located outside the European Economic
              Area, transfers are protected by appropriate safeguards under the GDPR.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">9. Retention</h2>
            <p>
              Enquiry correspondence is kept for as long as needed to respond to your enquiry and, where relevant, to
              manage a business relationship that follows. Records required by accounting or tax law are retained for
              the statutory periods set by Hungarian law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">10. Your rights</h2>
            <p>
              Under the GDPR you have the right to access, rectify, erase, restrict or object to the processing of your
              personal data, and the right to data portability. Requests can be sent to{" "}
              <a href="mailto:hello@brandedlivingce.com" className="text-bronze hover:underline">
                hello@brandedlivingce.com
              </a>
              . You may also lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of
              Information (NAIH, www.naih.hu) or the supervisory authority of your habitual residence.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">11. Security</h2>
            <p>
              Appropriate technical and organisational measures are applied to protect personal data against loss,
              alteration or unauthorised access, including encrypted transport (HTTPS) and access controls.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">12. Changes to this Policy</h2>
            <p>
              This Policy may be updated to reflect changes in our services or legal obligations. The "Last updated"
              date above indicates the latest revision.
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
