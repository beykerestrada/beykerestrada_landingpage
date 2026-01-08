"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Lightbulb, Hammer, Rocket, Users, LineChart } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const HowWeWorkPage = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="mb-4">
            {t('howWeWork.title')}
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('howWeWork.description')}
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="space-y-12">
            {(t('howWeWork.steps', { returnObjects: true }) as any[]).map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {index === 0 && <Search className="h-6 w-6 text-primary" />}
                            {index === 1 && <Lightbulb className="h-6 w-6 text-primary" />}
                            {index === 2 && <Hammer className="h-6 w-6 text-primary" />}
                            {index === 3 && <Rocket className="h-6 w-6 text-primary" />}
                            {index === 4 && <Users className="h-6 w-6 text-primary" />}
                            {index === 5 && <LineChart className="h-6 w-6 text-primary" />}
                          </div>
                          <h2 className="text-2xl font-bold">{step.title}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h3 className="font-semibold text-sm mb-2 text-primary">
                            {t('howWeWork.deliverables')}:
                          </h3>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable: string, idx: number) => (
                              <li key={idx} className="text-sm text-muted-foreground">
                                • {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-center mb-8">{t('howWeWork.principles.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(t('howWeWork.principles.items', { returnObjects: true }) as any[]).map((principle, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('howWeWork.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('howWeWork.cta.description')}
          </p>
          <Button asChild size="lg">
            <Link href={t('howWeWork.cta.buttonLink')} target="_blank">
              {t('howWeWork.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkPage;
