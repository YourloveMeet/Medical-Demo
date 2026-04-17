"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Counter } from "./animations/counter";

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  { value: 10, suffix: "K+", label: "Sessions Delivered" },
  { value: 96, suffix: "%", label: "Pain Reduction in 6 Weeks" },
  { value: 4.9, suffix: "", label: "Average Review Score", decimals: 1 },
  { value: 38, suffix: "+", label: "Partnered Clinics & Gyms" },
];

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = cardsRef.current?.querySelectorAll(".stat-card") || [];

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#1A3D33] via-[#142E26] to-[#0F1614] py-28 md:py-36"
    >
      {/* Radial spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A7C6F]/[0.06] blur-[120px]" />

      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #9EC7B8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto w-[min(94%,1320px)]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
            Clinical Outcomes
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-[48px] font-medium leading-[1.05] tracking-tight text-white md:text-[64px]">
            Results Patients Feel{" "}
            <span className="text-[#9EC7B8]">In Daily Life</span>
          </h2>
        </div>

        {/* Stat cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {outcomes.map((item) => (
            <div
              key={item.label}
              className="stat-card group relative overflow-hidden rounded-[24px] border border-[#4A7C6F]/15 bg-[#0F1614]/60 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-[#4A7C6F]/30 hover:bg-[#1A2E28]/60"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#4A7C6F]/0 to-[#4A7C6F]/0 transition-all duration-500 group-hover:from-[#4A7C6F]/5 group-hover:to-transparent" />

              <div className="relative z-10">
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  decimals={item.decimals || 0}
                  className="font-mono text-[48px] font-bold tracking-tight text-white md:text-[56px]"
                />
                <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[#4A7C6F] to-transparent opacity-50" />
                <p className="mt-4 text-sm font-medium text-[#8CA39A]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
