"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const FinalCta = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t('finalCta.headline')}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('finalCta.subheadline')}
          </motion.p>

          <motion.div className="mb-8" variants={fadeInUp}>
            <Button asChild size="lg" className="text-base px-8">
              <Link href={t('finalCta.ctaLink')} target="_blank">
                {t('finalCta.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-success" />
              <span>{t('finalCta.trustSignals.turnaround')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              <span>{t('finalCta.trustSignals.payment')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>{t('finalCta.trustSignals.guarantee')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
