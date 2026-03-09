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

const contactReasons = [
  { id: "training", label: "Training Programs", icon: "🎯", color: COLORS.red, desc: "Enquire about school, college, corporate, or professional development training programs." },
  { id: "enrollment", label: "Course Enrollment", icon: "📋", color: COLORS.orange, desc: "Register for an upcoming workshop, bootcamp, or online learning program." },
  { id: "partnership", label: "Institutional Partnerships", icon: "🤝", color: COLORS.green, desc: "Explore long-term collaboration opportunities for schools, colleges, and universities." },
  { id: "corporate", label: "Corporate Consultations", icon: "🏢", color: COLORS.maroon, desc: "Discuss custom L&D strategies, leadership interventions, and team performance programs." },
];

const offices = [
  {
    city: "Hyderabad",
    icon: "🏙️",
    color: COLORS.red,
    tagline: "Head Office",
    desc: "Our primary operations hub — serving corporates, institutions, and professionals across Telangana and beyond.",
    features: ["Corporate Training Hub", "Leadership Programs", "Pan-India Coordination"],
  },
  {
    city: "Vizag",
    icon: "🌊",
    color: COLORS.orange,
    tagline: "Regional Office",
    desc: "Actively serving educational institutions, government bodies, and the growing corporate sector of Andhra Pradesh.",
    features: ["Educational Programs", "Government Tie-ups", "Regional Outreach"],
  },
];

const InputField = ({ label, type = "text", placeholder, required, color = COLORS.red, multiline = false, options }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const baseStyle = {
    width: "100%",
    padding: "13px 16px",
    border: `1.5px solid ${focused ? color : "#e0e0e0"}`,
    borderRadius: "2px",
    fontFamily: "'Georgia', serif",
    fontSize: "0.9rem",
    color: COLORS.textDark,
    background: focused ? color + "04" : COLORS.white,
    outline: "none",
    transition: "all 0.25s ease",
    boxShadow: focused ? `0 0 0 3px ${color}12` : "none",
    resize: multiline ? "vertical" : "none",
    minHeight: multiline ? "120px" : "auto",
    appearance: "none",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "0.65rem",
        color: focused ? color : COLORS.textLight,
        letterSpacing: "3px",
        textTransform: "uppercase",
        transition: "color 0.25s ease",
      }}>
        {label}{required && <span style={{ color: COLORS.red, marginLeft: "3px" }}>*</span>}
      </label>
      {options ? (
        <select
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...baseStyle, cursor: "pointer" }}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      ) : multiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  );
};

export default function ContactUS() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredReason, setHoveredReason] = useState(null);
  const [hoveredOffice, setHoveredOffice] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const tabs = [
    { id: "reach-out", label: "Reach Out", icon: "📬" },
    { id: "offices", label: "Our Offices", icon: "📍" },
    { id: "form", label: "Send a Message", icon: "✉️" },
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
          CONTACT
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
                Let's Connect
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.92, letterSpacing: "3px",
            }}>
              <span style={{ display: "block", color: COLORS.textDark }}>GET IN</span>
              <span style={{
                display: "block",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>TOUCH</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p style={{
              marginTop: "28px",
              fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
              lineHeight: 1.85, color: COLORS.textMid, maxWidth: "620px",
            }}>
              Whether you're exploring training programs, enrolling in a course, or building a long-term institutional partnership — we're here, ready to help. Reach out and let's start something meaningful.
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
                { value: "2", label: "Locations", color: COLORS.red },
                { value: "4", label: "Ways to Connect", color: COLORS.orange },
                { value: "24hr", label: "Response Time", color: COLORS.green },
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
                padding: "18px 28px",
                background: "transparent",
                border: "none",
                borderBottom: `3px solid ${activeTab === tab.id ? COLORS.red : "transparent"}`,
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.88rem, 1.7vw, 1.05rem)",
                letterSpacing: "2px",
                color: activeTab === tab.id ? COLORS.red : COLORS.textLight,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px",
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
              <span style={{ fontSize: "1rem" }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── CONTACT INFO + REASONS ── */}
      <section
        id="section-reach-out"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.white,
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(40px, 7vw, 80px)",
          alignItems: "flex-start",
          maxWidth: "1200px",
        }}>

          {/* Left: Contact details */}
          <FadeLeft>
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.72rem", color: COLORS.red,
                letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
              }}>
                Direct Contact
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                letterSpacing: "3px", color: COLORS.textDark,
                lineHeight: 1, marginBottom: "8px",
              }}>
                REACH US <span style={{ color: COLORS.red }}>DIRECTLY</span>
              </h2>
              <div style={{
                width: "60px", height: "3px",
                background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
                marginBottom: "32px", borderRadius: "2px",
              }} />

              {/* Contact cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 91331 93535",
                    sub: "Mon–Sat, 9AM–6PM IST",
                    color: COLORS.red,
                    href: "tel:+919133193535",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "contact@nexusframer.com",
                    sub: "We reply within 24 hours",
                    color: COLORS.orange,
                    href: "mailto:contact@nexusframer.com",
                  },
                  {
                    icon: "📍",
                    label: "Locations",
                    value: "Hyderabad & Vizag",
                    sub: "Telangana & Andhra Pradesh",
                    color: COLORS.green,
                    href: null,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href || "#"}
                    onMouseEnter={() => setHoveredContact(i)}
                    onMouseLeave={() => setHoveredContact(null)}
                    style={{
                      display: "flex", alignItems: "center", gap: "16px",
                      padding: "clamp(16px, 2.5vw, 22px)",
                      background: hoveredContact === i ? item.color + "06" : COLORS.offWhite,
                      border: `1px solid ${hoveredContact === i ? item.color + "50" : "#e8e8e8"}`,
                      borderLeft: `3px solid ${item.color}`,
                      borderRadius: "2px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      boxShadow: hoveredContact === i ? `0 6px 24px ${item.color}12` : "0 2px 8px rgba(0,0,0,0.04)",
                      cursor: item.href ? "pointer" : "default",
                    }}
                  >
                    <div style={{
                      width: "50px", height: "50px", borderRadius: "12px",
                      background: item.color + "12",
                      border: `1.5px solid ${item.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.5rem", flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: hoveredContact === i ? "scale(1.08)" : "scale(1)",
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.6rem", color: item.color,
                        letterSpacing: "3px", textTransform: "uppercase", marginBottom: "3px",
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: COLORS.textDark, letterSpacing: "1px", lineHeight: 1.2,
                      }}>
                        {item.value}
                      </div>
                      <div style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.62rem", color: COLORS.textLight,
                        letterSpacing: "1px", marginTop: "3px",
                      }}>
                        {item.sub}
                      </div>
                    </div>
                    {item.href && (
                      <div style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        fontSize: "1.2rem", color: item.color,
                        opacity: hoveredContact === i ? 1 : 0.3,
                        transition: "opacity 0.3s ease",
                      }}>
                        →
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* Social strip placeholder */}
              <div style={{
                padding: "20px",
                background: COLORS.offWhite,
                border: "1px solid #e8e8e8",
                borderTop: `3px solid ${COLORS.yellow}`,
                borderRadius: "2px",
              }}>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.62rem", color: COLORS.textLight,
                  letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px",
                }}>
                  Also Find Us On
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {[
                    { name: "LinkedIn", icon: "💼", color: COLORS.green },
                    { name: "Instagram", icon: "📸", color: COLORS.orange },
                    { name: "YouTube", icon: "▶️", color: COLORS.red },
                    { name: "WhatsApp", icon: "💬", color: COLORS.green },
                  ].map((s, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: "7px",
                      padding: "8px 14px",
                      background: s.color + "08",
                      border: `1px solid ${s.color}25`,
                      borderRadius: "1px",
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.65rem",
                      color: s.color,
                      letterSpacing: "1px",
                      cursor: "pointer",
                    }}>
                      <span style={{ fontSize: "0.9rem" }}>{s.icon}</span>
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeLeft>

          {/* Right: Reasons to contact */}
          <FadeRight delay={0.15}>
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.72rem", color: COLORS.orange,
                letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
              }}>
                How Can We Help?
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                letterSpacing: "3px", color: COLORS.textDark,
                lineHeight: 1, marginBottom: "8px",
              }}>
                CONTACT US <span style={{ color: COLORS.orange }}>FOR</span>
              </h2>
              <div style={{
                width: "60px", height: "3px",
                background: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.red})`,
                marginBottom: "32px", borderRadius: "2px",
              }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {contactReasons.map((reason, i) => (
                  <div
                    key={reason.id}
                    onMouseEnter={() => setHoveredReason(i)}
                    onMouseLeave={() => setHoveredReason(null)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "16px",
                      padding: "clamp(18px, 2.5vw, 24px)",
                      background: hoveredReason === i ? reason.color + "06" : COLORS.white,
                      border: `1px solid ${hoveredReason === i ? reason.color + "50" : "#e8e8e8"}`,
                      borderTop: `3px solid ${reason.color}`,
                      borderRadius: "3px",
                      cursor: "default",
                      transition: "all 0.3s ease",
                      boxShadow: hoveredReason === i ? `0 8px 28px ${reason.color}12` : "0 2px 8px rgba(0,0,0,0.04)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Animated divider */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0,
                      width: hoveredReason === i ? "100%" : "0%",
                      height: "2px",
                      background: `linear-gradient(90deg, ${reason.color}, ${reason.color}30)`,
                      transition: "width 0.5s ease",
                    }} />

                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: reason.color + "12",
                      border: `1.5px solid ${reason.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.4rem", flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: hoveredReason === i ? "scale(1.08)" : "scale(1)",
                    }}>
                      {reason.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: reason.color, letterSpacing: "2px",
                        lineHeight: 1, marginBottom: "8px",
                      }}>
                        {reason.label}
                      </h3>
                      <p style={{
                        color: COLORS.textMid,
                        fontSize: "clamp(0.8rem, 1.4vw, 0.88rem)",
                        lineHeight: 1.7,
                      }}>
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeRight>
        </div>
      </section>

      {/* ── OUR OFFICES ── */}
      <section
        id="section-offices"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.offWhite,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.green}, ${COLORS.orange}, transparent)`,
        }} />

        <FadeUp>
          <div style={{ marginBottom: "clamp(40px, 6vw, 60px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem", color: COLORS.green,
              letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
            }}>
              Where We Are
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px", color: COLORS.textDark,
            }}>
              OUR <span style={{ color: COLORS.green }}>OFFICES</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(20px, 4vw, 32px)",
          maxWidth: "1100px",
        }}>
          {offices.map((office, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div
                onMouseEnter={() => setHoveredOffice(i)}
                onMouseLeave={() => setHoveredOffice(null)}
                style={{
                  background: hoveredOffice === i ? office.color + "06" : COLORS.white,
                  border: `1px solid ${hoveredOffice === i ? office.color + "60" : "#e8e8e8"}`,
                  borderTop: `3px solid ${office.color}`,
                  borderRadius: "3px",
                  padding: "clamp(28px, 4vw, 40px)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: hoveredOffice === i ? `0 12px 40px ${office.color}14` : "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* BG watermark city name */}
                <div style={{
                  position: "absolute", bottom: "-12px", right: "10px",
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "4.5rem", color: office.color + "07",
                  lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "2px",
                }}>
                  {office.city.toUpperCase()}
                </div>

                {/* Hover glow */}
                <div style={{
                  position: "absolute", top: "-40px", right: "-40px",
                  width: "160px", height: "160px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${office.color}12, transparent 70%)`,
                  opacity: hoveredOffice === i ? 1 : 0,
                  transition: "opacity 0.4s ease", pointerEvents: "none",
                }} />

                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <div style={{
                    width: "60px", height: "60px", borderRadius: "14px",
                    background: office.color + "12",
                    border: `1.5px solid ${office.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.8rem", flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: hoveredOffice === i ? "scale(1.08)" : "scale(1)",
                  }}>
                    {office.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.62rem", color: office.color,
                      letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2px",
                    }}>
                      {office.tagline}
                    </div>
                    <h3 style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                      color: COLORS.textDark, letterSpacing: "3px", lineHeight: 1,
                    }}>
                      {office.city}
                    </h3>
                  </div>
                </div>

                {/* Animated divider */}
                <div style={{
                  width: hoveredOffice === i ? "100%" : "48px", height: "2px",
                  background: `linear-gradient(90deg, ${office.color}, ${office.color}20)`,
                  marginBottom: "18px", transition: "width 0.5s ease", borderRadius: "1px",
                }} />

                <p style={{
                  color: COLORS.textMid,
                  fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                  lineHeight: 1.8, marginBottom: "20px",
                }}>
                  {office.desc}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px" }}>
                  {office.features.map((f, fi) => (
                    <div key={fi} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "8px 12px",
                      background: office.color + "06",
                      border: `1px solid ${office.color}15`,
                      borderRadius: "2px",
                    }}>
                      <div style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: office.color, flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.72rem", color: COLORS.textMid, letterSpacing: "0.5px",
                      }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div style={{
                  background: `linear-gradient(135deg, ${office.color}10, ${office.color}06)`,
                  border: `1px solid ${office.color}20`,
                  borderRadius: "2px",
                  padding: "20px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 18px, ${office.color}08 18px, ${office.color}08 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, ${office.color}08 18px, ${office.color}08 19px)`,
                    position: "absolute", inset: 0, borderRadius: "2px",
                    pointerEvents: "none",
                  }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📍</div>
                    <div style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "1rem", color: office.color, letterSpacing: "2px",
                    }}>
                      {office.city}, India
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.6rem", color: COLORS.textLight,
                      letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px",
                    }}>
                      View on Maps →
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section
        id="section-form"
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 8vw, 120px)",
          background: COLORS.white,
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(40px, 7vw, 80px)",
          alignItems: "flex-start",
          maxWidth: "1200px",
        }}>

          {/* Left: Form intro */}
          <FadeLeft>
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.72rem", color: COLORS.maroon,
                letterSpacing: "4px", textTransform: "uppercase", marginBottom: "10px",
              }}>
                Send a Message
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "3px", color: COLORS.textDark,
                lineHeight: 1, marginBottom: "8px",
              }}>
                LET'S START A <span style={{ color: COLORS.maroon }}>CONVERSATION</span>
              </h2>
              <div style={{
                width: "60px", height: "3px",
                background: `linear-gradient(90deg, ${COLORS.maroon}, ${COLORS.red})`,
                marginBottom: "28px", borderRadius: "2px",
              }} />

              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.9rem, 1.7vw, 1.05rem)",
                lineHeight: 1.9, marginBottom: "32px",
              }}>
                Fill in the form and our team will get back to you within 24 hours. Whether it's a quick question or a full program enquiry — we're all ears.
              </p>

              {/* What to expect */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                {[
                  { icon: "⏱️", text: "Response within 24 hours on all business days", color: COLORS.red },
                  { icon: "🎯", text: "Personalised reply tailored to your specific enquiry", color: COLORS.orange },
                  { icon: "🔒", text: "Your details are never shared with third parties", color: COLORS.green },
                  { icon: "📞", text: "A follow-up call can be requested in your message", color: COLORS.maroon },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "12px 16px",
                    background: COLORS.offWhite,
                    border: `1px solid ${item.color}15`,
                    borderLeft: `3px solid ${item.color}`,
                    borderRadius: "2px",
                  }}>
                    <span style={{ fontSize: "1.1rem", flexShrink: 0, paddingTop: "1px" }}>{item.icon}</span>
                    <p style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.72rem", color: COLORS.textMid,
                      letterSpacing: "0.5px", lineHeight: 1.6,
                    }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick contact chips */}
              <div style={{
                padding: "20px",
                background: COLORS.offWhite,
                border: `1px solid ${COLORS.red}15`,
                borderTop: `3px solid ${COLORS.red}`,
                borderRadius: "2px",
              }}>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.6rem", color: COLORS.textLight,
                  letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px",
                }}>
                  Or Reach Us Directly
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <a href="tel:+919133193535" style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    textDecoration: "none",
                  }}>
                    <span style={{ fontSize: "1rem" }}>📞</span>
                    <span style={{
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "1.1rem", color: COLORS.red, letterSpacing: "2px",
                    }}>
                      +91 91331 93535
                    </span>
                  </a>
                  <a href="mailto:contact@nexusframer.com" style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    textDecoration: "none",
                  }}>
                    <span style={{ fontSize: "1rem" }}>✉️</span>
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.82rem", color: COLORS.orange, letterSpacing: "1px",
                    }}>
                      contact@nexusframer.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </FadeLeft>

          {/* Right: Form */}
          <FadeRight delay={0.15}>
            {submitted ? (
              <div style={{
                background: COLORS.green + "08",
                border: `1px solid ${COLORS.green}30`,
                borderTop: `3px solid ${COLORS.green}`,
                borderRadius: "3px",
                padding: "clamp(40px, 6vw, 60px)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "2rem", color: COLORS.green,
                  letterSpacing: "3px", marginBottom: "12px",
                }}>
                  MESSAGE SENT!
                </h3>
                <p style={{
                  color: COLORS.textMid, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "24px",
                }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours with a personalised response.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: "12px 32px",
                    background: COLORS.green,
                    color: COLORS.white,
                    border: "none",
                    borderRadius: "1px",
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    fontSize: "1rem", letterSpacing: "3px",
                    cursor: "pointer",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div style={{
                background: COLORS.white,
                border: "1px solid #e8e8e8",
                borderTop: `3px solid ${COLORS.maroon}`,
                borderRadius: "3px",
                padding: "clamp(28px, 4vw, 44px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "1.3rem", color: COLORS.maroon,
                  letterSpacing: "3px", marginBottom: "28px",
                }}>
                  ENQUIRY FORM
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
                    gap: "16px",
                  }}>
                    <InputField label="Full Name" placeholder="Your full name" required color={COLORS.maroon} />
                    <InputField label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" required color={COLORS.maroon} />
                  </div>

                  <InputField label="Email Address" type="email" placeholder="your@email.com" required color={COLORS.maroon} />

                  <InputField
                    label="Organisation / Institution"
                    placeholder="Company, school, or college name"
                    color={COLORS.maroon}
                  />

                  <InputField
                    label="I'm Reaching Out For"
                    required
                    color={COLORS.maroon}
                    options={[
                      "Training Programs",
                      "Course Enrollment",
                      "Institutional Partnership",
                      "Corporate Consultation",
                      "General Enquiry",
                    ]}
                  />

                  <InputField
                    label="Your Message"
                    placeholder="Tell us about your goals, team size, timeline, or any specific requirements..."
                    required
                    multiline
                    color={COLORS.maroon}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{
                      width: "100%",
                      padding: "16px",
                      background: submitting
                        ? COLORS.textLight
                        : `linear-gradient(135deg, ${COLORS.maroon}, ${COLORS.red})`,
                      color: COLORS.white,
                      border: "none",
                      borderRadius: "2px",
                      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                      fontSize: "1.15rem",
                      letterSpacing: "4px",
                      cursor: submitting ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: submitting ? "none" : `0 4px 18px ${COLORS.maroon}30`,
                    }}
                    onMouseEnter={e => {
                      if (!submitting) e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    {submitting ? "SENDING..." : "SEND MESSAGE →"}
                  </button>

                  <p style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.6rem", color: COLORS.textLight,
                    textAlign: "center", letterSpacing: "1px", lineHeight: 1.6,
                  }}>
                    By submitting this form, you agree to be contacted by Nexus Framer regarding your enquiry.
                  </p>
                </div>
              </div>
            )}
          </FadeRight>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section style={{
        padding: "clamp(40px, 6vw, 64px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, transparent, ${COLORS.orange}, ${COLORS.red}, transparent)`,
        }} />
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
            gap: "clamp(14px, 2.5vw, 20px)",
            maxWidth: "1000px", margin: "0 auto",
          }}>
            {[
              { val: "24hr", label: "Response Time", color: COLORS.red, icon: "⚡" },
              { val: "2", label: "Office Locations", color: COLORS.orange, icon: "📍" },
              { val: "10K+", label: "Trained Individuals", color: COLORS.green, icon: "👥" },
              { val: "200+", label: "Partner Institutions", color: COLORS.maroon, icon: "🏛️" },
              { val: "100%", label: "Custom Programs", color: COLORS.red, icon: "🎯" },
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
        position: "relative", overflow: "hidden", textAlign: "center",
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
              Don't Wait. Start Today.
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "3px", color: COLORS.white, marginBottom: "16px", lineHeight: 1,
            }}>
              YOUR TRANSFORMATION STARTS WITH A CALL
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.75,
            }}>
              One conversation can change the trajectory of your career, your team, or your institution. We're ready when you are.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="tel:+919133193535"
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
                Call Now
              </a>
              <a
                href="mailto:contact@nexusframer.com"
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
                Send an Email
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
        input::placeholder, textarea::placeholder, select { font-family: 'Georgia', serif; }
        @media (max-width: 640px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </div>
  );
}