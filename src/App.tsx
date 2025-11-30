import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import BusinessOS from "./pages/services/BusinessOS";
import Automation from "./pages/services/Automation";
import NotionRetainer from "./pages/services/NotionRetainer";
import AutomationRetainer from "./pages/services/AutomationRetainer";
import SystemsAudit from "./pages/services/SystemsAudit";
import WhiteLabel from "./pages/services/WhiteLabel";
import CaseStudies from "./pages/CaseStudies";
import MarketingAgency from "./pages/case-studies/MarketingAgency";
import SaasStartup from "./pages/case-studies/SaasStartup";
import ConsultingFirm from "./pages/case-studies/ConsultingFirm";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/business-os" element={<BusinessOS />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/notion-retainer" element={<NotionRetainer />} />
          <Route path="/services/automation-retainer" element={<AutomationRetainer />} />
          <Route path="/services/systems-audit" element={<SystemsAudit />} />
          <Route path="/services/white-label" element={<WhiteLabel />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/marketing-agency" element={<MarketingAgency />} />
          <Route path="/case-studies/saas-startup" element={<SaasStartup />} />
          <Route path="/case-studies/consulting-firm" element={<ConsultingFirm />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
