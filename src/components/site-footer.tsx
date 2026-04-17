export function SiteFooter() {
  return (
    <footer className="mx-auto w-[min(94%,1320px)] pb-10 pt-8">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-white/60 pt-6 text-sm text-[#4A5752] md:flex-row md:items-center">
        <p>© 2026 PhysioVital. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-[#1D2522]">
            Privacy
          </a>
          <a href="#" className="transition hover:text-[#1D2522]">
            Terms
          </a>
          <a href="#" className="transition hover:text-[#1D2522]">
            Instagram
          </a>
          <a href="#" className="transition hover:text-[#1D2522]">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
