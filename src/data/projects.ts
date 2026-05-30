export type Project = {
  slug: string;
  title: string;
  category: "residential" | "commercial" | "renovation";
  location: string;
  year: string;
  budget: string;
  duration: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  tags: string[];
  color: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "charlottetown-custom-home",
    title: "Charlottetown Custom Home",
    category: "residential",
    location: "Charlottetown, PEI",
    year: "2024",
    budget: "$1.1M",
    duration: "13 months",
    shortDesc: "A 4,200 sq ft modern craftsman in one of Charlottetown's most desirable neighbourhoods.",
    fullDesc: "This custom build in Charlottetown combined traditional Maritime detailing with a thoroughly modern interior. The clients wanted a home that felt rooted in the island's heritage while functioning perfectly for a contemporary family. We delivered on both counts — on schedule and under budget.",
    highlights: ["Double-car heated garage", "Radiant in-floor heating throughout", "Custom white oak millwork", "Landscaped yard with irrigation"],
    tags: ["Custom Build", "Craftsman", "Residential"],
    color: "#1c2b3a",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    slug: "victoria-row-commercial",
    title: "Victoria Row Commercial Retrofit",
    category: "commercial",
    location: "Charlottetown, PEI",
    year: "2024",
    budget: "$320K",
    duration: "4 months",
    shortDesc: "Full gut-renovation of a heritage commercial building into a modern restaurant and event space.",
    fullDesc: "The client purchased a heritage building on Victoria Row and wanted to transform it into a landmark restaurant without losing its character. We worked alongside a heritage consultant to restore the original brick and timber while fully modernizing the kitchen, HVAC, and electrical systems.",
    highlights: ["Heritage facade restoration", "Commercial kitchen build-out", "Exposed timber structural repair", "New rooftop patio addition"],
    tags: ["Heritage", "Restaurant", "Commercial"],
    color: "#3d4a52",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    slug: "summerside-infill",
    title: "Summerside Infill Duplex",
    category: "residential",
    location: "Summerside, PEI",
    year: "2023",
    budget: "$780K",
    duration: "10 months",
    shortDesc: "Side-by-side infill duplex designed for maximum rental yield with high-end finishes.",
    fullDesc: "A developer client came to us with an infill lot in Summerside and a tight pro forma. We value-engineered the floor plan to maximize usable square footage, negotiated competitive subcontractor pricing, and delivered both units ahead of the original timeline.",
    highlights: ["Legal secondary suites in both units", "Individual mechanical systems", "Private rear yards with fencing", "EV charging rough-in in both garages"],
    tags: ["Infill", "Duplex", "Developer"],
    color: "#728870",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
  },
  {
    slug: "stratford-office-fitout",
    title: "Stratford Office Fit-Out",
    category: "commercial",
    location: "Stratford, PEI",
    year: "2023",
    budget: "$460K",
    duration: "3 months",
    shortDesc: "5,800 sq ft Class A office fit-out completed on time with zero disruption to neighbouring tenants.",
    fullDesc: "A professional services firm needed their entire floor stripped and rebuilt. Our team coordinated after-hours trades, sealed all dust pathways, and completed the project over a phased schedule — delivering the finished space ahead of the client's move-in date.",
    highlights: ["Full acoustic ceiling system", "Custom reception millwork", "Server room & structured cabling", "LEED-aligned material selection"],
    tags: ["Office", "Fit-Out", "Commercial"],
    color: "#2563a8",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    slug: "cornwall-whole-home",
    title: "Cornwall Whole-Home Renovation",
    category: "renovation",
    location: "Cornwall, PEI",
    year: "2023",
    budget: "$240K",
    duration: "5 months",
    shortDesc: "Complete gut-renovation of a 1990s two-storey while the family lived on site.",
    fullDesc: "The homeowners wanted to stay in their house through the renovation. We sectioned the build into phases, tackling one zone at a time so the family always had a functioning kitchen, bathroom, and living area. The result: a completely transformed home with zero hotel nights.",
    highlights: ["Full kitchen and three bathroom remodels", "New electrical panel & wiring throughout", "Spray foam insulation upgrade", "All new windows and exterior doors"],
    tags: ["Whole-Home", "Renovation", "Live-In"],
    color: "#1c2b3a",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    slug: "montague-foundation",
    title: "Montague Foundation Repair",
    category: "renovation",
    location: "Montague, PEI",
    year: "2022",
    budget: "$120K",
    duration: "7 weeks",
    shortDesc: "Underpinning and waterproofing of a failing foundation on a 1970s bungalow.",
    fullDesc: "The homeowners discovered significant foundation movement and water infiltration during a home inspection. Our structural team assessed the damage, coordinated an engineer, and executed a full underpinning and interior waterproofing solution — saving a home that two other contractors had called a teardown.",
    highlights: ["Engineer-designed underpinning system", "Interior drainage and sump installation", "Foundation crack injection", "New window wells and grading"],
    tags: ["Foundation", "Structural", "Repair"],
    color: "#3d4a52",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];