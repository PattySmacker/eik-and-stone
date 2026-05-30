export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  years: string;
};

export const team: TeamMember[] = [
  {
    name: "Mr. Mattioli",
    role: "Founder & CEO",
    bio: "Mr. Mattioli founded Eik and Stone with a singular conviction: that the best buildings on Prince Edward Island should be built with the same care as the land they stand on. His hands-on background and exacting standards mean every project gets leadership that understands what actually happens on site.",
    years: "20+ years experience",
  },
  {
    name: "James Calloway",
    role: "Director of Operations",
    bio: "James oversees the full operational backbone of Eik and Stone — trade coordination, scheduling, contracts, and client communication. His systems are why projects stay on time and clients stay informed from groundbreak to handover.",
    years: "14 years experience",
  },
  {
    name: "Daniel MacPhail",
    role: "Senior Project Manager",
    bio: "Daniel has managed over 50 residential and commercial projects across PEI. Known for his calm under pressure, he insists on doing things right the first time — every time.",
    years: "11 years experience",
  },
  {
    name: "Thomas Reid",
    role: "Lead Estimator",
    bio: "Thomas brings a quantity surveying background to every budget he produces. His estimates are precise, transparent, and buildable — clients get numbers they can actually rely on.",
    years: "9 years experience",
  },
  {
    name: "Colin MacDougall",
    role: "Site Superintendent",
    bio: "Colin runs Eik and Stone job sites with quiet authority. Every trade shows up, every inspection passes, and every detail matches the drawings. He has been the backbone of our site operations since the beginning.",
    years: "12 years experience",
  },
  {
    name: "Marcus Webb",
    role: "Client Experience Manager",
    bio: "Marcus is your main point of contact from the first call through to final walkthrough. He bridges the gap between client, office, and site — nothing falls through the cracks on his watch.",
    years: "6 years experience",
  },
];
