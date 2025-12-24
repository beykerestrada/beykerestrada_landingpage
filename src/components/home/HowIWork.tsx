"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const HowIWork = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "1",
      title: t('howIWork.step1.title'),
      duration: t('howIWork.step1.duration'),
      description: t('howIWork.step1.description'),
    },
    {
      number: "2",
      title: t('howIWork.step2.title'),
      description: t('howIWork.step2.description'),
    },
    {
      number: "3",
      title: t('howIWork.step3.title'),
      description: t('howIWork.step3.description'),
    },
    {
      number: "4",
      title: t('howIWork.step4.title'),
      description: t('howIWork.step4.description'),
    },
    {
      number: "5",
      title: t('howIWork.step5.title'),
      description: t('howIWork.step5.description'),
    },
  ];

  return (
    <section id="how-i-work" className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.h2
          className="mb-4 text-center text-3xl font-bold md:text-4xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t('howIWork.title')}
        </motion.h2>

        <motion.div
          className="mb-12 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="inline-block px-6 py-3 bg-accent/20 border-accent">
            <p className="text-sm font-medium">{t('howIWork.callout')}</p>
          </Card>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  {step.title}
                  {step.duration && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      ({step.duration})
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
