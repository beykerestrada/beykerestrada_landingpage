"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const ConsultingFirm = () => {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 px-0">
          <Link href="/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
        </Button>

        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-medium text-accent">Consulting Firm</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">Professional Services</span>
          </div>
          <h1 className="mb-6">Unified Notion Workspace for Remote Team</h1>
          <div className="text-xl font-semibold text-accent">
            Single source of truth for 25+ distributed consultants
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl border border-border">
              <h2 className="mb-4 text-xl">Key Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">3 → 1</div>
                  <div className="text-sm text-muted-foreground">Primary tools used</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">80%</div>
                  <div className="text-sm text-muted-foreground">Faster information access</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Team adoption</div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">Client Context</h2>
            <p className="text-muted-foreground leading-relaxed">
              A boutique consulting firm with 25 remote consultants across 4 time zones. Team was using a mix of tools with no clear organization. Knowledge was siloed in individual consultant heads, making collaboration difficult and client transitions risky.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">The Problem</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• No central repository for firm knowledge and methodologies</li>
              <li>• Client information scattered across email and individual files</li>
              <li>• New consultants took months to get up to speed</li>
              <li>• Difficult to collaborate on shared clients</li>
              <li>• No visibility into who's working on what</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">Scope of Work</h2>
            <p className="text-muted-foreground mb-4">
              7-week Notion implementation to create a unified workspace serving as the firm's single source of truth.
            </p>
            <h3 className="mb-3 text-lg font-semibold">Deliverables</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Complete workspace architecture and information design</li>
              <li>• Client and project management system</li>
              <li>• Knowledge base with firm methodologies</li>
              <li>• Resource allocation dashboard</li>
              <li>• Template library for common deliverables</li>
              <li>• Team training and change management</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h2 className="mb-4">Systems & Automations Delivered</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Knowledge Hub</h3>
                <p className="text-muted-foreground">
                  Centralized repository for all firm knowledge: methodologies, frameworks, templates, and best practices. Organized for easy discovery and kept evergreen through regular updates.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Client Management</h3>
                <p className="text-muted-foreground">
                  Unified database linking clients, projects, deliverables, and consultant assignments. Every team member can see complete client context and project history.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Resource Dashboard</h3>
                <p className="text-muted-foreground">
                  Real-time view showing consultant availability and project assignments. Leadership can quickly identify capacity and plan new engagements.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Collaboration Spaces</h3>
                <p className="text-muted-foreground">
                  Project-specific workspaces for teams collaborating on shared clients. Standardized structure ensures everyone knows where to find information.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">Before / After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl border border-border">
                <h3 className="mb-3 text-lg font-semibold">Before</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Knowledge in consultant heads only</li>
                  <li>• 3+ tools for daily work</li>
                  <li>• 3-month new consultant ramp-up</li>
                  <li>• Client transitions took weeks</li>
                  <li>• No visibility into team capacity</li>
                </ul>
              </Card>
              <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl border border-border">
                <h3 className="mb-3 text-lg font-semibold">After</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complete firm knowledge documented</li>
                  <li>• Single workspace for everything</li>
                  <li>• 2-week new consultant ramp-up</li>
                  <li>• Seamless client transitions</li>
                  <li>• Real-time capacity dashboard</li>
                </ul>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">Outcomes & Impact</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Firm knowledge now documented and accessible to everyone</li>
              <li>• 80% reduction in time spent searching for information</li>
              <li>• New consultants productive within 2 weeks vs 3 months</li>
              <li>• Seamless collaboration on shared clients</li>
              <li>• Leadership has clear visibility into all projects and capacity</li>
              <li>• 100% team adoption; Notion became the daily workspace</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">Client Testimonial</h2>
            <Card className="p-8 border-accent/50 bg-accent/5">
              <p className="text-lg italic mb-4">
                "We finally have a system that matches how we actually work. The Notion workspace became our firm's brain—everything we know, everything we're working on, all in one place. It's transformed how we collaborate."
              </p>
              <div className="text-sm text-muted-foreground">
                — Managing Partner, Consulting Firm
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <h2 className="mb-4">Need a Unified Workspace for Your Team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how a custom Notion system can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/services/business-os">
                View Business OS Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingFirm;
