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

const trainingAreas = [
  {
    id: "leadership",
    label: "Leadership & Managerial Development",
    icon: "👑",
    tagline: "Lead with Vision & Authority",
    description:
      "Build leaders who inspire, align, and deliver. Our leadership modules sharpen managerial acumen, executive presence, and the ability to drive performance across teams and functions.",
    color: COLORS.red,
    stat: "85%",
    statLabel: "Reported Leadership Improvement",
    tags: ["Executive Presence", "People Management", "Strategic Leadership", "Accountability"],
  },
  {
    id: "communication",
    label: "Communication & Influence",
    icon: "🎤",
    tagline: "Speak. Persuade. Impact.",
    description:
      "From boardroom presentations to difficult conversations — we train professionals to communicate with precision, confidence, and influence that moves people to action.",
    color: COLORS.orange,
    stat: "92%",
    statLabel: "Participant Satisfaction Rate",
    tags: ["Executive Communication", "Persuasion", "Presentation Skills", "Active Listening"],
  },
  {
    id: "eq",
    label: "Emotional Intelligence",
    icon: "💡",
    tagline: "Feel. Think. Lead Better.",
    description:
      "EQ is the hidden engine of high performance. We develop self-awareness, empathy, and emotional regulation — skills that make managers truly effective and workplaces genuinely human.",
    color: COLORS.green,
    stat: "78%",
    statLabel: "Reduction in Workplace Conflicts",
    tags: ["Self-Awareness", "Empathy", "Emotional Regulation", "Social Skills"],
  },
  {
    id: "teamwork",
    label: "Team Collaboration",
    icon: "🤝",
    tagline: "Together, We Deliver More.",
    description:
      "High-performance teams don't happen by accident. We build psychological safety, trust, and the collaborative habits that turn groups into unstoppable units.",
    color: COLORS.maroon,
    stat: "3x",
    statLabel: "Increase in Team Output",
    tags: ["Trust Building", "Psychological Safety", "Cross-functional Teams", "Conflict Resolution"],
  },
  {
    id: "productivity",
    label: "Productivity & Professional Effectiveness",
    icon: "⚡",
    tagline: "Do More. Stress Less. Excel Always.",
    description:
      "Time, energy, and focus are finite — we train professionals to master all three. Our productivity programs combine strategic prioritisation with deep work habits for peak performance.",
    color: COLORS.red,
    stat: "40%",
    statLabel: "Average Productivity Boost",
    tags: ["Time Management", "Deep Work", "Goal Setting", "Decision Making"],
  },
  {
    id: "customer",
    label: "Customer Experience & Relationship Intelligence",
    icon: "🌟",
    tagline: "Every Interaction. Every Impression.",
    description:
      "Customer-facing teams learn to build lasting relationships, handle high-pressure interactions with grace, and deliver experiences that turn clients into brand advocates.",
    color: COLORS.orange,
    stat: "60%",
    statLabel: "Rise in Customer Retention",
    tags: ["CX Strategy", "Relationship Building", "Complaint Handling", "Service Excellence"],
  },
];

const trainingFormats = [
  { id: "classroom", label: "Classroom Training", icon: "🏫", desc: "Structured in-person learning in a focused environment designed for deep skill absorption.", color: COLORS.red },
  { id: "boardroom", label: "Boardroom Sessions", icon: "🏢", desc: "Intimate, high-impact executive sessions designed for senior leadership and strategic teams.", color: COLORS.orange },
  { id: "outbound", label: "Outbound Team Building", icon: "🏕️", desc: "Experiential outdoor activities that forge trust, resilience, and team cohesion in real time.", color: COLORS.green },
  { id: "workshops", label: "Workshops & Bootcamps", icon: "⚡", desc: "Intensive immersive formats for rapid skill development with immediate real-world application.", color: COLORS.maroon },
  { id: "online", label: "Online Learning Programs", icon: "💻", desc: "Flexible, digital-first programs that scale across geographies without compromising quality.", color: COLORS.red },
];

const industries = [
  { name: "Education", icon: "📚", color: COLORS.red },
  { name: "IT & Tech", icon: "💻", color: COLORS.orange },
  { name: "BFSI", icon: "🏦", color: COLORS.green },
  { name: "Healthcare", icon: "🏥", color: COLORS.maroon },
  { name: "Manufacturing", icon: "🏭", color: COLORS.red },
  { name: "Retail", icon: "🛍️", color: COLORS.orange },
  { name: "Hospitality", icon: "🏨", color: COLORS.green },
  { name: "Consulting", icon: "📊", color: COLORS.maroon },
  { name: "Government", icon: "🏛️", color: COLORS.red },
  { name: "Startups", icon: "🚀", color: COLORS.orange },
  { name: "NGOs", icon: "🌱", color: COLORS.green },
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

const TrainingCard = ({ area, index }) => {
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
        background: hovered ? area.color + "06" : COLORS.white,
        border: `1px solid ${hovered ? area.color + "60" : "#e8e8e8"}`,
        borderTop: `3px solid ${area.color}`,
        borderRadius: "3px",
        padding: "clamp(24px, 4vw, 36px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered ? `0 12px 40px ${area.color}14` : "0 2px 12px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* BG watermark number */}
      <div style={{
        position: "absolute", bottom: "-10px", right: "12px",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        fontSize: "6rem",
        color: area.color + "08",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "2px",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Hover glow */}
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "150px", height: "150px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${area.color}12, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      {/* Icon + label */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
        <div style={{
          width: "52px", height: "52px",
          borderRadius: "12px",
          background: area.color + "12",
          border: `1.5px solid ${area.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.6rem",
          flexShrink: 0,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}>
          {area.icon}
        </div>
        <div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.65rem",
            color: area.color,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}>
            {area.tagline}
          </div>
          <h3 style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
            color: COLORS.textDark,
            letterSpacing: "2px",
            lineHeight: 1.1,
          }}>
            {area.label}
          </h3>
        </div>
      </div>

      {/* Animated divider */}
      <div style={{
        width: hovered ? "100%" : "40px",
        height: "2px",
        background: `linear-gradient(90deg, ${area.color}, ${area.color}30)`,
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
        flexGrow: 1,
      }}>
        {area.description}
      </p>

      {/* Stat pill */}
      <div style={{
        display: "flex", alignItems: "center", gap: "12px",
        marginBottom: "16px",
        padding: "12px 16px",
        background: area.color + "08",
        border: `1px solid ${area.color}20`,
        borderRadius: "2px",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "1.8rem",
          color: area.color,
          letterSpacing: "2px",
          lineHeight: 1,
        }}>
          {area.stat}
        </div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.7rem",
          color: COLORS.textLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}>
          {area.statLabel}
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {area.tags.map((tag) => (
          <span key={tag} style={{
            padding: "4px 10px",
            background: area.color + "10",
            border: `1px solid ${area.color}25`,
            borderRadius: "1px",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.6rem",
            color: area.color,
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

export default function Industriesserved() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredFormat, setHoveredFormat] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

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
      

        {/* Ghost text */}
        <div style={{
          position: "absolute", right: "-10px", top: "50%",
          transform: "translateY(-50%) rotate(-6deg)",
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "clamp(4rem, 14vw, 13rem)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.red}60`,
          userSelect: "none", pointerEvents: "none",
          lineHeight: 1, letterSpacing: "4px",
          whiteSpace: "nowrap",
        }}>
          TRAINING
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
                color: COLORS.red,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}>
                Corporate & Institutional Training
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.92,
              letterSpacing: "3px",
            }}>
              <span style={{ display: "block", color: COLORS.textDark }}>TRANSFORM YOUR</span>
              <span style={{
                display: "block",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>WORKFORCE</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              marginTop: "28px",
              fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
              lineHeight: 1.85,
              color: COLORS.textMid,
              maxWidth: "620px",
            }}>
              Nexus Framer partners with schools, colleges, corporates, and institutions to design customised training programs that drive measurable change — from frontline employees to C-suite executives.
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
                { value: "6+", label: "Training Areas", color: COLORS.red },
                { value: "5", label: "Delivery Formats", color: COLORS.orange },
                { value: "11+", label: "Industries Served", color: COLORS.green },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
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

      {/* ── TAB NAV ── */}
      <section style={{
        background: COLORS.offWhite,
        borderTop: "1px solid #ebebeb",
        borderBottom: "1px solid #ebebeb",
        padding: "0 clamp(20px, 8vw, 120px)",
        overflowX: "auto",
      }}>
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {trainingAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => {
                document.getElementById(area.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                setActiveTab(area.id);
              }}
              style={{
                padding: "18px 20px",
                background: "transparent",
                border: "none",
                borderBottom: `3px solid ${activeTab === area.id ? area.color : "transparent"}`,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.82rem, 1.6vw, 0.95rem)",
                letterSpacing: "2px",
                color: activeTab === area.id ? area.color : COLORS.textLight,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                if (activeTab !== area.id) {
                  e.currentTarget.style.color = area.color;
                  e.currentTarget.style.borderBottomColor = area.color + "50";
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== area.id) {
                  e.currentTarget.style.color = COLORS.textLight;
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
              <span style={{ fontSize: "0.9rem" }}>{area.icon}</span>
              {area.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── TRAINING AREAS GRID ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
      }}>
        <FadeUp>
          <div style={{ marginBottom: "clamp(36px, 5vw, 56px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem",
              color: COLORS.red,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              Training Areas
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              WHAT WE <span style={{ color: COLORS.red }}>TRAIN</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(16px, 3vw, 28px)",
          maxWidth: "1280px",
        }}>
          {trainingAreas.map((area, i) => (
            <div key={area.id} id={area.id}>
              <TrainingCard area={area} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAINING FORMATS ── */}
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

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem",
              color: COLORS.orange,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              How We Deliver
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              TRAINING <span style={{ color: COLORS.orange }}>FORMATS</span>
            </h2>
            <p style={{
              color: COLORS.textLight,
              maxWidth: "520px",
              margin: "14px auto 0",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: 1.75,
            }}>
              We adapt to your environment — from intimate boardrooms to large-scale virtual cohorts. Every format is designed for maximum engagement and retention.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: "clamp(14px, 2.5vw, 22px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {trainingFormats.map((fmt, i) => (
            <FadeUp key={fmt.id} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHoveredFormat(fmt.id)}
                onMouseLeave={() => setHoveredFormat(null)}
                style={{
                  background: hoveredFormat === fmt.id ? fmt.color : COLORS.white,
                  border: `1px solid ${hoveredFormat === fmt.id ? fmt.color : "#e8e8e8"}`,
                  borderTop: `3px solid ${fmt.color}`,
                  borderRadius: "2px",
                  padding: "clamp(20px, 3vw, 28px)",
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  boxShadow: hoveredFormat === fmt.id ? `0 10px 32px ${fmt.color}20` : "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{
                  width: "56px", height: "56px",
                  borderRadius: "50%",
                  background: hoveredFormat === fmt.id ? "rgba(255,255,255,0.2)" : fmt.color + "12",
                  border: `1.5px solid ${hoveredFormat === fmt.id ? "rgba(255,255,255,0.4)" : fmt.color + "30"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem",
                  margin: "0 auto 16px",
                  transition: "all 0.3s ease",
                  transform: hoveredFormat === fmt.id ? "scale(1.1)" : "scale(1)",
                }}>
                  {fmt.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.05rem",
                  color: hoveredFormat === fmt.id ? COLORS.white : fmt.color,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                  transition: "color 0.3s ease",
                }}>
                  {fmt.label}
                </h3>
                <p style={{
                  color: hoveredFormat === fmt.id ? "rgba(255,255,255,0.85)" : COLORS.textLight,
                  fontSize: "0.82rem",
                  lineHeight: 1.7,
                  transition: "color 0.3s ease",
                }}>
                  {fmt.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
        position: "relative",
        overflow: "hidden",
      }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem",
              color: COLORS.green,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              Industries We Serve
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              EVERY <span style={{ color: COLORS.green }}>INDUSTRY.</span> EVERY <span style={{ color: COLORS.red }}>GOAL.</span>
            </h2>
            <p style={{
              color: COLORS.textLight,
              maxWidth: "520px",
              margin: "14px auto 0",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: 1.75,
            }}>
              Our training methodology is sector-agnostic and context-sensitive — crafted to meet the unique demands and culture of every industry we partner with.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(10px, 2vw, 16px)",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}>
          {industries.map((ind, i) => (
            <FadeUp key={ind.name} delay={i * 0.06}>
              <div
                onMouseEnter={() => setHoveredIndustry(ind.name)}
                onMouseLeave={() => setHoveredIndustry(null)}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "clamp(12px, 2vw, 16px) clamp(18px, 3vw, 28px)",
                  background: hoveredIndustry === ind.name ? ind.color : COLORS.white,
                  border: `1.5px solid ${hoveredIndustry === ind.name ? ind.color : ind.color + "40"}`,
                  borderRadius: "2px",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  boxShadow: hoveredIndustry === ind.name ? `0 6px 20px ${ind.color}25` : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: hoveredIndustry === ind.name ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{ind.icon}</span>
                <span style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  letterSpacing: "2px",
                  color: hoveredIndustry === ind.name ? COLORS.white : ind.color,
                  transition: "color 0.3s ease",
                }}>
                  {ind.name}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Industry count strip */}
        <FadeUp delay={0.3}>
          <div style={{
            marginTop: "clamp(40px, 6vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 40px)",
          }}>
            {[
              { val: "11+", label: "Industries", color: COLORS.red },
              { val: "200+", label: "Institutional Partners", color: COLORS.orange },
              { val: "50K+", label: "Employees Trained", color: COLORS.green },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "clamp(16px, 2vw, 20px) clamp(24px, 4vw, 40px)",
                background: COLORS.offWhite,
                border: `1px solid ${s.color}20`,
                borderTop: `3px solid ${s.color}`,
                borderRadius: "2px",
                minWidth: "140px",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  color: s.color,
                  letterSpacing: "2px",
                  lineHeight: 1,
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.65rem",
                  color: COLORS.textLight,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginTop: "6px",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.green}, ${COLORS.maroon}, transparent)`,
        }} />

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              OUR TRAINING <span style={{ color: COLORS.red }}>PROCESS</span>
            </h2>
            <p style={{
              color: COLORS.textLight, maxWidth: "480px", margin: "12px auto 0",
              lineHeight: 1.7, fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            }}>
              A proven, end-to-end methodology that ensures every engagement delivers lasting results.
            </p>
          </div>
        </FadeUp>

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: "2px",
            background: `linear-gradient(to bottom, ${COLORS.red}30, ${COLORS.orange}30, ${COLORS.green}30, ${COLORS.maroon}30, ${COLORS.red}30)`,
            transform: "translateX(-50%)",
          }} />

          {[
            { step: "01", title: "Needs Assessment", desc: "We deep-dive into your organisation's goals, gaps, and culture to design a training blueprint.", color: COLORS.red, icon: "🔍" },
            { step: "02", title: "Program Design", desc: "Custom content crafted around your industry, audience, and specific transformation objectives.", color: COLORS.orange, icon: "🎨" },
            { step: "03", title: "Expert Delivery", desc: "Seasoned facilitators deliver high-energy, experiential sessions using the most effective format.", color: COLORS.green, icon: "🎤" },
            { step: "04", title: "Impact Measurement", desc: "Pre-post assessments, feedback loops, and ROI tracking to prove and sustain the transformation.", color: COLORS.maroon, icon: "📊" },
            { step: "05", title: "Continuous Reinforce­ment", desc: "Follow-up touchpoints, resources, and refreshers that embed new behaviours permanently.", color: COLORS.red, icon: "🔄" },
          ].map((item, i) => {
            const isLeft = i % 2 === 0;
            const [ref, inView] = useInView();
            return (
              <div
                key={item.step}
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
                <div style={{
                  position: "absolute", left: "50%", top: "22px",
                  transform: "translateX(-50%)",
                  width: "14px", height: "14px",
                  borderRadius: "50%",
                  background: item.color,
                  border: `3px solid ${COLORS.offWhite}`,
                  boxShadow: `0 0 0 2px ${item.color}`,
                  zIndex: 1,
                }} />

                <div style={{
                  width: "calc(50% - 30px)",
                  background: COLORS.white,
                  border: `1px solid ${item.color}25`,
                  borderLeft: isLeft ? `3px solid ${item.color}` : "1px solid #e8e8e8",
                  borderRight: !isLeft ? `3px solid ${item.color}` : "1px solid #e8e8e8",
                  borderRadius: "2px",
                  padding: "clamp(16px, 3vw, 24px)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.6rem",
                        color: item.color,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                      }}>
                        Step {item.step}
                      </div>
                      <h3 style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: item.color,
                        letterSpacing: "2px",
                        lineHeight: 1,
                      }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p style={{
                    color: COLORS.textMid,
                    fontSize: "clamp(0.78rem, 1.4vw, 0.875rem)",
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
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
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Partner With Us
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "3px",
              color: COLORS.white,
              marginBottom: "16px",
              lineHeight: 1,
            }}>
              READY TO TRAIN YOUR TEAM?
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.75,
            }}>
              Let's design a training program that fits your organisation's unique culture, goals, and growth ambitions.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
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
                Request a Proposal
              </a>
              <a
                href="#leadership"
                style={{
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
                Explore Training Areas
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
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  );
}