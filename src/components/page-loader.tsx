"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "hidden">("loading");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Simulate cinematic loading delay
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
      document.body.style.overflow = "";
    }, 3200);

    const hideTimer = setTimeout(() => {
      setPhase("hidden");
    }, 5000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col font-serif overflow-hidden">
      
      {/* Top Cinematic Shutter */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1/2 overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          phase === "exiting" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Seamless Inner Gradient (Renders the top half of a full 100vh screen) */}
        <div className="absolute top-0 left-0 right-0 h-[100vh] bg-gradient-to-br from-[#0F1D17] via-[#09110D] to-[#040806]">
            {/* Ethereal Floating Orbs */}
            <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#1E3F32] rounded-full mix-blend-screen filter blur-[120px] opacity-30 anim-float-soft" />
            <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#132E23] rounded-full mix-blend-screen filter blur-[100px] opacity-40 anim-drift" />
            
            {/* Grid Overlay for technical texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 mask-image:linear-gradient(to_bottom,white,transparent)" />
        </div>
        
        {/* Top-Left HUD */}
        <div className="absolute top-8 left-8 flex flex-col gap-1 text-[9px] font-sans tracking-[0.2em] text-[#86B5A1]/70 uppercase z-10">
           <span className="anim-fade-up">System Connect</span>
           <span className="anim-fade-up delay-150 text-[#86B5A1]/40">Neural Sync</span>
        </div>
        
        {/* Top-Right HUD */}
        <div className="absolute top-8 right-8 flex flex-col items-end gap-1 text-[9px] font-sans tracking-[0.2em] text-[#86B5A1]/70 uppercase z-10">
           <span className="anim-fade-up">Telemetry</span>
           <span className="anim-fade-up delay-150 text-white/40">Lat: 41.38° N</span>
        </div>
      </div>

      {/* Bottom Cinematic Shutter */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden transition-transform duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          phase === "exiting" ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Seamless Inner Gradient (Renders the bottom half of a full 100vh screen) */}
        <div className="absolute bottom-0 left-0 right-0 h-[100vh] bg-gradient-to-br from-[#0F1D17] via-[#09110D] to-[#040806]">
            {/* Ethereal Floating Orbs (Exact duplicate to maintain seamless design across the split) */}
            <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#1E3F32] rounded-full mix-blend-screen filter blur-[120px] opacity-30 anim-float-soft" />
            <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#132E23] rounded-full mix-blend-screen filter blur-[100px] opacity-40 anim-drift" />
            
            {/* Grid Overlay for technical texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 mask-image:linear-gradient(to_bottom,white,transparent)" />
        </div>

        {/* Bottom-Left HUD */}
        <div className="absolute bottom-8 left-8 flex items-center gap-3 text-[9px] font-sans tracking-[0.2em] text-[#86B5A1]/70 uppercase z-10">
           <div className="w-1.5 h-1.5 rounded-full bg-[#86B5A1] animate-pulse" />
           <span className="anim-fade-up delay-300">Phase 01 Active</span>
        </div>

        {/* Bottom-Right HUD */}
        <div className="absolute bottom-8 right-8 text-[9px] font-sans tracking-[0.2em] text-white/30 uppercase anim-fade-up delay-300 z-10">
           SEQ_2026.04
        </div>
      </div>

      {/* Center Cinematic UI Line & Text */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out z-10 ${
          phase === "exiting" ? "opacity-0 scale-110 blur-xl" : "opacity-100 scale-100 blur-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 relative">
          
          <h1 className="text-[17px] md:text-[26px] font-medium tracking-[0.7em] md:tracking-[0.9em] text-white/95 uppercase ml-[0.9em] anim-blur-reveal drop-shadow-2xl">
            PhysioVital
          </h1>
          
          {/* Enhanced cinematic gradient laser line */}
          <div className="relative w-[280px] md:w-[500px] h-[1px] bg-white/5 overflow-hidden mb-2 shadow-[0_0_15px_rgba(134,181,161,0.4)]">
             <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#86B5A1] to-transparent animate-[shimmer_2s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.4em] md:tracking-[0.6em] text-[#86B5A1]/90 uppercase anim-fade-up delay-200">
              Initializing Biometrics
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
