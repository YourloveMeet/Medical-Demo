const faqs = [
  {
    question: "How many sessions do I typically need?",
    answer:
      "Most patients feel measurable relief within 3-6 sessions. Full programs vary by pain history and mobility goals."
  },
  {
    question: "Do you treat sports-related injuries?",
    answer:
      "Yes. We support athletes with movement assessment, tissue recovery, and return-to-performance progression."
  },
  {
    question: "Can I book an online consult first?",
    answer:
      "Absolutely. Start with a short online consultation to discuss symptoms and treatment suitability."
  }
];

export function FaqSection() {
  return (
    <section className="mx-auto w-[min(94%,1320px)] py-16">
      <div className="anim-fade-up mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5C6B66]">
          Common Questions
        </p>
        <h2 className="mt-3 font-serif text-5xl text-[#18201D] md:text-6xl">
          Everything Before Your First Visit
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="hover-lift rounded-2xl border border-white/60 bg-white/34 p-6 shadow-[0_12px_24px_rgba(70,88,80,0.11)] backdrop-blur-lg"
          >
            <h3 className="text-2xl font-semibold text-[#1B2320]">{faq.question}</h3>
            <p className="mt-2 text-base leading-relaxed text-[#4A5752]">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
