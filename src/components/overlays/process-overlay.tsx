"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export function ProcessOverlay() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section heading
      const heading = sectionRef.current?.querySelector(".process-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Steps appear one by one
      const stepEls = sectionRef.current?.querySelectorAll(".process-step-3d") || [];
      stepEls.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate the step number
        const circle = el.querySelector(".step-circle-3d");
        if (circle) {
          gsap.fromTo(
            circle,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
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

      // Draw connecting line
      const line = sectionRef.current?.querySelector(".process-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // Fade out
      gsap.to(sectionRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 30%",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overlay-section process-overlay">
      <div className="process-overlay__inner">
        {/* Heading */}
        <div className="process-heading text-center">
          <span className="section-label">Treatment Method</span>
          <h2 className="section-title">
            A 3-Stage Recovery <span className="text-accent">Framework</span>
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="process-timeline">
          {/* Connecting line */}
          <div className="process-line" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process-step-3d ${i % 2 === 1 ? "process-step-3d--right" : ""}`}
            >
              {/* Circle */}
              <div className="step-circle-3d">
                <span>{step.num}</span>
              </div>

              {/* Content */}
              <div className="process-step-3d__content">
                <span className="process-step-3d__label">STEP {step.num}</span>
                <h3 className="process-step-3d__title">{step.title}</h3>
                <p className="process-step-3d__text">{step.text}</p>
                <div className="process-step-3d__detail">
                  <span className="process-step-3d__dot" />
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
