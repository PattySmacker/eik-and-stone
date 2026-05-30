import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "60vh", minHeight: 480, overflow: "hidden" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(14,14,14,0.55) 0%, rgba(14,14,14,0.7) 100%)",
          zIndex: 1,
        }}/>
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 40px 60px",
        }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%" }}>
            <Link href="/portfolio" style={{
              fontFamily: "var(--font-family-body)", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 32,
            }}>
              ← All Projects
            </Link>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <span style={{
                fontFamily: "var(--font-family-mono)", fontSize: 10,
                letterSpacing: "0.06em", textTransform: "uppercase",
                background: "rgba(18,22,18,0.75)", color: "rgba(255,255,255,0.7)",
                padding: "4px 10px", borderRadius: 2,
              }}>
                {project.category}
              </span>
              <span style={{
                fontFamily: "var(--font-family-mono)", fontSize: 10,
                letterSpacing: "0.06em", textTransform: "uppercase",
                background: "rgba(200,82,26,0.85)", color: "#ffffff",
                padding: "4px 10px", borderRadius: 2,
              }}>
                {project.year}
              </span>
            </div>
            <h1 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(48px,7vw,80px)",
              fontWeight: 800, textTransform: "uppercase",
              color: "#ffffff", lineHeight: 0.9, marginBottom: 16,
            }}>
              {project.title}
            </h1>
            <p style={{
              fontFamily: "var(--font-family-mono)", fontSize: 12,
              color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em",
            }}>
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 340px",
          gap: 80, alignItems: "start",
        }} className="project-detail-grid">

          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-family-display)", fontSize: 32,
              fontWeight: 800, textTransform: "uppercase",
              color: "var(--color-ink)", marginBottom: 24,
            }}>
              About This Project
            </h2>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 16,
              color: "var(--color-serif-text)", lineHeight: 1.8, marginBottom: 48,
            }}>
              {project.fullDesc}
            </p>

            <h3 style={{
              fontFamily: "var(--font-family-display)", fontSize: 20,
              fontWeight: 700, textTransform: "uppercase",
              color: "var(--color-ink)", marginBottom: 20,
            }}>
              Project Highlights
            </h3>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
            }} className="highlights-grid">
              {project.highlights.map((h, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "16px 20px",
                  background: "var(--color-chalk)",
                  border: "1px solid var(--color-warm-border)",
                  borderRadius: "var(--radius-sm)",
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--color-signal)",
                    marginTop: 6, flexShrink: 0,
                  }}/>
                  <span style={{
                    fontFamily: "var(--font-family-serif)", fontSize: 14,
                    color: "var(--color-serif-text)", lineHeight: 1.6,
                  }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — project info */}
          <div style={{ position: "sticky", top: 84 }}>
            <div style={{
              background: "var(--color-chalk)",
              border: "1px solid var(--color-warm-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden", marginBottom: 20,
            }}>
              {[
                { label: "Location", value: project.location },
                { label: "Year", value: project.year },
                { label: "Budget", value: project.budget },
                { label: "Duration", value: project.duration },
                { label: "Category", value: project.category },
              ].map((item, i, arr) => (
                <div key={i} style={{
                  padding: "16px 24px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--color-warm-border)" : "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-family-body)", fontSize: 11,
                    fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "var(--color-iron)",
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-family-serif)", fontSize: 14,
                    color: "var(--color-ink)",
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-family-body)", fontSize: 11,
                  fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  background: "var(--color-chalk)",
                  border: "1px solid var(--color-warm-border)",
                  color: "var(--color-concrete)",
                  padding: "4px 12px", borderRadius: 278,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/contact" style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#ffffff", background: "var(--color-signal)",
              padding: "16px 32px", borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}>
              Start a Similar Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section style={{ padding: "0 40px 96px", background: "var(--color-warm)" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-family-display)", fontSize: 28,
              fontWeight: 800, textTransform: "uppercase",
              color: "var(--color-ink)", marginBottom: 32,
            }}>
              Related Projects
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${related.length}, 1fr)`,
              gap: 20,
            }} className="related-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    borderRadius: "var(--radius-md)", overflow: "hidden",
                    border: "1px solid var(--color-warm-border)",
                  }}>
                    <div style={{ height: 160, position: "relative", overflow: "hidden" }}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(14,14,14,0.6) 0%, transparent 60%)",
                        zIndex: 1,
                      }}/>
                    </div>
                    <div style={{ padding: "20px 20px 24px", background: "var(--color-chalk)" }}>
                      <h3 style={{
                        fontFamily: "var(--font-family-display)", fontSize: 16,
                        fontWeight: 700, textTransform: "uppercase",
                        color: "var(--color-ink)", marginBottom: 6,
                      }}>
                        {p.title}
                      </h3>
                      <p style={{
                        fontFamily: "var(--font-family-mono)", fontSize: 11,
                        color: "var(--color-iron)", letterSpacing: "0.04em",
                      }}>
                        {p.location} · {p.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 900px) {
          .project-detail-grid { grid-template-columns: 1fr !important; }
          .highlights-grid { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}
