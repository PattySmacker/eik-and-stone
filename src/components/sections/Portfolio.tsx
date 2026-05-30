"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

type Category = "all" | "residential" | "commercial" | "renovation";

const filters: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Renovation", value: "renovation" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section style={{ padding: "96px 40px", background: "var(--color-ink)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", marginBottom: 48,
          flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-signal)", marginBottom: 12, display: "block",
            }}>
              Recent Work
            </span>
            <h2 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(36px,5vw,52px)",
              fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "0.02em", color: "#ffffff", lineHeight: 0.95,
            }}>
              Our Portfolio
            </h2>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                style={{
                  fontFamily: "var(--font-family-body)", fontSize: 12,
                  fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  padding: "8px 18px", borderRadius: 278,
                  border: "1px solid",
                  borderColor: active === f.value ? "var(--color-signal)" : "rgba(255,255,255,0.15)",
                  background: active === f.value ? "var(--color-signal)" : "transparent",
                  color: active === f.value ? "#ffffff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
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
                background: "#1a1a1a",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Project image */}
                <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(14,14,14,0.85) 0%, transparent 50%)",
                    zIndex: 1,
                  }}/>
                  <span style={{
                    position: "absolute", bottom: 16, left: 16, zIndex: 2,
                    fontFamily: "var(--font-family-mono)", fontSize: 9,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    background: "rgba(18,22,18,0.75)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "3px 8px", borderRadius: 2,
                  }}>
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div style={{ padding: 20 }}>
                  <h3 style={{
                    fontFamily: "var(--font-family-heading)",
                    fontSize: 17, fontWeight: 400,
                    color: "#ffffff", marginBottom: 6,
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-family-serif)",
                    fontSize: 13, color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.6, marginBottom: 16,
                  }}>
                    {project.shortDesc}
                  </p>
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{
                      fontFamily: "var(--font-family-mono)", fontSize: 10,
                      color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em",
                    }}>
                      {project.location}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-family-mono)", fontSize: 10,
                      color: "var(--color-signal)", letterSpacing: "0.06em",
                    }}>
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/portfolio" style={{
            fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "#ffffff", background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "16px 40px", borderRadius: "var(--radius-md)",
            textDecoration: "none", display: "inline-block",
            transition: "border-color 0.2s",
          }}>
            View Full Portfolio →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
