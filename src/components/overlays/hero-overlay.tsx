"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroOverlay() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title words reveal
      const words = titleRef.current?.querySelectorAll(".word") || [];
      gsap.fromTo(
        words,
        { y: 120, opacity: 0, rotateX: 40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.08,
          duration: 1.4,
          ease: "power4.out",
          delay: 3.5, // After loader
        }
      );

      // Badge
      gsap.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 3.2,
        }
      );

      // Tagline
      gsap.fromTo(
        taglineRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 4,
        }
      );

      // Stats
      gsap.fromTo(
        statsRef.current?.querySelectorAll(".stat-item") || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          delay: 4.3,
        }
      );

      // Fade out the hero as user scrolls
      gsap.to(sectionRef.current, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overlay-section hero-overlay">
      <div className="hero-overlay__content">
        {/* Badge */}
        <div ref={badgeRef} className="hero-badge">
          <span className="hero-badge__dot" />
          <span>Elite Recovery Studio</span>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="hero-title" style={{ perspective: 800 }}>
          <span className="hero-title__line">
            <span className="word">Restoring</span>
          </span>
          <span className="hero-title__line">
            <span className="word hero-title__accent">Movement,</span>
          </span>
          <span className="hero-title__line">
            <span className="word">Elevating</span>{" "}
            <span className="word">Life</span>
          </span>
        </h1>

        {/* Tagline */}
        <p ref={taglineRef} className="hero-tagline">
          We blend advanced manual therapy, spinal rehabilitation, and
          precision-guided recovery protocols to help you return stronger,
          faster, and pain-free.
        </p>

        {/* Stats strip */}
        <div ref={statsRef} className="hero-stats">
          <div className="stat-item">
            <span className="stat-item__number">14+</span>
            <span className="stat-item__label">Years Practice</span>
          </div>
          <div className="stat-item__divider" />
          <div className="stat-item">
            <span className="stat-item__number">2500+</span>
            <span className="stat-item__label">Patients Recovered</span>
          </div>
          <div className="stat-item__divider" />
          <div className="stat-item">
            <span className="stat-item__number">98%</span>
            <span className="stat-item__label">Success Rate</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator__line" />
          <span className="scroll-indicator__text">EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
