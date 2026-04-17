const outcomes = [
  { value: "10K+", label: "Sessions Delivered" },
  { value: "96%", label: "Pain Reduction in 6 Weeks" },
  { value: "4.9", label: "Average Review Score" },
  { value: "38", label: "Partnered Clinics & Gyms" }
];

export function ResultsSection() {
  return (
    <section className="mx-auto w-[min(94%,1320px)] py-16">
      <div className="anim-fade-up mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5C6B66]">
          Clinical Outcomes
        </p>
        <h2 className="mt-3 font-serif text-5xl text-[#18201D] md:text-6xl">
          Results Patients Feel In Daily Life
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {outcomes.map((item) => (
          <article
            key={item.label}
            className="hover-lift rounded-2xl border border-white/60 bg-white/36 p-6 text-center shadow-[0_14px_26px_rgba(70,88,80,0.12)] backdrop-blur-lg"
          >
            <p className="font-serif text-5xl text-[#18221F]">{item.value}</p>
            <p className="mt-2 text-sm text-[#4A5752]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
