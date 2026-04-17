export function HeroCopy() {
  return (
    <div className="flex flex-col justify-center gap-12 py-10 md:pr-8">
      <div className="max-w-[520px]">
        <div className="mb-8 overflow-hidden">
          <p className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-[#73867e]/30 bg-white/40 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.25em] text-[#3D4D47] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4A7C6F] animate-pulse" />
            Elite Recovery Studio
          </p>
        </div>

        <h1 className="anim-fade-up anim-delay-1 font-serif text-[68px] font-medium leading-[0.9] tracking-tight text-[#111815] md:text-[84px] lg:text-[100px]">
          Restoring
          <br />
          <span className="text-[#4A7C6F]">Movement</span>,
          <br />
          Elevating
          <br />
          Life
        </h1>

        <p className="anim-fade-up anim-delay-2 mt-8 max-w-[480px] text-xl leading-relaxed text-[#45524D]">
          We blend advanced manual therapy, spinal rehabilitation, and
          precision-guided recovery protocols to help you return stronger,
          faster, and pain-free.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:max-w-[520px]">
        <div className="anim-fade-up anim-delay-3 group cursor-default rounded-[24px] border border-white/60 bg-white/35 p-6 shadow-sm backdrop-blur-md transition-all hover:bg-white/50 hover:shadow-xl hover-lift">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#55635E]">
            Excellence
          </p>
          <p className="mt-2.5 text-xl font-bold text-[#1A2320]">
            Best Clinic 2025
          </p>
        </div>
        <div className="anim-fade-up anim-delay-3 group cursor-default rounded-[24px] border border-white/60 bg-white/35 p-6 shadow-sm backdrop-blur-md transition-all hover:bg-white/50 hover:shadow-xl hover-lift">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#55635E]">
            Location
          </p>
          <p className="mt-2.5 text-xl font-bold text-[#1A2320]">
            Barcelona, SP
          </p>
        </div>
      </div>
    </div>
  );
}
