"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Animate the header appearing after loader
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 3.5,
      }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      style={{ opacity: 0 }}
    >
      <nav className="site-header__nav">
        {/* Logo */}
        <div className="site-header__logo">
          <div className="site-header__logo-icon">PV</div>
          <span className="site-header__logo-text">PhysioVital</span>
        </div>

        {/* Nav Links */}
        <ul className="site-header__links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Treatments</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <div className="site-header__cta">
          <button className="header-btn">Health Check</button>
        </div>
      </nav>
    </header>
  );
}
