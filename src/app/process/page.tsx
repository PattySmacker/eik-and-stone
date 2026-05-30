import Link from "next/link";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Every Eik and Stone project follows the same proven six-step process. No surprises. No excuses.",
};

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    duration: "Day 1",
    desc: "We meet on site or at our office to understand your project, budget, and timeline. No cost, no obligation — just an honest conversation about what's possible. We'll ask the right questions to make sure we fully understand your vision before we put a single number on paper.",
    details: [
      "Free on-site or office meeting",
      "Project scope discussion",
      "Preliminary budget conversation",
      "Timeline feasibility assessment",
      "No obligation — ever",
    ],
  },
  {
    number: "02",
    title: "Estimate & Proposal",
    duration: "Days 2–5",
    desc: "Within 5 business days we deliver a detailed written estimate. No vague allowances — real numbers based on real scope so you can make an informed decision. Our proposals break down every line item so you know exactly what you're paying for.",
    details: [
      "Itemized written estimate",
      "Material and labour breakdown",
      "Fixed-price or cost-plus options",
      "Proposed project schedule",
      "Contract terms clearly outlined",
    ],
  },
  {
    number: "03",
    title: "Design & Permits",
    duration: "Weeks 2–6",
    desc: "We coordinate with your architect or our design partners, finalize drawings, and pull every permit required. You don't chase paper — we do. Our team has deep relationships with municipal offices across PEI, which means faster approvals and fewer surprises.",
    details: [
      "Architectural drawing coordination",
      "Permit application and management",
      "Trade coordination begins",
      "Material procurement starts",
      "Pre-construction site meeting",
    ],
  },
  {
    number: "04",
    title: "Construction",
    duration: "Per schedule",
    desc: "Your dedicated site superintendent manages every trade, every inspection, and every detail. You get weekly written updates and always know where your project stands. Our open-book approach means you're never left wondering what's happening on your site.",
    details: [
      "Dedicated site superintendent",
      "Weekly written progress reports",
      "All trades coordinated in-house",
      "Inspection scheduling and management",
      "Client site visits welcome anytime",
    ],
  },
  {
    number: "05",
    title: "Final Walkthrough",
    duration: "Final week",
    desc: "Before we hand over keys we walk every inch of the project with you. Any deficiencies get logged and resolved — typically within 48 hours. We don't consider a project complete until you're completely satisfied with every detail.",
    details: [
      "Full deficiency walkthrough",
      "Written deficiency log",
      "48-hour resolution guarantee",
      "Final cleaning included",
      "Keys and documentation handover",
    ],
  },
  {
    number: "06",
    title: "Warranty & Support",
    duration: "Ongoing",
    desc: "Our 2-year workmanship warranty means we stand behind every nail. Past clients get priority scheduling for any follow-up work, forever. We've built our business on repeat clients and referrals — and that only happens when we take care of people long after the project ends.",
    details: [
      "2-year workmanship warranty",
      "New Home Warranty enrollment (where applicable)",
      "Priority scheduling for past clients",
      "Annual check-in call",
      "Referral program available",
    ],
  },
];

export default function ProcessPage() {
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
          <span style={{
            fontFamily: "var(--font-family-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 18, display: "block",
          }}>
            How We Work
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.01em", color: "#ffffff",
            lineHeight: 0.9, marginBottom: 24, maxWidth: 800,
          }}>
            No Surprises.<br />
            <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
              No Excuses.
            </em>
          </h1>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 18,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 560,
          }}>
            Every Eik and Stone project follows the same proven six-step process —
            refined over thirty years and hundreds of builds across Prince Edward Island.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                background: "var(--color-warm)",
                border: "1px solid var(--color-warm-border)",
                borderRadius: "var(--radius-md)",
                padding: "56px 56px",
                display: "grid",
                gridTemplateColumns: "120px 1fr 1fr",
                gap: 56,
                alignItems: "start",
              }} className="process-row">

                {/* Number + duration */}
                <div>
                  <span style={{
                    fontFamily: "var(--font-family-mono)", fontSize: 11,
                    color: "var(--color-signal)", letterSpacing: "0.06em",
                    display: "block", marginBottom: 12,
                  }}>
                    {step.number}
                  </span>
                  <div style={{
                    width: 40, height: 2,
                    background: "var(--color-signal)",
                    marginBottom: 16,
                  }}/>
                  <span style={{
                    fontFamily: "var(--font-family-mono)", fontSize: 11,
                    color: "var(--color-iron)", letterSpacing: "0.04em",
                  }}>
                    {step.duration}
                  </span>
                </div>

                {/* Title + desc */}
                <div>
                  <h2 style={{
                    fontFamily: "var(--font-family-display)", fontSize: 26,
                    fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.04em", color: "var(--color-ink)",
                    marginBottom: 16,
                  }}>
                    {step.title}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-family-serif)", fontSize: 15,
                    color: "var(--color-serif-text)", lineHeight: 1.8,
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* Details */}
                <div style={{
                  display: "flex", flexDirection: "column", gap: 10,
                }}>
                  {step.details.map((detail, j) => (
                    <div key={j} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px",
                      background: "var(--color-chalk)",
                      border: "1px solid var(--color-warm-border)",
                      borderRadius: "var(--radius-sm)",
                    }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: "var(--color-signal)", flexShrink: 0,
                      }}/>
                      <span style={{
                        fontFamily: "var(--font-family-serif)", fontSize: 13,
                        color: "var(--color-serif-text)", lineHeight: 1.5,
                      }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
          padding: "80px 80px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 40, alignItems: "center",
        }} className="process-cta">
          <div>
            <span style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-signal)", marginBottom: 12, display: "block",
            }}>
              Ready to Start?
            </span>
            <h2 style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(28px,3vw,44px)",
              fontWeight: 800, textTransform: "uppercase",
              color: "#ffffff", lineHeight: 0.95, marginBottom: 16,
            }}>
              Step One is a Free Conversation.
            </h2>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 16,
              color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 480,
            }}>
              Tell us about your project and we'll walk you through exactly
              what to expect — timeline, budget, and process.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/contact" style={{
              fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#ffffff", background: "var(--color-signal)",
              padding: "18px 44px", borderRadius: "var(--radius-md)",
              textDecoration: "none", textAlign: "center", whiteSpace: "nowrap",
            }}>
              Book a Consultation →
            </Link>
            <a href="tel:+13438433307" style={{
              fontFamily: "var(--font-family-body)", fontSize: 14, fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "18px 44px", borderRadius: "var(--radius-md)",
              textDecoration: "none", textAlign: "center", whiteSpace: "nowrap",
            }}>
              (780) 555-0142
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .process-row { grid-template-columns: 1fr !important; padding: 40px 32px !important; }
          .process-cta { grid-template-columns: 1fr !important; padding: 48px 32px !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}