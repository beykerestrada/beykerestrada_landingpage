"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Target, FileText, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const SystemsAuditPage = () => {
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
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 bg-primary/10 px-3 py-1 rounded-full">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {t('servicePages.systemsAudit.badge')}
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mb-4">
            {t('servicePages.systemsAudit.title')}
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
            <div className="text-5xl font-bold text-primary">
              {t('servicePages.systemsAudit.price')}
            </div>
            <div className="text-lg text-muted-foreground">
              {t('servicePages.systemsAudit.priceNote')}
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('servicePages.systemsAudit.description')}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button asChild size="lg">
              <Link href={t('servicePages.systemsAudit.ctaLink')} target="_blank">
                {t('servicePages.systemsAudit.cta')}
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
          <h2 className="mb-6">{t('servicePages.systemsAudit.whoIsThisFor.title')}</h2>
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {(t('servicePages.systemsAudit.whoIsThisFor.points', { returnObjects: true }) as string[]).map((point, index) => (
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
            {t('servicePages.systemsAudit.whatYouGet.title')}
          </motion.h2>

          <div className="grid gap-6">
            {(t('servicePages.systemsAudit.whatYouGet.items', { returnObjects: true }) as any[]).map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {index === 0 && <Clock className="h-5 w-5 text-primary" />}
                        {index === 1 && <Target className="h-5 w-5 text-primary" />}
                        {index === 2 && <FileText className="h-5 w-5 text-primary" />}
                        {index === 3 && <Calendar className="h-5 w-5 text-primary" />}
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
          <h2 className="mb-8">{t('servicePages.systemsAudit.process.title')}</h2>

          <div className="space-y-8">
            {(t('servicePages.systemsAudit.process.steps', { returnObjects: true }) as any[]).map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.duration && (
                    <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {step.duration}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What Happens After */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">{t('servicePages.systemsAudit.whatHappensAfter.title')}</h2>
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                {t('servicePages.systemsAudit.whatHappensAfter.description')}
              </p>
              <ul className="space-y-3">
                {(t('servicePages.systemsAudit.whatHappensAfter.options', { returnObjects: true }) as string[]).map((option, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{option}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.systemsAudit.faq.title')}</h2>
          <div className="space-y-6">
            {(t('servicePages.systemsAudit.faq.items', { returnObjects: true }) as any[]).map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">{t('servicePages.systemsAudit.testimonial.title')}</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <p className="text-lg italic mb-4 text-muted-foreground leading-relaxed">
                "{t('servicePages.systemsAudit.testimonial.text')}"
              </p>
              <div className="text-sm font-semibold">
                — {t('servicePages.systemsAudit.testimonial.author')}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('servicePages.systemsAudit.finalCta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('servicePages.systemsAudit.finalCta.description')}
          </p>
          <Button asChild size="lg">
            <Link href={t('servicePages.systemsAudit.ctaLink')} target="_blank">
              {t('servicePages.systemsAudit.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t('servicePages.systemsAudit.finalCta.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemsAuditPage;
