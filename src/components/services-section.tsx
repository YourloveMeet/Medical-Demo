"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ParallaxCard } from "./animations/parallax-card";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Manual Therapy Precision",
    description:
      "Hands-on treatment protocols tailored to mobility deficits, soft-tissue restrictions, and chronic pain triggers. Every session targets the root cause.",
    metric: "45 min focused session",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M24 12v24M12 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Spinal Rehabilitation",
    description:
      "Structured spine-care pathways to improve posture, reduce flare-ups, and rebuild long-term movement confidence through progressive protocols.",
    metric: "8-week guided program",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M24 8c0 0-8 10 0 16s0 16 0 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sports Injury Recovery",
    description:
      "Return-to-performance plans combining therapeutic loading, range restoration, and movement retraining for competitive athletes.",
    metric: "92% return-to-play rate",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M16 32l8-20 8 20M18 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.querySelectorAll(".gsap-heading-word") || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Card stagger
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, rotateX: 8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#D5E2DB] via-[#E0EAE4] to-[#E8EDE8] py-28 md:py-36"
    >
      {/* Background texture dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0F1614 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto w-[min(94%,1320px)]">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-16 max-w-3xl">
          <div className="overflow-hidden">
            <p className="gsap-heading-word text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
              Signature Services
            </p>
          </div>
          <div className="mt-4 overflow-hidden">
            <h2 className="gsap-heading-word font-serif text-[48px] font-medium leading-[1.05] tracking-tight text-[#111815] md:text-[64px]">
              Care Architecture
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="gsap-heading-word font-serif text-[48px] font-medium leading-[1.05] tracking-tight text-[#111815] md:text-[64px]">
              Built Around <span className="text-[#4A7C6F]">You</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="gsap-heading-word mt-6 max-w-xl text-lg text-[#495651]">
              Every treatment plan emerges from movement diagnostics, pain
              behavior analysis, and practical lifestyle demands.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {services.map((service) => (
            <div key={service.num} className="service-card">
              <ParallaxCard
                className="group rounded-[28px] border border-white/60 bg-white/40 p-8 backdrop-blur-xl transition-colors duration-500 hover:bg-white/60"
                glareColor="rgba(74, 124, 111, 0.08)"
              >
                {/* Giant background number */}
                <span className="pointer-events-none absolute right-6 top-4 select-none font-mono text-[120px] font-bold leading-none text-[#111815]/[0.04]">
                  {service.num}
                </span>

                {/* Icon */}
                <div className="mb-6 text-[#4A7C6F] transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="font-serif text-[28px] leading-tight text-[#1A2320]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4A5752] transition-colors group-hover:text-[#2A3530]">
                  {service.description}
                </p>

                {/* Metric badge */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-[#4A7C6F]/20 bg-[#E6F0EB] px-4 py-1.5 text-[13px] font-semibold text-[#345348]">
                    {service.metric}
                  </span>
                  <span className="text-sm font-medium text-[#4A7C6F] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn More →
                  </span>
                </div>
              </ParallaxCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
