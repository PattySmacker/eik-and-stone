import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      {/* Hero */}
      <section style={{
        background: "var(--color-ink)",
        padding: "160px 40px 96px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -100, top: -100,
          width: 500, height: 500,
          border: "1px solid rgba(200,82,26,0.06)",
          borderRadius: "50%", pointerEvents: "none",
        }}/>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Link href="/services" style={{
            fontFamily: "var(--font-family-body)", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 32,
          }}>
            ← All Services
          </Link>
          <span style={{
            fontFamily: "var(--font-family-mono)", fontSize: 11,
            color: "var(--color-signal)", letterSpacing: "0.06em",
            marginBottom: 16, display: "block",
          }}>
            {service.number}
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            color: "#ffffff", lineHeight: 0.9, marginBottom: 24,
          }}>
            {service.title}
          </h1>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 18,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 560,
          }}>
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Detail */}
      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 380px",
          gap: 80, alignItems: "start",
        }} className="service-detail-grid">

          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-family-display)", fontSize: 32,
              fontWeight: 800, textTransform: "uppercase",
              color: "var(--color-ink)", marginBottom: 24,
            }}>
              What&apos;s Included
            </h2>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 16,
              color: "var(--color-serif-text)", lineHeight: 1.8, marginBottom: 40,
            }}>
              {service.fullDesc}
            </p>

            <h3 style={{
              fontFamily: "var(--font-family-display)", fontSize: 20,
              fontWeight: 700, textTransform: "uppercase",
              color: "var(--color-ink)", marginBottom: 20,
            }}>
              Key Features
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {service.features.map((feature, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
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
                    fontFamily: "var(--font-family-serif)", fontSize: 15,
                    color: "var(--color-serif-text)", lineHeight: 1.6,
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div style={{
            background: "var(--color-ink)",
            borderRadius: "var(--radius-md)",
            padding: "40px 36px",
            position: "sticky", top: 84,
          }}>
            <h3 style={{
              fontFamily: "var(--font-family-display)", fontSize: 24,
              fontWeight: 800, textTransform: "uppercase",
              color: "#ffffff", marginBottom: 16,
            }}>
              Start This Project
            </h3>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 14,
              color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 32,
            }}>
              Get a free, detailed estimate for your {service.title.toLowerCase()} project.
              We respond within one business day.
            </p>
            <Link href="/contact" style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#ffffff", background: "var(--color-signal)",
              padding: "16px 32px", borderRadius: "var(--radius-md)",
              textDecoration: "none", marginBottom: 12,
            }}>
              Get a Free Quote →
            </Link>
            <a href="tel:7805550142" style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "16px 32px", borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}>
              (343) 843-3307
            </a>

            <div style={{
              marginTop: 32, paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div style={{
                fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)", marginBottom: 16,
              }}>
                Other Services
              </div>
              {others.slice(0, 3).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} style={{
                  display: "block",
                  fontFamily: "var(--font-family-body)", fontSize: 13,
                  color: "rgba(255,255,255,0.5)", textDecoration: "none",
                  marginBottom: 10,
                }}>
                  → {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}