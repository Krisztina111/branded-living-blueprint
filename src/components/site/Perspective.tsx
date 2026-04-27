export function Perspective() {
  return (
    <section id="perspective" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Perspective — 002</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.1] max-w-[26ch] text-foreground">
              The strongest residential projects rarely become strong{" "}
              <span className="italic text-bronze">by accident.</span>
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                They become stronger when the underlying logic is clear early enough — what the project stands for, who it is for, what kind of experience it promises, and which decisions need to hold together across disciplines.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                That is where we work. Branded Living EU supports projects where concept, buyer logic, brand thinking, design intelligence and market positioning need to align — before value starts leaking through fragmentation, revision or generic premium language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
