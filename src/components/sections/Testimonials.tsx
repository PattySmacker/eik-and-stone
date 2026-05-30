"use client";
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Eik and Stone built our custom home in Glenora and the experience was everything we hoped for. On budget, on time, and the quality is exceptional. We've already referred three neighbours.",
      name: "David & Sarah K.",
      detail: "Custom Home · Charlottetown, PEI",
      initials: "DK",
      color: "#1c2b3a",
    },
    {
      quote: "We hired Eik and Stone for a full gut-reno while living in the house. Marcus and his team were professional, clean, and communicative every single day. Rare to find a contractor like this.",
      name: "Theresa M.",
      detail: "Whole-Home Renovation · Riverbend",
      initials: "TM",
      color: "#728870",
    },
    {
      quote: "Our restaurant fit-out came in three days early and exactly on budget. The heritage brick restoration alone was worth every penny. Eik and Stone understood what we were trying to create.",
      name: "James & Yuki O.",
      detail: "Commercial Fit-Out · Whyte Ave",
      initials: "JO",
      color: "#2563a8",
    },
  ];

  return (
    <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span style={{
            fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 12, display: "block",
          }}>
            Client Stories
          </span>
          <h2 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(36px,5vw,52px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.02em", color: "var(--color-ink)", lineHeight: 0.95,
          }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#ffffff",
              border: "1px solid var(--color-warm-border)",
              borderRadius: "var(--radius-md)",
              padding: "32px",
              boxShadow: "rgba(0,0,0,0.28) 0px 1px 4px -1px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "rgb(18,22,18) 0px 12px 48px 12px";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "rgba(0,0,0,0.28) 0px 1px 4px -1px";
              }}
            >
              {/* Stars */}
              <div style={{
                color: "var(--color-craft)",
                fontSize: 14, letterSpacing: 2, marginBottom: 14,
              }}>
                ★★★★★
              </div>

              {/* Quote mark */}
              <span style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: 56, fontWeight: 400,
                color: "var(--color-craft)", opacity: 0.3,
                lineHeight: 0.8, marginBottom: 14, display: "block",
              }}>
                "
              </span>

              <p style={{
                fontFamily: "var(--font-family-serif)",
                fontSize: 14, fontStyle: "italic",
                color: "var(--color-serif-text)", lineHeight: 1.8, marginBottom: 22,
              }}>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-family-display)",
                  fontSize: 13, fontWeight: 700, color: "#ffffff",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-family-body)", fontSize: 14,
                    fontWeight: 600, color: "var(--color-ink)",
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-family-mono)", fontSize: 10,
                    color: "var(--color-iron)", marginTop: 2, letterSpacing: "0.04em",
                  }}>
                    {t.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating strip */}
        <div style={{
          background: "var(--color-chalk)",
          borderRadius: "var(--radius-md)",
          padding: "32px 36px",
          marginTop: 32,
          display: "flex",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap",
        }}>
          {/* Big rating */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: "var(--font-family-heading)",
              fontSize: 52, fontWeight: 400,
              color: "var(--color-ink)", lineHeight: 1,
            }}>
              4.9
            </div>
            <div style={{
              color: "var(--color-craft)", fontSize: 18,
              letterSpacing: 3, margin: "6px 0",
            }}>
              ★★★★★
            </div>
            <div style={{
              fontFamily: "var(--font-family-mono)", fontSize: 10,
              color: "var(--color-iron)", letterSpacing: "0.06em",
            }}>
              127 REVIEWS
            </div>
          </div>

          {/* Rating bars */}
          <div style={{ flex: 1, minWidth: 200, display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              { label: "5", pct: 91 },
              { label: "4", pct: 7 },
              { label: "3", pct: 2 },
              { label: "2", pct: 0 },
              { label: "1", pct: 0 },
            ].map((bar) => (
              <div key={bar.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{
                  fontFamily: "var(--font-family-mono)", fontSize: 10,
                  color: "var(--color-iron)", width: 18,
                }}>
                  {bar.label}
                </span>
                <div style={{
                  flex: 1, height: 5,
                  background: "var(--color-fog)",
                  borderRadius: 278, overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%", width: `${bar.pct}%`,
                    background: "var(--color-craft)",
                    borderRadius: 278,
                  }}/>
                </div>
                <span style={{
                  fontFamily: "var(--font-family-mono)", fontSize: 10,
                  color: "var(--color-iron)", width: 28, textAlign: "right",
                }}>
                  {bar.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Client logos */}
          <div style={{
            display: "flex",
            border: "1px solid var(--color-warm-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}>
            {["Houzz", "Google", "HomeStars", "BBB"].map((logo, i, arr) => (
              <div key={logo} style={{
                padding: "22px 20px",
                borderRight: i < arr.length - 1 ? "1px solid var(--color-warm-border)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-family-heading)", fontSize: 11,
                  color: "var(--color-mist)", letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}