"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DrawLine } from "./animations/draw-line";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Movement Mapping",
    text: "We evaluate spinal mechanics, asymmetry, and pain response patterns through a comprehensive biomechanical assessment.",
    detail: "Full-body functional screening",
  },
  {
    num: "02",
    title: "Therapy Design",
    text: "A custom blend of manual release, mobility correction, and progressive loading tailored to your unique recovery profile.",
    detail: "Personalized protocol creation",
  },
  {
    num: "03",
    title: "Performance Rebuild",
    text: "Strength and motor control progression to keep you resilient, pain-free, and performing at your peak long-term.",
    detail: "Ongoing progress optimization",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stepElements =
        stepsRef.current?.querySelectorAll(".process-step") || [];

      stepElements.forEach((el, i) => {
        const direction = i % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          el,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate the step number circle
        const circle = el.querySelector(".step-circle");
        if (circle) {
          gsap.fromTo(
            circle,
            { scale: 0, rotation: -90 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.7,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: el,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Section heading
      const heading = sectionRef.current?.querySelector(".process-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
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
      className="relative overflow-hidden bg-[#0F1614] py-28 md:py-36"
    >
      {/* Background radial */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A7C6F]/[0.04] blur-[120px]" />

      <div className="mx-auto w-[min(94%,1320px)]">
        {/* Heading */}
        <div className="process-heading mb-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
            Treatment Method
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-[48px] font-medium leading-[1.05] tracking-tight text-white md:text-[64px]">
            A 3-Stage Recovery{" "}
            <span className="text-[#4A7C6F]">Framework</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={stepsRef} className="relative">
          {/* Central draw line */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
            <DrawLine
              className="left-0 top-0 h-full"
              color="#4A7C6F"
              strokeWidth={1}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`process-step flex flex-col items-center gap-8 md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 1 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`max-w-md ${i % 2 === 1 ? "md:ml-auto" : ""}`}
                  >
                    <p className="font-mono text-sm font-bold tracking-wider text-[#4A7C6F]/60">
                      STEP {step.num}
                    </p>
                    <h3 className="mt-3 font-serif text-[36px] leading-tight text-white md:text-[42px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-[#8CA39A]">
                      {step.text}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4A7C6F]/20 bg-[#1A2E28]/60 px-4 py-2 text-[13px] font-medium text-[#9EC7B8]/80 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4A7C6F]" />
                      {step.detail}
                    </div>
                  </div>
                </div>

                {/* Center circle */}
                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <div className="step-circle flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#4A7C6F] bg-[#0F1614] shadow-[0_0_40px_rgba(74,124,111,0.2)]">
                    <span className="font-mono text-2xl font-bold text-[#4A7C6F]">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
