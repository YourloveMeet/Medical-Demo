"use client";

import { ScrollVelocity } from "./animations/scroll-velocity";

const certifications = [
  "University of Barcelona",
  "IFOMPT Certified",
  "FIFA Medical Network",
  "World Physiotherapy",
  "European Board of Sports Medicine",
  "Clinical Pilates Institute",
  "ACE Sports Science",
  "Barcelona Sports Medicine Foundation",
];

export function CertificationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F2F5F3] py-20 md:py-24">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4A7C6F]/30 to-transparent" />

      <div className="mx-auto mb-12 w-[min(94%,1320px)] text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A7C6F]">
          Trusted By
        </p>
        <h2 className="mt-4 font-serif text-[36px] font-medium tracking-tight text-[#111815] md:text-[44px]">
          Affiliations & Credentials
        </h2>
      </div>

      {/* Scrolling strip */}
      <ScrollVelocity
        baseVelocity={1.5}
        className="text-[20px] font-medium tracking-wide text-[#3D4D47]/60 md:text-[28px]"
      >
        {certifications.map((cert, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="mx-4 inline-flex items-center gap-3 rounded-full border border-[#4A7C6F]/10 bg-white/60 px-6 py-3 backdrop-blur-sm transition-all hover:border-[#4A7C6F]/30 hover:bg-white/90 hover:shadow-md">
              <span className="h-2 w-2 rounded-full bg-[#4A7C6F]/40" />
              {cert}
            </span>
          </span>
        ))}
      </ScrollVelocity>

      <div className="mt-6">
        <ScrollVelocity
          baseVelocity={-1.2}
          className="text-[20px] font-medium tracking-wide text-[#3D4D47]/60 md:text-[28px]"
        >
          {[...certifications].reverse().map((cert, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="mx-4 inline-flex items-center gap-3 rounded-full border border-[#4A7C6F]/10 bg-white/60 px-6 py-3 backdrop-blur-sm transition-all hover:border-[#4A7C6F]/30 hover:bg-white/90 hover:shadow-md">
                <span className="h-2 w-2 rounded-full bg-[#4A7C6F]/40" />
                {cert}
              </span>
            </span>
          ))}
        </ScrollVelocity>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4A7C6F]/30 to-transparent" />
    </section>
  );
}
