"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "./animations/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctaContent = sectionRef.current?.querySelector(".cta-content");
      if (ctaContent) {
        gsap.fromTo(
          ctaContent,
          { y: 60, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Floating orbs
      const orbs = sectionRef.current?.querySelectorAll(".floating-orb") || [];
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#1A3D33] via-[#2F5F53] to-[#1A3D33] py-28 md:py-40"
    >
      {/* Floating decorative orbs */}
      <div className="floating-orb pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#4A7C6F]/10 blur-[80px]" />
      <div className="floating-orb pointer-events-none absolute -right-16 bottom-32 h-48 w-48 rounded-full bg-[#9EC7B8]/10 blur-[60px]" />
      <div className="floating-orb pointer-events-none absolute left-1/3 top-1/3 h-32 w-32 rounded-full bg-white/5 blur-[40px]" />
      <div className="floating-orb pointer-events-none absolute bottom-20 right-1/3 h-40 w-40 rounded-full bg-[#4A7C6F]/8 blur-[50px]" />

      {/* Dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="cta-content relative z-10 mx-auto w-[min(94%,1000px)] text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9EC7B8]/70">
          Start Today
        </p>
        <h2 className="mt-6 font-serif text-[48px] font-medium leading-[1.1] tracking-tight text-white md:text-[72px]">
          Take The First Step Toward{" "}
          <span className="bg-gradient-to-r from-[#9EC7B8] to-[#D4E8E0] bg-clip-text text-transparent">
            Pain-Free Movement
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Book your initial consultation and receive a personalized therapy
          roadmap aligned to your lifestyle, profession, and recovery goals.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton
            className="group rounded-2xl bg-white px-10 py-5 text-base font-bold text-[#1A3D33] shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            strength={0.3}
          >
            <span className="flex items-center gap-2">
              Schedule Session
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </MagneticButton>

          <MagneticButton
            className="rounded-2xl border border-white/30 bg-white/10 px-10 py-5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            strength={0.2}
          >
            Download Recovery Guide
          </MagneticButton>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-sm text-white/40">
          Free 15-minute consultation · No commitment · Same-day response
        </p>
      </div>
    </section>
  );
}
