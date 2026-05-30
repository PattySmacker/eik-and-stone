import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Eik and Stone | Charlottetown, PEI",
    template: "%s | Eik and Stone",
  },
  description: "Building homes, businesses, and communities across Prince Edward Island. Licensed. Insured. Accountable.",
  keywords: ["construction", "custom homes", "renovation", "PEI", "Charlottetown", "contractor", "builder", "Prince Edward Island"],
  authors: [{ name: "Eik and Stone" }],
  creator: "Eik and Stone",
  metadataBase: new URL("https://eikandstone.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://eikandstone.com",
    siteName: "Eik and Stone",
    title: "Eik and Stone | Charlottetown, PEI",
    description: "Building homes, businesses, and communities across Prince Edward Island. Licensed. Insured. Accountable.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Eik and Stone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eik and Stone | Charlottetown, PEI",
    description: "Building homes, businesses, and communities across Prince Edward Island.",
    images: ["/og-default.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://eikandstone.com",
  "name": "Eik and Stone",
  "description": "Building homes, businesses, and communities across Prince Edward Island. Licensed. Insured. Accountable.",
  "url": "https://eikandstone.com",
  "telephone": "+13438433307",
  "email": "info@eikandstone.com",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "Mr. Mattioli",
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15 Water Street",
    "addressLocality": "Charlottetown",
    "addressRegion": "PEI",
    "addressCountry": "CA",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.2382,
    "longitude": -63.1311,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00",
    },
  ],
  "areaServed": {
    "@type": "Province",
    "name": "Prince Edward Island",
  },
  "serviceType": [
    "Custom Home Builds",
    "Renovation & Retrofit",
    "Commercial Fit-Out",
    "Foundation & Structural",
    "Developer Partnerships",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div style={{ height: 4, background: "#2563a8", width: "100%" }} />
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}