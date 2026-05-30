"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Footer from "@/components/layout/Footer";

type Category = "all" | "residential" | "commercial" | "renovation";

const filters: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Renovation", value: "renovation" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

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
            Our Work
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.01em", color: "#ffffff",
            lineHeight: 0.9, marginBottom: 24, maxWidth: 800,
          }}>
            Every Project.<br />
            <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
              Every Detail.
            </em>
          </h1>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 18,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 560,
          }}>
            Browse our portfolio of custom homes, commercial fit-outs, and
            renovations across Prince Edward Island.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* Filters */}
          <div style={{
            display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48,
          }}>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                style={{
                  fontFamily: "var(--font-family-body)", fontSize: 12,
                  fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  padding: "10px 22px", borderRadius: 278,
                  border: "1px solid",
                  borderColor: active === f.value ? "var(--color-signal)" : "var(--color-warm-border)",
                  background: active === f.value ? "var(--color-signal)" : "var(--color-warm)",
                  color: active === f.value ? "#ffffff" : "var(--color-concrete)",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {f.label}
              </button>
            ))}
            <span style={{
              fontFamily: "var(--font-family-mono)", fontSize: 11,
              color: "var(--color-iron)", letterSpacing: "0.06em",
              display: "flex", alignItems: "center", marginLeft: 8,
            }}>
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }} className="portfolio-grid">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  background: "var(--color-warm)",
                  border: "1px solid var(--color-warm-border)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Project image */}
                  <div style={{
                    height: 220, position: "relative", overflow: "hidden",
                  }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(14,14,14,0.75) 0%, transparent 55%)",
                      zIndex: 1,
                    }}/>
                    <div style={{ position: "absolute", bottom: 16, left: 16, zIndex: 2, display: "flex", gap: 6 }}>
                      <span style={{
                        fontFamily: "var(--font-family-mono)", fontSize: 9,
                        letterSpacing: "0.06em", textTransform: "uppercase",
                        background: "rgba(18,22,18,0.75)",
                        color: "rgba(255,255,255,0.7)",
                        padding: "3px 8px", borderRadius: 2,
                      }}>
                        {project.category}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-family-mono)", fontSize: 9,
                        letterSpacing: "0.06em", textTransform: "uppercase",
                        background: "rgba(200,82,26,0.85)",
                        color: "#ffffff",
                        padding: "3px 8px", borderRadius: 2,
                      }}>
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "24px 24px 28px" }}>
                    <h3 style={{
                      fontFamily: "var(--font-family-display)", fontSize: 20,
                      fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 8,
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-family-serif)", fontSize: 14,
                      color: "var(--color-serif-text)", lineHeight: 1.7,
                      marginBottom: 20,
                    }}>
                      {project.shortDesc}
                    </p>
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 16,
                      borderTop: "1px solid var(--color-warm-border)",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-family-mono)", fontSize: 11,
                        color: "var(--color-iron)", letterSpacing: "0.04em",
                      }}>
                        {project.location}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-family-body)", fontSize: 12,
                        fontWeight: 600, letterSpacing: "0.06em",
                        textTransform: "uppercase", color: "var(--color-signal)",
                      }}>
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}
