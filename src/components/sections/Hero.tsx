import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "var(--color-ink)",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "100px 40px 80px",
    }}>
      {/* Background decorative rings */}
      <div style={{
        position: "absolute", right: -120, top: -120,
        width: 600, height: 600,
        border: "1px solid rgba(200,82,26,0.07)",
        borderRadius: "50%", pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", right: 40, top: 40,
        width: 360, height: 360,
        border: "1px solid rgba(200,82,26,0.04)",
        borderRadius: "50%", pointerEvents: "none",
      }}/>

      {/* Background watermark text */}
      <div style={{
        position: "absolute", bottom: -60, right: -20,
        fontFamily: "var(--font-family-display)",
        fontSize: 220, fontWeight: 800,
        color: "rgba(255,255,255,0.018)",
        letterSpacing: "0.04em", textTransform: "uppercase",
        lineHeight: 1, pointerEvents: "none", whiteSpace: "nowrap",
      }}>
        BUILD
      </div>

      <div style={{
        maxWidth: 1240, margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 80,
        alignItems: "center",
      }} className="hero-grid">

        {/* Left — copy */}
        <div>
          <span style={{
            fontFamily: "var(--font-family-body)",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 18, display: "block",
          }}>
            Charlottetown, PEI · Est. 2018
          </span>

          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(56px, 8vw, 88px)",
            fontWeight: 800, letterSpacing: "0.01em",
            textTransform: "uppercase",
            color: "#ffffff", lineHeight: 0.9, marginBottom: 24,
          }}>
            Built Right.<br />
            <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
              Built to Last.
            </em>
          </h1>

          <p style={{
            fontFamily: "var(--font-family-serif)",
            fontSize: 17, color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75, maxWidth: 480, marginBottom: 40,
          }}>
            Eik and Stone has been delivering custom homes, commercial fit-outs,
            and major renovations across Canada for over seven years.
            Licensed. Insured. Accountable.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              fontFamily: "var(--font-family-body)",
              fontSize: 14, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#ffffff", background: "var(--color-signal)",
              border: "1px solid var(--color-signal)",
              padding: "16px 36px", borderRadius: "var(--radius-md)",
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: 8,
            }}>
              Get a Free Quote →
            </Link>
            <Link href="/portfolio" style={{
              fontFamily: "var(--font-family-body)",
              fontSize: 14, fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)", background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "16px 32px", borderRadius: "var(--radius-md)",
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: 8,
            }}>
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right — stats panel */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "var(--radius-md)",
          padding: 36,
          display: "flex", flexDirection: "column", gap: 28,
        }} className="hero-stats">
          {[
            { val: "7+", label: "Years building across PEI" },
            { val: "100+", label: "Projects completed on time & on budget" },
            { val: "$0", label: "Outstanding warranty claims" },
            { val: "98%", label: "Client referral rate" },
          ].map((stat, i, arr) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", gap: 4,
              paddingBottom: i < arr.length - 1 ? 28 : 0,
              borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <span style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: 44, fontWeight: 400,
                color: "#ffffff", lineHeight: 1,
              }}>
                {stat.val.includes("+") || stat.val.includes("%") ? (
                  <>
                    {stat.val.replace(/[+%$]/g, "")}
                    <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
                      {stat.val.match(/[+%$]/g)?.[0]}
                    </em>
                  </>
                ) : stat.val}
              </span>
              <span style={{
                fontFamily: "var(--font-family-serif)",
                fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5,
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-stats {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}