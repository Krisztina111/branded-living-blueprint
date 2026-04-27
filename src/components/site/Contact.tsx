export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48"
      style={{ backgroundColor: "oklch(0.265 0.014 45)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-2">
            <span
              className="eyebrow"
              style={{ color: "oklch(0.852 0.022 75)" }}
            >
              Contact — 010
            </span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] max-w-[22ch]"
              style={{ color: "oklch(0.957 0.012 84)" }}
            >
              Let's discuss your project — before it becomes{" "}
              <span className="italic" style={{ color: "oklch(0.685 0.085 55)" }}>fixed.</span>
            </h2>

            <p
              className="mt-12 text-lg md:text-xl max-w-[52ch] leading-relaxed font-light"
              style={{ color: "oklch(0.852 0.022 75)" }}
            >
              For early-stage advisory, concept review, project positioning or branded living strategy across Europe — we work best when there is still room to influence the outcome.
            </p>

            <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-2xl">
              <div>
                <span
                  className="eyebrow"
                  style={{ color: "oklch(0.685 0.085 55)" }}
                >
                  Email
                </span>
                <a
                  href="mailto:hello@brandedliving.eu"
                  className="mt-3 block font-serif text-2xl md:text-3xl hover:opacity-70 transition-opacity"
                  style={{ color: "oklch(0.957 0.012 84)" }}
                >
                  hello@brandedliving.eu
                </a>
              </div>
              <div>
                <span
                  className="eyebrow"
                  style={{ color: "oklch(0.685 0.085 55)" }}
                >
                  Phone
                </span>
                <a
                  href="tel:+36302484242"
                  className="mt-3 block font-serif text-2xl md:text-3xl hover:opacity-70 transition-opacity"
                  style={{ color: "oklch(0.957 0.012 84)" }}
                >
                  +36 30 248 4242
                </a>
              </div>
            </div>

            <a
              href="mailto:hello@brandedliving.eu"
              className="mt-16 inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.22em] uppercase transition-colors"
              style={{
                backgroundColor: "oklch(0.957 0.012 84)",
                color: "oklch(0.215 0.012 50)",
              }}
            >
              Begin the conversation
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
