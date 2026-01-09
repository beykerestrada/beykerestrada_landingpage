"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, Workflow, Plug, Shield, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const WorkflowAutomationPage = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 px-0">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('servicePages.backToServices')}
          </Link>
        </Button>

        {/* Hero Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="mb-4">
            {t('servicePages.workflowAutomation.title')}
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              {t('servicePages.workflowAutomation.price')}
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('servicePages.workflowAutomation.description')}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button asChild size="lg">
              <Link href={t('servicePages.workflowAutomation.ctaLink')} target="_blank">
                {t('servicePages.workflowAutomation.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Who is this for? */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">{t('servicePages.workflowAutomation.whoIsThisFor.title')}</h2>
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {(t('servicePages.workflowAutomation.whoIsThisFor.points', { returnObjects: true }) as string[]).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* What You Get */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="mb-8">
            {t('servicePages.workflowAutomation.whatYouGet.title')}
          </motion.h2>

          <div className="grid gap-6">
            {(t('servicePages.workflowAutomation.whatYouGet.items', { returnObjects: true }) as any[]).map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {index === 0 && <Workflow className="h-5 w-5 text-primary" />}
                        {index === 1 && <Plug className="h-5 w-5 text-primary" />}
                        {index === 2 && <Shield className="h-5 w-5 text-primary" />}
                        {index === 3 && <BarChart3 className="h-5 w-5 text-primary" />}
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Process */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.workflowAutomation.process.title')}</h2>

          <div className="space-y-8">
            {(t('servicePages.workflowAutomation.process.steps', { returnObjects: true }) as any[]).map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Automation Examples */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.workflowAutomation.examples.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(t('servicePages.workflowAutomation.examples.items', { returnObjects: true }) as any[]).map((example, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('servicePages.workflowAutomation.finalCta.title')}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('servicePages.workflowAutomation.finalCta.description')}
          </p>
          <Button asChild size="lg">
            <Link href={t('servicePages.workflowAutomation.ctaLink')} target="_blank">
              {t('servicePages.workflowAutomation.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowAutomationPage;
