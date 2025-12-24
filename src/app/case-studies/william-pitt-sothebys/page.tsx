"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const WilliamPittSothebys = () => {
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
            <span className="text-sm font-medium text-accent">William Pitt Sotheby's International Realty</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">Real Estate</span>
          </div>
          <h1 className="mb-6">Unified Business Operating System for Cross-Functional Teams</h1>
          <div className="text-xl font-semibold text-accent">
            Centralized operations across multiple locations with AI-powered automation
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
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Unified platform replacing multiple tools</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">AI-Powered</div>
                  <div className="text-sm text-muted-foreground">Automated summaries and weekly reports</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Real-time</div>
                  <div className="text-sm text-muted-foreground">Visibility for all teams across locations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Executive</div>
                  <div className="text-sm text-muted-foreground">Dashboard for strategic decisions</div>
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
              A cross-functional team at William Pitt Sotheby's International Realty spanning multiple locations and departments needed to centralize their fragmented workflows. Teams were tracking projects, tasks, and time worked across different tools with inconsistent formats, creating significant collaboration barriers and visibility gaps.
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
              <li>• Information scattered across disconnected tools</li>
              <li>• Difficult collaboration between locations and teams</li>
              <li>• No visibility into project status across departments</li>
              <li>• Time and energy wasted searching for information</li>
              <li>• Management lacked clear metrics for strategic decisions</li>
              <li>• Manual weekly reporting process consuming hours</li>
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
              Comprehensive engagement to design and implement a centralized Business Operating System in Notion with AI-powered automation.
            </p>
            <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.deliverables')}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Centralized Notion workspace with integrated databases</li>
              <li>• Custom database architecture with relations and rollups</li>
              <li>• Collaborative project workspaces</li>
              <li>• Automated task management workflows</li>
              <li>• Real-time project status tracking</li>
              <li>• Executive dashboard with strategic metrics</li>
              <li>• AI layer for automatic summaries and reporting</li>
              <li>• Team training and documentation</li>
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
                <h3 className="mb-2 text-lg font-semibold">Centralized Dashboard</h3>
                <p className="text-muted-foreground">
                  Custom database architecture with relations and rollups providing a unified view of all projects, tasks, and team activities across multiple locations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Collaborative Workspaces</h3>
                <p className="text-muted-foreground">
                  Dedicated spaces for each team to collaborate on projects with real-time visibility into project status, pending tasks, and completed work.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Executive Dashboard</h3>
                <p className="text-muted-foreground">
                  Strategic metrics dashboard providing leadership with clear insights for data-driven decisions across all departments and locations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">AI-Powered Automation</h3>
                <p className="text-muted-foreground">
                  Automated project summaries, status updates, and weekly reports generated by AI, eliminating manual reporting overhead and ensuring consistent communication.
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
                  <li>• Multiple disconnected tools</li>
                  <li>• Fragmented visibility across locations</li>
                  <li>• Manual weekly reporting</li>
                  <li>• Time wasted searching for information</li>
                  <li>• Difficult cross-team collaboration</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.after')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• One unified platform</li>
                  <li>• Real-time visibility for all teams</li>
                  <li>• AI-automated summaries and reports</li>
                  <li>• Instant access to project information</li>
                  <li>• Seamless cross-location collaboration</li>
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
              <li>• Single source of truth for all team operations across locations</li>
              <li>• Real-time visibility on project status and task completion</li>
              <li>• Automated weekly reports with AI-generated summaries</li>
              <li>• Executive dashboard enabling data-driven strategic decisions</li>
              <li>• Improved collaboration between teams and departments</li>
              <li>• Significant time savings on manual reporting and information search</li>
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
                "Beyker was excellent to work with. He completed a thorough review of our Notion setup and database templates, delivering clear insights and practical recommendations. His communication was professional and responsive throughout the engagement, and he met all project milestones on time. His expertise in Notion and no-code systems was evident in the quality of his work. He approached the assignment with attention to detail and a genuine understanding of our organizational needs. Highly recommended."
              </p>
              <div className="text-sm text-muted-foreground">
                — Vincent Socci, Co-President & COO
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

export default WilliamPittSothebys;
