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

const roles = [
  { title: "Charisma Empowerment Trainer", icon: "⚡", color: COLORS.red, desc: "Unlocking the magnetic personal power that already exists within every individual — helping them own every room they walk into." },
  { title: "NLP Expert", icon: "🧠", color: COLORS.orange, desc: "Applying Neuro-Linguistic Programming to rewire limiting beliefs, unlock peak states, and create lasting behavioural transformation." },
  { title: "Leadership Coach", icon: "👑", color: COLORS.green, desc: "Developing leaders who don't just manage — they inspire, influence, and ignite the best in those around them." },
  { title: "Author", icon: "📖", color: COLORS.maroon, desc: "Translating lived experience and expertise into written wisdom that reaches, resonates, and transforms readers far and wide." },
];

const pillars = [
  { title: "Confidence", icon: "🔥", color: COLORS.red, desc: "Building unshakeable self-belief that shows up in every conversation, every room, every challenge." },
  { title: "Communication Mastery", icon: "🎤", color: COLORS.orange, desc: "From one-on-one dialogue to large-stage presence — precision, clarity, and compelling delivery." },
  { title: "Emotional Intelligence", icon: "💡", color: COLORS.green, desc: "Deep self-awareness and empathy that transform how we relate, lead, and respond under pressure." },
  { title: "Leadership Presence", icon: "✨", color: COLORS.maroon, desc: "The rare quality that commands attention, inspires trust, and moves people to act — with or without a title." },
];

const milestones = [
  { year: "2014", title: "The Spark", desc: "Began her journey in personal development training, recognising a deep gap in how confidence and communication were being taught.", color: COLORS.red, icon: "✨" },
  { year: "2016", title: "NLP Mastery", desc: "Completed advanced NLP practitioner certifications and began integrating transformational psychology into corporate and educational programs.", color: COLORS.orange, icon: "🧠" },
  { year: "2018", title: "Nexus Framer Founded", desc: "Founded Nexus Framer with a mission to bridge the gap between raw potential and real-world performance — for every kind of learner.", color: COLORS.green, icon: "🚀" },
  { year: "2020", title: "500+ Trained", desc: "Crossed the milestone of training over 500 individuals across schools, colleges, and corporates — through online and offline programs.", color: COLORS.maroon, icon: "🏆" },
  { year: "2022", title: "Author & Speaker", desc: "Published her first book and expanded into keynote speaking at national-level education and leadership conferences.", color: COLORS.red, icon: "📖" },
  { year: "2024", title: "1000+ Lives Impacted", desc: "Nexus Framer crossed 1000+ trained individuals and 200+ institutional partnerships — with a growing pan-India presence.", color: COLORS.orange, icon: "🌟" },
];

const philosophyPoints = [
  { label: "Every person has untapped potential waiting to be activated.", icon: "💫", color: COLORS.red },
  { label: "Skills without confidence are underused. Confidence without skills is empty.", icon: "⚖️", color: COLORS.orange },
  { label: "Transformation is not an event — it is a daily, deliberate practice.", icon: "🔄", color: COLORS.green },
  { label: "The best leaders are first the best learners.", icon: "🌱", color: COLORS.maroon },
];

// Founder portrait placeholder
const FounderPortrait = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
      }}
    >
      {/* Decorative offset frame */}
      <div style={{
        position: "absolute",
        top: "18px", left: "18px",
        right: "-18px", bottom: "-18px",
        border: `2px solid ${COLORS.red}30`,
        borderRadius: "4px",
        transition: "all 0.4s ease",
        transform: hovered ? "translate(-4px, -4px)" : "translate(0, 0)",
      }} />
      <div style={{
        position: "absolute",
        top: "9px", left: "9px",
        right: "-9px", bottom: "-9px",
        border: `2px solid ${COLORS.orange}20`,
        borderRadius: "4px",
        transition: "all 0.4s ease 0.06s",
        transform: hovered ? "translate(-2px, -2px)" : "translate(0, 0)",
      }} />

      {/* Main portrait area */}
      <div style={{
        position: "relative",
        borderRadius: "4px",
        overflow: "hidden",
        background: `linear-gradient(145deg, ${COLORS.red}12 0%, ${COLORS.orange}08 40%, ${COLORS.maroon}14 100%)`,
        backgroundColor: COLORS.offWhite,
        aspectRatio: "3/4",
        boxShadow: hovered
          ? `0 24px 60px ${COLORS.red}20`
          : "0 8px 32px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.4s ease",
        border: `1px solid ${COLORS.red}15`,
        borderTop: `3px solid ${COLORS.red}`,
      }}>
        {/* Texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, ${COLORS.red}04 12px, ${COLORS.red}04 13px)`,
          pointerEvents: "none",
        }} />

        {/* Corner accents */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "48px", height: "48px",
          borderTop: `3px solid ${COLORS.red}`,
          borderLeft: `3px solid ${COLORS.red}`,
          borderRadius: "4px 0 0 0",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: "48px", height: "48px",
          borderBottom: `3px solid ${COLORS.orange}50`,
          borderRight: `3px solid ${COLORS.orange}50`,
          borderRadius: "0 0 4px 0",
        }} />

        {/* Center content */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "32px",
        }}>
          {/* Avatar circle */}
          <div style={{
            width: "120px", height: "120px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.red}20, ${COLORS.orange}15)`,
            border: `3px solid ${COLORS.red}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "3.5rem",
            marginBottom: "24px",
            boxShadow: `0 8px 24px ${COLORS.red}15`,
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}>
            👩‍💼
          </div>

          <div style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "1.6rem",
            color: COLORS.textDark,
            letterSpacing: "3px",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "6px",
          }}>
            SRI AALEKHYA PUJA
          </div>

          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.62rem",
            color: COLORS.red,
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "20px",
          }}>
            Founder, Nexus Framer
          </div>

          {/* Role badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
            {["NLP Expert", "Leadership Coach", "Author"].map((r, i) => (
              <span key={i} style={{
                padding: "4px 10px",
                background: [COLORS.red, COLORS.orange, COLORS.maroon][i] + "12",
                border: `1px solid ${[COLORS.red, COLORS.orange, COLORS.maroon][i]}25`,
                borderRadius: "1px",
                fontFamily: "'Courier New', monospace",
                fontSize: "0.58rem",
                color: [COLORS.red, COLORS.orange, COLORS.maroon][i],
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}>
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${COLORS.maroon}cc 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "flex", alignItems: "flex-end",
          padding: "24px",
        }}>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "1px",
            lineHeight: 1.6,
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "transform 0.4s ease",
          }}>
            "Empowering every individual to<br />
            discover the leader within."
          </div>
        </div>
      </div>

      {/* Stat chips below portrait */}
      <div style={{
        display: "flex", gap: "10px", marginTop: "28px",
        justifyContent: "center", flexWrap: "wrap",
      }}>
        {[
          { val: "1000+", label: "Trained", color: COLORS.red },
          { val: "10+", label: "Years", color: COLORS.orange },
          { val: "200+", label: "Institutions", color: COLORS.green },
        ].map((s, i) => (
          <div key={i} style={{
            textAlign: "center",
            padding: "10px 18px",
            background: COLORS.offWhite,
            border: `1px solid ${s.color}20`,
            borderTop: `3px solid ${s.color}`,
            borderRadius: "2px",
            flex: 1,
            minWidth: "80px",
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "1.5rem",
              color: s.color, letterSpacing: "2px", lineHeight: 1,
            }}>
              {s.val}
            </div>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.58rem",
              color: COLORS.textLight,
              textTransform: "uppercase", letterSpacing: "2px", marginTop: "4px",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Founder() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const tabs = [
    { id: "about", label: "About", icon: "👩‍💼" },
    { id: "roles", label: "Expertise", icon: "⚡" },
    { id: "pillars", label: "Pillars", icon: "🏛️" },
    { id: "journey", label: "Journey", icon: "🗺️" },
    { id: "philosophy", label: "Philosophy", icon: "💡" },
  ];

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
          fontSize: "clamp(4rem, 13vw, 12rem)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.red}10`,
          userSelect: "none", pointerEvents: "none",
          lineHeight: 1, letterSpacing: "4px", whiteSpace: "nowrap",
        }}>
          FOUNDER
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
                Meet the Visionary
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.92, letterSpacing: "3px",
            }}>
              <span style={{ display: "block", color: COLORS.textDark }}>THE</span>
              <span style={{
                display: "block",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>FOUNDER</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              marginTop: "28px",
              fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
              lineHeight: 1.85, color: COLORS.textMid, maxWidth: "620px",
            }}>
              Sri Aalekhya Puja — Charisma Empowerment Trainer, NLP Expert, Leadership Coach, and Author. The driving force behind Nexus Framer's mission to unlock potential at every level.
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
                { value: "1000+", label: "Individuals Trained", color: COLORS.red },
                { value: "4", label: "Expert Roles", color: COLORS.orange },
                { value: "10+", label: "Years of Impact", color: COLORS.green },
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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                document.getElementById(`section-${tab.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveTab(tab.id);
              }}
              style={{
                padding: "18px 24px",
                background: "transparent",
                border: "none",
                borderBottom: `3px solid ${activeTab === tab.id ? COLORS.red : "transparent"}`,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
                letterSpacing: "2px",
                color: activeTab === tab.id ? COLORS.red : COLORS.textLight,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: "7px",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = COLORS.red;
                  e.currentTarget.style.borderBottomColor = COLORS.red + "50";
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = COLORS.textLight;
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
              <span style={{ fontSize: "0.9rem" }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section
        id="section-about"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.white,
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(40px, 7vw, 80px)",
          alignItems: "center",
          maxWidth: "1200px",
        }}>
          {/* Portrait */}
          <FadeLeft>
            <FounderPortrait />
          </FadeLeft>

          {/* Bio */}
          <FadeRight delay={0.15}>
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.72rem", color: COLORS.red,
                letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
              }}>
                About Her
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "3px", color: COLORS.textDark,
                lineHeight: 1, marginBottom: "6px",
              }}>
                SRI AALEKHYA <span style={{ color: COLORS.red }}>PUJA</span>
              </h2>
              <div style={{
                width: "60px", height: "3px",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                marginBottom: "28px", borderRadius: "2px",
              }} />

              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                lineHeight: 1.9, marginBottom: "20px",
              }}>
                Sri Aalekhya Puja is the founder of Nexus Framer and one of India's most dynamic Charisma Empowerment Trainers. With a rare blend of NLP expertise, leadership coaching, and a gift for storytelling, she has spent over a decade transforming the way individuals show up — in boardrooms, classrooms, and every stage of life.
              </p>
              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                lineHeight: 1.9, marginBottom: "28px",
              }}>
                She empowers individuals and teams to build unshakeable confidence, master communication, develop emotional intelligence, and cultivate the kind of leadership presence that commands attention and earns respect — without losing authenticity.
              </p>
              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                lineHeight: 1.9, marginBottom: "36px",
              }}>
                Having trained over <strong style={{ color: COLORS.red }}>1000+ individuals</strong> across corporate, educational, and entrepreneurial ecosystems, Sri Aalekhya's impact stretches far beyond the training room — it lives in every career advanced, every team aligned, and every life redefined.
              </p>

              {/* Quote block */}
              <div style={{
                borderLeft: `4px solid ${COLORS.red}`,
                paddingLeft: "20px",
                marginBottom: "32px",
              }}>
                <p style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  color: COLORS.textDark,
                  lineHeight: 1.7,
                }}>
                  "I don't just train people — I help them find the version of themselves they were always meant to be."
                </p>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.65rem",
                  color: COLORS.red,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginTop: "10px",
                }}>
                  — Sri Aalekhya Puja
                </div>
              </div>

              {/* Ecosystem tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Corporate", "Educational", "Entrepreneurial", "Pan-India"].map((tag, i) => (
                  <span key={i} style={{
                    padding: "6px 14px",
                    background: [COLORS.red, COLORS.orange, COLORS.green, COLORS.maroon][i] + "10",
                    border: `1px solid ${[COLORS.red, COLORS.orange, COLORS.green, COLORS.maroon][i]}25`,
                    borderRadius: "1px",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.65rem",
                    color: [COLORS.red, COLORS.orange, COLORS.green, COLORS.maroon][i],
                    letterSpacing: "1px", textTransform: "uppercase",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeRight>
        </div>
      </section>

      {/* ── EXPERTISE / ROLES ── */}
      <section
        id="section-roles"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.offWhite,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.orange}, ${COLORS.red}, transparent)`,
        }} />

        <FadeUp>
          <div style={{ marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.orange,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              What She Does
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              AREAS OF <span style={{ color: COLORS.orange }}>EXPERTISE</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "clamp(16px, 3vw, 24px)",
          maxWidth: "1200px",
        }}>
          {roles.map((role, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHoveredRole(i)}
                onMouseLeave={() => setHoveredRole(null)}
                style={{
                  background: hoveredRole === i ? role.color + "06" : COLORS.white,
                  border: `1px solid ${hoveredRole === i ? role.color + "60" : "#e8e8e8"}`,
                  borderTop: `3px solid ${role.color}`,
                  borderRadius: "3px",
                  padding: "clamp(24px, 3.5vw, 32px)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: hoveredRole === i ? `0 12px 36px ${role.color}14` : "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {/* Watermark number */}
                <div style={{
                  position: "absolute", bottom: "-8px", right: "10px",
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "5rem", color: role.color + "07",
                  lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "2px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Hover glow */}
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "120px", height: "120px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${role.color}12, transparent 70%)`,
                  opacity: hoveredRole === i ? 1 : 0,
                  transition: "opacity 0.4s ease", pointerEvents: "none",
                }} />

                <div style={{
                  width: "54px", height: "54px", borderRadius: "12px",
                  background: role.color + "12",
                  border: `1.5px solid ${role.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.7rem", marginBottom: "18px",
                  transition: "transform 0.3s ease",
                  transform: hoveredRole === i ? "scale(1.08)" : "scale(1)",
                }}>
                  {role.icon}
                </div>

                <div style={{
                  width: hoveredRole === i ? "100%" : "40px", height: "2px",
                  background: `linear-gradient(90deg, ${role.color}, ${role.color}30)`,
                  marginBottom: "16px", transition: "width 0.5s ease", borderRadius: "1px",
                }} />

                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                  color: COLORS.textDark, letterSpacing: "2px",
                  lineHeight: 1.2, marginBottom: "14px",
                }}>
                  {role.title}
                </h3>
                <p style={{
                  color: COLORS.textMid,
                  fontSize: "clamp(0.83rem, 1.5vw, 0.92rem)",
                  lineHeight: 1.8,
                }}>
                  {role.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section
        id="section-pillars"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.white,
        }}
      >
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.green,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              What She Builds In You
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              THE FOUR <span style={{ color: COLORS.green }}>PILLARS</span>
            </h2>
            <p style={{
              color: COLORS.textLight, maxWidth: "520px",
              margin: "14px auto 0",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)", lineHeight: 1.75,
            }}>
              Every Nexus Framer program, every coaching session, every keynote is anchored in these four transformational pillars.
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
          {pillars.map((pillar, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHoveredPillar(i)}
                onMouseLeave={() => setHoveredPillar(null)}
                style={{
                  background: hoveredPillar === i ? pillar.color : COLORS.offWhite,
                  border: `1px solid ${hoveredPillar === i ? pillar.color : "#e8e8e8"}`,
                  borderTop: `3px solid ${pillar.color}`,
                  borderRadius: "2px",
                  padding: "clamp(24px, 3.5vw, 32px)",
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.35s ease",
                  boxShadow: hoveredPillar === i ? `0 12px 36px ${pillar.color}22` : "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: hoveredPillar === i ? "rgba(255,255,255,0.2)" : pillar.color + "12",
                  border: `1.5px solid ${hoveredPillar === i ? "rgba(255,255,255,0.4)" : pillar.color + "30"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.7rem", margin: "0 auto 18px",
                  transition: "all 0.35s ease",
                  transform: hoveredPillar === i ? "scale(1.1)" : "scale(1)",
                }}>
                  {pillar.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.2rem",
                  color: hoveredPillar === i ? COLORS.white : pillar.color,
                  letterSpacing: "2px", marginBottom: "12px",
                  transition: "color 0.35s ease",
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  color: hoveredPillar === i ? "rgba(255,255,255,0.88)" : COLORS.textLight,
                  fontSize: "0.875rem", lineHeight: 1.75,
                  transition: "color 0.35s ease",
                }}>
                  {pillar.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section
        id="section-journey"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.offWhite,
          position: "relative",
          overflow: "hidden",
        }}
      >
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
              HER <span style={{ color: COLORS.red }}>JOURNEY</span>
            </h2>
            <p style={{
              color: COLORS.textLight, maxWidth: "480px",
              margin: "12px auto 0", lineHeight: 1.7,
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            }}>
              A decade of purposeful growth — from a single spark to a movement that has touched over 1000 lives.
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

          {milestones.map((m, i) => {
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
                  background: m.color,
                  border: `3px solid ${COLORS.offWhite}`,
                  boxShadow: `0 0 0 2px ${m.color}`,
                  zIndex: 1,
                }} />

                <div style={{
                  width: "calc(50% - 30px)",
                  background: COLORS.white,
                  border: `1px solid ${m.color}25`,
                  borderLeft: isLeft ? `3px solid ${m.color}` : "1px solid #e8e8e8",
                  borderRight: !isLeft ? `3px solid ${m.color}` : "1px solid #e8e8e8",
                  borderRadius: "2px",
                  padding: "clamp(16px, 3vw, 24px)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.2rem" }}>{m.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.62rem", color: m.color,
                        letterSpacing: "3px", textTransform: "uppercase",
                      }}>
                        {m.year}
                      </div>
                      <h3 style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: m.color, letterSpacing: "2px", lineHeight: 1,
                      }}>
                        {m.title}
                      </h3>
                    </div>
                  </div>
                  <p style={{
                    color: COLORS.textMid,
                    fontSize: "clamp(0.78rem, 1.4vw, 0.875rem)",
                    lineHeight: 1.7,
                  }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section
        id="section-philosophy"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.white,
        }}
      >
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.maroon,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              How She Thinks
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              HER <span style={{ color: COLORS.maroon }}>PHILOSOPHY</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Central quote */}
          <FadeUp delay={0.1}>
            <div style={{
              background: `linear-gradient(135deg, ${COLORS.maroon}08, ${COLORS.red}06)`,
              border: `1px solid ${COLORS.red}20`,
              borderLeft: `4px solid ${COLORS.red}`,
              borderRadius: "2px",
              padding: "clamp(28px, 4vw, 44px)",
              marginBottom: "clamp(32px, 5vw, 52px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: "-20px", right: "20px",
                fontFamily: "serif",
                fontSize: "8rem",
                color: COLORS.red + "10",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}>
                "
              </div>
              <p style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                color: COLORS.textDark,
                lineHeight: 1.75,
                position: "relative",
                zIndex: 1,
                marginBottom: "18px",
              }}>
                Every individual carries within them an extraordinary version of themselves — one that is more confident, more expressive, more powerful than they dare believe. My work is simply to help them find it, claim it, and live it fully.
              </p>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.68rem",
                color: COLORS.red,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}>
                — Sri Aalekhya Puja, Founder
              </div>
            </div>
          </FadeUp>

          {/* Philosophy points */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(14px, 2.5vw, 20px)",
          }}>
            {philosophyPoints.map((pt, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: "16px",
                  padding: "clamp(16px, 2.5vw, 22px)",
                  background: COLORS.offWhite,
                  border: `1px solid ${pt.color}15`,
                  borderLeft: `3px solid ${pt.color}`,
                  borderRadius: "2px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "10px",
                    background: pt.color + "12",
                    border: `1.5px solid ${pt.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", flexShrink: 0,
                  }}>
                    {pt.icon}
                  </div>
                  <p style={{
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                    color: COLORS.textMid,
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                    lineHeight: 1.75,
                    paddingTop: "4px",
                  }}>
                    "{pt.label}"
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM STRIP ── */}
      <section style={{
        padding: "clamp(40px, 6vw, 64px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.green}, ${COLORS.orange}, transparent)`,
        }} />

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 40px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.green,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px",
            }}>
              Ecosystems She Serves
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              CORPORATE. <span style={{ color: COLORS.orange }}>EDUCATIONAL.</span> <span style={{ color: COLORS.green }}>ENTREPRENEURIAL.</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: "clamp(14px, 2.5vw, 20px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            { val: "1000+", label: "Individuals Trained", color: COLORS.red, icon: "👥" },
            { val: "200+", label: "Institutions", color: COLORS.orange, icon: "🏛️" },
            { val: "500+", label: "Schools Reached", color: COLORS.green, icon: "🏫" },
            { val: "300+", label: "Colleges Partnered", color: COLORS.maroon, icon: "🎓" },
            { val: "80+", label: "Keynote Stages", color: COLORS.red, icon: "🎙️" },
            { val: "10+", label: "Years of Impact", color: COLORS.orange, icon: "🗓️" },
          ].map((s, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div style={{
                background: COLORS.white,
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
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
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
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Connect With The Founder
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "3px", color: COLORS.white, marginBottom: "16px", lineHeight: 1,
            }}>
              TRAIN WITH SRI AALEKHYA
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.75,
            }}>
              Bring her energy, expertise, and transformational approach to your team, institution, or stage.
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
                Book a Session
              </a>
              <a
                href="#section-journey"
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
                Her Story
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