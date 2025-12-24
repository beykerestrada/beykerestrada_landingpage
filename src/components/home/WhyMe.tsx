"use client";

import { FileText, ShieldCheck, Headphones, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const WhyMe = () => {
  const { t } = useTranslation();

  const differentiators = [
    {
      icon: FileText,
      title: t('whyMe.diff1.title'),
      description: t('whyMe.diff1.description'),
    },
    {
      icon: ShieldCheck,
      title: t('whyMe.diff2.title'),
      description: t('whyMe.diff2.description'),
    },
    {
      icon: Headphones,
      title: t('whyMe.diff3.title'),
      description: t('whyMe.diff3.description'),
    },
    {
      icon: Languages,
      title: t('whyMe.diff4.title'),
      description: t('whyMe.diff4.description'),
    },
  ];

  return (
    <section id="why-me" className="w-full py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold md:text-4xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t('whyMe.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {differentiators.map((diff, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <diff.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{diff.title}</h3>
                <p className="text-muted-foreground">{diff.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
