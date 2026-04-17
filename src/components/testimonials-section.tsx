const testimonials = [
  {
    quote:
      "I came in with recurring lumbar pain and left with a complete recovery plan that actually worked.",
    name: "Aina R.",
    role: "Marathon Runner"
  },
  {
    quote:
      "The treatment quality feels elite. Every session is precise, practical, and focused on long-term outcomes.",
    name: "Marc V.",
    role: "Creative Director"
  },
  {
    quote:
      "After 5 sessions, my neck pain dropped dramatically and my posture improved even during long office hours.",
    name: "Laura M.",
    role: "Product Manager"
  }
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-[min(94%,1320px)] py-16">
      <div className="anim-fade-up mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5C6B66]">
            Social Proof
          </p>
          <h2 className="mt-3 font-serif text-5xl text-[#18201D] md:text-6xl">
            What Patients Say
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="hover-lift rounded-3xl border border-white/60 bg-white/34 p-6 shadow-[0_14px_30px_rgba(70,88,80,0.12)] backdrop-blur-lg"
          >
            <p className="text-base leading-relaxed text-[#3F4B47]">
              "{item.quote}"
            </p>
            <div className="mt-6 border-t border-white/60 pt-4">
              <p className="font-semibold text-[#1C2421]">{item.name}</p>
              <p className="text-sm text-[#52605B]">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
