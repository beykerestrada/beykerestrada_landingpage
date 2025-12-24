"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const PromotionalBanners = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <motion.div
        className="mx-auto max-w-content px-6 lg:px-8 space-y-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Systems Audit Banner */}
        <motion.div
          className="rounded-lg border border-border bg-card p-8 md:p-12"
          variants={fadeInUp}
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
              {t('promotionalBanners.systemsAudit.badge')}
            </div>
            <h2 className="mb-4">{t('promotionalBanners.systemsAudit.title')}</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              {t('promotionalBanners.systemsAudit.description')}
            </p>
            <ul className="mb-6 space-y-2 text-muted-foreground">
              <li>• {t('promotionalBanners.systemsAudit.bullet1')}</li>
              <li>• {t('promotionalBanners.systemsAudit.bullet2')}</li>
              <li>• {t('promotionalBanners.systemsAudit.bullet3')}</li>
            </ul>
            <Button asChild size="lg">
              <Link href="/services/systems-audit">
                {t('promotionalBanners.systemsAudit.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* White-Label Banner */}
        <motion.div
          className="rounded-lg border border-border bg-accent/5 p-8 md:p-12"
          variants={fadeInUp}
        >
          <div className="max-w-3xl">
            <div className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-medium text-accent">
              {t('promotionalBanners.whiteLabel.badge')}
            </div>
            <h2 className="mb-4">{t('promotionalBanners.whiteLabel.title')}</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              {t('promotionalBanners.whiteLabel.description')}
            </p>
            <ul className="mb-6 space-y-2 text-muted-foreground">
              <li>• {t('promotionalBanners.whiteLabel.bullet1')}</li>
              <li>• {t('promotionalBanners.whiteLabel.bullet2')}</li>
              <li>• {t('promotionalBanners.whiteLabel.bullet3')}</li>
            </ul>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/white-label">
                {t('promotionalBanners.whiteLabel.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PromotionalBanners;