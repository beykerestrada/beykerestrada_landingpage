"use client";

import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessOverview from "@/components/home/ProcessOverview";
import PromotionalBanners from "@/components/home/PromotionalBanners";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ClientsSection from "@/components/home/ClientsSection";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <ProcessOverview />
      <ServicesOverview />
      <PromotionalBanners />
      <CaseStudyPreview />
      <ClientsSection />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
