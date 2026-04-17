"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export function SpineStage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize values between -1 and 1
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform mouse values into physics-based rotation angles
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [10, -10]), { damping: 40, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), { damping: 40, stiffness: 100 });
  const moveX = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), { damping: 40, stiffness: 100 });
  const moveY = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), { damping: 40, stiffness: 100 });

  return (
    <div
      className="relative hidden h-[88vh] min-h-[780px] w-full sm:block"
      style={{ perspective: 1200 }}
    >
      {/* Background Glow/Blur Effect */}
      <div className="absolute inset-0 z-0 rounded-[48px] border border-white/40 bg-gradient-to-b from-white/25 via-white/5 to-transparent backdrop-blur-[6px] shadow-inner" />

      {/* Decorative center point */}
      <motion.div
        style={{ x: useTransform(moveX, v => v * 0.5), y: useTransform(moveY, v => v * 0.5) }}
        className="absolute left-1/2 top-12 z-10 h-12 w-12 -translate-x-1/2 rounded-full border border-white/60 bg-white/40 blur-[2px]"
      />

      {/* The Spinal Model Image (3D Interactive) */}
      <motion.div
        style={{ rotateX, rotateY, x: moveX, y: moveY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 z-20 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <div className="relative h-full w-[130%]">
          <Image
            src="/backboneModel.png"
            alt="Spinal model centerpiece"
            fill
            priority
            sizes="50vw"
            className="object-contain object-center drop-shadow-[0_50px_60px_rgba(54,66,60,0.35)]"
          />
        </div>
      </motion.div>
    </div>
  );
}
