"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const IngeYang = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 px-0">
          <Link href="/case-studies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('caseStudyDetail.backToCaseStudies')}
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
            <span className="text-sm font-medium text-accent">Inge Yang</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">Coaching & Professional Services</span>
          </div>
          <h1 className="mb-6">Simplified CRM & Session Management System for Coaching Practice</h1>
          <div className="text-xl font-semibold text-accent">
            Transformed manual notebook tracking into an automated, ADHD-friendly business operating system
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="p-8 bg-muted/30">
              <h2 className="mb-4 text-xl">{t('caseStudyDetail.keyMetrics')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">Manual → Automated</div>
                  <div className="text-sm text-muted-foreground">From notebook tracking to automated CRM</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">30-60 min/week</div>
                  <div className="text-sm text-muted-foreground">Saved on administrative tasks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Real-time</div>
                  <div className="text-sm text-muted-foreground">Dashboard visibility into business metrics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">ADHD-Friendly</div>
                  <div className="text-sm text-muted-foreground">Designed to reduce cognitive load</div>
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
            <h2 className="mb-4">{t('caseStudyDetail.clientContext')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              A life and career coach managing a growing coaching practice needed a better way to track client information, session notes, and business operations. Manual notebook tracking was becoming unsustainable and made it difficult to maintain a clear overview of her business while managing ADHD.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">{t('caseStudyDetail.theProblem')}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Manual tracking in physical notebooks was time-consuming and disorganized</li>
              <li>• Client information scattered across multiple locations</li>
              <li>• Difficult to track client progress and session history</li>
              <li>• No centralized view of business operations</li>
              <li>• Administrative tasks taking valuable time away from client work</li>
              <li>• System needed to accommodate ADHD-friendly workflows</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">{t('caseStudyDetail.scopeOfWork')}</h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive engagement to design and implement a custom CRM and session management system in Notion tailored for a coaching practice.
            </p>
            <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.deliverables')}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Custom client database with comprehensive client profiles</li>
              <li>• Session tracking system with automated templates</li>
              <li>• Business dashboard with key metrics</li>
              <li>• Automated scheduling reminders and follow-ups</li>
              <li>• ADHD-friendly interface design</li>
              <li>• Session note templates for consistency</li>
              <li>• Training and documentation for system usage</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h2 className="mb-4">{t('caseStudyDetail.systemsDelivered')}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Client Database</h3>
                <p className="text-muted-foreground">
                  Centralized database containing all client information, contact details, coaching goals, session history, and progress notes. Every detail accessible in one place.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Session Tracker</h3>
                <p className="text-muted-foreground">
                  Automated session tracking system with pre-built templates for session notes, making it easy to document each session and track client progress over time.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Business Dashboard</h3>
                <p className="text-muted-foreground">
                  Real-time dashboard providing visibility into key business metrics: active clients, upcoming sessions, revenue tracking, and client progress at a glance.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">ADHD-Friendly Design</h3>
                <p className="text-muted-foreground">
                  Interface specifically designed to reduce cognitive load with clear visual hierarchy, minimal distractions, and intuitive workflows that support ADHD-friendly work patterns.
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
            <h2 className="mb-4">{t('caseStudyDetail.beforeAfter')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.before')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Manual notebook tracking</li>
                  <li>• Scattered client information</li>
                  <li>• Time-consuming admin work</li>
                  <li>• Hard to track client progress</li>
                  <li>• No business overview</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.after')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated CRM system</li>
                  <li>• Centralized client database</li>
                  <li>• Streamlined administrative tasks</li>
                  <li>• Easy progress tracking</li>
                  <li>• Real-time business dashboard</li>
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
            <h2 className="mb-4">{t('caseStudyDetail.outcomesImpact')}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• All client information centralized in one accessible location</li>
              <li>• Automated session tracking and reminders saving 30-60 minutes weekly</li>
              <li>• Improved client experience through better session preparation</li>
              <li>• Clear visibility into business metrics and client progress</li>
              <li>• Reduced cognitive load with ADHD-friendly design</li>
              <li>• More time available for actual coaching and client work</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="mb-4">{t('caseStudyDetail.clientTestimonial')}</h2>
            <Card className="p-8 border-accent/50 bg-accent/5">
              <p className="text-lg italic mb-4">
                "Beyker completely transformed how I manage my coaching practice. The custom Notion system he built is exactly what I needed - simple, ADHD-friendly, and saves me hours every week. I can finally focus on my clients instead of drowning in admin work."
              </p>
              <div className="text-sm text-muted-foreground">
                — Inge Yang, Life and Career Coach
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
          <h2 className="mb-4">{t('caseStudyDetail.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('caseStudyDetail.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={t('caseStudyDetail.cta.primaryLink')}>
                {t('caseStudyDetail.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={t('caseStudyDetail.cta.secondaryLink')}>{t('caseStudyDetail.cta.secondary')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngeYang;
