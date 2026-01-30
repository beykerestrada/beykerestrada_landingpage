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
    <section className="relative w-full min-h-[80vh] flex items-center py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(226 100% 68% / 0.08) 0%, hsl(226 100% 68% / 0.04) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-content px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            variants={fadeInUp}
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex justify-center mb-12"
            variants={fadeInUp}
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8"
            >
              <Link href={t('hero.cta.primaryLink')} target="_blank">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Credibility Bar */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>{t('hero.credibility.certified')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>{t('hero.credibility.systems')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>{t('hero.credibility.experience')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;