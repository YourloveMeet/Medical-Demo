const services = [
  {
    title: "Manual Therapy Precision",
    description:
      "Hands-on treatment protocols tailored to mobility deficits, soft-tissue restrictions, and chronic pain triggers.",
    metric: "45 min focused session"
  },
  {
    title: "Spinal Rehabilitation",
    description:
      "Structured spine-care pathways to improve posture, reduce flare-ups, and rebuild long-term movement confidence.",
    metric: "8-week guided program"
  },
  {
    title: "Sports Injury Recovery",
    description:
      "Return-to-performance plans combining therapeutic loading, range restoration, and movement retraining.",
    metric: "92% return-to-play rate"
  }
];

export function ServicesSection() {
  return (
    <section className="mx-auto w-[min(94%,1320px)] py-24">
      <div className="anim-fade-up mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5C6C66]">
            Signature Services
          </p>
          <h2 className="mt-3 font-serif text-5xl text-[#18201D] md:text-6xl">
            Care Architecture Built Around You
          </h2>
        </div>
        <p className="max-w-xl text-base text-[#495651]">
          Every treatment plan is designed from movement diagnostics, pain
          behavior analysis, and practical lifestyle demands.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="hover-lift rounded-3xl border border-white/60 bg-white/35 p-7 shadow-[0_16px_35px_rgba(70,88,80,0.13)] backdrop-blur-lg"
          >
            <h3 className="font-serif text-3xl text-[#1A2320]">{service.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-[#4A5752]">
              {service.description}
            </p>
            <p className="mt-6 inline-flex rounded-full border border-[#7A9187]/40 bg-[#E6F0EB] px-3 py-1 text-sm font-medium text-[#355348]">
              {service.metric}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
