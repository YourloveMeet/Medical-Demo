"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I came in with recurring lumbar pain and left with a complete recovery plan that actually worked. The precision of the assessment was unlike anything I'd experienced before.",
    name: "Aina Romero",
    role: "Marathon Runner",
    rating: 5,
    initials: "AR",
  },
  {
    quote:
      "The treatment quality feels elite. Every session is precise, practical, and focused on long-term outcomes. My mobility improved dramatically within weeks.",
    name: "Marc Villanueva",
    role: "Creative Director",
    rating: 5,
    initials: "MV",
  },
  {
    quote:
      "After 5 sessions, my neck pain dropped dramatically and my posture improved even during long office hours. The ongoing support has been invaluable.",
    name: "Laura Montserrat",
    role: "Product Manager",
    rating: 5,
    initials: "LM",
  },
  {
    quote:
      "As a professional cyclist, I needed someone who understood athletic biomechanics. Dr. Valentín's approach to sports rehabilitation is world-class.",
    name: "Jordi Pla",
    role: "Professional Cyclist",
    rating: 5,
    initials: "JP",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current?.querySelector(".testimonial-container"),
        { y: 60, opacity: 0 },
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
    },
    { scope: sectionRef }
  );

  const item = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#E8EDE8] via-[#E0EAE4] to-[#D5E2DB] py-28 md:py-36"
    >
      <div className="mx-auto w-[min(94%,1320px)]">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
            Patient Stories
          </p>
          <h2 className="mt-4 font-serif text-[48px] font-medium leading-[1.05] tracking-tight text-[#111815] md:text-[64px]">
            Voices of <span className="text-[#4A7C6F]">Recovery</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div
          className="testimonial-container relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/60 bg-white/40 p-10 shadow-[0_20px_50px_rgba(60,80,72,0.1)] backdrop-blur-xl md:p-14">
            {/* Large decorative quote */}
            <svg
              className="pointer-events-none absolute -left-4 -top-4 h-48 w-48 text-[#4A7C6F]/[0.06]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M30 60c-7.7 0-14-6.3-14-14h-2C14 57 22.5 66 33 66c5.8 0 11-2.6 14.5-6.7C44 55 37.7 60 30 60zm36 0c-7.7 0-14-6.3-14-14h-2c0 11 8.5 20 19 20 5.8 0 11-2.6 14.5-6.7C80 55 73.7 60 66 60z" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-[#D4A853]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="max-w-3xl font-serif text-[24px] font-medium leading-relaxed text-[#1A2320] md:text-[32px] md:leading-[1.4]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#4A7C6F]/20 bg-[#E6F0EB] font-semibold text-[#4A7C6F]">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#1A2320]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#52605B]">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Nav dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-10 bg-[#4A7C6F]"
                      : "w-2.5 bg-[#4A7C6F]/20 hover:bg-[#4A7C6F]/40"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#4A7C6F]/20 bg-white/40 text-[#4A7C6F] backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-md"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#4A7C6F]/20 bg-white/40 text-[#4A7C6F] backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-md"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
