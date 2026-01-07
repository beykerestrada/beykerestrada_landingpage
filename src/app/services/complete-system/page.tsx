"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Layers, Zap, Users, Target } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const CompleteSystemPage = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 px-0">
          <Link href="/#how-it-works">
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
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {t('servicePages.completeSystem.badge')}
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mb-4">
            {t('servicePages.completeSystem.title')}
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
            <div className="text-5xl font-bold text-primary">
              {t('servicePages.completeSystem.price')}
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('servicePages.completeSystem.description')}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button asChild size="lg">
              <Link href="/contact">
                {t('servicePages.completeSystem.cta')}
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
          <h2 className="mb-6">{t('servicePages.completeSystem.whoIsThisFor.title')}</h2>
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {(t('servicePages.completeSystem.whoIsThisFor.points', { returnObjects: true }) as string[]).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* What's Included */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.completeSystem.whatsIncluded.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">{t('servicePages.completeSystem.whatsIncluded.notion.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(t('servicePages.completeSystem.whatsIncluded.notion.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">{t('servicePages.completeSystem.whatsIncluded.automation.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(t('servicePages.completeSystem.whatsIncluded.automation.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">{t('servicePages.completeSystem.whatsIncluded.plus.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {(t('servicePages.completeSystem.whatsIncluded.plus.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* The Process */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.completeSystem.process.title')}</h2>

          <div className="space-y-8">
            {(t('servicePages.completeSystem.process.steps', { returnObjects: true }) as any[]).map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why This is the Best Value */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.completeSystem.bestValue.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(t('servicePages.completeSystem.bestValue.points', { returnObjects: true }) as any[]).map((point, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {index === 0 && <Layers className="h-5 w-5 text-primary" />}
                      {index === 1 && <Zap className="h-5 w-5 text-primary" />}
                      {index === 2 && <Users className="h-5 w-5 text-primary" />}
                      {index === 3 && <Target className="h-5 w-5 text-primary" />}
                    </div>
                    <h3 className="font-semibold">{point.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="rounded-lg border-2 border-primary bg-primary/5 p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('servicePages.completeSystem.finalCta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('servicePages.completeSystem.finalCta.description')}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              {t('servicePages.completeSystem.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            {t('servicePages.completeSystem.finalCta.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompleteSystemPage;
