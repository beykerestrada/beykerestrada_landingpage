"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="mb-6" variants={fadeInUp}>
            {t('hero.title')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button asChild size="lg" className="text-base">
              <Link href="/services/systems-audit">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="/contact">
                {t('hero.cta.secondary')}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;