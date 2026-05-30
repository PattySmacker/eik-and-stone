import Link from "next/link";

export default function ContactCTA() {
  return (
    <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        background: "var(--color-ink)",
        borderRadius: "var(--radius-md)",
        padding: "80px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 40,
        position: "relative",
        overflow: "hidden",
      }} className="cta-inner">

        {/* Decorative ring */}
        <div style={{
          position: "absolute", right: -80, top: -80,
          width: 400, height: 400,
          border: "1px solid rgba(200,82,26,0.08)",
          borderRadius: "50%", pointerEvents: "none",
        }}/>

        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={{
            fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 12, display: "block",
          }}>
            Start Your Project
          </span>
          <h2 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.02em", color: "#ffffff", lineHeight: 0.95,
            marginBottom: 16,
          }}>
            Ready to Build<br />Something Great?
          </h2>
          <p style={{
            fontFamily: "var(--font-family-serif)",
            fontSize: 16, color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75, maxWidth: 440,
          }}>
            Get a free, no-obligation estimate from Prince Edward Island's most trusted construction team.
            We respond within one business day.
          </p>
        </div>

        <div style={{
          display: "flex", flexDirection: "column",
          gap: 14, position: "relative", zIndex: 1,
        }}>
          <Link href="/contact" style={{
            fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "#ffffff", background: "var(--color-signal)",
            padding: "18px 44px", borderRadius: "var(--radius-md)",
            textDecoration: "none", textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            Get a Free Quote →
          </Link>
          <a href="tel:+13438433307" style={{
            fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 500,
            letterSpacing: "0.06em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "18px 44px", borderRadius: "var(--radius-md)",
            textDecoration: "none", textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            (647) 904-4461
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-inner { padding: 48px 32px !important; flex-direction: column; }
        }
      `}</style>
    </section>
  );
}