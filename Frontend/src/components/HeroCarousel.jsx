import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    bg: "http://nexusframer.com/wp-content/uploads/2026/01/Frame-1-1.jpg",
    content: null,
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",
    content: (
      <div className="flex flex-col items-center text-center px-4">
        <span
          className="uppercase tracking-[0.3em] text-sm font-medium mb-4 text-amber-400"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Your potential, unleashed
        </span>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-8 max-w-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Help You{" "}
          <span
            className="italic"
            style={{
              WebkitTextStroke: "2px #f50b0b",
              color: "transparent",
            }}
          >
            Achieve
          </span>{" "}
          Anything
        </h1>
        <a
          href="#"
          className="group inline-flex items-center gap-3 border border-white/60 text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Explore Programs
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    ),
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
    content: (
      <div className="flex flex-col items-center text-center px-4">
        <span
          className="uppercase tracking-[0.3em] text-sm font-medium mb-4 text-emerald-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          The people behind the vision
        </span>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 max-w-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our{" "}
          <span
            className="italic"
            style={{
              WebkitTextStroke: "2px #34d399",
              color: "transparent",
            }}
          >
            Team
          </span>
        </h1>
        <p
          className="text-white/70 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Nexus Framer equips students, professionals, entrepreneurs, and institutions with the skills needed to thrive in the real world through structured, research-backed training programs delivered both online and offline.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Join Us
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    ),
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const DURATION = 6000;

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setProgress(0);
        setAnimating(false);
      }, 600);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / (DURATION / 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .slide-fade-enter {
          opacity: 0;
          transform: scale(1.04);
        }
        .slide-fade-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.8s ease, transform 1.2s ease;
        }
        .content-fade {
          animation: contentIn 0.9s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "560px" }}>
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${slide.bg})`,
                transition: "transform 8s ease",
                transform: i === current ? "scale(1)" : "scale(1.05)",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
            {/* Content */}
            {slide.content && i === current && (
              <div className="absolute inset-0 flex items-center justify-center content-fade">
                {slide.content}
              </div>
            )}
          </div>
        ))}

        {/* Slide counter */}
        <div
          className="absolute top-8 right-8 z-20 text-white/60 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dot indicators with progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative flex items-center justify-center"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
              {/* Progress bar on active dot */}
              {i === current && (
                <div
                  className="absolute left-0 top-0 h-2 bg-white/40 rounded-full"
                  style={{ width: `${progress}%`, maxWidth: "100%" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Vertical line accent */}
        <div className="absolute left-8 bottom-24 z-20 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-white/20" />
        </div>
      </section>
    </>
  );
}