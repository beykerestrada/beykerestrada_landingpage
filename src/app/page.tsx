"use client";

import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ProblemSolution from "@/components/home/ProblemSolution";
import SocialProof from "@/components/home/SocialProof";
import WhyMe from "@/components/home/WhyMe";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <SocialProof />
      <HowItWorks />
      <WhyMe />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
