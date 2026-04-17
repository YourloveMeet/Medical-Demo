"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface DrawLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export function DrawLine({
  className = "",
  color = "#4A7C6F",
  strokeWidth = 2,
}: DrawLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current || !svgRef.current) return;

      const lineLength = lineRef.current.getTotalLength();

      gsap.set(lineRef.current, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
      });

      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current.parentElement,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    },
    { scope: svgRef }
  );

  return (
    <svg
      ref={svgRef}
      className={`absolute ${className}`}
      width="2"
      height="100%"
      preserveAspectRatio="none"
    >
      <line
        ref={lineRef}
        x1="1"
        y1="0"
        x2="1"
        y2="100%"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
