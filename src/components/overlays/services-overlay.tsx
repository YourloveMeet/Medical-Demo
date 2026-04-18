"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Manual Therapy Precision",
    description:
      "Hands-on treatment protocols tailored to mobility deficits, soft-tissue restrictions, and chronic pain triggers.",
    metric: "45 min focused session",
    region: "Cervical Spine",
  },
  {
    num: "02",
    title: "Spinal Rehabilitation",
    description:
      "Structured spine-care pathways to improve posture, reduce flare-ups, and rebuild long-term movement confidence.",
    metric: "8-week guided program",
    region: "Thoracic Spine",
  },
  {
    num: "03",
    title: "Sports Injury Recovery",
    description:
      "Return-to-performance plans combining therapeutic loading, range restoration, and movement retraining.",
    metric: "92% return-to-play rate",
    region: "Lumbar Spine",
  },
];

export function ServicesOverlay() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section heading
      const heading = sectionRef.current?.querySelector(".services-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { x: -80, opacity: 0 },
          {
            x: 0,
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

      // Cards stagger in from right
      const cards = sectionRef.current?.querySelectorAll(".service-card-3d") || [];
      gsap.fromTo(
        cards,
        { x: 100, opacity: 0, rotateY: 15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Fade out on scroll past
      gsap.to(sectionRef.current, {
        opacity: 0,
        y: -60,
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
    <section ref={sectionRef} className="overlay-section services-overlay">
      <div className="services-overlay__inner">
        {/* Heading - left side */}
        <div className="services-heading">
          <span className="section-label">Signature Services</span>
          <h2 className="section-title">
            Care Architecture
            <br />
            Built Around <span className="text-accent">You</span>
          </h2>
          <p className="section-subtitle">
            Every treatment plan emerges from movement diagnostics, pain behavior
            analysis, and practical lifestyle demands.
          </p>
        </div>

        {/* Cards - right side */}
        <div className="services-cards">
          {services.map((service) => (
            <div key={service.num} className="service-card-3d">
              <div className="service-card-3d__inner">
                <div className="service-card-3d__header">
                  <span className="service-card-3d__num">{service.num}</span>
                  <span className="service-card-3d__region">{service.region}</span>
                </div>
                <h3 className="service-card-3d__title">{service.title}</h3>
                <p className="service-card-3d__desc">{service.description}</p>
                <div className="service-card-3d__metric">
                  <span className="service-card-3d__dot" />
                  {service.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
