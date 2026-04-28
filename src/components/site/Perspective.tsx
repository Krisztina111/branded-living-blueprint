import rolledPlans from "@/assets/rolled-plans-image.png";

export function Perspective() {
  return (
    <section id="perspective" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={rolledPlans}
                alt="Rolled architectural plans"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <span className="eyebrow">Perspective — 002</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-foreground max-w-[22ch]">
              Residential thinking,{" "}
              <span className="italic text-bronze">applied early.</span>
            </h2>

            <p className="mt-10 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-[56ch]">
              The strongest residential projects rarely become strong by accident.
            </p>
            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              They become stronger when the underlying logic is clear early enough — what the project stands for, who it is for, what kind of experience it promises, and which decisions need to hold together across disciplines.
            </p>
            <p className="mt-5 font-serif italic text-xl md:text-2xl text-bronze">
              That is where we work.
            </p>
            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-[56ch]">
              Branded Living CE supports residential projects where concept, buyer logic, brand thinking, design intelligence and market positioning need to align early — before value starts leaking through fragmentation, revision or generic premium language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
