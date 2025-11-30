import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const caseStudies = [
  {
    id: "marketing-agency",
    client: "Marketing Agency",
    industry: "Marketing Services",
    title: "Scaled Operations with Custom Business OS",
    description: "Built a complete Business Operating System in Notion to centralize client management, project workflows, and team collaboration.",
    result: "40% reduction in admin time",
    metrics: ["15 → 30 clients managed", "No new operations hires", "2-day onboarding vs 2 weeks"],
    link: "/case-studies/marketing-agency",
  },
  {
    id: "saas-startup",
    client: "SaaS Startup",
    industry: "Software",
    title: "Automated Customer Onboarding Pipeline",
    description: "Designed end-to-end automation connecting CRM, documentation tools, and project management for seamless customer onboarding.",
    result: "Onboarding time cut from 2 weeks to 2 days",
    metrics: ["14 → 2 day onboarding", "90% manual work eliminated", "Zero customer complaints"],
    link: "/case-studies/saas-startup",
  },
  {
    id: "consulting-firm",
    client: "Consulting Firm",
    industry: "Professional Services",
    title: "Unified Notion Workspace for Remote Team",
    description: "Created a centralized knowledge base and project management system for a distributed team of 25+ consultants.",
    result: "Single source of truth for 25+ consultants",
    metrics: ["3 → 1 tool", "80% faster information access", "Team-wide adoption"],
    link: "/case-studies/consulting-firm",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h1 className="mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Real results from teams and agencies that transformed their operations with custom systems and automation.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {caseStudies.map((study) => (
                <motion.div key={study.id} variants={fadeInUp}>
                  <Card className="p-8 md:p-12 hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-sm font-medium text-accent">{study.client}</span>
                          <span className="text-sm text-muted-foreground">·</span>
                          <span className="text-sm text-muted-foreground">{study.industry}</span>
                        </div>
                        <h2 className="mb-4 text-2xl">{study.title}</h2>
                        <p className="mb-6 text-muted-foreground">{study.description}</p>
                        <div className="mb-6">
                          <div className="text-lg font-semibold text-accent mb-3">{study.result}</div>
                          <div className="flex flex-wrap gap-3">
                            {study.metrics.map((metric, index) => (
                              <div key={index} className="rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                                {metric}
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button asChild variant="ghost" className="px-0">
                          <Link to={study.link}>
                            Read full case study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 rounded-lg border border-border bg-card p-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <h2 className="mb-4">Ready to Transform Your Operations?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start with a systems audit or book a call to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/services/systems-audit">Get a Systems Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Book a Call</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;