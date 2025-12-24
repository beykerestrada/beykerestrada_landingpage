"use client";

import { Database, Zap, Sparkles, Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const WhatIBuild = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Database,
      title: t('whatIBuild.service1.title'),
      description: t('whatIBuild.service1.description'),
    },
    {
      icon: Zap,
      title: t('whatIBuild.service2.title'),
      description: t('whatIBuild.service2.description'),
    },
    {
      icon: Sparkles,
      title: t('whatIBuild.service3.title'),
      description: t('whatIBuild.service3.description'),
    },
    {
      icon: Link2,
      title: t('whatIBuild.service4.title'),
      description: t('whatIBuild.service4.description'),
    },
  ];

  return (
    <section id="what-i-build" className="w-full py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold md:text-4xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t('whatIBuild.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIBuild;
