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
    <section id="why-me" className="w-full py-16 md:py-24 bg-slate-50/50">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t('whyMe.headline')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('whyMe.subheadline')}
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Credibility Bar */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-muted/50 border-primary/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {t('whyMe.credibility.systems.value')}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('whyMe.credibility.systems.label')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {t('whyMe.credibility.experience.value')}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('whyMe.credibility.experience.label')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {t('whyMe.credibility.certified.value')}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('whyMe.credibility.certified.label')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
