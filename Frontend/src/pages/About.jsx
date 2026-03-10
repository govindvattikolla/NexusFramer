import { useState, useEffect, useRef } from "react";

const COLORS = {
  red: "#DE080A",
  yellow: "#FFD801",
  green: "#006400",
  orange: "#FF6700",
  maroon: "#870000",
  white: "#FFFFFF",
  offWhite: "#F6F6F6",
  lightGray: "#EEEEEE",
  dark: "#0A0A0A",
  textDark: "#1A1A1A",
  textMid: "#444444",
  textLight: "#666666",
};

const useInView = (threshold = 0.15) => {
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

const FadeUp = ({ children, delay = 0, style = {} }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const StatCard = ({ number, label, color, delay }) => {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  const target = parseInt(number);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.85)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        background: COLORS.white,
        border: `1px solid ${color}30`,
        borderTop: `3px solid ${color}`,
        borderRadius: "2px",
        padding: "clamp(20px, 4vw, 36px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "80px", height: "80px",
        background: `radial-gradient(circle at top right, ${color}12, transparent 70%)`,
      }} />
      <div style={{
        fontSize: "clamp(2rem, 6vw, 3.5rem)",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        color: color,
        lineHeight: 1,
        letterSpacing: "2px",
      }}>
        {count}+
      </div>
      <div style={{
        fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
        color: COLORS.textLight,
        marginTop: "8px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontFamily: "'Courier New', monospace",
      }}>
        {label}
      </div>
    </div>
  );
};

const PillarCard = ({ icon, title, desc, color, delay }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        background: hovered ? color + "08" : COLORS.white,
        border: `1px solid ${hovered ? color : "#e0e0e0"}`,
        borderRadius: "2px",
        padding: "clamp(20px, 4vw, 32px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered ? `0 8px 32px ${color}18` : "0 2px 12px rgba(0,0,0,0.05)",
        transition: `all 0.4s ease ${delay}s`,
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? `linear-gradient(135deg, ${color}05, transparent)` : "transparent",
        transition: "all 0.4s ease",
      }} />
      <div style={{
        fontSize: "2rem", marginBottom: "16px",
        filter: hovered ? `drop-shadow(0 0 6px ${color}80)` : "none",
        transition: "filter 0.3s ease",
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
        color: color,
        letterSpacing: "2px",
        marginBottom: "12px",
        position: "relative",
      }}>
        {title}
      </h3>
      <p style={{
        color: COLORS.textMid,
        fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
        lineHeight: 1.7,
        position: "relative",
      }}>
        {desc}
      </p>
    </div>
  );
};

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const pillars = [
    { icon: "🧠", title: "Behavioural Science", desc: "Evidence-based frameworks that decode human behaviour to build lasting habits and mindsets.", color: COLORS.red },
    { icon: "🏆", title: "Leadership Frameworks", desc: "Structured methodologies that cultivate visionary leaders across every tier of an organisation.", color: COLORS.orange },
    { icon: "💡", title: "Emotional Intelligence", desc: "Deep EQ training that sharpens self-awareness, empathy, and interpersonal effectiveness.", color: COLORS.yellow },
    { icon: "🌍", title: "Real-World Insights", desc: "Industry exposure and experiential modules bridging the gap between classrooms and careers.", color: COLORS.green },
  ];

  const stats = [
    { number: "50", label: "Programs Delivered", color: COLORS.red },
    { number: "10000", label: "Lives Transformed", color: COLORS.orange },
    { number: "200", label: "Institutional Partners", color: COLORS.yellow },
    { number: "25", label: "Industry Sectors", color: COLORS.green },
  ];

  return (
    <div style={{ background: COLORS.white, color: COLORS.textDark, fontFamily: "'Georgia', serif", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: COLORS.white,
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 8vw, 120px)",
      }}>
        {/* Subtle diagonal tint */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "55%", height: "100%",
          background: `linear-gradient(135deg, transparent 40%, ${COLORS.red}06 60%, ${COLORS.orange}08 100%)`,
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }} />
        {/* Parallax bars */}
        {[COLORS.red, COLORS.orange, COLORS.yellow].map((c, i) => (
          <div key={i} style={{
            position: "absolute", right: `${10 + i * 6}%`, top: 0, bottom: 0,
            width: "4px",
            background: `linear-gradient(to bottom, transparent, ${c}40, transparent)`,
            transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
            opacity: 0.5,
          }} />
        ))}
        {/* Ghost text */}
        <div style={{
          position: "absolute", right: "-2%", top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(6rem, 18vw, 18rem)",
          fontFamily: "'Bebas Neue', 'Impact', sans-serif",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.red}30`,
          letterSpacing: "4px",
          userSelect: "none",
          lineHeight: 1,
          pointerEvents: "none",
        }}>
          NEXUS <br /> FRAMER
        </div>

        <div style={{ position: "relative", maxWidth: "760px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginBottom: "24px",
            animation: "fadeDown 0.8s ease forwards",
          }}>
            <div style={{ width: "32px", height: "2px", background: COLORS.red }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
              color: COLORS.red,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}>
              Global Training Enterprise
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            lineHeight: 0.9,
            letterSpacing: "3px",
            animation: "fadeUp 0.9s ease 0.1s both",
          }}>
            <span style={{ display: "block", color: COLORS.textDark }}>ABOUT</span>
            <span style={{
              display: "block",
              background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>NEXUS FRAMER</span>
           
          </h1>

          <p style={{
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            lineHeight: 1.8,
            color: COLORS.textMid,
            maxWidth: "560px",
            marginTop: "32px",
            marginBottom: "44px",
            animation: "fadeUp 0.9s ease 0.3s both",
          }}>
            A global training enterprise focused on skill development across every stage of life - empowering individuals and institutions to unlock their full potential.
          </p>

          <div style={{
            display: "flex", gap: "16px", flexWrap: "wrap",
            animation: "fadeUp 0.9s ease 0.5s both",
          }}>
            <a href="#mission" style={{
              padding: "14px 36px",
              background: COLORS.red,
              color: COLORS.white,
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "3px",
              textDecoration: "none",
              borderRadius: "1px",
              transition: "background 0.3s",
            }}
              onMouseEnter={e => e.target.style.background = COLORS.maroon}
              onMouseLeave={e => e.target.style.background = COLORS.red}
            >
              Our Mission
            </a>
            <a href="#pillars" style={{
              padding: "14px 36px",
              border: `1.5px solid ${COLORS.orange}`,
              color: COLORS.orange,
              background: "transparent",
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "3px",
              textDecoration: "none",
              borderRadius: "1px",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.target.style.background = COLORS.orange; e.target.style.color = COLORS.white; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = COLORS.orange; }}
            >
              What We Do
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "40px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          animation: "bounce 2s infinite",
        }}>
          <div style={{ width: "1px", height: "50px", background: `linear-gradient(to bottom, ${COLORS.red}, transparent)` }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS.red }} />
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
        position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
          width: "4px", height: "60%",
          background: `linear-gradient(to bottom, transparent, ${COLORS.red}, ${COLORS.orange}, transparent)`,
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <FadeUp>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.75rem",
              color: COLORS.orange,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <div style={{ width: "24px", height: "1px", background: COLORS.orange }} />
              Who We Are
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "2px",
              marginBottom: "24px",
              color: COLORS.textDark,
            }}>
              TRANSFORMING POTENTIAL INTO{" "}
              <span style={{ color: COLORS.red }}>PERFORMANCE</span>
            </h2>
            <p style={{ color: COLORS.textMid, lineHeight: 1.9, fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", marginBottom: "20px" }}>
              Nexus Framer is a global training enterprise focused on skill development across every stage of life. We help individuals and institutions unlock their full potential through experiential training that integrates behavioural science, leadership frameworks, emotional intelligence, and real-world insights.
            </p>
            <p style={{ color: COLORS.textMid, lineHeight: 1.9, fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}>
              Our programs are practical, engaging, and designed to create measurable transformation — not just knowledge transfer.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {stats.map((s, i) => (
                <StatCard key={i} {...s} delay={i * 0.12} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section id="mission" style={{
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: "-100px", right: "-100px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.red}05, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 72px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.75rem",
              color: COLORS.maroon,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Our Purpose
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              VISION & <span style={{ color: COLORS.maroon }}>MISSION</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(24px, 4vw, 40px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {/* Vision */}
          <FadeUp delay={0.1}>
            <div style={{
              background: COLORS.offWhite,
              border: `1px solid ${COLORS.yellow}60`,
              borderLeft: `4px solid ${COLORS.yellow}`,
              borderRadius: "2px",
              padding: "clamp(28px, 5vw, 48px)",
              position: "relative",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}>
              <div style={{
                position: "absolute", top: "-20px", right: "-20px",
                width: "120px", height: "120px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${COLORS.yellow}20, transparent 70%)`,
              }} />
              <div style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                color: "#7a6000",
                letterSpacing: "5px",
                marginBottom: "20px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <span style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  border: `2px solid ${COLORS.yellow}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                  background: COLORS.yellow + "22",
                }}>👁</span>
                VISION
              </div>
              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                lineHeight: 1.85,
                fontStyle: "italic",
              }}>
                "To build bridges between schools, colleges, and the real world by equipping individuals with the skills required to succeed in industries, workplaces, and entrepreneurial journeys."
              </p>
            </div>
          </FadeUp>

          {/* Mission */}
          <FadeUp delay={0.25}>
            <div style={{
              background: COLORS.offWhite,
              border: `1px solid ${COLORS.red}25`,
              borderLeft: `4px solid ${COLORS.red}`,
              borderRadius: "2px",
              padding: "clamp(28px, 5vw, 48px)",
              position: "relative",
              overflow: "hidden",
              height: "100%",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}>
              <div style={{
                position: "absolute", top: "-20px", right: "-20px",
                width: "120px", height: "120px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${COLORS.red}10, transparent 70%)`,
              }} />
              <div style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                color: COLORS.red,
                letterSpacing: "5px",
                marginBottom: "20px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <span style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  border: `2px solid ${COLORS.red}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                  background: COLORS.red + "10",
                }}>🎯</span>
                MISSION
              </div>
              <p style={{
                color: COLORS.textMid,
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                lineHeight: 1.85,
                fontStyle: "italic",
              }}>
                "To empower individuals and institutions with practical skills, modern mindsets, and transformative learning experiences that prepare them for real-world success."
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section id="pillars" style={{
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)",
        background: COLORS.offWhite,
      }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 72px)" }}>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.75rem",
              color: COLORS.green,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Our Methodology
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              THE FOUR <span style={{ color: COLORS.green }}>PILLARS</span>
            </h2>
            <p style={{ color: COLORS.textLight, maxWidth: "520px", margin: "16px auto 0", fontSize: "clamp(0.85rem, 1.5vw, 1rem)", lineHeight: 1.7 }}>
              Every program is built on four integrated pillars that create holistic, lasting transformation.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "clamp(16px, 3vw, 24px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {pillars.map((p, i) => (
            <PillarCard key={i} {...p} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── WHAT SETS US APART ── */}
      <section style={{
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 8vw, 120px)",
        background: COLORS.white,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Rainbow top bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.orange}, ${COLORS.yellow}, ${COLORS.green})`,
        }} />

        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "3px",
              color: COLORS.textDark,
            }}>
              WHAT SETS US <span style={{ color: COLORS.orange }}>APART</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(16px, 3vw, 32px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {[
            { label: "Experiential Learning", desc: "Programs designed for doing, not just listening — every session drives active participation.", color: COLORS.red, num: "01" },
            { label: "Measurable Impact", desc: "Every module is benchmarked with pre/post assessments to track real transformation.", color: COLORS.orange, num: "02" },
            { label: "Stage-Specific Design", desc: "Programs tailored for students, early professionals, mid-career leaders, and executives.", color: COLORS.yellow, num: "03" },
            { label: "Institution-Ready", desc: "White-labelled and scalable solutions built for schools, colleges, and corporates alike.", color: COLORS.green, num: "04" },
            { label: "Interdisciplinary Approach", desc: "We blend psychology, business acumen, communication science, and industry exposure.", color: COLORS.maroon, num: "05" },
            { label: "Global Perspective", desc: "Case studies and mentors from global industries ensuring international-grade readiness.", color: COLORS.red, num: "06" },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div style={{
                padding: "clamp(20px, 3vw, 28px)",
                borderBottom: `2px solid ${item.color}20`,
                borderLeft: `2px solid ${item.color}18`,
                background: COLORS.white,
                position: "relative",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "3rem",
                  color: `${item.color}12`,
                  lineHeight: 1,
                  position: "absolute",
                  top: "12px", right: "16px",
                  letterSpacing: "2px",
                }}>
                  {item.num}
                </div>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: item.color,
                  marginBottom: "16px",
                  boxShadow: `0 0 8px ${item.color}50`,
                }} />
                <h3 style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  color: item.color,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}>
                  {item.label}
                </h3>
                <p style={{ color: COLORS.textLight, fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{
        padding: "60px",
        background: `linear-gradient(135deg, ${COLORS.maroon}, ${COLORS.red} 50%, ${COLORS.orange})`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 60px)",
        }} />
        <FadeUp>
          <h2 style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            letterSpacing: "3px",
            color: COLORS.white,
            marginBottom: "16px",
            position: "relative",
          }}>
            READY TO UNLOCK YOUR POTENTIAL?
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
            maxWidth: "560px",
            margin: "0 auto 36px",
            lineHeight: 1.7,
            position: "relative",
          }}>
            Join thousands of individuals and institutions that have transformed with Nexus Framer.
          </p>
          <a href="#contact" style={{
            display: "inline-block",
            padding: "16px 48px",
            background: COLORS.white,
            color: COLORS.red,
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "4px",
            textDecoration: "none",
            borderRadius: "1px",
            position: "relative",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
          >
            GET IN TOUCH
          </a>
        </FadeUp>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(10px); }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @media (max-width: 640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  );
}