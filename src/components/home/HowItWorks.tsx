"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const systemsAuditFeatures = t(
    "howItWorks.systemsAudit.features",
    { returnObjects: true }
  ) as string[];

  const businessOSFeatures = t(
    "howItWorks.businessOS.features",
    { returnObjects: true }
  ) as string[];

  const ultimateOSFeatures = t(
    "howItWorks.ultimateOS.features",
    { returnObjects: true }
  ) as string[];

  return (
    <section id="how-it-works" className="relative w-full py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t("howItWorks.headline")}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t("howItWorks.subheadline")}
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Service 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="flex-grow flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-1">
                  {t("howItWorks.systemsAudit.title")}
                </CardTitle>
                <div className="text-2xl font-bold text-primary mb-2">
                  {t("howItWorks.systemsAudit.price")}
                </div>
                <CardDescription className="text-sm">
                  {t("howItWorks.systemsAudit.description")}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow pb-4 flex flex-col">
                <ul className="space-y-2 mb-4">
                  {systemsAuditFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-center text-muted-foreground mt-auto">
                  {t("howItWorks.systemsAudit.note")}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild className="w-full" size="sm">
                  <Link
                    href="https://cal.com/beykerestrada-consulting/systems-audit"
                    target="_blank"
                  >
                    {t("howItWorks.systemsAudit.cta")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="flex-grow flex flex-col border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  {t("howItWorks.businessOS.badge")}
                </div>
              </div>

              <CardHeader className="pb-4 pt-6">
                <CardTitle className="text-xl mb-1">
                  {t("howItWorks.businessOS.title")}
                </CardTitle>
                <div className="text-2xl font-bold text-primary mb-2">
                  {t("howItWorks.businessOS.price")}
                </div>
                <CardDescription className="text-sm">
                  {t("howItWorks.businessOS.description")}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow pb-4 flex flex-col">
                <ul className="space-y-2 mb-4">
                  {businessOSFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-center text-muted-foreground mt-auto">
                  {t("howItWorks.businessOS.note")}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild className="w-full" size="sm">
                  <Link href="/contact">
                    {t("howItWorks.businessOS.cta")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="flex-grow flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-1">
                  {t("howItWorks.ultimateOS.title")}
                </CardTitle>
                <div className="text-2xl font-bold text-primary mb-2">
                  {t("howItWorks.ultimateOS.price")}
                </div>
                <CardDescription className="text-sm">
                  {t("howItWorks.ultimateOS.description")}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow pb-4 flex flex-col">
                <ul className="space-y-2 mb-4">
                  {ultimateOSFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-center text-muted-foreground mt-auto">
                  {t("howItWorks.ultimateOS.note")}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild className="w-full" size="sm" variant="outline">
                  <Link href="/contact">
                    {t("howItWorks.ultimateOS.cta")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
