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

const segments = [
  {
    id: "schools",
    label: "Schools",
    icon: "🏫",
    tagline: "Building Future Foundations",
    description:
      "Building confident, emotionally intelligent students with strong foundational life skills. Our school programs are designed to nurture curiosity, communication, and character from the ground up.",
    color: COLORS.red,
    accent: "#FF4D4F",
    stat: "500+",
    statLabel: "Schools Reached",
    tags: ["Life Skills", "EQ Development", "Confidence Building", "Communication"],
  },
  {
    id: "colleges",
    label: "Colleges",
    icon: "🎓",
    tagline: "Ready for the Real World",
    description:
      "Enhancing employability, corporate readiness, and entrepreneurial thinking. We bridge the gap between academic knowledge and real-world application through immersive programs.",
    color: COLORS.orange,
    accent: "#FF8C40",
    stat: "300+",
    statLabel: "Colleges Partnered",
    tags: ["Employability", "Corporate Readiness", "Entrepreneurship", "Leadership"],
  },
  {
    id: "professionals",
    label: "Working Professionals",
    icon: "💼",
    tagline: "Level Up Your Career",
    description:
      "Strengthening adaptability, leadership, and performance capabilities. Our professional programs are built around real challenges, real industries, and real transformation.",
    color: COLORS.green,
    accent: "#2E8B57",
    stat: "10K+",
    statLabel: "Professionals Trained",
    tags: ["Adaptability", "Leadership", "Performance", "Career Growth"],
  },
  {
    id: "entrepreneurs",
    label: "Entrepreneurs",
    icon: "🚀",
    tagline: "Build. Scale. Lead.",
    description:
      "Developing strategic thinking, resilience, and growth-focused skillsets. We help founders and builders unlock mental clarity, business acumen, and the grit to scale.",
    color: COLORS.maroon,
    accent: "#B22222",
    stat: "1200+",
    statLabel: "Entrepreneurs Empowered",
    tags: ["Strategic Thinking", "Resilience", "Growth Mindset", "Scaling"],
  },
  {
    id: "corporates",
    label: "Corporates & Institutions",
    icon: "🏢",
    tagline: "Organisational Excellence",
    description:
      "Designing stage-specific skill ecosystems aligned with organisational growth goals. We partner with HR teams, L&D heads, and leadership to build cultures of continuous growth.",
    color: COLORS.yellow,
    accent: "#D4A800",
    stat: "200+",
    statLabel: "Corporate Partners",
    tags: ["L&D Strategy", "Skill Ecosystems", "Culture Building", "Team Performance"],
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

const SegmentCard = ({ seg, index }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
        background: hovered ? seg.color + "06" : COLORS.white,
        border: `1px solid ${hovered ? seg.color + "60" : "#e8e8e8"}`,
        borderTop: `3px solid ${seg.color}`,
        borderRadius: "3px",
        padding: "clamp(24px, 4vw, 36px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered
          ? `0 12px 40px ${seg.color}14`
          : "0 2px 12px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* BG number watermark */}
      <div style={{
        position: "absolute", bottom: "-10px", right: "12px",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        fontSize: "6rem",
        color: seg.color + "08",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "2px",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover glow blob */}
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "150px", height: "150px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${seg.color}12, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      {/* Icon + label row */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
        <div style={{
          width: "52px", height: "52px",
          borderRadius: "12px",
          background: seg.color + "12",
          border: `1.5px solid ${seg.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.6rem",
          flexShrink: 0,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}>
          {seg.icon}
        </div>
        <div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.65rem",
            color: seg.color,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}>
            {seg.tagline}
          </div>
          <h3 style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: COLORS.textDark,
            letterSpacing: "2px",
            lineHeight: 1,
          }}>
            {seg.label}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: hovered ? "100%" : "40px",
        height: "2px",
        background: `linear-gradient(90deg, ${seg.color}, ${seg.color}30)`,
        marginBottom: "16px",
        transition: "width 0.5s ease",
        borderRadius: "1px",
      }} />

      {/* Description */}
      <p style={{
        color: COLORS.textMid,
        fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
        lineHeight: 1.8,
        marginBottom: "20px",
        position: "relative",
        flexGrow: 1,
      }}>
        {seg.description}
      </p>

      {/* Stat */}
      <div style={{
        display: "flex", alignItems: "center", gap: "12px",
        marginBottom: "18px",
        padding: "12px 16px",
        background: seg.color + "08",
        border: `1px solid ${seg.color}20`,
        borderRadius: "2px",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "1.8rem",
          color: seg.color,
          letterSpacing: "2px",
          lineHeight: 1,
        }}>
          {seg.stat}
        </div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.7rem",
          color: COLORS.textLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}>
          {seg.statLabel}
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {seg.tags.map((tag) => (
          <span key={tag} style={{
            padding: "4px 10px",
            background: seg.color + "10",
            border: `1px solid ${seg.color}25`,
            borderRadius: "1px",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.65rem",
            color: seg.color === COLORS.yellow ? "#7a6000" : seg.color,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const HeroNumber = ({ value, label, color }) => {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  const isK = value.includes("K");
  const target = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        fontSize: "clamp(2rem, 5vw, 3rem)",
        color: color,
        lineHeight: 1,
        letterSpacing: "2px",
      }}>
        {count}{isK ? "K+" : "+"}
      </div>
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "0.65rem",
        color: COLORS.textLight,
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginTop: "4px",
      }}>
        {label}
      </div>
    </div>
  );
};

export default function Whoweserve() {
  const [activeTab, setActiveTab] = useState(null);

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
        {/* Top rainbow bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(90deg, ${COLORS.red} 0%, ${COLORS.orange} 25%, ${COLORS.yellow} 50%, ${COLORS.green} 75%, ${COLORS.maroon} 100%)`,
        }} />

        {/* BG ghost text */}
        <div style={{
          position: "absolute", right: "-40px", top: "50%",
          transform: "translateY(-50%) rotate(-6deg)",
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "clamp(5rem, 16vw, 14rem)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.red}10`,
          userSelect: "none", pointerEvents: "none",
          lineHeight: 1, letterSpacing: "4px",
          whiteSpace: "nowrap",
        }}>
          SERVE
        </div>

        {/* Decorative circles */}
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "240px", height: "240px", borderRadius: "50%",
          border: `1px solid ${COLORS.orange}15`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-30px", left: "-30px",
          width: "140px", height: "140px", borderRadius: "50%",
          border: `1px solid ${COLORS.red}15`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "860px", position: "relative" }}>
          <FadeUp>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              marginBottom: "20px",
            }}>
              <div style={{ width: "32px", height: "2px", background: COLORS.red }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "clamp(0.65rem, 1.4vw, 0.78rem)",
                color: COLORS.red,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}>
                Our Reach
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.92,
              letterSpacing: "3px",
              marginBottom: "0",
            }}>
              <span style={{ display: "block", color: COLORS.textDark }}>WHO WE</span>
              <span style={{
                display: "block",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>SERVE</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              marginTop: "28px",
              fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
              lineHeight: 1.85,
              color: COLORS.textMid,
              maxWidth: "600px",
            }}>
              From classrooms to boardrooms, Nexus Framer equips every kind of learner and leader with the skills they need to thrive in a fast-changing world.
            </p>
          </FadeUp>

          {/* Hero stats row */}
          <FadeUp delay={0.35}>
            <div style={{
              marginTop: "48px",
              display: "flex",
              gap: "clamp(20px, 5vw, 48px)",
              flexWrap: "wrap",
              alignItems: "center",
            }}>
              {[
                { value: "5+", label: "Segments Served", color: COLORS.red },
                { value: "10K+", label: "Lives Impacted", color: COLORS.orange },
                { value: "200+", label: "Institutions", color: COLORS.green },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: i !== 0 ? "clamp(20px, 5vw, 48px)" : "0" }}>
                  {i !== 0 && (
                    <div style={{ width: "1px", height: "40px", background: "#ddd", marginRight: "clamp(20px, 5vw, 48px)" }} />
                  )}
                  <div>
                    <div style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                      color: s.color,
                      lineHeight: 1,
                      letterSpacing: "2px",
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.65rem",
                      color: COLORS.textLight,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      marginTop: "3px",
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

      {/* ── SEGMENT TABS (desktop quick-nav) ── */}
      <section style={{
        background: COLORS.offWhite,
        borderTop: "1px solid #ebebeb",
        borderBottom: "1px solid #ebebeb",
        padding: "0 clamp(20px, 8vw, 120px)",
        overflowX: "auto",
      }}>
        <div style={{
          display: "flex",
          gap: "0",
          minWidth: "max-content",
        }}>
          {segments.map((seg) => (
            <button
              key={seg.id}
              onClick={() => {
                document.getElementById(seg.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                setActiveTab(seg.id);
              }}
              style={{
                padding: "18px 24px",
                background: "transparent",
                border: "none",
                borderBottom: `3px solid ${activeTab === seg.id ? seg.color : "transparent"}`,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                letterSpacing: "2px",
                color: activeTab === seg.id ? seg.color : COLORS.textLight,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                if (activeTab !== seg.id) {
                  e.currentTarget.style.color = seg.color;
                  e.currentTarget.style.borderBottomColor = seg.color + "50";
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== seg.id) {
                  e.currentTarget.style.color = COLORS.textLight;
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
              <span style={{ fontSize: "1rem" }}>{seg.icon}</span>
              {seg.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── SEGMENTS GRID ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(16px, 3vw, 28px)",
          maxWidth: "1280px",
          margin: "0 auto",
        }}>
          {segments.map((seg, i) => (
            <div key={seg.id} id={seg.id}>
              <SegmentCard seg={seg} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH FEATURE ROW ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Accent line top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.orange}, ${COLORS.red}, transparent)`,
        }} />

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem",
              color: COLORS.orange,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              Why It Matters
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              ONE PLATFORM, <span style={{ color: COLORS.orange }}>EVERY STAGE</span>
            </h2>
            <p style={{
              color: COLORS.textLight,
              maxWidth: "540px",
              margin: "14px auto 0",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: 1.75,
            }}>
              Whether you're 14 or 40, a first-year student or a seasoned executive — there's a Nexus Framer program built for exactly where you are.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "clamp(16px, 3vw, 24px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            { icon: "🎯", title: "Stage-Specific", desc: "Programs precisely calibrated to each audience's unique context and challenges.", color: COLORS.red },
            { icon: "⚡", title: "Experiential", desc: "Learning by doing — every session is hands-on, high-energy, and impactful.", color: COLORS.orange },
            { icon: "📊", title: "Measurable", desc: "Pre and post assessments that prove the transformation, not just promise it.", color: COLORS.green },
            { icon: "🔗", title: "Interconnected", desc: "From student to entrepreneur, our methodology scales with your journey.", color: COLORS.maroon },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div style={{
                background: COLORS.white,
                border: "1px solid #e8e8e8",
                borderRadius: "2px",
                padding: "clamp(20px, 3vw, 28px)",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: "56px", height: "56px",
                  borderRadius: "50%",
                  background: item.color + "12",
                  border: `1.5px solid ${item.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem",
                  margin: "0 auto 16px",
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.15rem",
                  color: item.color,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: COLORS.textLight,
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
        position: "relative",
        overflow: "hidden",
      }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              THE NEXUS <span style={{ color: COLORS.red }}>JOURNEY</span>
            </h2>
            <p style={{ color: COLORS.textLight, maxWidth: "480px", margin: "12px auto 0", lineHeight: 1.7, fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}>
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
            background: `linear-gradient(to bottom, ${COLORS.red}30, ${COLORS.orange}30, ${COLORS.yellow}30, ${COLORS.green}30, ${COLORS.maroon}30)`,
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
                  border: `3px solid ${COLORS.white}`,
                  boxShadow: `0 0 0 2px ${seg.color}`,
                  zIndex: 1,
                }} />

                <div style={{
                  width: "calc(50% - 30px)",
                  background: COLORS.offWhite,
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
                    color: COLORS.textMid,
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

        {/* Decorative circles */}
        <div style={{
          position: "absolute", left: "-80px", top: "-80px",
          width: "280px", height: "280px", borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: "-60px", bottom: "-60px",
          width: "200px", height: "200px", borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }} />

        <FadeUp>
          <div style={{ position: "relative" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Start Your Journey
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "3px",
              color: COLORS.white,
              marginBottom: "16px",
              lineHeight: 1,
            }}>
              WHICH STAGE ARE YOU AT?
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.75,
            }}>
              Let us build the right program for your institution, team, or personal growth journey.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#contact" style={{
                display: "inline-block",
                padding: "15px 44px",
                background: COLORS.white,
                color: COLORS.red,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "1.15rem",
                letterSpacing: "3px",
                textDecoration: "none",
                borderRadius: "1px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
              >
                Get In Touch
              </a>
              <a href="#pillars" style={{
                display: "inline-block",
                padding: "15px 44px",
                background: "transparent",
                color: COLORS.white,
                border: "1.5px solid rgba(255,255,255,0.5)",
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "1.15rem",
                letterSpacing: "3px",
                textDecoration: "none",
                borderRadius: "1px",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.12)"; e.target.style.borderColor = "rgba(255,255,255,0.8)"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.5)"; }}
              >
                Explore Programs
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        button { outline: none; }

        /* Hide timeline center line on mobile */
        @media (max-width: 640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  );
}