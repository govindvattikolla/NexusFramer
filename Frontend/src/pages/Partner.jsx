import { useState, useEffect, useRef } from "react";

const COLORS = {
  red: "#DE080A",
  yellow: "#FFD801",
  green: "#006400",
  orange: "#FF6700",
  maroon: "#870000",
  white: "#FFFFFF",
  offWhite: "#F6F6F6",
  textDark: "#1A1A1A",
  textMid: "#444444",
  textLight: "#666666",
};

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const FadeUp = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(36px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const FadeLeft = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(-48px)",
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const FadeRight = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : "translateX(48px)",
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const partners = [
  {
    id: "schools",
    label: "Schools",
    icon: "🏫",
    tagline: "Building Foundations Early",
    color: COLORS.red,
    stat: "500+",
    statLabel: "Schools Reached",
    description:
      "Partner with us to embed structured life skills, emotional intelligence, and communication programs directly into your school's academic fabric — building confident, future-ready students from day one.",
    benefits: [
      "Curriculum-aligned skill modules",
      "Teacher training & enablement",
      "Student confidence assessments",
      "Annual impact reporting",
    ],
    tags: ["Life Skills", "EQ Programs", "Confidence Building", "Leadership"],
  },
  {
    id: "colleges",
    label: "Colleges",
    icon: "🎓",
    tagline: "Bridging Campus to Career",
    color: COLORS.orange,
    stat: "300+",
    statLabel: "Colleges Partnered",
    description:
      "Equip your graduates with the communication edge, corporate readiness, and entrepreneurial thinking that academic syllabi alone cannot provide — and watch placement outcomes transform.",
    benefits: [
      "Pre-placement training programs",
      "Personality development workshops",
      "Industry-readiness bootcamps",
      "Dedicated placement support",
    ],
    tags: ["Employability", "Interview Prep", "GD Training", "Corporate Readiness"],
  },
  {
    id: "universities",
    label: "Universities",
    icon: "🏛️",
    tagline: "Scaling Excellence System-Wide",
    color: COLORS.green,
    stat: "50+",
    statLabel: "University Tie-Ups",
    description:
      "Design institution-wide skill development ecosystems that span departments, years, and disciplines — creating a culture of growth that defines your university's graduate identity.",
    benefits: [
      "Cross-department skill architecture",
      "Research-backed program design",
      "Multi-year partnership frameworks",
      "Certification & credentialing support",
    ],
    tags: ["System Design", "Research Programs", "Multi-Year Impact", "Scale"],
  },
  {
    id: "corporates",
    label: "Corporates",
    icon: "🏢",
    tagline: "Workforce That Performs",
    color: COLORS.maroon,
    stat: "200+",
    statLabel: "Corporate Partners",
    description:
      "Build high-performance cultures through strategic L&D partnerships. We design bespoke training ecosystems aligned to your organisational goals, team structure, and growth ambitions.",
    benefits: [
      "Custom L&D strategy design",
      "Leadership pipeline programs",
      "Team performance interventions",
      "ROI measurement frameworks",
    ],
    tags: ["L&D Strategy", "Leadership", "Performance", "Culture Building"],
  },
  {
    id: "training",
    label: "Training Institutions",
    icon: "📚",
    tagline: "Amplify Your Reach",
    color: COLORS.red,
    stat: "40+",
    statLabel: "Training Partners",
    description:
      "Co-create and co-deliver programs that multiply your institution's impact. We bring proprietary content, expert facilitators, and a proven methodology to scale your training offerings.",
    benefits: [
      "Co-branded program delivery",
      "Facilitator training & licensing",
      "Content co-creation frameworks",
      "Joint certification programs",
    ],
    tags: ["Co-Delivery", "Content Licensing", "Facilitator Training", "Scale"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "We begin with a deep conversation to understand your institution's goals, culture, gaps, and growth vision.", color: COLORS.red, icon: "📞" },
  { step: "02", title: "Needs Assessment", desc: "Our team conducts a structured assessment of your learner profile, existing programs, and desired outcomes.", color: COLORS.orange, icon: "🔍" },
  { step: "03", title: "Program Blueprint", desc: "We design a bespoke skill development ecosystem — fully customised to your context and objectives.", color: COLORS.green, icon: "🎨" },
  { step: "04", title: "Partnership Agreement", desc: "A transparent, flexible partnership framework is established — built for scalability and long-term impact.", color: COLORS.maroon, icon: "🤝" },
  { step: "05", title: "Launch & Deliver", desc: "Expert facilitators deliver high-energy, transformational sessions — online, offline, or blended.", color: COLORS.red, icon: "🚀" },
  { step: "06", title: "Measure & Scale", desc: "We track impact, gather feedback, and continuously refine — scaling what works across your entire institution.", color: COLORS.orange, icon: "📊" },
];

const whyPartner = [
  { icon: "🎯", title: "Customised by Design", desc: "No off-the-shelf solutions. Every program is architected around your specific institution, audience, and outcomes.", color: COLORS.red },
  { icon: "📈", title: "Scalable & Sustainable", desc: "Built to grow with you — from a pilot cohort to institution-wide deployment without losing quality.", color: COLORS.orange },
  { icon: "🔬", title: "Outcome-Driven", desc: "We measure what matters. Pre-post assessments, performance data, and ROI frameworks keep every engagement accountable.", color: COLORS.green },
  { icon: "🤝", title: "True Partnership", desc: "We are not vendors — we are invested partners who co-own the outcomes and success of every program we design.", color: COLORS.maroon },
];

const PartnerCard = ({ partner, index }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
        background: hovered ? partner.color + "06" : COLORS.white,
        border: `1px solid ${hovered ? partner.color + "60" : "#e8e8e8"}`,
        borderTop: `3px solid ${partner.color}`,
        borderRadius: "3px",
        padding: "clamp(24px, 4vw, 36px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered ? `0 12px 40px ${partner.color}14` : "0 2px 12px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* BG watermark */}
      <div style={{
        position: "absolute", bottom: "-10px", right: "12px",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        fontSize: "6rem", color: partner.color + "08",
        lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "2px",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover glow */}
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "160px", height: "160px", borderRadius: "50%",
        background: `radial-gradient(circle, ${partner.color}12, transparent 70%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease", pointerEvents: "none",
      }} />

      {/* Icon + heading */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "12px",
          background: partner.color + "12",
          border: `1.5px solid ${partner.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.6rem", flexShrink: 0,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}>
          {partner.icon}
        </div>
        <div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.65rem", color: partner.color,
            letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2px",
          }}>
            {partner.tagline}
          </div>
          <h3 style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: COLORS.textDark, letterSpacing: "2px", lineHeight: 1,
          }}>
            {partner.label}
          </h3>
        </div>
      </div>

      {/* Animated divider */}
      <div style={{
        width: hovered ? "100%" : "40px", height: "2px",
        background: `linear-gradient(90deg, ${partner.color}, ${partner.color}30)`,
        marginBottom: "16px", transition: "width 0.5s ease", borderRadius: "1px",
      }} />

      {/* Description */}
      <p style={{
        color: COLORS.textMid,
        fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
        lineHeight: 1.8, marginBottom: "20px", flexGrow: 1,
      }}>
        {partner.description}
      </p>

      {/* Stat */}
      <div style={{
        display: "flex", alignItems: "center", gap: "12px",
        marginBottom: "18px",
        padding: "12px 16px",
        background: partner.color + "08",
        border: `1px solid ${partner.color}20`,
        borderRadius: "2px",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "1.8rem", color: partner.color,
          letterSpacing: "2px", lineHeight: 1,
        }}>
          {partner.stat}
        </div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.7rem", color: COLORS.textLight,
          textTransform: "uppercase", letterSpacing: "2px",
        }}>
          {partner.statLabel}
        </div>
      </div>

      {/* Benefits list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
        {partner.benefits.map((benefit, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "8px 12px",
            background: partner.color + "06",
            border: `1px solid ${partner.color}15`,
            borderRadius: "2px",
          }}>
            <div style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: partner.color, flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.textMid, letterSpacing: "0.5px",
            }}>
              {benefit}
            </span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {partner.tags.map((tag) => (
          <span key={tag} style={{
            padding: "4px 10px",
            background: partner.color + "10",
            border: `1px solid ${partner.color}25`,
            borderRadius: "1px",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.6rem", color: partner.color,
            letterSpacing: "1px", textTransform: "uppercase",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Partner() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);

  return (
    <div style={{
      background: COLORS.white,
      color: COLORS.textDark,
      fontFamily: "'Georgia', serif",
      overflowX: "hidden",
    }}>

      {/* ── HERO ── */}
      <section style={{
        background: COLORS.white,
        padding: "clamp(80px, 12vw, 130px) clamp(20px, 8vw, 120px) clamp(60px, 8vw, 100px)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Rainbow top bar */}
        {/* <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(90deg, ${COLORS.red} 0%, ${COLORS.orange} 33%, ${COLORS.yellow} 55%, ${COLORS.green} 77%, ${COLORS.maroon} 100%)`,
        }} /> */}

        {/* Ghost text */}
        <div style={{
          position: "absolute", right: "-20px", top: "50%",
          transform: "translateY(-50%) rotate(-6deg)",
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "clamp(3.5rem, 12vw, 11rem)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.red}10`,
          userSelect: "none", pointerEvents: "none",
          lineHeight: 1, letterSpacing: "4px", whiteSpace: "nowrap",
        }}>
          PARTNER
        </div>

        {/* Decorative circles */}
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "240px", height: "240px", borderRadius: "50%",
          border: `1px solid ${COLORS.orange}15`, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-30px", left: "-30px",
          width: "140px", height: "140px", borderRadius: "50%",
          border: `1px solid ${COLORS.red}15`, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "860px", position: "relative" }}>
          <FadeUp>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "2px", background: COLORS.red }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "clamp(0.65rem, 1.4vw, 0.78rem)",
                color: COLORS.red, letterSpacing: "4px", textTransform: "uppercase",
              }}>
                Grow Together
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.92, letterSpacing: "3px",
            }}>
              <span style={{ display: "block", color: COLORS.textDark }}>PARTNER</span>
              <span style={{
                display: "block",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>WITH US</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              marginTop: "28px",
              fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
              lineHeight: 1.85, color: COLORS.textMid, maxWidth: "620px",
            }}>
              Nexus Framer collaborates with institutions to design structured skill development ecosystems — customised, scalable, and built for sustainable impact across every level of your organisation.
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div style={{
              marginTop: "48px",
              display: "flex",
              gap: "clamp(20px, 5vw, 48px)",
              flexWrap: "wrap",
              alignItems: "center",
            }}>
              {[
                { value: "5+", label: "Partnership Types", color: COLORS.red },
                { value: "200+", label: "Active Partners", color: COLORS.orange },
                { value: "10K+", label: "Lives Impacted", color: COLORS.green },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                  {i !== 0 && (
                    <div style={{ width: "1px", height: "40px", background: "#ddd", marginRight: "clamp(20px, 5vw, 48px)" }} />
                  )}
                  <div>
                    <div style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                      color: s.color, lineHeight: 1, letterSpacing: "2px",
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.65rem", color: COLORS.textLight,
                      textTransform: "uppercase", letterSpacing: "2px", marginTop: "3px",
                    }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TAB NAV ── */}
      <section style={{
        background: COLORS.offWhite,
        borderTop: "1px solid #ebebeb",
        borderBottom: "1px solid #ebebeb",
        padding: "0 clamp(20px, 8vw, 120px)",
        overflowX: "auto",
      }}>
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {partners.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                document.getElementById(`section-${p.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                setActiveTab(p.id);
              }}
              style={{
                padding: "18px 22px",
                background: "transparent",
                border: "none",
                borderBottom: `3px solid ${activeTab === p.id ? p.color : "transparent"}`,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
                letterSpacing: "2px",
                color: activeTab === p.id ? p.color : COLORS.textLight,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: "7px",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                if (activeTab !== p.id) {
                  e.currentTarget.style.color = p.color;
                  e.currentTarget.style.borderBottomColor = p.color + "50";
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== p.id) {
                  e.currentTarget.style.color = COLORS.textLight;
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
              <span style={{ fontSize: "0.9rem" }}>{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── PARTNERSHIP OPPORTUNITIES GRID ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
      }}>
        <FadeUp>
          <div style={{ marginBottom: "clamp(36px, 5vw, 56px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.red,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              Partnership Opportunities
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              WHO WE <span style={{ color: COLORS.red }}>PARTNER WITH</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(16px, 3vw, 28px)",
          maxWidth: "1280px",
        }}>
          {partners.map((partner, i) => (
            <div key={partner.id} id={`section-${partner.id}`}>
              <PartnerCard partner={partner} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CUSTOMISED PROGRAMS HIGHLIGHT ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.orange}, ${COLORS.red}, transparent)`,
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(40px, 7vw, 80px)",
          alignItems: "center",
          maxWidth: "1200px",
        }}>
          {/* Left: Text */}
          <FadeLeft>
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.72rem", color: COLORS.orange,
                letterSpacing: "4px", textTransform: "uppercase", marginBottom: "12px",
              }}>
                Our Approach
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "3px", color: COLORS.textDark,
                lineHeight: 1, marginBottom: "8px",
              }}>
                CUSTOMISED FOR <span style={{ color: COLORS.orange }}>SCALE</span>
              </h2>
              <div style={{
                width: "60px", height: "3px",
                background: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.red})`,
                marginBottom: "28px", borderRadius: "2px",
              }} />

              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                lineHeight: 1.9, marginBottom: "20px",
              }}>
                Every institution is different. Every learner cohort has its own context, culture, and challenges. That's why Nexus Framer never delivers a copy-paste program — every engagement begins with deep discovery and ends with measurable, lasting impact.
              </p>
              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                lineHeight: 1.9, marginBottom: "32px",
              }}>
                Our customised programs ensure that skill development is not a one-time event but a <strong style={{ color: COLORS.orange }}>scalable ecosystem</strong> — one that grows with your institution, reinforces over time, and delivers sustainable transformation at every level.
              </p>

              {/* Quote */}
              <div style={{
                borderLeft: `4px solid ${COLORS.orange}`,
                paddingLeft: "20px", marginBottom: "32px",
              }}>
                <p style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
                  color: COLORS.textDark, lineHeight: 1.7,
                }}>
                  "We don't just run programs — we build the infrastructure of growth inside your institution."
                </p>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.65rem", color: COLORS.orange,
                  letterSpacing: "3px", textTransform: "uppercase", marginTop: "10px",
                }}>
                  — Nexus Framer
                </div>
              </div>

              {/* Keyword pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Customised", "Scalable", "Sustainable", "Measurable", "Collaborative"].map((kw, i) => (
                  <span key={i} style={{
                    padding: "6px 14px",
                    background: [COLORS.red, COLORS.orange, COLORS.green, COLORS.maroon, COLORS.red][i] + "10",
                    border: `1px solid ${[COLORS.red, COLORS.orange, COLORS.green, COLORS.maroon, COLORS.red][i]}25`,
                    borderRadius: "1px",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.65rem",
                    color: [COLORS.red, COLORS.orange, COLORS.green, COLORS.maroon, COLORS.red][i],
                    letterSpacing: "1px", textTransform: "uppercase",
                  }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Right: Visual cards */}
          <FadeRight delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2vw, 18px)" }}>
              {[
                { icon: "🎯", title: "Needs-First Design", desc: "Every program starts with a structured diagnostic — never assumptions.", color: COLORS.red, val: "100%", valLabel: "Custom Built" },
                { icon: "🔄", title: "Iterative Refinement", desc: "Continuous feedback loops ensure every session gets sharper and more impactful.", color: COLORS.orange, val: "3x", valLabel: "Better Outcomes" },
                { icon: "📐", title: "Modular Architecture", desc: "Programs are built in stackable modules — easy to extend, adapt, and scale.", color: COLORS.green, val: "50+", valLabel: "Module Library" },
                { icon: "🌐", title: "Blended Delivery", desc: "Classroom, boardroom, online, or outbound — we meet your audience where they are.", color: COLORS.maroon, val: "5", valLabel: "Delivery Formats" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "clamp(14px, 2.5vw, 20px)",
                  background: COLORS.white,
                  border: `1px solid ${item.color}20`,
                  borderLeft: `3px solid ${item.color}`,
                  borderRadius: "2px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px",
                    background: item.color + "12",
                    border: `1.5px solid ${item.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.3rem", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "1rem", color: item.color,
                      letterSpacing: "2px", lineHeight: 1, marginBottom: "4px",
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: COLORS.textLight,
                      fontSize: "0.8rem", lineHeight: 1.6,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ textAlign: "center", flexShrink: 0 }}>
                    <div style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "1.4rem", color: item.color,
                      letterSpacing: "2px", lineHeight: 1,
                    }}>
                      {item.val}
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.55rem", color: COLORS.textLight,
                      textTransform: "uppercase", letterSpacing: "1px",
                      whiteSpace: "nowrap",
                    }}>
                      {item.valLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeRight>
        </div>
      </section>

      {/* ── WHY PARTNER WITH US ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
      }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.green,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              The Nexus Difference
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              WHY PARTNER <span style={{ color: COLORS.green }}>WITH US?</span>
            </h2>
            <p style={{
              color: COLORS.textLight, maxWidth: "520px",
              margin: "14px auto 0",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)", lineHeight: 1.75,
            }}>
              We are not a training company that executes sessions. We are a transformation partner that designs ecosystems.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "clamp(16px, 3vw, 24px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {whyPartner.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHoveredWhy(i)}
                onMouseLeave={() => setHoveredWhy(null)}
                style={{
                  background: hoveredWhy === i ? item.color : COLORS.offWhite,
                  border: `1px solid ${hoveredWhy === i ? item.color : "#e8e8e8"}`,
                  borderTop: `3px solid ${item.color}`,
                  borderRadius: "2px",
                  padding: "clamp(24px, 3.5vw, 32px)",
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.35s ease",
                  boxShadow: hoveredWhy === i ? `0 12px 36px ${item.color}22` : "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: hoveredWhy === i ? "rgba(255,255,255,0.2)" : item.color + "12",
                  border: `1.5px solid ${hoveredWhy === i ? "rgba(255,255,255,0.4)" : item.color + "30"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.7rem", margin: "0 auto 18px",
                  transition: "all 0.35s ease",
                  transform: hoveredWhy === i ? "scale(1.1)" : "scale(1)",
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.2rem",
                  color: hoveredWhy === i ? COLORS.white : item.color,
                  letterSpacing: "2px", marginBottom: "12px",
                  transition: "color 0.35s ease",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: hoveredWhy === i ? "rgba(255,255,255,0.88)" : COLORS.textLight,
                  fontSize: "0.875rem", lineHeight: 1.75,
                  transition: "color 0.35s ease",
                }}>
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PARTNERSHIP PROCESS TIMELINE ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.maroon}, ${COLORS.red}, transparent)`,
        }} />

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              HOW THE <span style={{ color: COLORS.red }}>PARTNERSHIP WORKS</span>
            </h2>
            <p style={{
              color: COLORS.textLight, maxWidth: "480px",
              margin: "12px auto 0", lineHeight: 1.7,
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            }}>
              A clear, transparent, and collaborative process — from first conversation to full-scale impact.
            </p>
          </div>
        </FadeUp>

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          {/* Center line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: "2px",
            background: `linear-gradient(to bottom, ${COLORS.red}30, ${COLORS.orange}30, ${COLORS.green}30, ${COLORS.maroon}30, ${COLORS.red}30, ${COLORS.orange}30)`,
            transform: "translateX(-50%)",
          }} />

          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const [ref, inView] = useInView();
            return (
              <div
                key={i}
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
                  position: "absolute", left: "50%", top: "22px",
                  transform: "translateX(-50%)",
                  width: "14px", height: "14px", borderRadius: "50%",
                  background: step.color,
                  border: `3px solid ${COLORS.offWhite}`,
                  boxShadow: `0 0 0 2px ${step.color}`,
                  zIndex: 1,
                }} />

                <div style={{
                  width: "calc(50% - 30px)",
                  background: COLORS.white,
                  border: `1px solid ${step.color}25`,
                  borderLeft: isLeft ? `3px solid ${step.color}` : "1px solid #e8e8e8",
                  borderRight: !isLeft ? `3px solid ${step.color}` : "1px solid #e8e8e8",
                  borderRadius: "2px",
                  padding: "clamp(16px, 3vw, 24px)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.2rem" }}>{step.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.62rem", color: step.color,
                        letterSpacing: "3px", textTransform: "uppercase",
                      }}>
                        Step {step.step}
                      </div>
                      <h3 style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: step.color, letterSpacing: "2px", lineHeight: 1,
                      }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p style={{
                    color: COLORS.textMid,
                    fontSize: "clamp(0.78rem, 1.4vw, 0.875rem)",
                    lineHeight: 1.7,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── IMPACT STATS STRIP ── */}
      <section style={{
        padding: "clamp(40px, 6vw, 64px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
        position: "relative",
        overflow: "hidden",
      }}>
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
            gap: "clamp(14px, 2.5vw, 20px)",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            {[
              { val: "500+", label: "Schools", color: COLORS.red, icon: "🏫" },
              { val: "300+", label: "Colleges", color: COLORS.orange, icon: "🎓" },
              { val: "50+", label: "Universities", color: COLORS.green, icon: "🏛️" },
              { val: "200+", label: "Corporates", color: COLORS.maroon, icon: "🏢" },
              { val: "40+", label: "Training Institutions", color: COLORS.red, icon: "📚" },
              { val: "10K+", label: "Lives Impacted", color: COLORS.orange, icon: "✨" },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{
                  background: COLORS.offWhite,
                  border: `1px solid ${s.color}20`,
                  borderTop: `3px solid ${s.color}`,
                  borderRadius: "2px",
                  padding: "clamp(16px, 2.5vw, 22px)",
                  textAlign: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ fontSize: "1.3rem", marginBottom: "8px" }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                    color: s.color, letterSpacing: "2px", lineHeight: 1,
                  }}>
                    {s.val}
                  </div>
                  <div style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.6rem", color: COLORS.textLight,
                    textTransform: "uppercase", letterSpacing: "2px", marginTop: "6px",
                  }}>
                    {s.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 8vw, 120px)",
        background: `linear-gradient(135deg, ${COLORS.maroon}, ${COLORS.red} 50%, ${COLORS.orange})`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 60px)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: "-80px", top: "-80px",
          width: "280px", height: "280px", borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: "-60px", bottom: "-60px",
          width: "200px", height: "200px", borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none",
        }} />

        <FadeUp>
          <div style={{ position: "relative" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: "rgba(255,255,255,0.6)",
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Start the Conversation
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "3px", color: COLORS.white, marginBottom: "16px", lineHeight: 1,
            }}>
              LET'S BUILD SOMETHING TOGETHER
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              maxWidth: "540px", margin: "0 auto 40px", lineHeight: 1.75,
            }}>
              Whether you're a school, university, corporate, or training institution — let's design a partnership that transforms the people inside your walls.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-block", padding: "15px 44px",
                  background: COLORS.white, color: COLORS.red,
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.15rem", letterSpacing: "3px",
                  textDecoration: "none", borderRadius: "1px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
              >
                Become a Partner
              </a>
              <a
                href="#section-schools"
                style={{
                  display: "inline-block", padding: "15px 44px",
                  background: "transparent", color: COLORS.white,
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.15rem", letterSpacing: "3px",
                  textDecoration: "none", borderRadius: "1px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.12)"; e.target.style.borderColor = "rgba(255,255,255,0.8)"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.5)"; }}
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        button { outline: none; }
        @media (max-width: 640px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </div>
  );
}