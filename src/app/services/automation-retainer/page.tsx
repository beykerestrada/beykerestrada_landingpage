"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const AutomationRetainer = () => {
  const { t } = useTranslation();

  const whoThisIsFor = t("serviceDetail.automationRetainer.whoThisIsFor", { returnObjects: true }) as string[];
  const problems = t("serviceDetail.automationRetainer.problems", { returnObjects: true }) as string[];
  const included = t("serviceDetail.automationRetainer.included", { returnObjects: true }) as Record<string, { title: string; description: string }>;
  const monthlyActivities = t("serviceDetail.automationRetainer.monthlyActivities", { returnObjects: true }) as string[];
  const howItWorks = t("serviceDetail.automationRetainer.howItWorks", { returnObjects: true }) as { paragraph1: string; paragraph2: string };
  const outcomes = t("serviceDetail.automationRetainer.outcomes", { returnObjects: true }) as string[];
  const pricing = t("serviceDetail.automationRetainer.pricing", { returnObjects: true }) as { amount: string; perMonth: string; details: string[] };
  const dontHaveAutomations = t("serviceDetail.automationRetainer.dontHaveAutomations", { returnObjects: true }) as { title: string; description: string; button: string };

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
          <h1 className="mb-6">{t("serviceDetail.automationRetainer.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t("serviceDetail.automationRetainer.subtitle")}
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
              <h2 className="mb-6">{t("serviceDetail.common.problemsSolves")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">{t("serviceDetail.common.whatsIncluded")}</h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {Object.values(included).map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="p-6">
                      <h3 className="mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <h2 className="mb-6">{t("serviceDetail.common.monthlyActivities")}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {monthlyActivities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-6">
                {howItWorks.paragraph1}
              </p>
              <p className="text-muted-foreground">
                {howItWorks.paragraph2}
              </p>
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
                    <p className="text-sm text-muted-foreground">{pricing.perMonth}</p>
                  </div>
                  <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                    {pricing.details.map((detail, index) => (
                      <p key={index}>• {detail}</p>
                    ))}
                  </div>
                  <Button asChild className="w-full mb-3" size="lg">
                    <Link href="/contact">
                      {t("serviceDetail.automationRetainer.cta.primary")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>

              <Card className="p-6 mt-6">
                <h4 className="mb-3 font-semibold">{dontHaveAutomations.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {dontHaveAutomations.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services/automation">{dontHaveAutomations.button}</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationRetainer;
