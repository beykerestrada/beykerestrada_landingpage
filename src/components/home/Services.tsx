"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative w-full py-12 md:py-20 lg:py-24 bg-gray-100">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Services Section */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" variants={fadeInUp}>
            {t('howItWorks.headline')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('howItWorks.subheadline')}
          </motion.p>
        </motion.div>


        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Service 1: Custom Notion Templates */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="flex-grow flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-border">
              <CardHeader className="pb-4 md:pb-6">
                <div className="mb-3 md:mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-bold">
                  {t('howItWorks.notionTemplates.title')}
                </CardTitle>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
                  {t('howItWorks.notionTemplates.price')}
                </div>
                <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t('howItWorks.notionTemplates.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-4 md:pb-6 flex flex-col">
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {(t('howItWorks.notionTemplates.features', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-primary font-medium mt-auto">
                  {t('howItWorks.notionTemplates.note')}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 md:pb-8 flex-col gap-2 md:gap-3">
                <Button asChild variant="outline" className="w-full" size="default">
                  <Link href={t('howItWorks.notionTemplates.ctaLink')} target="_blank">
                    {t('howItWorks.notionTemplates.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/services/notion-templates"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1"
                >
                  {t('howItWorks.notionTemplates.learnMore')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Service 2: Workflow Automation (Most Popular) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="flex-grow flex flex-col border-2 border-primary relative bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-primary text-primary-foreground px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {t('howItWorks.automation.badge')}
                </div>
              </div>
              <CardHeader className="pb-4 md:pb-6 pt-6 md:pt-8">
                <div className="mb-3 md:mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-bold">
                  {t('howItWorks.automation.title')}
                </CardTitle>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
                  {t('howItWorks.automation.price')}
                </div>
                <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t('howItWorks.automation.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-4 md:pb-6 flex flex-col">
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {(t('howItWorks.automation.features', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-primary font-medium mt-auto">
                  {t('howItWorks.automation.note')}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 md:pb-8 flex-col gap-2 md:gap-3">
                <Button asChild className="w-full" size="default">
                  <Link href={t('howItWorks.automation.ctaLink')} target="_blank">
                    {t('howItWorks.automation.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/services/workflow-automation"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1"
                >
                  {t('howItWorks.automation.learnMore')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Service 3: Complete Business System */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="flex-grow flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-border">
              <CardHeader className="pb-4 md:pb-6">
                <div className="mb-3 md:mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-bold">
                  {t('howItWorks.completeSystem.title')}
                </CardTitle>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
                  {t('howItWorks.completeSystem.price')}
                </div>
                <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t('howItWorks.completeSystem.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-4 md:pb-6 flex flex-col">
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {(t('howItWorks.completeSystem.features', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-primary font-medium mt-auto">
                  {t('howItWorks.completeSystem.note')}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 md:pb-8 flex-col gap-2 md:gap-3">
                <Button asChild variant="outline" className="w-full" size="default">
                  <Link href={t('howItWorks.completeSystem.ctaLink')} target="_blank">
                    {t('howItWorks.completeSystem.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/services/complete-system"
                  className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1"
                >
                  {t('howItWorks.completeSystem.learnMore')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>


        </div>

        {/* Divider */}
        <div className="my-12 md:my-16 lg:my-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Systems Audit - Not Sure Banner */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border border-slate-700/50">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl"></div>

            <div className="relative p-6 md:p-10 lg:p-12">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="inline-flex items-center gap-2 mb-3 bg-primary/20 px-2.5 py-1 rounded-full">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {t('howItWorks.systemsAudit.badge')}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {t('howItWorks.notSure.headline')}
                </h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {t('howItWorks.notSure.subheadline')}
                </p>

                <div className="mb-5">
                  <div className="text-2xl font-bold mb-1">
                    {t('howItWorks.systemsAudit.price')}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t('howItWorks.systemsAudit.note')}
                  </div>
                </div>

                {/* Features BEFORE buttons on mobile */}
                <div className="mb-5">
                  <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-slate-400">
                    {t('howItWorks.systemsAudit.whatYouGetLabel')}
                  </h4>
                  <ul className="space-y-2">
                    {(t('howItWorks.systemsAudit.features', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                        <span className="text-xs leading-relaxed text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons AFTER features on mobile */}
                <div className="flex flex-col gap-2">
                  <Button asChild className="rounded-full w-full" size="default">
                    <Link href={t('nav.bookAuditLink')} target="_blank">
                      {t('howItWorks.systemsAudit.cta')}
                    </Link>
                  </Button>
                  <Link
                    href="/services/systems-audit"
                    className="text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1 px-4 py-2"
                  >
                    {t('howItWorks.systemsAudit.learnMore')}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[1.2fr,1fr] gap-6 md:gap-10 items-center">
                {/* Left side - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 bg-primary/20 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                      {t('howItWorks.systemsAudit.badge')}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 leading-tight">
                    {t('howItWorks.notSure.headline')}
                  </h3>
                  <p className="text-base lg:text-lg text-slate-300 mb-6 leading-relaxed">
                    {t('howItWorks.notSure.subheadline')}
                  </p>

                  <div className="mb-8">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-1">
                      {t('howItWorks.systemsAudit.price')}
                    </div>
                    <div className="text-sm text-slate-400">
                      {t('howItWorks.systemsAudit.note')}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <Button asChild className="rounded-full" size="default">
                      <Link href={t('nav.bookAuditLink')} target="_blank">
                        {t('howItWorks.systemsAudit.cta')}
                      </Link>
                    </Button>
                    <Link
                      href="/services/systems-audit"
                      className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1 px-4 py-2"
                    >
                      {t('howItWorks.systemsAudit.learnMore')}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

                {/* Right side - Features */}
                <div>
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-400">
                    {t('howItWorks.systemsAudit.whatYouGetLabel')}
                  </h4>
                  <ul className="space-y-3">
                    {(t('howItWorks.systemsAudit.features', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                        <span className="text-sm leading-relaxed text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
