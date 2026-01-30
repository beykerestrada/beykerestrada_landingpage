"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const MarketingAgency = () => {
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
            <span className="text-sm font-medium text-accent">Marketing Agency</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">Marketing Services</span>
          </div>
          <h1 className="mb-6">Scaled Operations with Custom Business OS</h1>
          <div className="text-xl font-semibold text-accent">
            40% reduction in admin time while doubling client capacity
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
                  <div className="text-3xl font-bold mb-2">15 → 30</div>
                  <div className="text-sm text-muted-foreground">Clients managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Reduction in admin time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0</div>
                  <div className="text-sm text-muted-foreground">New operations hires needed</div>
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
              A boutique marketing agency with 12 employees managing 15 active clients. The team was struggling with scattered information across Google Drive, Asana, Slack, and email. Client deliverables were often delayed due to miscommunication and unclear handoffs between team members.
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
              <li>• No single source of truth for client information</li>
              <li>• Project status unclear; constant status update meetings</li>
              <li>• Onboarding new clients took 2 weeks of back-and-forth</li>
              <li>• Team members spending 10+ hours per week on admin tasks</li>
              <li>• Inability to take on more clients without hiring</li>
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
              8-week engagement to design and implement a complete Business Operating System in Notion.
            </p>
            <h3 className="mb-3 text-lg font-semibold">Deliverables</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Client management database with project tracking</li>
              <li>• Standardized service delivery workflows</li>
              <li>• Team capacity planning dashboard</li>
              <li>• Client onboarding automation</li>
              <li>• Document templates and SOPs</li>
              <li>• Team training and documentation</li>
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
                <h3 className="mb-2 text-lg font-semibold">Client Hub</h3>
                <p className="text-muted-foreground">
                  Central database linking all client information: contacts, projects, deliverables, meeting notes, and files. Every team member has instant access to complete client context.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Project Workflows</h3>
                <p className="text-muted-foreground">
                  Standardized workflows for each service type with clear stages, task templates, and automated status updates. Team knows exactly what to do next.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Capacity Dashboard</h3>
                <p className="text-muted-foreground">
                  Real-time view of team workload showing who has capacity for new projects. Helped leadership make faster decisions about client onboarding.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Onboarding Automation</h3>
                <p className="text-muted-foreground">
                  Zapier automation creating pre-built project structures when new clients are added. Reduced setup time from hours to minutes.
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
                  <li>• 5 different tools for client work</li>
                  <li>• 2-week client onboarding process</li>
                  <li>• Daily status update meetings</li>
                  <li>• Frequent missed deliverables</li>
                  <li>• At capacity with 15 clients</li>
                </ul>
              </Card>
              <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl border border-border">
                <h3 className="mb-3 text-lg font-semibold">After</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Single workspace for all client work</li>
                  <li>• 2-day client onboarding process</li>
                  <li>• Weekly check-ins only</li>
                  <li>• 98% on-time delivery rate</li>
                  <li>• Managing 30 clients comfortably</li>
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
              <li>• Doubled client capacity without adding operations staff</li>
              <li>• Team spending 40% less time on admin and coordination</li>
              <li>• Client satisfaction improved; fewer complaints about communication</li>
              <li>• New employees onboard in days instead of weeks</li>
              <li>• Leadership has clear visibility into all projects</li>
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
                "The Business OS transformed how we run our agency. We went from constantly putting out fires to having a clear, organized system everyone understands. Best investment we've made in operations."
              </p>
              <div className="text-sm text-muted-foreground">
                — Founder, Marketing Agency
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
          <h2 className="mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a systems audit or book a call to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/services/systems-audit">
                Get a Systems Audit
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

export default MarketingAgency;
