"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = t("servicesPage.services", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    link: string;
    badge?: string;
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
          <h1 className="mb-6">{t("servicesPage.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t("servicesPage.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card
                className={`p-8 hover:shadow-md transition-shadow h-full ${
                  service.badge ? "border-accent/50 bg-accent/5" : ""
                }`}
              >
                {service.badge && (
                  <div className="mb-3 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {service.badge}
                  </div>
                )}
                <h2 className="mb-4 text-2xl">{service.title}</h2>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <Button asChild variant={service.badge ? "default" : "ghost"} className={!service.badge ? "px-0" : ""}>
                  <Link href={service.link}>
                    {t("servicesPage.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
          <h2 className="mb-4">{t("servicesPage.notSure.title")}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("servicesPage.notSure.description")}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{t("servicesPage.notSure.cta")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
