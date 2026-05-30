import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Eik and Stone.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {[
            {
              title: "Overview",
              body: "Eik and Stone Ltd. ('we', 'us', or 'our') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or contact us about our services.",
            },
            {
              title: "Information We Collect",
              body: "We collect information you provide directly to us, including your name, email address, phone number, and project details when you submit a quote request or contact form. We may also collect basic analytics data such as pages visited and time spent on site through anonymous tracking tools.",
            },
            {
              title: "How We Use Your Information",
              body: "We use the information you provide to respond to your inquiry, prepare estimates, communicate about your project, and improve our services. We do not sell, trade, or rent your personal information to third parties.",
            },
            {
              title: "Data Storage & Security",
              body: "Your information is stored securely and accessible only to authorized Eik and Stone team members. We use industry-standard encryption and security practices to protect your data from unauthorized access.",
            },
            {
              title: "Cookies",
              body: "Our website may use cookies to improve your browsing experience. These are small files stored on your device that help us understand how visitors use our site. You can disable cookies in your browser settings at any time.",
            },
            {
              title: "Third-Party Services",
              body: "We may use third-party services such as email providers and analytics platforms. These services have their own privacy policies and we encourage you to review them. We only share the minimum information necessary for these services to function.",
            },
            {
              title: "Your Rights",
              body: "You have the right to request access to, correction of, or deletion of your personal information held by us. To make such a request, please contact us at info@eikandstone.com. We will respond within 30 days.",
            },
            {
              title: "Changes to This Policy",
              body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.",
            },
            {
              title: "Contact Us",
              body: "If you have any questions about this Privacy Policy, please contact us at info@eikandstone.com or call (343) 843-3307.",
            },
          ].map((section, i) => (
            <div key={i} style={{
              marginBottom: 40,
              paddingBottom: 40,
              borderBottom: i < 8 ? "1px solid var(--color-warm-border)" : "none",
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