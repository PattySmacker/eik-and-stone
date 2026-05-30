export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "custom-homes",
    number: "01",
    title: "Custom Home Builds",
    shortDesc: "Architect-collaborated custom homes built to your exact specifications, from foundation to final finish.",
    fullDesc: "We work closely with your architect or our in-house design team to bring your dream home to life. Every custom build is managed with precision scheduling, transparent budgeting, and a dedicated site supervisor from breaking ground to final walkthrough.",
    features: [
      "Full design-build service available",
      "Dedicated project manager",
      "Transparent cost-plus or fixed-price contracts",
      "Weekly progress reporting",
      "2-year workmanship warranty",
    ],
    icon: "home",
  },
  {
    slug: "renovation-retrofit",
    number: "02",
    title: "Renovation & Retrofit",
    shortDesc: "Whole-home renovations, additions, and retrofits that respect the original structure while modernizing every detail.",
    fullDesc: "From basement developments to full gut-renovations, our retrofit team specializes in working within existing structures — solving the unexpected while staying on schedule and on budget. We handle permits, trades coordination, and final inspections.",
    features: [
      "Permit acquisition & management",
      "Structural assessments included",
      "All trades coordinated in-house",
      "Dust & disruption minimization plan",
      "Live-in renovation experience",
    ],
    icon: "hammer",
  },
  {
    slug: "commercial-fitout",
    number: "03",
    title: "Commercial Fit-Out",
    shortDesc: "Office, retail, and hospitality interiors built to spec, on time, and compliant with all commercial codes.",
    fullDesc: "Our commercial division delivers high-quality fit-outs for offices, restaurants, retail spaces, and mixed-use developments. We understand that downtime costs money — our phased construction approach keeps your business operating wherever possible.",
    features: [
      "Commercial code compliance guaranteed",
      "Phased builds to minimize business disruption",
      "Millwork & custom cabinetry in-house",
      "FF&E coordination available",
      "LEED-friendly build practices",
    ],
    icon: "building",
  },
  {
    slug: "foundation-structural",
    number: "04",
    title: "Foundation & Structural",
    shortDesc: "Deep expertise in foundations, underpinning, and structural reinforcement for residential and commercial projects.",
    fullDesc: "A strong building starts below grade. Our foundation team handles new poured concrete foundations, ICF construction, underpinning for additions, and structural repairs. Every foundation project is engineered, inspected, and warrantied.",
    features: [
      "Engineer-stamped drawings",
      "ICF & poured concrete expertise",
      "Underpinning & waterproofing",
      "Structural repair assessments",
      "New Home Warranty enrolled",
    ],
    icon: "layers",
  },
  {
    slug: "developer-partnerships",
    number: "05",
    title: "Developer Partnerships",
    shortDesc: "Infill, multi-family, and mixed-use development partnerships with a builder who understands pro formas.",
    fullDesc: "We partner with land developers, investors, and architects on infill lots, duplexes, fourplexes, and small multi-family projects across Prince Edward Island. We bring construction expertise to the table early — helping optimize floor plans for buildability and cost before permits are pulled.",
    features: [
      "Pre-construction cost consulting",
      "Infill & multi-family specialists",
      "Value engineering on design",
      "Joint venture structures available",
      "References from past developer clients",
    ],
    icon: "grid",
  },
];
