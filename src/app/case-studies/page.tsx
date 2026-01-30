"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export default function CaseStudiesPage() {
  const { t } = useTranslation();

  const caseStudies = t("caseStudiesPage.caseStudies", { returnObjects: true }) as Array<{
    id: string;
    client: string;
    industry: string;
    title: string;
    description: string;
    result: string;
    metrics: string[];
  }>;

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">{t("caseStudiesPage.title")}</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("caseStudiesPage.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={fadeInUp}>
              <Card className="p-8 md:p-12 bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm font-medium text-primary">{study.client}</span>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{study.industry}</span>
                    </div>
                    <h2 className="mb-4 text-2xl md:text-3xl font-bold">{study.title}</h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">{study.description}</p>
                    <div className="mb-6">
                      <div className="text-base md:text-lg font-semibold text-primary mb-3">{study.result}</div>
                      <div className="flex flex-wrap gap-3">
                        {study.metrics.map((metric, index) => (
                          <div key={index} className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-muted-foreground">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href={`/case-studies/${study.id}`} className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                      {t("caseStudiesPage.readFullCaseStudy")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 rounded-2xl border border-border bg-white shadow-md p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">{t("caseStudiesPage.cta.title")}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("caseStudiesPage.cta.description")}
          </p>
          <Button asChild size="lg">
            <Link href={t("caseStudiesPage.cta.primaryLink")} target="_blank">
              {t("caseStudiesPage.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
