"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollExperienceProps {
  children: React.ReactNode;
  onScrollProgress: (progress: number) => void;
}

export function ScrollExperience({ children, onScrollProgress }: ScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        onScrollProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [onScrollProgress]);

  return (
    <div
      ref={containerRef}
      className="scroll-experience"
    >
      {children}
    </div>
  );
}
