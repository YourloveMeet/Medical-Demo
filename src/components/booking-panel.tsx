const treatmentTags = ["Manual Therapy", "Spine Rehab", "Posture Reset"];

export function BookingPanel() {
  return (
    <aside className="anim-fade-up anim-delay-3 w-full max-w-[420px] rounded-[32px] border border-white/80 bg-white/50 p-8 shadow-[0_30px_60px_rgba(60,80,72,0.12)] backdrop-blur-3xl">
      <div className="relative mb-8 pr-12">
        <h2 className="font-serif text-[42px] font-medium leading-[0.95] tracking-tight text-[#121816] lg:text-[48px]">
          Book Your
          <br />
          Appointment
        </h2>
        <div className="absolute right-0 top-2">
          <span className="inline-flex rounded-full border border-[#527065]/20 bg-[#E0ECE6] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#345348]">
            24/7 ONLINE
          </span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="space-y-3.5">
          <input
            type="text"
            placeholder="Full Name"
            className="h-14 w-full rounded-2xl border border-white/70 bg-white/40 px-6 py-4 text-base text-[#121816] placeholder:text-[#55635E] outline-none transition-all focus:border-[#4A7C6F] focus:bg-white/80 focus:ring-4 focus:ring-[#4A7C6F]/5"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full rounded-2xl border border-white/70 bg-white/40 px-6 py-4 text-base text-[#121816] placeholder:text-[#55635E] outline-none transition-all focus:border-[#4A7C6F] focus:bg-white/80 focus:ring-4 focus:ring-[#4A7C6F]/5"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="h-14 w-full rounded-2xl border border-white/70 bg-white/40 px-6 py-4 text-base text-[#121816] placeholder:text-[#55635E] outline-none transition-all focus:border-[#4A7C6F] focus:bg-white/80 focus:ring-4 focus:ring-[#4A7C6F]/5"
          />

          <div className="grid grid-cols-2 gap-3.5">
            <select className="h-14 w-full appearance-none rounded-2xl border border-white/70 bg-white/40 px-6 py-4 text-sm font-medium text-[#121816] outline-none transition-all focus:border-[#4A7C6F] focus:bg-white/80">
              <option>Select Date</option>
            </select>
            <select className="h-14 w-full appearance-none rounded-2xl border border-white/70 bg-white/40 px-6 py-4 text-sm font-medium text-[#121816] outline-none transition-all focus:border-[#4A7C6F] focus:bg-white/80">
              <option>Select Time</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          className="group relative mt-4 h-14 w-full overflow-hidden rounded-2xl bg-[#141816] px-5 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-[1.01] hover:bg-[#1C221F] active:scale-[0.99]"
        >
          <span className="relative z-10">Confirm Booking</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </button>
      </form>

      <div className="mt-8 flex flex-wrap gap-2 pt-6">
        {treatmentTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/60 bg-white/30 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#345348] transition-all hover:bg-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </aside>
  );
}
