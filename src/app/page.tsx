"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { PageLoader } from "@/components/page-loader";
import { ScrollExperience } from "@/components/scroll-experience";
import { HeroOverlay } from "@/components/overlays/hero-overlay";
import { ServicesOverlay } from "@/components/overlays/services-overlay";
import { ProcessOverlay } from "@/components/overlays/process-overlay";
import { AboutOverlay } from "@/components/overlays/about-overlay";
import { CtaOverlay } from "@/components/overlays/cta-overlay";
import { FooterOverlay } from "@/components/overlays/footer-overlay";

// Dynamic import for Three.js canvas (avoid SSR)
const SpineScene = dynamic(
  () => import("@/components/three/spine-scene").then((mod) => ({ default: mod.SpineScene })),
  { ssr: false }
);

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScrollProgress = useCallback((progress: number) => {
    setScrollProgress(progress);
  }, []);

  return (
    <main className="app-root">
      {/* Fixed 3D Canvas Background */}
      <SpineScene scrollProgress={scrollProgress} />

      {/* Fixed Header */}
      <SiteHeader />

      {/* Scrollable Content Overlays */}
      <ScrollExperience onScrollProgress={handleScrollProgress}>
        <HeroOverlay />
        <ServicesOverlay />
        <ProcessOverlay />
        <AboutOverlay />
        <CtaOverlay />
        <FooterOverlay />
      </ScrollExperience>

      {/* Loading Cinema */}
      <PageLoader />
    </main>
  );
}
