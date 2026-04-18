"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CtaOverlay() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Content reveal
      const content = sectionRef.current?.querySelector(".cta-content-3d");
      if (content) {
        gsap.fromTo(
          content,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Floating orbs
      const orbs = sectionRef.current?.querySelectorAll(".cta-orb") || [];
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: `random(-30, 30)`,
          x: `random(-20, 20)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overlay-section cta-overlay">
      {/* Decorative orbs */}
      <div className="cta-orb cta-orb--1" />
      <div className="cta-orb cta-orb--2" />
      <div className="cta-orb cta-orb--3" />

      <div className="cta-content-3d">
        <span className="section-label section-label--center">Start Today</span>
        <h2 className="cta-title">
          Take The First Step Toward{" "}
          <span className="cta-title__gradient">Pain-Free Movement</span>
        </h2>
        <p className="cta-subtitle">
          Book your initial consultation and receive a personalized therapy
          roadmap aligned to your lifestyle, profession, and recovery goals.
        </p>

        {/* Buttons */}
        <div className="cta-buttons">
          <button className="cta-btn cta-btn--primary">
            <span>Schedule Session</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="cta-btn cta-btn--secondary">
            Download Recovery Guide
          </button>
        </div>

        <p className="cta-trust">
          Free 15-minute consultation · No commitment · Same-day response
        </p>
      </div>
    </section>
  );
}
