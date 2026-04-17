"use client";

const navLinks = [
  { label: "Services", href: "#" },
  { label: "Treatments", href: "#" },
  { label: "About Me", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
];

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0A0F0D] pt-20 pb-8">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4A7C6F]/30 to-transparent" />

      <div className="mx-auto w-[min(94%,1320px)]">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4A7C6F]/20 bg-[#1A2E28]/60 text-sm font-bold tracking-widest text-[#9EC7B8]">
                PV
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                PhysioVital
              </span>
            </div>
            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-[#6B7E77]">
              Award-winning physiotherapy practice. Restoring movement,
              elevating life through evidence-based care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A7C6F]">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[#8CA39A] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A7C6F]">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-[15px] text-[#8CA39A]">
              <li>
                <span className="block text-xs uppercase tracking-wider text-[#6B7E77]">
                  Email
                </span>
                hello@physiovital.com
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-[#6B7E77]">
                  Phone
                </span>
                +34 612 345 678
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-[#6B7E77]">
                  Address
                </span>
                Carrer de Balmes 42, Barcelona
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4A7C6F]">
              Social
            </h4>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-[#8CA39A] transition-colors hover:text-white"
                  >
                    {link.label}
                    <svg
                      className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#4A7C6F]/20 bg-[#1A2E28]/40 text-[#9EC7B8] transition-all hover:border-[#4A7C6F]/40 hover:bg-[#1A2E28]/80 hover:shadow-lg"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A2E28] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#6B7E77] md:flex-row">
            <p>© 2026 PhysioVital. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-[#9EC7B8]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#9EC7B8]">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-[#9EC7B8]">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
