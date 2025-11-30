import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const services = [
  {
    title: "Business OS Design & Implementation",
    description: "Complete operating system design connecting strategy, operations, and execution.",
    link: "/services/business-os",
    highlight: false,
  },
  {
    title: "Automation Projects",
    description: "Custom workflow automation using n8n, Zapier, and Make to eliminate repetitive tasks.",
    link: "/services/automation",
    highlight: false,
  },
  {
    title: "Notion Architect Retainer",
    description: "Ongoing Notion system design, optimization, and team training.",
    link: "/services/notion-retainer",
    highlight: false,
  },
  {
    title: "Automation Ops Partner",
    description: "Monthly automation maintenance, monitoring, and optimization retainer.",
    link: "/services/automation-retainer",
    highlight: false,
  },
  {
    title: "Systems Audit",
    description: "Comprehensive assessment of your operations with actionable recommendations.",
    link: "/services/systems-audit",
    highlight: true,
    badge: "Start Here",
  },
  {
    title: "White-Label Systems for Agencies",
    description: "Deliver systems and automation services to your clients under your brand.",
    link: "/services/white-label",
    highlight: true,
    badge: "For Agencies",
  },
];

const Services = () => {
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
              <h1 className="mb-6">Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                From one-time implementations to ongoing partnerships, choose the service model that fits your needs. Every project starts with understanding your operations and ends with a system you can maintain.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={fadeInUp}>
                  <Card
                    className={`p-8 hover:shadow-md transition-shadow h-full ${
                      service.highlight ? "border-accent/50 bg-accent/5" : ""
                    }`}
                  >
                    {service.badge && (
                      <div className="mb-3 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                        {service.badge}
                      </div>
                    )}
                    <h2 className="mb-4 text-2xl">{service.title}</h2>
                    <p className="mb-6 text-muted-foreground">{service.description}</p>
                    <Button asChild variant={service.highlight ? "default" : "ghost"} className={!service.highlight ? "px-0" : ""}>
                      <Link to={service.link}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
              <h2 className="mb-4">Not sure which service fits your needs?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a call to discuss your operations and get a recommendation.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Book a Call</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;