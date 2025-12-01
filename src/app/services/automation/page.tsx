"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Automation = () => {
  const { t } = useTranslation();

  const whoThisIsFor = t("serviceDetail.automation.whoThisIsFor", { returnObjects: true }) as string[];
  const commonProjects = t("serviceDetail.automation.commonProjects.items", { returnObjects: true }) as Record<string, { title: string; description: string }>;
  const included = t("serviceDetail.automation.included", { returnObjects: true }) as string[];
  const process = t("serviceDetail.automation.process", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const outcomes = t("serviceDetail.automation.outcomes", { returnObjects: true }) as string[];
  const pricing = t("serviceDetail.automation.pricing", { returnObjects: true }) as { amount: string; details: string[] };
  const relatedCaseStudy = t("serviceDetail.automation.relatedCaseStudy", { returnObjects: true }) as { title: string; link: string };

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h1 className="mb-6">{t("serviceDetail.automation.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t("serviceDetail.automation.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="mb-6">{t("serviceDetail.common.whoThisIsFor")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {whoThisIsFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">{t("serviceDetail.automation.commonProjects.title")}</h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {Object.values(commonProjects).map((project, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="p-6">
                      <h3 className="mb-2 text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <h2 className="mb-6">{t("serviceDetail.common.whatsIncluded")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">{t("serviceDetail.common.theProcess")}</h2>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 text-3xl font-bold text-primary/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6">{t("serviceDetail.common.expectedOutcomes")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
              >
                <Card className="p-8">
                  <h3 className="mb-6 text-xl font-semibold">{t("serviceDetail.common.pricing")}</h3>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">{pricing.amount}</div>
                    <p className="text-sm text-muted-foreground">{t("serviceDetail.common.perAutomationProject")}</p>
                  </div>
                  <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                    {pricing.details.map((detail, index) => (
                      <p key={index}>• {detail}</p>
                    ))}
                  </div>
                  <Button asChild className="w-full mb-3" size="lg">
                    <Link href="/contact">
                      {t("serviceDetail.automation.cta.primary")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link href="/services/automation-retainer">{t("serviceDetail.automation.cta.secondary")}</Link>
                  </Button>
                </Card>
              </motion.div>

              <Card className="p-6 mt-6">
                <h4 className="mb-3 font-semibold">{t("serviceDetail.common.relatedCaseStudies")}</h4>
                <Link href={relatedCaseStudy.link} className="block text-sm text-accent hover:underline">
                  {relatedCaseStudy.title}
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
