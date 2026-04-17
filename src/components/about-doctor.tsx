"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextRevealByLine } from "./animations/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  "MSc Physiotherapy — University of Barcelona",
  "Certified Manual Therapist — IFOMPT",
  "Sports Rehabilitation Specialist — FIFA Medical Network",
];

export function AboutDoctor() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Horizontal line draw
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)", y: 60 },
        {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );

      // Credential pills
      const pills = contentRef.current?.querySelectorAll(".credential-pill");
      if (pills) {
        gsap.fromTo(
          pills,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 70%",
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
      className="relative overflow-hidden bg-[#0F1614] py-28 md:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#4A7C6F]/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-[#9EC7B8]/6 blur-[100px]" />

      <div className="mx-auto w-[min(94%,1320px)]">
        {/* Section label */}
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
          The Practitioner
        </p>

        {/* Decorative line */}
        <div
          ref={lineRef}
          className="my-8 h-px origin-left bg-gradient-to-r from-[#4A7C6F] via-[#4A7C6F]/50 to-transparent"
        />

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Portrait */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1A2E28] to-[#0F1F1A]">
              {/* Portrait placeholder with initials */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#4A7C6F]/30 bg-[#1A2E28]">
                    <span className="font-serif text-5xl text-[#9EC7B8]">
                      DV
                    </span>
                  </div>
                  <p className="mt-6 font-serif text-2xl text-[#9EC7B8]/60">
                    Dr. Valentín
                  </p>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-4 bottom-12 rounded-2xl border border-[#4A7C6F]/20 bg-[#0F1614]/90 px-6 py-4 shadow-2xl backdrop-blur-xl md:-right-8">
              <p className="font-mono text-3xl font-bold text-white">14+</p>
              <p className="text-xs tracking-wider text-[#9EC7B8]/70">
                Years of Practice
              </p>
            </div>
          </div>

          {/* Bio content */}
          <div ref={contentRef}>
            <TextRevealByLine
              text="Behind Every&#10;Recovery"
              className="mb-2"
              lineClassName="font-serif text-[52px] font-medium leading-[1.05] tracking-tight text-white md:text-[68px]"
            />

            <p className="mt-8 max-w-[480px] text-lg leading-relaxed text-[#8CA39A]">
              Dr. Valentín combines 14 years of clinical expertise with a
              relentless focus on movement science. Trained across Barcelona,
              London, and Zurich, his practice bridges evidence-based
              physiotherapy with personalized care protocols that prioritize
              long-term resilience over short-term relief.
            </p>

            <p className="mt-5 max-w-[480px] text-lg leading-relaxed text-[#8CA39A]">
              His philosophy: treat the system, not just the symptom. Every
              patient receives a bespoke recovery architecture designed around
              their lifestyle, pain history, and movement goals.
            </p>

            {/* Credentials */}
            <div className="mt-10 space-y-3">
              {credentials.map((cred) => (
                <div
                  key={cred}
                  className="credential-pill inline-flex w-full items-center gap-3 rounded-xl border border-[#4A7C6F]/15 bg-[#1A2E28]/50 px-5 py-3 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#4A7C6F]" />
                  <span className="text-sm font-medium text-[#9EC7B8]/90">
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
