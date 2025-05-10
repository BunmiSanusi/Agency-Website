"use client";
import Hero from "../components/hero";
import Clients from "../components/clients";
import Features from "../components/features";
import SectionFour from "../components/sectionfour";
import StatsSection from "../components/sectionfive";
import SectionSix from "../components/sectionsix";
import SectionSeven from "../components/sectionseven";
import SectionEight from "../components/sectioneight";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Features />
      <SectionFour />
      <StatsSection />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </main>
  );
}
