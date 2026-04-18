"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  "MSc Physiotherapy — University of Barcelona",
  "Certified Manual Therapist — IFOMPT",
  "Sports Rehabilitation Specialist — FIFA Medical Network",
];

export function AboutOverlay() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Bio panel slide in from left
      const bioPanel = sectionRef.current?.querySelector(".about-bio");
      if (bioPanel) {
        gsap.fromTo(
          bioPanel,
          { x: -120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
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

      // Credential pills
      const pills = sectionRef.current?.querySelectorAll(".cred-pill") || [];
      gsap.fromTo(
        pills,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stats
      const stats = sectionRef.current?.querySelectorAll(".about-stat") || [];
      gsap.fromTo(
        stats,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

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
    <section ref={sectionRef} className="overlay-section about-overlay">
      <div className="about-overlay__inner">
        {/* Bio panel — left side */}
        <div className="about-bio">
          <span className="section-label">The Practitioner</span>
          <h2 className="section-title about-title">
            Behind Every
            <br />
            <span className="text-accent">Recovery</span>
          </h2>

          <p className="about-text">
            Dr. Valentín combines 14 years of clinical expertise with a
            relentless focus on movement science. Trained across Barcelona,
            London, and Zurich, his practice bridges evidence-based
            physiotherapy with personalized care protocols.
          </p>

          <p className="about-text">
            His philosophy: treat the system, not just the symptom. Every
            patient receives a bespoke recovery architecture designed around
            their lifestyle, pain history, and movement goals.
          </p>

          {/* Credentials */}
          <div className="about-creds">
            {credentials.map((cred) => (
              <div key={cred} className="cred-pill">
                <span className="cred-pill__dot" />
                <span>{cred}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="about-stats-row">
            <div className="about-stat">
              <span className="about-stat__num">14+</span>
              <span className="about-stat__label">Years</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">3</span>
              <span className="about-stat__label">Countries</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">2500+</span>
              <span className="about-stat__label">Patients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
