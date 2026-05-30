import React from "react";
import Link from "next/link";
import { services } from "@/data/services";

const icons: Record<string, React.ReactElement> = {
  home: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  hammer: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 12l-8.5 8.5a2.121 2.121 0 01-3-3L12 9"/>
      <path d="M17.64 15L22 10.64l-2-3.64-4 1-3-3 1-4L9.36 2 5 6.36l1 4-1 1"/>
    </svg>
  ),
  building: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
};

export default function Services() {
  return (
    <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-signal)", marginBottom: 12, display: "block",
            }}>
              What We Build
            </span>
            <h2 style={{
              fontFamily: "var(--font-family-display)", fontSize: "clamp(36px,5vw,52px)",
              fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em",
              color: "var(--color-ink)", lineHeight: 0.95,
            }}>
              Our Services
            </h2>
          </div>
          <Link href="/services" style={{
            fontFamily: "var(--font-family-body)", fontSize: 13, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--color-signal)", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            View All Services →
          </Link>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--color-warm-border)",
          border: "1px solid var(--color-warm-border)",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
        }} className="services-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "var(--color-warm)",
                padding: "40px 36px",
                height: "100%",
                transition: "background 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-chalk)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-warm)")}
              >
                <span style={{
                  fontFamily: "var(--font-family-mono)", fontSize: 11,
                  color: "var(--color-signal)", letterSpacing: "0.06em",
                  marginBottom: 20, display: "block",
                }}>
                  {service.number}
                </span>

                <div style={{
                  width: 48, height: 48,
                  border: "1px solid var(--color-warm-border)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, background: "#ffffff",
                  color: "var(--color-concrete)",
                }}>
                  {icons[service.icon]}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-family-display)", fontSize: 22,
                  fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 12,
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: "var(--font-family-serif)", fontSize: 14,
                  color: "var(--color-serif-text)", lineHeight: 1.75,
                }}>
                  {service.shortDesc}
                </p>

                <span style={{
                  fontFamily: "var(--font-family-body)", fontSize: 12,
                  fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "var(--color-signal)", marginTop: 20,
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}>
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}