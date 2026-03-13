import { useState, useEffect, useRef } from "react";

const problems = [
  { icon: "🎓", label: "Students", text: "enter industries unprepared", delay: 0 },
  { icon: "📄", label: "Graduates", text: "struggle with employability gaps", delay: 150 },
  { icon: "💼", label: "Professionals", text: "face difficult transitions", delay: 300 },
  { icon: "🚀", label: "Entrepreneurs", text: "encounter growth challenges", delay: 450 },
  { icon: "👑", label: "Leaders", text: "feel stuck at the next level", delay: 600 },
];

const bridges = [
  { from: "Schools", to: "Colleges", border: "border-t-[#DE080A]", arrow: "text-[#DE080A]" },
  { from: "Colleges", to: "Industries", border: "border-t-[#FF6700]", arrow: "text-[#FF6700]" },
  { from: "Professionals", to: "Leadership Roles", border: "border-t-[#006400]", arrow: "text-[#006400]" },
  { from: "Entrepreneurs", to: "Business Growth", border: "border-t-[#870000]", arrow: "text-[#870000]" },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function NexusSection() {
  const [problemRef, problemInView] = useInView(0.15);
  const [bridgeRef, bridgeInView] = useInView(0.15);

  return (
    <div className="font-sans bg-white text-[#1A1A1A]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-24px); } to { opacity:1; transform:translateX(0); } }
        .fade-up { animation: fadeUp 0.55s ease forwards; }
        .slide-in { animation: slideIn 0.5s ease forwards; }
        .gradient-bar { background: linear-gradient(90deg,#DE080A,#FF6700,#FFD801,#006400); }
      `}</style>

      
        
      {/* ── PROBLEM ── */}
      <div className="bg-[#F6F6F6] px-6 py-10 md:py-14" ref={problemRef}>
        <div className="max-w-6xl mx-auto">
          <p className="dm-sans text-[#DE080A] text-[14px] font-medium tracking-[4px] uppercase mb-3">
            The Problem We Solve
          </p>
          <h2 className="playfair font-bold  text-green-900 leading-tight mb-5"
            style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            Success evolves Skills don't.{" "}
            
          </h2>
          <div className="w-12 h-[3px] bg-[#DE080A] mb-10" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`bg-white border border-[#e8e8e8] border-l-4 border-l-[#DE080A] p-6 flex items-start gap-4 
                  hover:shadow-lg hover:border-l-[#FF6700] transition-all duration-200 cursor-default
                  ${problemInView ? "fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${p.delay}ms` }}
              >
                <span className="text-3xl leading-none mt-0.5 flex-shrink-0">{p.icon}</span>
                <div>
                  <p className="dm-sans text-[#DE080A] text-[14px] font-medium tracking-[2px] uppercase mb-1">
                    {p.label}
                  </p>
                  <p className="dm-sans text-Colors.darkgreen text-[16px] leading-snug">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INSIGHT BANNER ── */}
      <div className="bg-[#870000] py-10 px-6 text-center relative overflow-hidden">
        <span className="playfair absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          font-black text-white/[0.04] whitespace-nowrap pointer-events-none select-none"
          style={{ fontSize: "clamp(60px,12vw,130px)", letterSpacing: "-4px" }}>
          SKILL ALIGNMENT
        </span>
        <p className="playfair font-bold text-white relative z-10 max-w-2xl mx-auto leading-tight"
          style={{ fontSize: "clamp(20px,3.5vw,38px)" }}>
          The problem is not{" "}
          <span className="italic underline decoration-[#FFD801] underline-offset-4">talent.</span>
          <br />
          The problem is{" "}
          <span className="italic underline decoration-[#FFD801] underline-offset-4">skill alignment.</span>
        </p>
      </div>

      {/* ── BRIDGES ── */}
      <div className="bg-white px-6 py-10 md:py-14" ref={bridgeRef}>
        <div className="max-w-6xl mx-auto">
          <p className="dm-sans text-red-800 text-[14px] font-medium tracking-[4px] uppercase mb-3">
            What We Do
          </p>
          <h2 className="playfair font-bold text-green-900 leading-tight mb-5"
            style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            We build bridges.
          </h2>
          <div className="w-12 h-[3px] bg-[#006400] mb-10" />

          {/* Intro grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <p className="dm-sans text-Colors.darkgreen font-light text-[16px] leading-relaxed">
              Nexus Framer bridges the gap between education, industry, and real-world performance -
              supporting you through every transition, transformation, and growth challenge.
            </p>
            <div className="bg-[#F6F6F6] border-l-4 border-l-[#006400] px-6 py-5">
              <strong className="dm-sans text-red-900 text-[14px] font-medium tracking-[2px] uppercase block mb-2">
                Our Mission
              </strong>
              <p className="dm-sans text-Colors.darkgreen text-[15px] leading-relaxed">
                Align skills with opportunity - so that talent never goes to waste at any stage of life or career.
              </p>
            </div>
          </div>

          {/* Bridge cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bridges.map((b, i) => (
              <div
                key={i}
                className={`bg-[#F6F6F6] border-t-4 ${b.border} p-5 hover:bg-[#efefef] transition-colors duration-200
                  ${bridgeInView ? "slide-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <p className="dm-sans text-Colors.drakgreen text-[10px] font-medium tracking-[3px] uppercase mb-3">
                  {b.from}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-xl font-bold ${b.arrow}`}>→</span>
                  <span className="playfair font-bold text-red-900 text-[18px]">{b.to}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-[#1a4a1a] px-6 py-10 text-center">
        <h2 className="playfair font-bold text-white mb-3" style={{ fontSize: "clamp(26px,4vw,42px)" }}>
          Ready to close the gap?
        </h2>
        <p className="dm-sans text-white/60 text-[16px] mb-8">
          Let's align your skills with where you want to go.
        </p>
        <button className="dm-sans bg-[#FFD801] text-black font-semibold text-[13px] tracking-[2px] uppercase
          px-9 py-4 hover:bg-[#FF6700] hover:text-white transition-all duration-200 hover:-translate-y-0.5">
          Get Started
        </button>
      </div>
    </div>
  );
}