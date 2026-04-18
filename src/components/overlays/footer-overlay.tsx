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

export function FooterOverlay() {
  return (
    <footer className="footer-overlay">
      {/* Top gradient line */}
      <div className="footer-line" />

      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo__icon">PV</div>
              <span className="footer-logo__text">PhysioVital</span>
            </div>
            <p className="footer-brand__desc">
              Award-winning physiotherapy practice. Restoring movement,
              elevating life through evidence-based care.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col__title">Navigation</h4>
            <ul className="footer-col__list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col__title">Contact</h4>
            <ul className="footer-col__list footer-col__list--contact">
              <li>
                <span className="footer-col__sublabel">Email</span>
                hello@physiovital.com
              </li>
              <li>
                <span className="footer-col__sublabel">Phone</span>
                +34 612 345 678
              </li>
              <li>
                <span className="footer-col__sublabel">Address</span>
                Carrer de Balmes 42, Barcelona
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4 className="footer-col__title">Social</h4>
            <ul className="footer-col__list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-social-link">
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 PhysioVital. All rights reserved.</p>
          <div className="footer-bottom__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
