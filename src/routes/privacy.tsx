import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Branded Living CE" },
      {
        name: "description",
        content:
          "Privacy Policy for Branded Living CE. How we collect, use, store and protect personal data in line with the EU General Data Protection Regulation (GDPR).",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">1. Who we are</h2>
            <p>
              This website (brandedlivingce.com) is operated by Krisztina Szabó-Vedress, sole proprietor, trading as
              Branded Living CE (the "Controller", "we", "us"). For any privacy related question, please contact us at{" "}
              <a href="mailto:hello@brandedlivingce.com" className="text-bronze hover:underline">
                hello@brandedlivingce.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">2. Scope</h2>
            <p>
              This Policy explains how we process personal data of visitors to this website and prospective or existing
              clients. We act as data controller within the meaning of Regulation (EU) 2016/679 (GDPR) and applicable
              Hungarian data protection law (Act CXII of 2011).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">3. What data we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact data</strong> you voluntarily provide when you email or call us (name, email address,
                phone number, company, message content).
              </li>
              <li>
                <strong>Technical data</strong> automatically collected by our hosting provider for security and
                reliability (IP address, browser type, referring page, timestamps).
              </li>
              <li>
                We do not knowingly collect data from minors and do not process special categories of personal data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">4. Purposes and legal bases</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Responding to your enquiry and pre-contractual communication, Art. 6(1)(b) GDPR (steps prior to entering
                a contract) and Art. 6(1)(f) (legitimate interest in operating an advisory business).
              </li>
              <li>
                Delivering contracted advisory services and related correspondence, Art. 6(1)(b) GDPR.
              </li>
              <li>
                Compliance with statutory obligations such as accounting and tax retention, Art. 6(1)(c) GDPR.
              </li>
              <li>
                Securing the website and preventing abuse, Art. 6(1)(f) GDPR.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">5. Cookies and analytics</h2>
            <p>
              This website uses only strictly necessary technical cookies required to deliver the page. We do not deploy
              advertising cookies or third-party tracking. If we add analytics in the future, we will request your prior
              consent in line with Art. 6(1)(a) GDPR and the ePrivacy Directive.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">6. Recipients and processors</h2>
            <p>
              Personal data may be shared with carefully selected processors acting on our instructions: hosting and
              email infrastructure providers, accounting and legal advisors. Where a processor is located outside the
              European Economic Area, transfers are protected by Standard Contractual Clauses approved by the European
              Commission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">7. Retention</h2>
            <p>
              Enquiry correspondence is retained for up to 24 months from the last contact unless a client relationship
              is established. Contractual and accounting records are retained for 8 years as required by Hungarian
              accounting law (Act C of 2000). Technical logs are kept for a maximum of 12 months.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">8. Your rights</h2>
            <p>
              Under the GDPR you have the right to access, rectify, erase, restrict or object to the processing of your
              personal data, the right to data portability, and the right to withdraw consent at any time without
              affecting prior lawful processing. Requests can be sent to{" "}
              <a href="mailto:hello@brandedlivingce.com" className="text-bronze hover:underline">
                hello@brandedlivingce.com
              </a>
              . You may also lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of
              Information (NAIH, www.naih.hu) or the supervisory authority of your habitual residence.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">9. Security</h2>
            <p>
              We apply appropriate technical and organisational measures to protect personal data against accidental or
              unlawful destruction, loss, alteration, unauthorised disclosure or access, including encrypted transport
              (HTTPS), access controls and regular review of our processors.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">10. Changes to this Policy</h2>
            <p>
              We may update this Policy to reflect changes in our services or legal obligations. The "Last updated" date
              above indicates the latest revision. Material changes will be communicated on this page.
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
