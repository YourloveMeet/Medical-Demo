export function SiteHeader() {
  return (
    <header className="anim-fade-down fixed left-0 right-0 top-6 z-50 px-[4%]">
      <nav className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between rounded-[32px] border border-white/50 bg-gradient-to-br from-white/[0.08] to-white/[0.01] px-12 shadow-[0_15px_45px_rgba(0,0,0,0.03),inset_0_0_15px_rgba(255,255,255,0.08)] backdrop-blur-[50px] saturate-[180%]">
        {/* Logo Section */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-white/10 text-[15px] font-bold tracking-widest text-[#141816] shadow-inner backdrop-blur-md">
            PV
          </div>
          <span className="text-[30px] font-bold leading-none tracking-tight text-[#111614]">
            PhysioVital
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 text-[15.5px] font-bold tracking-tight text-[#1E2623] lg:flex">
          <li className="group relative cursor-pointer py-1 transition hover:text-[#0D1210]">
            Services
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#4A7C6F] transition-all group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer py-1 transition hover:text-[#0D1210]">
            Treatments
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#4A7C6F] transition-all group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer py-1 transition hover:text-[#0D1210]">
            About Me
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#4A7C6F] transition-all group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer py-1 transition hover:text-[#0D1210]">
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#4A7C6F] transition-all group-hover:w-full" />
          </li>
        </ul>

        {/* Action Button */}
        <div className="flex shrink-0 items-center">
          <button className="rounded-2xl border border-white/50 bg-white/20 px-8 py-3.5 text-sm font-bold text-[#1F2B26] shadow-sm backdrop-blur-xl transition-all hover:bg-white/40 hover:shadow-md hover-lift">
            Health Check
          </button>
        </div>
      </nav>
    </header>
  );
}
