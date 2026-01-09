"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[75vh] flex items-center py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-content px-6 lg:px-8 w-full">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            variants={fadeInUp}
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            variants={fadeInUp}
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* Value Proposition */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('hero.valueProposition')}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex justify-center mb-6 md:mb-12"
            variants={fadeInUp}
          >
            <Button
              asChild
              size="lg"
              className="text-base"
            >
              <Link href={t('hero.cta.primaryLink')} target="_blank">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Credibility Bar */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-success" />
              <span>{t('hero.credibility.certified')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-success" />
              <span>{t('hero.credibility.systems')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-success" />
              <span>{t('hero.credibility.experience')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;