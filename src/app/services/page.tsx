"use client";
import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import Footer from "@/components/layout/Footer";

const icons: Record<string, React.ReactElement> = {
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  hammer: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 12l-8.5 8.5a2.121 2.121 0 01-3-3L12 9"/>
      <path d="M17.64 15L22 10.64l-2-3.64-4 1-3-3 1-4L9.36 2 5 6.36l1 4-1 1"/>
    </svg>
  ),
  building: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
  ),
  layers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  grid: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: "var(--color-ink)",
        padding: "160px 40px 96px",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{
            fontFamily: "var(--font-family-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 18, display: "block",
          }}>
            What We Do
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.01em", color: "#ffffff",
            lineHeight: 0.9, marginBottom: 24, maxWidth: 800,
          }}>
            Full-Service<br />
            <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
              Construction.
            </em>
          </h1>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 18,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 560,
          }}>
            From breaking ground on a custom home to fitting out a commercial space,
            Eik and Stone handles every phase of construction with the same level of care.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: "var(--color-warm)",
                  border: "1px solid var(--color-warm-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "48px 48px",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: 40,
                  alignItems: "center",
                  transition: "background 0.2s ease",
                }} className="service-row"
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-chalk)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-warm)")}
                >
                  {/* Number + icon */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                    <span style={{
                      fontFamily: "var(--font-family-mono)", fontSize: 11,
                      color: "var(--color-signal)", letterSpacing: "0.06em",
                    }}>
                      {service.number}
                    </span>
                    <div style={{
                      width: 52, height: 52,
                      border: "1px solid var(--color-warm-border)",
                      borderRadius: "var(--radius-sm)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#ffffff", color: "var(--color-concrete)",
                    }}>
                      {icons[service.icon]}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 style={{
                      fontFamily: "var(--font-family-display)", fontSize: 28,
                      fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 12,
                    }}>
                      {service.title}
                    </h2>
                    <p style={{
                      fontFamily: "var(--font-family-serif)", fontSize: 15,
                      color: "var(--color-serif-text)", lineHeight: 1.75,
                      maxWidth: 600, marginBottom: 20,
                    }}>
                      {service.shortDesc}
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {service.features.slice(0, 3).map((f, j) => (
                        <span key={j} style={{
                          fontFamily: "var(--font-family-body)", fontSize: 11,
                          fontWeight: 600, letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          background: "var(--color-chalk)",
                          border: "1px solid var(--color-warm-border)",
                          color: "var(--color-concrete)",
                          padding: "4px 12px", borderRadius: 278,
                        }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    fontFamily: "var(--font-family-body)", fontSize: 13,
                    fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "var(--color-signal)",
                    whiteSpace: "nowrap",
                  }}>
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 40px 96px", background: "var(--color-chalk)" }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          background: "var(--color-ink)",
          borderRadius: "var(--radius-md)",
          padding: "64px 80px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 32,
        }} className="cta-bar">
          <div>
            <h2 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(28px,3vw,40px)",
              fontWeight: 800, textTransform: "uppercase",
              color: "#ffffff", lineHeight: 0.95, marginBottom: 12,
            }}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 15,
              color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
            }}>
              Tell us about your project and we'll point you in the right direction — for free.
            </p>
          </div>
          <Link href="/contact" style={{
            fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "#ffffff", background: "var(--color-signal)",
            padding: "18px 44px", borderRadius: "var(--radius-md)",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>
            Talk to Us →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; }
          .cta-bar { padding: 48px 32px !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}