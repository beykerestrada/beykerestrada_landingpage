import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PromotionalBanners = () => {
  return (
    <section className="w-full py-24">
      <motion.div
        className="mx-auto max-w-content px-6 lg:px-8 space-y-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Systems Audit Banner */}
        <motion.div
          className="rounded-lg border border-border bg-card p-8 md:p-12"
          variants={fadeInUp}
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
              Start Here
            </div>
            <h2 className="mb-4">Systems Audit</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Not sure where to begin? Start with a comprehensive audit of your current operations, systems, and automation opportunities.
            </p>
            <ul className="mb-6 space-y-2 text-muted-foreground">
              <li>• Complete operations assessment</li>
              <li>• Notion workspace review</li>
              <li>• Automation opportunity mapping</li>
            </ul>
            <Button asChild size="lg">
              <Link to="/services/systems-audit">
                Get Your Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* White-Label Banner */}
        <motion.div
          className="rounded-lg border border-border bg-accent/5 p-8 md:p-12"
          variants={fadeInUp}
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-medium text-accent">
              For Agencies
            </div>
            <h2 className="mb-4">White-Label Systems</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Scale your agency by offering systems and automation services under your brand. I handle delivery while you own the client relationship.
            </p>
            <ul className="mb-6 space-y-2 text-muted-foreground">
              <li>• Deliver under your brand</li>
              <li>• Fixed pricing for predictable margins</li>
              <li>• Ongoing support included</li>
            </ul>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/white-label">
                Learn About White-Label
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromotionalBanners;