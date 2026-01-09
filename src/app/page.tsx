"use client";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ProblemSolution from "@/components/home/ProblemSolution";
import SocialProof from "@/components/home/SocialProof";
import Clients from "@/components/home/Clients";
import WhyMe from "@/components/home/WhyMe";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <ProblemSolution />
      <SocialProof />
      <Services />
      <WhyMe />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
