"use client";

import { ScrollVelocity } from "./animations/scroll-velocity";

export function TrustStrip() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-[#111A16] py-10 md:py-16 -mt-12 text-[#9BCAB7]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4A7C6F] to-transparent opacity-30" />
      
      <ScrollVelocity baseVelocity={2} className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight opacity-90 drop-shadow-[0_0_15px_rgba(155,202,183,0.2)]">
         PHYSIOTHERAPY ✦ RECOVERY ✦ MOVEMENT ✦ PAIN RELIEF ✦ 
      </ScrollVelocity>

      <ScrollVelocity baseVelocity={-2} className="text-3xl md:text-5xl lg:text-7xl font-serif italic opacity-50 mt-4 md:mt-8">
         Evidence-Based ✦ Functional Matrix ✦ Optimal Health ✦ 
      </ScrollVelocity>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4A7C6F] to-transparent opacity-30" />
    </section>
  );
}
