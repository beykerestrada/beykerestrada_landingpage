import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessOverview from "@/components/home/ProcessOverview";
import PromotionalBanners from "@/components/home/PromotionalBanners";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValuePillars />
        <ProcessOverview />
        <ServicesOverview />
        <PromotionalBanners />
        <CaseStudyPreview />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
