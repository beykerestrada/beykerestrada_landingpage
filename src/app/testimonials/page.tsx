"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
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

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return names[0][0] + names[names.length - 1][0];
    }
    return names[0][0];
  };

  // Clean white card style with rounded corners
  const accentVariants = [
    'bg-white border-border shadow-sm rounded-xl',
    'bg-white border-border shadow-sm rounded-xl',
    'bg-white border-border shadow-sm rounded-xl',
    'bg-white border-border shadow-sm rounded-xl'
  ];

  // Bento grid pattern - define which cards should be larger
  // Pattern: large, small, small, large
  const getBentoGridClass = (index: number) => {
    const pattern = [
      'md:col-span-2', // 0: large
      'md:col-span-1', // 1: small
      'md:col-span-1', // 2: small
      'md:col-span-2', // 3: large
    ];
    return pattern[index % pattern.length];
  };

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

        {/* Testimonials Bento Grid */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={getBentoGridClass(index)}
              >
                <Card className={`p-6 md:p-8 h-full hover:shadow-md transition-shadow border ${accentVariants[index % accentVariants.length]}`}>
                  {/* Avatar Circle with Initials */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {getInitials(testimonial.author)}
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm md:text-base text-muted-foreground italic mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info with Badge */}
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-semibold text-foreground">
                          {testimonial.author}
                        </span>
                        <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
