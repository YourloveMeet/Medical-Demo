"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  tag?: keyof React.JSX.IntrinsicElements;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
  tag: Tag = "div",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lines = containerRef.current?.querySelectorAll(".reveal-line");
      if (!lines) return;

      gsap.set(lines, { y: "100%", opacity: 0 });

      gsap.to(lines, {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: stagger,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  const Component = Tag as any;

  return (
    <Component className={className}>
      <div ref={containerRef} className="overflow-hidden">
        <div className="reveal-line">{children}</div>
      </div>
    </Component>
  );
}

interface TextRevealByLineProps {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}

export function TextRevealByLine({
  text,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
}: TextRevealByLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lines = text.split("\n");

  useGSAP(
    () => {
      const lineEls = containerRef.current?.querySelectorAll(".reveal-line");
      if (!lineEls) return;

      gsap.set(lineEls, { y: "110%", opacity: 0 });

      gsap.to(lineEls, {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: stagger,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <div className={`reveal-line ${lineClassName}`}>{line}</div>
        </div>
      ))}
    </div>
  );
}
