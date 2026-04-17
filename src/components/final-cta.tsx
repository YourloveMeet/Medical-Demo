export function FinalCta() {
  return (
    <section className="mx-auto w-[min(94%,1320px)] py-16">
      <div className="anim-fade-up rounded-[34px] border border-white/65 bg-gradient-to-r from-[#2F5F53]/90 to-[#4A7C6F]/90 p-10 text-white shadow-[0_26px_54px_rgba(53,87,76,0.38)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
          Start Today
        </p>
        <h2 className="mt-3 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
          Take The First Step Toward Pain-Free Movement
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/85">
          Book your initial consultation and receive a personalized therapy
          roadmap aligned to your lifestyle, profession, and recovery goals.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#2F5F53] transition hover:-translate-y-0.5 hover:brightness-95">
            Schedule Session
          </button>
          <button className="rounded-xl border border-white/60 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">
            Download Recovery Guide
          </button>
        </div>
      </div>
    </section>
  );
}
