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
              Contact — 008
            </span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] max-w-[22ch]"
              style={{ color: "oklch(0.957 0.012 84)" }}
            >
              Let's discuss <span className="italic" style={{ color: "oklch(0.685 0.085 55)" }}>your project.</span>
            </h2>

            <p
              className="mt-12 text-lg md:text-xl max-w-[56ch] leading-relaxed font-light"
              style={{ color: "oklch(0.852 0.022 75)" }}
            >
              For residential and branded living projects that need earlier clarity, stronger alignment and a more coherent market proposition.
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
                  href="mailto:hello@brandedlivingce.com"
                  className="mt-3 block font-serif text-2xl md:text-3xl hover:opacity-70 transition-opacity"
                  style={{ color: "oklch(0.957 0.012 84)" }}
                >
                  hello@brandedlivingce.com
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
          </div>
        </div>
      </div>
    </section>
  );
}
