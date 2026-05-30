import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Eik and Stone.",
};

export default function TermsPage() {
  return (
    <main>
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
            Legal
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            color: "#ffffff", lineHeight: 0.9,
          }}>
            Terms of Service
          </h1>
        </div>
      </section>

      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {[
            {
              title: "Acceptance of Terms",
              body: "By accessing and using the Eik and Stone website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
            },
            {
              title: "Use of Website",
              body: "This website is provided for informational purposes about Eik and Stone's services. You may not use this site for any unlawful purpose or in a way that could damage, disable, or impair our services. You agree not to attempt to gain unauthorized access to any part of the website.",
            },
            {
              title: "Quote Requests & Estimates",
              body: "Submitting a quote request through our website does not constitute a binding contract. All estimates provided are subject to a formal written contract signed by both parties. Prices and availability are subject to change without notice.",
            },
            {
              title: "Intellectual Property",
              body: "All content on this website, including text, graphics, logos, and images, is the property of Eik and Stone Ltd. and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.",
            },
            {
              title: "Construction Services",
              body: "All construction services are governed by separate written contracts entered into between Eik and Stone and the client. These Terms of Service do not constitute or modify any construction contract. Warranties, timelines, and payment terms are defined in individual project contracts.",
            },
            {
              title: "Limitation of Liability",
              body: "Eik and Stone shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our liability is limited to the maximum extent permitted by applicable law.",
            },
            {
              title: "Third-Party Links",
              body: "Our website may contain links to third-party websites. These links are provided for convenience only. Eik and Stone has no control over the content of those sites and accepts no responsibility for them.",
            },
            {
              title: "Governing Law",
              body: "These Terms of Service are governed by the laws of the Province of Prince Edward Island and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Prince Edward Island.",
            },
            {
              title: "Changes to Terms",
              body: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the revised terms.",
            },
            {
              title: "Contact",
              body: "For questions about these Terms of Service, contact us at info@eikandstone.com or (343) 843-3307.",
            },
          ].map((section, i) => (
            <div key={i} style={{
              marginBottom: 40,
              paddingBottom: 40,
              borderBottom: i < 9 ? "1px solid var(--color-warm-border)" : "none",
            }}>
              <h2 style={{
                fontFamily: "var(--font-family-display)", fontSize: 22,
                fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 14,
              }}>
                {section.title}
              </h2>
              <p style={{
                fontFamily: "var(--font-family-serif)", fontSize: 15,
                color: "var(--color-serif-text)", lineHeight: 1.85,
              }}>
                {section.body}
              </p>
            </div>
          ))}

          <div style={{
            fontFamily: "var(--font-family-mono)", fontSize: 11,
            color: "var(--color-iron)", letterSpacing: "0.06em",
          }}>
            Effective Date: January 1, 2025 · Eik and Stone Ltd. · Charlottetown, PEI
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}