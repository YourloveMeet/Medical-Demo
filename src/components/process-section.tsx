const steps = [
  {
    label: "01",
    title: "Movement Mapping",
    text: "We evaluate spinal mechanics, asymmetry, and pain response patterns."
  },
  {
    label: "02",
    title: "Therapy Design",
    text: "A custom blend of manual release, mobility correction, and loading."
  },
  {
    label: "03",
    title: "Performance Rebuild",
    text: "Strength and control progression to keep you resilient long term."
  }
];

export function ProcessSection() {
  return (
    <section className="mx-auto w-[min(94%,1320px)] py-16">
      <div className="anim-fade-up rounded-[34px] border border-white/60 bg-white/28 p-8 shadow-[0_18px_40px_rgba(69,88,80,0.12)] backdrop-blur-lg md:p-10">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5D6B66]">
            Treatment Method
          </p>
          <h2 className="mt-3 font-serif text-5xl text-[#18201D] md:text-6xl">
            A 3-Stage Recovery Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.label}
              className="hover-lift rounded-2xl border border-white/60 bg-white/45 p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B6A65]">
                Step {step.label}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[#1C2522]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4A5752]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
