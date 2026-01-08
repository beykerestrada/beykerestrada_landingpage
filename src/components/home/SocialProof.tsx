"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const SocialProof = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      client: t('caseStudies.williamPittSothebys.client'),
      title: t('caseStudies.williamPittSothebys.title'),
      result: t('caseStudies.williamPittSothebys.result'),
      link: "/case-studies/william-pitt-sothebys",
      metrics: t('caseStudies.williamPittSothebys.metrics', { returnObjects: true }) as string[]
    },
    {
      client: t('caseStudies.ingeYang.client'),
      title: t('caseStudies.ingeYang.title'),
      result: t('caseStudies.ingeYang.result'),
      link: "/case-studies/inge-yang",
      metrics: t('caseStudies.ingeYang.metrics', { returnObjects: true }) as string[]
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-muted/15">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t('socialProof.headline')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('socialProof.subheadline')}
          </motion.p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="mb-3 text-sm font-semibold text-primary">{study.client}</div>
                <h3 className="mb-3 text-lg font-semibold">{study.title}</h3>

                {/* Metrics */}
                <div className="mb-4 flex-grow">
                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild variant="ghost" size="sm" className="px-0 self-start mt-auto">
                  <Link href={study.link}>
                    {t('caseStudies.readCaseStudy')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
