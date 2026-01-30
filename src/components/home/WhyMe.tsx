"use client";

import { Shield, Code, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const WhyMe = () => {
  const { t } = useTranslation();

  const differentiators = [
    {
      icon: Code,
      title: t('whyMe.infrastructure.title'),
      description: t('whyMe.infrastructure.description'),
    },
    {
      icon: Shield,
      title: t('whyMe.production.title'),
      description: t('whyMe.production.description'),
    },
    {
      icon: Users,
      title: t('whyMe.handoff.title'),
      description: t('whyMe.handoff.description'),
    },
  ];

  return (
    <section id="why-me" className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" variants={fadeInUp}>
            {t('whyMe.headline')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('whyMe.subheadline')}
          </motion.p>
        </motion.div>

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-10 md:mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-border">
                <CardContent className="p-6 md:p-8 lg:p-10">
                  <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Credibility Bar */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-center">
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-1 md:mb-2">
                {t('whyMe.credibility.systems.value')}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground">
                {t('whyMe.credibility.systems.label')}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-1 md:mb-2">
                {t('whyMe.credibility.experience.value')}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground">
                {t('whyMe.credibility.experience.label')}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-1 md:mb-2">
                {t('whyMe.credibility.certified.value')}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground">
                {t('whyMe.credibility.certified.label')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
