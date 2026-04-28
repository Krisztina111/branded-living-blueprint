import rolledPlans from "@/assets/rolled-plans-image.png";

export function Perspective() {
  return (
    <section
      id="perspective"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <img
        src={rolledPlans}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[640px]">
          <p className="eyebrow"><span className="text-bronze">01</span> &nbsp;—&nbsp; Concept</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-[4rem] leading-[1.05] text-foreground">
            Residential thinking, <span className="italic text-bronze">applied early.</span>
          </h2>

          <p className="mt-12 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-[52ch]">
            The strongest residential projects rarely become strong by accident.
          </p>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[52ch]">
            They become stronger when the underlying logic is clear early enough, what the project stands for, who it is for, what kind of experience it promises, and which decisions need to hold together across disciplines.
          </p>
          <p
            className="mt-6 font-serif font-semibold italic text-2xl md:text-3xl text-foreground"
            style={{ letterSpacing: "0.04em", wordSpacing: "0.12em" }}
          >
            That is where we work.
          </p>
          <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[52ch]">
            Branded Living CE supports residential projects where concept, buyer logic, brand thinking, design intelligence and market positioning need to align early, before value starts leaking through fragmentation, revision or generic premium language.
          </p>
        </div>
      </div>
    </section>
  );
}
