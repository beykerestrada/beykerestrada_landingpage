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

  const content = t('caseStudyContent.ingeYang', { returnObjects: true }) as any;
  const metrics = content.metrics;
  const systems = content.systems;

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
            <span className="text-sm font-medium text-accent">{content.client}</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">{content.industry}</span>
          </div>
          <h1 className="mb-6">{content.title}</h1>
          <div className="text-xl font-semibold text-accent">
            {content.result}
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
                  <div className="text-3xl font-bold mb-2">{metrics.metric1.value}</div>
                  <div className="text-sm text-muted-foreground">{metrics.metric1.description}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{metrics.metric2.value}</div>
                  <div className="text-sm text-muted-foreground">{metrics.metric2.description}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{metrics.metric3.value}</div>
                  <div className="text-sm text-muted-foreground">{metrics.metric3.description}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{metrics.metric4.value}</div>
                  <div className="text-sm text-muted-foreground">{metrics.metric4.description}</div>
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
              {content.clientContext}
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
              {content.problems.map((problem: string, index: number) => (
                <li key={index}>• {problem}</li>
              ))}
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
              {content.scopeDescription}
            </p>
            <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.deliverables')}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {content.deliverables.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
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
                <h3 className="mb-2 text-lg font-semibold">{systems.clientDatabase.title}</h3>
                <p className="text-muted-foreground">
                  {systems.clientDatabase.description}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{systems.sessionTracker.title}</h3>
                <p className="text-muted-foreground">
                  {systems.sessionTracker.description}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{systems.businessDashboard.title}</h3>
                <p className="text-muted-foreground">
                  {systems.businessDashboard.description}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{systems.adhdFriendly.title}</h3>
                <p className="text-muted-foreground">
                  {systems.adhdFriendly.description}
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
                  {content.before.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold">{t('caseStudyDetail.after')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {content.after.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
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
              {content.outcomes.map((outcome: string, index: number) => (
                <li key={index}>• {outcome}</li>
              ))}
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
                "{content.testimonial.text}"
              </p>
              <div className="text-sm text-muted-foreground">
                — {content.testimonial.author}
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
