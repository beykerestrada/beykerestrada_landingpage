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
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="mb-6">{t("caseStudiesPage.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
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
              <Card className="p-8 md:p-12 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-sm font-medium text-accent">{study.client}</span>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{study.industry}</span>
                    </div>
                    <h2 className="mb-4 text-2xl">{study.title}</h2>
                    <p className="mb-6 text-muted-foreground">{study.description}</p>
                    <div className="mb-6">
                      <div className="text-lg font-semibold text-accent mb-3">{study.result}</div>
                      <div className="flex flex-wrap gap-3">
                        {study.metrics.map((metric, index) => (
                          <div key={index} className="rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="px-0">
                      <Link href={`/case-studies/${study.id}`}>
                        {t("caseStudiesPage.readFullCaseStudy")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <h2 className="mb-4">{t("caseStudiesPage.cta.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("caseStudiesPage.cta.description")}
          </p>
          <Button asChild size="lg">
            <Link href="https://cal.com/beykerestrada-consulting/systems-audit" target="_blank">
              {t("caseStudiesPage.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
