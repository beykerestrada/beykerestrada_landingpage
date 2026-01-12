"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export default function TestimonialsPage() {
  const { t } = useTranslation();

  const testimonials = t("clients.testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="mb-6">
            {t("testimonialsPage.title")}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            {t("testimonialsPage.subtitle")}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 md:p-8 h-full hover:shadow-md transition-shadow">
                <p className="text-sm md:text-base text-muted-foreground italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    {testimonial.author}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <h2 className="mb-4">{t("testimonialsPage.cta.title")}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("testimonialsPage.cta.description")}
          </p>
          <Button asChild size="lg">
            <Link href={t("testimonialsPage.cta.buttonLink")} target="_blank">
              {t("testimonialsPage.cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
