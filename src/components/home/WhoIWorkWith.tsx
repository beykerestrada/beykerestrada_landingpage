"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const WhoIWorkWith = () => {
  const { t } = useTranslation();

  const bullets = [
    t('whoIWorkWith.bullet1'),
    t('whoIWorkWith.bullet2'),
    t('whoIWorkWith.bullet3'),
    t('whoIWorkWith.bullet4'),
  ];

  return (
    <section id="who-i-work-with" className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">{t('whoIWorkWith.title')}</h2>
          <p className="mb-8 text-lg text-muted-foreground">{t('whoIWorkWith.body')}</p>

          <ul className="mx-auto max-w-2xl space-y-4 text-left">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;
