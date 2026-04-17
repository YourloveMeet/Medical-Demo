"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How many sessions do I typically need?",
    answer:
      "Most patients feel measurable relief within 3–6 sessions. Full recovery programs vary based on pain history, mobility goals, and individual biomechanics. We reassess progress at every stage to keep your plan optimally calibrated.",
  },
  {
    question: "Do you treat sports-related injuries?",
    answer:
      "Absolutely. We support athletes across all levels with comprehensive movement assessment, tissue recovery protocols, and return-to-performance progression plans. Our approach is evidence-based and tailored to each sport's demands.",
  },
  {
    question: "Can I book an online consultation first?",
    answer:
      "Yes — start with a short video consultation to discuss symptoms, injury history, and treatment suitability before committing to an in-person visit. This helps us prepare a more targeted initial assessment.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your initial session includes a full biomechanical screening, pain behavior analysis, and movement quality assessment. We'll discuss your goals, develop a preliminary treatment plan, and begin hands-on therapy if appropriate.",
  },
  {
    question: "Do you accept insurance or health plans?",
    answer:
      "We work with most major health insurance providers in Spain and accept international health plans. Contact our team for specific coverage details or to verify your plan before your first visit.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="faq-item overflow-hidden rounded-2xl border border-white/60 bg-white/30 backdrop-blur-lg transition-all duration-300 hover:bg-white/45">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-7 py-6 text-left"
      >
        <h3 className="pr-6 text-[18px] font-semibold text-[#1B2320] md:text-[20px]">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4A7C6F]/20 bg-[#E6F0EB] text-[#4A7C6F]"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12M6 12h12"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="px-7 pb-6">
              <div className="h-px w-full bg-gradient-to-r from-[#4A7C6F]/20 via-[#4A7C6F]/10 to-transparent" />
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#4A5752]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items =
        sectionRef.current?.querySelectorAll(".faq-item") || [];

      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0F1614] py-28 md:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#4A7C6F]/[0.04] blur-[120px]" />

      <div className="mx-auto w-[min(94%,1320px)]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.5fr]">
          {/* Left — heading */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
              Common Questions
            </p>
            <h2 className="mt-4 font-serif text-[48px] font-medium leading-[1.05] tracking-tight text-white md:text-[56px]">
              Everything Before Your{" "}
              <span className="text-[#9EC7B8]">First Visit</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[#8CA39A]">
              We believe in transparency. Here are the most common questions
              patients ask before scheduling their first appointment.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
