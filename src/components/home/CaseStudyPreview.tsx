"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const CaseStudyPreview = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      client: t('caseStudies.marketingAgency.client'),
      title: t('caseStudies.marketingAgency.title'),
      result: t('caseStudies.marketingAgency.result'),
      link: "/case-studies/marketing-agency",
    },
    {
      client: t('caseStudies.saasStartup.client'),
      title: t('caseStudies.saasStartup.title'),
      result: t('caseStudies.saasStartup.result'),
      link: "/case-studies/saas-startup",
    },
    {
      client: t('caseStudies.consultingFirm.client'),
      title: t('caseStudies.consultingFirm.title'),
      result: t('caseStudies.consultingFirm.result'),
      link: "/case-studies/consulting-firm",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('caseStudies.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="mb-3 text-sm font-medium text-accent">{study.client}</div>
                <h3 className="mb-3 text-lg">{study.title}</h3>
                <p className="mb-4 text-muted-foreground font-medium">{study.result}</p>
                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link href={study.link}>
                    {t('caseStudies.readCaseStudy')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Button asChild variant="outline">
            <Link href="/case-studies">{t('caseStudies.viewAll')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;