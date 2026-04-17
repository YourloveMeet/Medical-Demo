import { AboutDoctor } from "@/components/about-doctor";
import { BookingPanel } from "@/components/booking-panel";
import { CertificationsSection } from "@/components/certifications-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { HeroCopy } from "@/components/hero-copy";
import { ProcessSection } from "@/components/process-section";
import { ResultsSection } from "@/components/results-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SpineStage } from "@/components/spine-stage";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustStrip } from "@/components/trust-strip";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#C8D8D0] via-[#D5E2DB] to-[#E8EDE8] text-[#1A1A1A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="anim-drift absolute -left-24 top-24 h-[24rem] w-[24rem] rounded-full bg-[#8CB2A3]/20 blur-3xl" />
        <div className="anim-drift absolute -right-8 top-8 h-72 w-72 rounded-full bg-white/40 blur-3xl [animation-delay:900ms]" />
        <div className="anim-drift absolute bottom-4 left-1/3 h-60 w-60 rounded-full bg-[#9EC7B8]/20 blur-3xl [animation-delay:1400ms]" />
        <div className="anim-drift absolute bottom-24 right-1/4 h-44 w-44 rounded-full bg-[#A7C8BC]/25 blur-3xl [animation-delay:500ms]" />
      </div>

      <SiteHeader />

      {/* Hero Section — UNTOUCHED */}
      <section className="relative z-10 mx-auto grid min-h-screen w-[min(94%,1440px)] grid-cols-1 items-start pb-10 pt-32 md:grid-cols-[1.2fr_0.8fr_1.1fr] md:items-center md:gap-4 lg:grid-cols-[1fr_0.6fr_0.9fr]">
        <div className="anim-fade-up anim-delay-1 flex h-full items-center">
          <HeroCopy />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <SpineStage />
        </div>
        <div className="mt-10 flex items-center justify-center md:mt-0 md:justify-end">
          <BookingPanel />
        </div>
      </section>

      <TrustStrip />

      {/* Redesigned Sections */}
      <AboutDoctor />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <CertificationsSection />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
