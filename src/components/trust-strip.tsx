const trustItems = [
  { value: "4.9/5", label: "Patient Experience" },
  { value: "12+", label: "Years Clinical Expertise" },
  { value: "10k+", label: "Successful Recovery Sessions" }
];

export function TrustStrip() {
  return (
    <div className="anim-fade-up anim-delay-3 relative z-20 mx-auto mt-3 grid w-[min(94%,1320px)] grid-cols-1 gap-3 rounded-2xl border border-white/60 bg-white/35 p-4 backdrop-blur-lg md:grid-cols-3">
      {trustItems.map((item) => (
        <div
          key={item.label}
          className="hover-lift rounded-xl border border-white/50 bg-white/30 px-4 py-3"
        >
          <p className="text-2xl font-semibold text-[#1E2724]">{item.value}</p>
          <p className="text-sm text-[#495551]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
