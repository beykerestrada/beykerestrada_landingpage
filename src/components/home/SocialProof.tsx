"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const SocialProof = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      icon: Building2,
      client: t('caseStudies.williamPittSothebys.client'),
      title: t('caseStudies.williamPittSothebys.title'),
      result: t('caseStudies.williamPittSothebys.result'),
      link: "/case-studies/william-pitt-sothebys",
      metrics: t('caseStudies.williamPittSothebys.metrics', { returnObjects: true }) as string[]
    },
    {
      icon: Users2,
      client: t('caseStudies.ingeYang.client'),
      title: t('caseStudies.ingeYang.title'),
      result: t('caseStudies.ingeYang.result'),
      link: "/case-studies/inge-yang",
      metrics: t('caseStudies.ingeYang.metrics', { returnObjects: true }) as string[]
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" variants={fadeInUp}>
            {t('socialProof.headline')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('socialProof.subheadline')}
          </motion.p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-8 md:p-10 h-full flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-border">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <study.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mb-3 text-sm font-medium text-muted-foreground">{study.client}</div>
                <h3 className="mb-6 text-xl md:text-2xl font-bold">{study.title}</h3>

                {/* Metrics */}
                <div className="mb-6 flex-grow">
                  <div className="space-y-3">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={study.link} className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 mt-auto">
                  {t('caseStudies.readCaseStudy')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
