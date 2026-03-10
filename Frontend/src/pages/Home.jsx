import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroCarousel";
import NexusSection from "../components/whatwedo";

const colors = {
  red: "#DE080A",
  yellow: "#FFD801",
  green: "#006400",
  orange: "#FF6700",
  maroon: "#870000",
  darkGreen: "#1a4a1a",
  black: "#000",
  white : "#FFF",
  offWhite: "#F6F6F6",
  textDark: "#1A1A1A",
  textMid: "#444444",
  textLight: "#666666",
};

const NAV_LINKS = ["About", "Services", "Programs", "Trainers", "Books", "Contact"];

const SERVICES = [
  { icon: "💬", title: "Communication & Collaboration", desc: "Build clear, impactful communication skills that foster teamwork and organizational synergy." },
  { icon: "👑", title: "Leadership & Managerial Excellence", desc: "Develop authentic leaders who inspire, align, and drive high-performance cultures." },
  { icon: "🧠", title: "Emotional & Mental Fitness", desc: "Equip teams with emotional resilience, mental clarity, and well-being strategies." },
  { icon: "⚡", title: "Productivity & Professional Effectiveness", desc: "Transform time, energy, and focus into measurable workplace performance." },
  { icon: "🌟", title: "Executive Presence & Confidence", desc: "Help professionals own the room with authentic charisma and gravitas." },
  { icon: "🤝", title: "Team Culture & People Synergy", desc: "Build trust-based teams that collaborate with purpose and psychological safety." },
  { icon: "📈", title: "Sales, Service & Relationship Intelligence", desc: "Create customer-centric professionals who sell with empathy and close with integrity." },
  { icon: "💪", title: "Women-Centric Empowerment", desc: "Accelerate women leaders with confidence, presence, and career readiness programs." },
];

const PROGRAMS = [
  "Personal Effectiveness & Productivity",
  "Mental & Emotional Fitness",
  "Communication, Collaboration & Influence",
  "Leadership & Managerial Excellence",
  "Teamwork, Culture & Collaboration",
  "Sales, Service & Customer Excellence",
  "Women-Centric Corporate Empowerment",
  "Workplace Etiquette & Professional Skills",
  "Digital, Analytical & Future Skills",
  "Wellness, Energy & Human Optimization",
  "High-Demand Performance Skills",
];

const INDUSTRIES = [
  "Education & EdTech", "IT & Technology", "BFSI", "Pharmaceuticals & Healthcare",
  "Manufacturing & Engineering", "Government & Public Sector", "Startups & MSMEs",
  "HR & L&D", "Retail & FMCG", "Hospitality & Travel", "Telecom & Electronics",
  "Consulting & Professional Services", "Real Estate & Infrastructure",
  "Media & Creative Agencies", "E-Commerce", "BPO & Shared Services",
  "Logistics & Supply Chain", "Automobile", "Energy & Utilities", "NGOs & Social Impact"
];

const Soulhear = [
  {title: "Emotional Clarity", icon:"🎯"},
  {title: "Calm Confidence", icon: "🧘"},
  {title: "Authentic Presence", icon: "✨"},
  {title: "Deeper Connection",icon: "🤝" }
]

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
      {children}
    </div>
  );
}



export default function NexusframerHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const segments = [
  {
    id: "assess",
    label: "Assess Stage",
    icon: "🔍",
    tagline: "Understand the Starting Point",
    description:
      "Evaluate current capabilities, behaviors, and performance levels to clearly understand the existing skill landscape.",
    color: colors.red,
    accent: "#FF4D4F",
  },
  {
    id: "skill-gap",
    label: "Identify Skill Gap",
    icon: "🧠",
    tagline: "Discover What Needs Improvement",
    description:
      "Analyze insights from assessments to uncover strengths and identify the critical skills that need development.",
    color: colors.orange,
    accent: "#FF8C40",
  },
  {
    id: "framework",
    label: "Design Framework",
    icon: "🧩",
    tagline: "Create a Strategic Learning Plan",
    description:
      "Develop a structured and customized learning framework designed to close identified skill gaps effectively.",
    color: colors.green,
    accent: "#2E8B57",
  },
  {
    id: "training",
    label: "Deliver Training",
    icon: "🎯",
    tagline: "Turn Learning Into Action",
    description:
      "Execute targeted training programs, workshops, and practical learning experiences that drive real transformation.",
    color: colors.maroon,
    accent: "#B22222",
  },
  {
    id: "growth",
    label: "Measure Growth",
    icon: "📈",
    tagline: "Track Progress and Impact",
    description:
      "Measure outcomes, monitor improvement, and evaluate how training translates into performance growth.",
    color: colors.red,
    accent: "#D4A800",
  },
];

const FadeUp = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(36px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const FadeLeft = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0px)" : "translateX(-40px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#faf8f4", color: colors.darkGreen }}>

      <HeroSection/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .font-display { font-family: 'Montserrat', sans-serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        .stripe-bg {
          background: repeating-linear-gradient(
            135deg,
            transparent,
            transparent 8px,
            rgba(255,216,1,0.06) 8px,
            rgba(255,216,1,0.06) 16px
          );
        }
        .hero-gradient {
          background: linear-gradient(135deg, #870000 0%, #DE080A 40%, #FF6700 70%, #FFD801 100%);
        }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(135,0,0,0.15); }
        .btn-primary { transition: all 0.3s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(222,8,10,0.35); }
        .btn-secondary { transition: all 0.3s ease; }
        .btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,103,0,0.35); }
        .marquee-track { display: flex; animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
        .section-rule { height: 4px; background: linear-gradient(90deg, #DE080A, #FFD801, #006400, #FF6700); border-radius: 2px; }
        .program-pill { transition: all 0.3s ease; cursor: default; }
        .program-pill:hover { background: #DE080A; color: white; transform: scale(1.04); }
        .soulhear-bg { background: #008743 }
        .gold-text { background: linear-gradient(135deg, #FFD801, #FF6700); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

     

      

      {/* MARQUEE - Industries */}
      <div style={{ background: colors.maroon, padding: "14px 0", overflow: "hidden" }}>
        <div className="marquee-track">
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <span key={i} className="font-body" style={{ whiteSpace: "nowrap", color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, padding: "0 28px", letterSpacing: "0.5px" }}>
              <span style={{ color: colors.yellow, marginRight: 28 }}>◆</span>{ind}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-10 lg:py-20 px-4"style={{  maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div className="font-body" style={{ color: colors.red, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Who We Are</div>
              <h2 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 900, color: colors.maroon, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1px" }}>
                When People Grow,<br />
                <span style={{ color: colors.green }}>Organizations Grow.</span>
              </h2>
              <div className="section-rule" style={{ width: 80, marginBottom: 28 }} />
              <p className="font-body" style={{ fontSize: 16, color: colors.darkGreen, lineHeight: 1.85, marginBottom: 20 }}>
                Nexusframer is built on a simple belief. We specialize in people development, behavioral transformation, communication mastery, leadership capability, and performance-driven learning experiences.
              </p>
              <p className="font-body" style={{ fontSize: 16, color: colors.darkGreen, lineHeight: 1.85 }}>
                Our approach integrates research-backed behavioral frameworks, modern psychology & emotional intelligence, NLP and leadership science, and real-world corporate insights delivered through experiential, high-engagement methods.
              </p>
            </div>

            <div className="-mt-10 md:mt-10" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: "🔬", title: "Research-Backed", color: colors.red },
                { icon: "🧬", title: "Psychology-Led", color: colors.orange },
                { icon: "🌱", title: "Experiential", color: colors.green },
                { icon: "🎯", title: "Results-Driven", color: colors.maroon },
              ].map(({ icon, title, color }) => (
                <div key={title} className="card-hover" style={{ background: "white", border: `2px solid ${color}20`, borderRadius: 12, padding: 28, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
                  <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color }}>{title}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <NexusSection/>

      {/* VISION & MISSION */}
      <section style={{ background: "#f5f0e8", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="font-body" style={{ color: colors.red, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>Our Purpose</div>
              <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: colors.maroon, letterSpacing: "-1px" }}>Vision & Mission</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {[
              {
                label: "Vision",
                icon: "🔭",
                color: colors.maroon,
                bg: `linear-gradient(135deg, ${colors.maroon}, #b00000)`,
                text: "To build bridges between schools, colleges, and the real world by equipping individuals with the skills required to succeed in industries, workplaces, and entrepreneurial journeys.",
              },
              {
                label: "Mission",
                icon: "🚀",
                color: colors.green,
                bg: `linear-gradient(135deg, ${colors.green}, #004000)`,
                text: "To empower individuals and institutions with practical skills, modern mindsets, and transformative learning experiences that prepare them for real-world success.",
              }
            ].map(({ label, icon, bg, text }) => (
              <AnimatedSection key={label}>
                <div className="card-hover" style={{ background: bg, borderRadius: 16, padding: "44px 36px", color: "white", minHeight: 280 }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                  <div className="font-display" style={{ fontSize: 28, fontWeight: 900, marginBottom: 16, color: colors.yellow }}>{label}</div>
                  <p className="font-body" style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: colors.white,
        position: "relative",
        overflow: "hidden",
      }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: colors.textDark,
            }}>
              Our <span style={{ color: colors.red }}>Methodology</span>
            </h2>
            <p style={{ color: colors.textLight, maxWidth: "480px", margin: "12px auto 0", lineHeight: 1.7, fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
              A continuous learning path that grows with every individual.
            </p>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
        }}>
          {/* Center line (hidden on mobile via opacity trick) */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0, bottom: 0,
            width: "2px",
            background: `linear-gradient(to bottom, ${colors.red}30, ${colors.orange}30, ${colors.yellow}30, ${colors.green}30, ${colors.maroon}30)`,
            transform: "translateX(-50%)",
          }} />

          {segments.map((seg, i) => {
            const isLeft = i % 2 === 0;
            const [ref, inView] = useInView();
            return (
              <div
                key={seg.id}
                ref={ref}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "clamp(24px, 4vw, 40px)",
                  position: "relative",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : `translateX(${isLeft ? "-40px" : "40px"})`,
                  transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                }}
              >
                {/* Center dot */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "20px",
                  transform: "translateX(-50%)",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: seg.color,
                  border: `3px solid ${colors.white}`,
                  boxShadow: `0 0 0 2px ${seg.color}`,
                  zIndex: 1,
                }} />

                <div style={{
                  width: "calc(50% - 30px)",
                  background: colors.offWhite,
                  border: `1px solid ${seg.color}25`,
                  borderLeft: isLeft ? `3px solid ${seg.color}` : "1px solid #e8e8e8",
                  borderRight: !isLeft ? `3px solid ${seg.color}` : "1px solid #e8e8e8",
                  borderRadius: "2px",
                  padding: "clamp(16px, 3vw, 24px)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.3rem" }}>{seg.icon}</span>
                    <h3 style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "clamp(1rem, 2vw, 1.25rem)",
                      color: seg.color,
                      letterSpacing: "2px",
                    }}>
                      {seg.label}
                    </h3>
                  </div>
                  <p style={{
                    color: colors.textMid,
                    fontSize: "clamp(0.78rem, 1.4vw, 0.875rem)",
                    lineHeight: 1.7,
                  }}>
                    {seg.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "60px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="font-body" style={{ color: colors.red, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
            <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 900, color: colors.maroon, letterSpacing: "-1px", marginBottom: 16 }}>Core Service Areas</h2>
            <div className="section-rule" style={{ width: 80, margin: "0 auto 20px" }} />
            <p className="font-body" style={{ fontSize: 16, color: colors.darkGreen, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>Customized corporate learning solutions focused on real-world application and measurable outcomes.</p>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {SERVICES.map(({ icon, title, desc }, i) => {
            const accent = [colors.red, colors.orange, colors.green, colors.maroon, colors.red, colors.orange, colors.green, colors.maroon][i];
            return (
              <AnimatedSection key={title}>
                <div className="card-hover" style={{ background: "white", borderRadius: 12, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", borderTop: `4px solid ${accent}`, height: "100%" }}>
                  <div style={{ fontSize: 38, marginBottom: 16 }}>{icon}</div>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: accent, marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
                  <p className="font-body" style={{ fontSize: 14, color: colors.darkGreen, lineHeight: 1.75 }}>{desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ background: colors.maroon, padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="font-body" style={{ color: colors.yellow, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>Our Offerings</div>
              <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 900, color: "white", letterSpacing: "-1px", marginBottom: 16 }}>Flagship Programs</h2>
              <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto" }}>All programs are tailored based on industry, business objectives, team size, and skill level.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {PROGRAMS.map((prog, i) => (
              <AnimatedSection key={prog}>
                <div className="program-pill font-body" style={{
                  background: "rgba(255,255,255,0.08)",
                  border: `1px solid ${[colors.yellow, colors.orange, "rgba(255,255,255,0.3)"][i % 3]}`,
                  borderRadius: 40,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "white",
                  letterSpacing: "0.3px"
                }}>{prog}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER */}
      <section id="trainers" style={{ padding: "60px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div className="font-body" style={{ color: colors.red, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Meet Our Expert</div>
              <h2 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 900, color: colors.maroon, lineHeight: 1.1, marginBottom: 8, letterSpacing: "-1px" }}>Sri Aalekhya Puja</h2>
              <div className="font-body" style={{ color: colors.orange, fontSize: 15, fontWeight: 600, marginBottom: 24 }}>Charisma Empowerment Trainer · Certified NLP Trainer · Corporate Coach</div>
              <div className="section-rule" style={{ width: 80, marginBottom: 28 }} />
              <p className="font-body" style={{ fontSize: 16, color: colors.darkGreen, lineHeight: 1.85, marginBottom: 28 }}>
                An IT professional turned transformation expert, Sri Aalekhya Puja has trained 1,000+ professionals across industries. She specializes in executive presence, stress management, applied NLP, communication mastery, and leadership coaching.
              </p>
              <p className="font-body" style={{ fontSize: 15, color: colors.darkGreen, lineHeight: 1.75, marginBottom: 32 }}>
                Her work blends structure, empathy, and measurable mindset shifts-recognized by Central & State Government bodies, IITs, IIM Bangalore, and UC Berkeley programs.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {["NLP Certified", "IIM Bangalore", "UC Berkeley", "IIT Recognized"].map(tag => (
                  <span key={tag} className="font-body" style={{ background: `${colors.yellow}25`, color: colors.maroon, padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 700, border: `1px solid ${colors.yellow}` }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <img src="/sri-image2.jpeg" alt="Nexus framer" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* SOULHEAR */}
      <section style={{ position: "relative", padding: "60px 24px", overflow: "hidden" }}>
        <div className="soulhear-bg" style={{ position: "absolute", inset: 0 }} />
      
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <AnimatedSection>
            <div className="font-body" style={{ color: colors.yellow, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Premium Service</div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "white", letterSpacing: "-2px", marginBottom: 8 }}>SoulHear™</h2>
            <div className="font-body" style={{ fontSize: 18, color: colors.yellow, fontWeight: 600, marginBottom: 24, letterSpacing: "1px" }}>Listen Deep. Lead Authentically. Decide Powerfully.</div>
            <p className="font-body" style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
              Nexusframer's premium, high-touch emotional intelligence and inner leadership service—designed for leaders, founders, CXOs, and high-performing professionals. This is not a training program. It is a guided transformational experience.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 48 }}>
              {Soulhear.map((item, i) => (
                <div key={item} style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: 12, padding: "20px 16px", border: "1px solid rgba(255,216,1,0.2)" }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{item.icon}</div>
                  <div className="font-body" style={{ fontSize: 16, fontWeight: 600, color: "white" }}>{item.title}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary font-body" style={{ background: colors.yellow, color: colors.maroon, padding: "16px 40px", borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none", letterSpacing: "0.5px" }}>
                Book a Session →
              </a>
              <a href="tel:9133193535" className="btn-secondary font-body" style={{ background: "transparent", color: "white", padding: "16px 40px", borderRadius: 4, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}>
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books" style={{ padding: "60px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="font-body" style={{ color: colors.red, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>Thought Leadership</div>
            <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 900, color: colors.maroon, letterSpacing: "-1px" }}>Our Books</h2>
            <div className="section-rule" style={{ width: 80, margin: "20px auto 0" }} />
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {[
            {
              title: "Lifestyle Liberation",
              subtitle: "Break Patterns. Reclaim Clarity. Design a Liberated Life.",
              desc: "A powerful guide for professionals who feel successful on the outside but disconnected within. Offers tools to break limiting beliefs, emotional conditioning, and unconscious patterns.",
              tags: ["Limiting Beliefs", "Emotional Awareness", "Conscious Choice"],
              color: colors.red,
              bg: `linear-gradient(135deg, ${colors.red}15, ${colors.orange}10)`,
            },
            {
              title: "The Charismatic Synergy",
              subtitle: "Where Presence, Emotion & Influence Converge",
              desc: "Explores how emotional intelligence, authenticity, and conscious communication come together to create powerful professional presence and influence without manipulation.",
              tags: ["Charismatic Communication", "EQ Leadership", "Relationship Mastery"],
              color: colors.white,
              bg: `linear-gradient(135deg, ${colors.green}15, #004000 10%)`,
            }
          ].map(({ title, subtitle, desc, tags, color, bg }) => (
            <AnimatedSection key={title}>
              <div className="card-hover" style={{ background: bg, border: `2px solid ${color}20`, borderRadius: 16, padding: "44px 36px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>📘</div>
                <h3 className="font-display" style={{ fontSize: 26, fontWeight: 900, color, marginBottom: 8, letterSpacing: "-0.5px" }}>{title}</h3>
                <div className="font-body" style={{ fontSize: 14, fontWeight: 600, color: colors.orange, marginBottom: 20, fontStyle: "italic" }}>{subtitle}</div>
                <p className="font-body" style={{ fontSize: 15, color: color, lineHeight: 1.8, marginBottom: 24 }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {tags.map(t => (
                    <span key={t} className="font-body" style={{ background: `${color}15`, color, padding: "5px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, border: `1px solid ${color}30` }}>{t}</span>
                  ))}
                </div>
                <a href="#contact" className="btn-primary font-body" style={{ display: "inline-block", background: "green", color: "white", padding: "12px 28px", borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Buy Now →</a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" style={{ background: "#faf0e6", padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div className="font-body" style={{ color: colors.red, fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>Let's Connect</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, color: colors.maroon, letterSpacing: "-1.5px", marginBottom: 16 }}>
              Build Confident People &<br />High-Performing Organizations
            </h2>
            <div className="section-rule" style={{ width: 80, margin: "0 auto 28px" }} />
            <p className="font-body" style={{ fontSize: 16, color: colors.darkGreen, lineHeight: 1.85, marginBottom: 48 }}>
              Ready to unlock the potential of your people? Reach out to start a conversation about your organization's unique learning needs.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="mailto:contact@nexusframer.com" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: colors.red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📧</div>
                <div style={{ textAlign: "left" }}>
                  <div className="font-body" style={{ fontSize: 12, color: "#999", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Email</div>
                  <div className="font-body" style={{ fontSize: 15, color: colors.maroon, fontWeight: 700 }}>contact@nexusframer.com</div>
                </div>
              </a>
              <a href="tel:9133193535" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: colors.green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
                <div style={{ textAlign: "left" }}>
                  <div className="font-body" style={{ fontSize: 12, color: "#999", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Phone</div>
                  <div className="font-body" style={{ fontSize: 15, color: colors.maroon, fontWeight: 700 }}>+91 9133193535</div>
                </div>
              </a>
            </div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:contact@nexusframer.com" className="btn-primary font-body" style={{ background: colors.red, color: "white", padding: "16px 40px", borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none", letterSpacing: "0.5px" }}>
                Send a Message
              </a>
              <a href="tel:9133193535" className="btn-secondary font-body" style={{ background: colors.orange, color: "white", padding: "16px 40px", borderRadius: 4, fontWeight: 700, fontSize: 15, textDecoration: "none", letterSpacing: "0.5px" }}>
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #hamburger { display: block !important; }
        }
      `}</style>
    </div>
  );
}