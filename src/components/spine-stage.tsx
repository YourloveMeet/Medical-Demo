import Image from "next/image";

export function SpineStage() {
  return (
    <div className="relative hidden h-[88vh] min-h-[780px] w-full sm:block">
      {/* Background Glow/Blur Effect */}
      <div className="absolute inset-0 z-0 rounded-[48px] border border-white/40 bg-gradient-to-b from-white/25 via-white/5 to-transparent backdrop-blur-[6px] shadow-inner" />

      {/* Decorative center point */}
      <div className="anim-drift absolute left-1/2 top-12 z-10 h-12 w-12 -translate-x-1/2 rounded-full border border-white/60 bg-white/40 blur-[2px]" />

      {/* The Spinal Model Image */}
      <div className="anim-float-soft absolute inset-0 z-20 flex items-center justify-center">
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
      </div>
    </div>
  );
}
