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

const useInView = (threshold = 0.1) => {
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

const categories = [
  {
    id: "school",
    label: "School Workshops",
    icon: "🏫",
    color: COLORS.red,
    tagline: "Igniting Young Potential",
    stat: "500+",
    statLabel: "Schools Reached",
    description: "Vibrant, high-energy workshops where students discover their voice, build confidence, and develop the life skills that classrooms rarely teach.",
    items: [
      { id: 1, aspect: "landscape", label: "Life Skills Session", sub: "Grade 8 Workshop" },
      { id: 2, aspect: "portrait", label: "Confidence Building", sub: "Public Speaking Activity" },
      { id: 3, aspect: "landscape", label: "Team Games", sub: "Collaborative Challenge" },
      { id: 4, aspect: "square", label: "EQ Workshop", sub: "Emotional Intelligence" },
      { id: 5, aspect: "portrait", label: "Communication Drill", sub: "Debate & Discussion" },
      { id: 6, aspect: "landscape", label: "Graduation Moment", sub: "Program Completion" },
    ],
  },
  {
    id: "college",
    label: "College Training Programs",
    icon: "🎓",
    color: COLORS.orange,
    tagline: "Career-Ready, World-Ready",
    stat: "300+",
    statLabel: "Colleges Partnered",
    description: "Immersive pre-placement and personality development programs that transform graduating students into confident, corporate-ready professionals.",
    items: [
      { id: 1, aspect: "landscape", label: "Interview Masterclass", sub: "Mock Interview Round" },
      { id: 2, aspect: "square", label: "Group Discussion", sub: "GD Practice Session" },
      { id: 3, aspect: "portrait", label: "Entrepreneurship Talk", sub: "Startup Mindset Program" },
      { id: 4, aspect: "landscape", label: "Corporate Readiness", sub: "Workplace Etiquette" },
      { id: 5, aspect: "landscape", label: "Stage Presence", sub: "Public Speaking Drill" },
      { id: 6, aspect: "square", label: "Campus Activation", sub: "Full Cohort Session" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate Leadership Sessions",
    icon: "🏢",
    color: COLORS.green,
    tagline: "Building Leaders Who Deliver",
    stat: "200+",
    statLabel: "Corporate Partners",
    description: "Boardroom-grade leadership interventions for managers, senior leaders, and executive teams — focused on performance, communication, and strategic thinking.",
    items: [
      { id: 1, aspect: "landscape", label: "Leadership Intensive", sub: "Senior Management Cohort" },
      { id: 2, aspect: "portrait", label: "Executive Coaching", sub: "1-on-1 Leadership Debrief" },
      { id: 3, aspect: "square", label: "Strategy Workshop", sub: "Boardroom Session" },
      { id: 4, aspect: "landscape", label: "Panel Discussion", sub: "Industry Leaders Forum" },
      { id: 5, aspect: "square", label: "Team Alignment", sub: "Cross-functional Workshop" },
      { id: 6, aspect: "portrait", label: "Award Ceremony", sub: "Leadership Recognition" },
    ],
  },
  {
    id: "outbound",
    label: "Outbound Team Building",
    icon: "🏕️",
    color: COLORS.maroon,
    tagline: "Trust Built in the Wild",
    stat: "150+",
    statLabel: "Outbound Camps Conducted",
    description: "Outdoor adventure-based learning experiences that forge genuine trust, resilience, and team cohesion — far from desks and deep in real challenge.",
    items: [
      { id: 1, aspect: "landscape", label: "Rope Course Challenge", sub: "Trust & Courage Activity" },
      { id: 2, aspect: "square", label: "Raft Building", sub: "Team Collaboration Task" },
      { id: 3, aspect: "portrait", label: "Nature Trail", sub: "Leadership Walk" },
      { id: 4, aspect: "landscape", label: "Camp Bonfire", sub: "Reflection & Bonding" },
      { id: 5, aspect: "portrait", label: "Blindfold Task", sub: "Communication Exercise" },
      { id: 6, aspect: "landscape", label: "Group Challenge", sub: "Problem Solving Activity" },
    ],
  },
  {
    id: "conferences",
    label: "Conferences & Speaking",
    icon: "🎙️",
    color: COLORS.red,
    tagline: "On Stage. On Point. On Purpose.",
    stat: "80+",
    statLabel: "Speaking Engagements",
    description: "High-impact keynotes, panel discussions, and conference facilitation that spark thinking, shift perspectives, and leave audiences genuinely inspired.",
    items: [
      { id: 1, aspect: "landscape", label: "Keynote Address", sub: "National HR Summit" },
      { id: 2, aspect: "portrait", label: "Panel Facilitation", sub: "Education Leaders Forum" },
      { id: 3, aspect: "square", label: "TEDx Style Talk", sub: "Innovation Conference" },
      { id: 4, aspect: "landscape", label: "Audience Q&A", sub: "Live Interaction Session" },
      { id: 5, aspect: "square", label: "Award Night", sub: "Industry Recognition Event" },
      { id: 6, aspect: "portrait", label: "Workshop Stage", sub: "500-Person Auditorium" },
    ],
  },
  {
    id: "testimonials",
    label: "Participant Testimonials",
    icon: "💬",
    color: COLORS.orange,
    tagline: "Stories That Speak for Themselves",
    stat: "10K+",
    statLabel: "Lives Impacted",
    description: "Real voices, real transformation. Participants share candid reflections on how Nexus Framer programs changed the way they think, communicate, and lead.",
    items: [
      { id: 1, aspect: "square", label: "Arjun Mehta", sub: "\"This changed how I lead my team.\"" },
      { id: 2, aspect: "portrait", label: "Priya Sharma", sub: "\"Best training I've ever attended.\"" },
      { id: 3, aspect: "landscape", label: "Ravi Kumar", sub: "\"My confidence is unrecognisable now.\"" },
      { id: 4, aspect: "square", label: "Sneha Patel", sub: "\"I got promoted 3 months after.\"" },
      { id: 5, aspect: "landscape", label: "Deepak Nair", sub: "\"The EQ module was life-changing.\"" },
      { id: 6, aspect: "portrait", label: "Anita Rao", sub: "\"Our whole team transformed together.\"" },
    ],
  },
];

// Placeholder image component using colored gradient blocks
const PlaceholderImage = ({ color, icon, label, sub, aspect }) => {
  const [hovered, setHovered] = useState(false);
  const aspectMap = { landscape: "56.25%", portrait: "133%", square: "100%" };
  const padding = aspectMap[aspect] || "56.25%";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        paddingTop: padding,
        borderRadius: "3px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered ? `0 16px 40px ${color}30` : "0 2px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Gradient BG */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${color}18 0%, ${color}08 50%, ${color}22 100%)`,
        backgroundColor: COLORS.offWhite,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
      }}>
        {/* Diagonal lines texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, ${color}06 8px, ${color}06 9px)`,
          pointerEvents: "none",
        }} />

        {/* Corner accent */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "40px", height: "40px",
          borderTop: `3px solid ${color}`,
          borderLeft: `3px solid ${color}`,
          borderRadius: "3px 0 0 0",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: "40px", height: "40px",
          borderBottom: `3px solid ${color}30`,
          borderRight: `3px solid ${color}30`,
          borderRadius: "0 0 3px 0",
        }} />

        {/* Center icon */}
        <div style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          transform: hovered ? "scale(1.15)" : "scale(1)",
          transition: "transform 0.3s ease",
          position: "relative",
          zIndex: 1,
        }}>
          📷
        </div>

        {/* Image placeholder text */}
        <div style={{
          position: "relative", zIndex: 1,
          textAlign: "center",
          padding: "0 12px",
        }}>
          <div style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
            color: color,
            letterSpacing: "2px",
            lineHeight: 1.2,
          }}>
            {label}
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${color}ee 0%, ${color}99 40%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.35s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "clamp(12px, 2vw, 18px)",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
          color: COLORS.white,
          letterSpacing: "2px",
          lineHeight: 1.2,
          marginBottom: "4px",
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "transform 0.35s ease",
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(0.62rem, 1.2vw, 0.72rem)",
          color: "rgba(255,255,255,0.8)",
          letterSpacing: "1px",
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "transform 0.35s ease 0.05s",
        }}>
          {sub}
        </div>
      </div>
    </div>
  );
};

const GallerySection = ({ cat, index }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();

  // Mosaic layout: alternate patterns
  const layouts = [
    // Pattern A: 1 large left + 2 stacked right + 3 bottom row
    [
      { gridColumn: "1 / 3", gridRow: "1 / 2" },
      { gridColumn: "3 / 4", gridRow: "1 / 1" },
      { gridColumn: "3 / 4", gridRow: "2 / 2" },
      { gridColumn: "1 / 2", gridRow: "2 / 3" },
      { gridColumn: "2 / 3", gridRow: "2 / 3" },
      { gridColumn: "3 / 4", gridRow: "3 / 3" },
    ],
    // Pattern B: top 3 equal + 1 large bottom left + 2 right
    [
      { gridColumn: "1 / 2", gridRow: "1 / 1" },
      { gridColumn: "2 / 3", gridRow: "1 / 1" },
      { gridColumn: "3 / 4", gridRow: "1 / 1" },
      { gridColumn: "1 / 3", gridRow: "2 / 3" },
      { gridColumn: "3 / 4", gridRow: "2 / 2" },
      { gridColumn: "3 / 4", gridRow: "3 / 3" },
    ],
  ];

  const layout = layouts[index % 2];

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.8s ease ${0.1}s, transform 0.8s ease ${0.1}s`,
      }}
    >
      {/* Section Header Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? cat.color + "06" : COLORS.white,
          border: `1px solid ${hovered ? cat.color + "50" : "#e8e8e8"}`,
          borderTop: `3px solid ${cat.color}`,
          borderRadius: "3px",
          padding: "clamp(20px, 3vw, 32px)",
          marginBottom: "clamp(16px, 2.5vw, 24px)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: hovered ? `0 8px 30px ${cat.color}12` : "0 2px 10px rgba(0,0,0,0.04)",
        }}
      >
        {/* BG watermark */}
        <div style={{
          position: "absolute", bottom: "-8px", right: "10px",
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          fontSize: "5rem",
          color: cat.color + "07",
          lineHeight: 1,
          userSelect: "none", pointerEvents: "none",
          letterSpacing: "2px",
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover glow */}
        <div style={{
          position: "absolute", top: "-30px", right: "-30px",
          width: "120px", height: "120px", borderRadius: "50%",
          background: `radial-gradient(circle, ${cat.color}10, transparent 70%)`,
          opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{
              width: "50px", height: "50px",
              borderRadius: "12px",
              background: cat.color + "12",
              border: `1.5px solid ${cat.color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem", flexShrink: 0,
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}>
              {cat.icon}
            </div>
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.62rem", color: cat.color,
                letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2px",
              }}>
                {cat.tagline}
              </div>
              <h3 style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                color: COLORS.textDark, letterSpacing: "2px", lineHeight: 1,
              }}>
                {cat.label}
              </h3>
            </div>
          </div>

          {/* Stat + description */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <p style={{
              color: COLORS.textMid,
              fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
              lineHeight: 1.7,
              maxWidth: "400px",
            }}>
              {cat.description}
            </p>
            <div style={{
              padding: "10px 18px",
              background: cat.color + "08",
              border: `1px solid ${cat.color}20`,
              borderRadius: "2px",
              textAlign: "center",
              flexShrink: 0,
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "1.6rem", color: cat.color,
                letterSpacing: "2px", lineHeight: 1,
              }}>
                {cat.stat}
              </div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.6rem", color: COLORS.textLight,
                textTransform: "uppercase", letterSpacing: "2px", marginTop: "3px",
                whiteSpace: "nowrap",
              }}>
                {cat.statLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Animated divider */}
        <div style={{
          width: hovered ? "100%" : "48px", height: "2px",
          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}20)`,
          marginTop: "16px", transition: "width 0.5s ease", borderRadius: "1px",
        }} />
      </div>

      {/* Mosaic Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, auto)",
        gap: "clamp(8px, 1.5vw, 14px)",
      }}>
        {cat.items.map((item, i) => (
          <div
            key={item.id}
            style={{
              ...layout[i],
            }}
          >
            <PlaceholderImage
              color={cat.color}
              icon={cat.icon}
              label={item.label}
              sub={item.sub}
              aspect={item.aspect}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(null);
  const [lightbox, setLightbox] = useState(null);

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
          fontSize: "clamp(5rem, 16vw, 14rem)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.red}10`,
          userSelect: "none", pointerEvents: "none",
          lineHeight: 1, letterSpacing: "4px", whiteSpace: "nowrap",
        }}>
          GALLERY
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
                Real Moments. Real Impact.
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.92, letterSpacing: "3px",
            }}>
              <span style={{ display: "block", color: COLORS.textDark }}>OUR</span>
              <span style={{
                display: "block",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>GALLERY</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              marginTop: "28px",
              fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
              lineHeight: 1.85, color: COLORS.textMid, maxWidth: "620px",
            }}>
              A visual journey through the energy, emotion, and transformation that define every Nexus Framer program — from school workshops to corporate summits.
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
                { value: "6", label: "Gallery Categories", color: COLORS.red },
                { value: "10K+", label: "Lives Captured", color: COLORS.orange },
                { value: "200+", label: "Programs Documented", color: COLORS.green },
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
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                document.getElementById(`section-${cat.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveTab(cat.id);
              }}
              style={{
                padding: "18px 20px",
                background: "transparent",
                border: "none",
                borderBottom: `3px solid ${activeTab === cat.id ? cat.color : "transparent"}`,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.82rem, 1.6vw, 0.95rem)",
                letterSpacing: "2px",
                color: activeTab === cat.id ? cat.color : COLORS.textLight,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: "7px",
                whiteSpace: "nowrap",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.color = cat.color;
                  e.currentTarget.style.borderBottomColor = cat.color + "50";
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== cat.id) {
                  e.currentTarget.style.color = COLORS.textLight;
                  e.currentTarget.style.borderBottomColor = "transparent";
                }
              }}
            >
              <span style={{ fontSize: "0.9rem" }}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── GALLERY SECTIONS ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 10vw, 96px)" }}>
          {categories.map((cat, i) => (
            <div key={cat.id} id={`section-${cat.id}`}>
              <GallerySection cat={cat} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{
        padding: "clamp(40px, 6vw, 70px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.orange}, ${COLORS.red}, transparent)`,
        }} />

        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "clamp(14px, 2.5vw, 20px)",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            {[
              { val: "6+", label: "Program Categories", color: COLORS.red, icon: "🏷️" },
              { val: "500+", label: "Schools Reached", color: COLORS.orange, icon: "🏫" },
              { val: "300+", label: "Colleges Partnered", color: COLORS.green, icon: "🎓" },
              { val: "200+", label: "Corporate Partners", color: COLORS.maroon, icon: "🏢" },
              { val: "80+", label: "Speaking Events", color: COLORS.red, icon: "🎙️" },
              { val: "10K+", label: "Lives Impacted", color: COLORS.orange, icon: "✨" },
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
                  <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                    color: s.color, letterSpacing: "2px", lineHeight: 1,
                  }}>
                    {s.val}
                  </div>
                  <div style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.62rem", color: COLORS.textLight,
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

      {/* ── WHY WE DOCUMENT ── */}
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
              fontSize: "0.72rem", color: COLORS.orange,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              Why Every Moment Matters
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              PROOF IS IN THE <span style={{ color: COLORS.orange }}>PICTURE</span>
            </h2>
            <p style={{
              color: COLORS.textLight, maxWidth: "520px",
              margin: "14px auto 0", fontSize: "clamp(0.85rem, 1.5vw, 1rem)", lineHeight: 1.75,
            }}>
              Every photograph tells a story of a person who dared to grow. These are not posed shots — they are real transformations, captured in real time.
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
            { icon: "📸", title: "Authentic Moments", desc: "Candid captures of real learning, real breakthroughs, and real human connection.", color: COLORS.red },
            { icon: "🎞️", title: "Every Program", desc: "From intimate workshops to 500-person auditoriums — all documented with care.", color: COLORS.orange },
            { icon: "💫", title: "Transformation Stories", desc: "Visual proof that skills develop, confidence grows, and people genuinely change.", color: COLORS.green },
            { icon: "🌍", title: "Pan-India Reach", desc: "Memories from schools, colleges, and corporates across every corner of India.", color: COLORS.maroon },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div style={{
                background: COLORS.offWhite,
                border: "1px solid #e8e8e8",
                borderRadius: "2px",
                padding: "clamp(20px, 3vw, 28px)",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: item.color + "12",
                  border: `1.5px solid ${item.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", margin: "0 auto 16px",
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.15rem", color: item.color,
                  letterSpacing: "2px", marginBottom: "10px",
                }}>
                  {item.title}
                </h3>
                <p style={{ color: COLORS.textLight, fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
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
              Be Part of the Story
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "3px", color: COLORS.white, marginBottom: "16px", lineHeight: 1,
            }}>
              YOUR TRANSFORMATION AWAITS
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.75,
            }}>
              Join thousands of learners and leaders whose moments of growth are captured in these pages. Let your story begin here.
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
                Enroll Now
              </a>
              <a
                href="#section-school"
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
                View All Photos
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
        @media (max-width: 768px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
        @media (max-width: 520px) {
          .mosaic-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}