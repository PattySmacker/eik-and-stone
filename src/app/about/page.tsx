import Footer from "@/components/layout/Footer";
import { team } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the Eik and Stone team. Building across Prince Edward Island since 2005.",
};

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.01em", color: "#ffffff",
            lineHeight: 0.9, marginBottom: 24, maxWidth: 800,
          }}>
            Built on Reputation.<br />
            <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
              Driven by Craft.
            </em>
          </h1>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 18,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 580,
          }}>
            Since 2018, Eik and Stone has been the builder that PEI families
            and businesses trust when it matters most.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "center",
        }} className="about-story-grid">
          <div>
            <span style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-signal)", marginBottom: 12, display: "block",
            }}>
              Since 2018
            </span>
            <h2 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 800, textTransform: "uppercase",
              color: "var(--color-ink)", lineHeight: 0.95, marginBottom: 24,
            }}>
              How It All Started
            </h2>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 16,
              color: "var(--color-serif-text)", lineHeight: 1.8, marginBottom: 20,
            }}>
              Mr. Mattioli started the company with a truck, a tool belt, and a
              reputation for showing up on time. After a decade framing houses across
              the Maritimes, he knew there was a better way to run a construction
              company — one built on transparency, craftsmanship, and accountability.
            </p>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 16,
              color: "var(--color-serif-text)", lineHeight: 1.8, marginBottom: 20,
            }}>
              Seven years later, that philosophy still drives every project we take on.
              We&apos;re still a family business — Rachel joined as Director of Operations in 2021
              — and we still treat every client&apos;s project like it&apos;s our own home.
            </p>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 16,
              color: "var(--color-serif-text)", lineHeight: 1.8,
            }}>
              We&apos;ve grown from a one-man framing crew to a full-service construction firm
              with 15+ employees and trade partners, but our values haven&apos;t changed a bit.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2,
            background: "var(--color-warm-border)",
            border: "1px solid var(--color-warm-border)",
            borderRadius: "var(--radius-md)", overflow: "hidden",
          }}>
            {[
              { val: "2018", label: "Year Founded" },
              { val: "100+", label: "Projects Completed" },
              { val: "15+", label: "Team Members & Trade Partners" },
              { val: "7+", label: "Years in Prince Edward Island" },
            ].map((stat, i) => (
              <div key={i} style={{
                background: "var(--color-chalk)",
                padding: "40px 32px",
              }}>
                <div style={{
                  fontFamily: "var(--font-family-heading)",
                  fontSize: 44, fontWeight: 400,
                  color: "var(--color-ink)", lineHeight: 1, marginBottom: 8,
                }}>
                  {stat.val.includes("+") ? (
                    <>
                      {stat.val.replace("+", "")}
                      <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>+</em>
                    </>
                  ) : stat.val}
                </div>
                <div style={{
                  fontFamily: "var(--font-family-serif)", fontSize: 13,
                  color: "var(--color-iron)", lineHeight: 1.5,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-signal)", marginBottom: 12, display: "block",
            }}>
              What Drives Us
            </span>
            <h2 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 800, textTransform: "uppercase",
              color: "var(--color-ink)", lineHeight: 0.95,
            }}>
              Our Values
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
          }} className="values-grid">
            {[
              {
                title: "Accountability",
                desc: "We own every outcome. If something isn't right, we fix it — no excuses, no delays, no extra charge.",
              },
              {
                title: "Transparency",
                desc: "Open books, clear contracts, honest timelines. You always know exactly where your project and your money stand.",
              },
              {
                title: "Craftsmanship",
                desc: "We hire tradespeople who take pride in their work and reject shortcuts — even when they'd be easier.",
              },
              {
                title: "Relationships",
                desc: "Most of our work comes from referrals. That only happens when clients trust us enough to put their own reputation on the line.",
              },
            ].map((v, i) => (
              <div key={i} style={{
                background: "var(--color-warm)",
                border: "1px solid var(--color-warm-border)",
                borderRadius: "var(--radius-md)",
                padding: "36px 32px",
              }}>
                <div style={{
                  width: 36, height: 3,
                  background: "var(--color-signal)",
                  marginBottom: 20, borderRadius: 2,
                }}/>
                <h3 style={{
                  fontFamily: "var(--font-family-display)", fontSize: 20,
                  fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 12,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-family-serif)", fontSize: 14,
                  color: "var(--color-serif-text)", lineHeight: 1.75,
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <span style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-signal)", marginBottom: 12, display: "block",
            }}>
              The People Behind the Work
            </span>
            <h2 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 800, textTransform: "uppercase",
              color: "var(--color-ink)", lineHeight: 0.95,
            }}>
              Meet the Team
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }} className="team-grid">
            {team.map((member, i) => (
              <div key={i} style={{
                background: "var(--color-chalk)",
                border: "1px solid var(--color-warm-border)",
                borderRadius: "var(--radius-md)",
                padding: "36px 32px",
              }}>
                {/* Avatar */}
                {member.name === "Mr. Mattioli" ? (
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    overflow: "hidden", marginBottom: 20, flexShrink: 0,
                    border: "2px solid var(--color-warm-border)",
                  }}>
                    <img
                      src="/IMG_0385.jpg"
                      alt="Mr. Mattioli"
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center top",
                      }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "var(--color-steel)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                    fontFamily: "var(--font-family-display)",
                    fontSize: 22, fontWeight: 800, color: "#ffffff",
                  }}>
                    {member.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                )}

                <h3 style={{
                  fontFamily: "var(--font-family-display)", fontSize: 18,
                  fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 4,
                }}>
                  {member.name}
                </h3>
                <div style={{
                  fontFamily: "var(--font-family-mono)", fontSize: 11,
                  color: "var(--color-signal)", letterSpacing: "0.06em",
                  marginBottom: 16,
                }}>
                  {member.role}
                </div>
                <p style={{
                  fontFamily: "var(--font-family-serif)", fontSize: 14,
                  color: "var(--color-serif-text)", lineHeight: 1.75,
                  marginBottom: 16,
                }}>
                  {member.bio}
                </p>
                <div style={{
                  fontFamily: "var(--font-family-body)", fontSize: 11,
                  fontWeight: 600, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "var(--color-iron)",
                }}>
                  {member.years}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}
