"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}