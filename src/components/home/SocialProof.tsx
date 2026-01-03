"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const SocialProof = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const caseStudies = [
    {
      client: t('caseStudies.williamPittSothebys.client'),
      title: t('caseStudies.williamPittSothebys.title'),
      result: t('caseStudies.williamPittSothebys.result'),
      link: "/case-studies/william-pitt-sothebys",
      metrics: [
        "Multiple tools → 1 unified platform",
        "Manual reports → AI-automated",
        "Real-time visibility across teams"
      ]
    },
    {
      client: t('caseStudies.ingeYang.client'),
      title: t('caseStudies.ingeYang.title'),
      result: t('caseStudies.ingeYang.result'),
      link: "/case-studies/inge-yang",
      metrics: [
        "Manual → Automated CRM",
        "30-60 min/week saved",
        "Real-time business dashboard"
      ]
    },
  ];

  const testimonials = t("clients.testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t('socialProof.headline')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('socialProof.subheadline')}
          </motion.p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="mb-3 text-sm font-semibold text-primary">{study.client}</div>
                <h3 className="mb-3 text-lg font-semibold">{study.title}</h3>

                {/* Metrics */}
                <div className="mb-4 flex-grow">
                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild variant="ghost" size="sm" className="px-0 self-start mt-auto">
                  <Link href={study.link}>
                    {t('caseStudies.readCaseStudy')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            {t('clients.testimonials.title')}
          </h3>

          <div className="relative">
            <Card className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">
                      {testimonials[currentTestimonial].author}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                      {testimonials[currentTestimonial].company && `, ${testimonials[currentTestimonial].company}`}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
