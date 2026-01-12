"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const clients = t("clients.list", { returnObjects: true }) as Array<{
    name: string;
    logo: string;
  }>;

  const testimonials = t("clients.testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    shortQuote: string;
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

  // Auto-play functionality (desktop only)
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [currentTestimonial, isHovering]);

  // Handle drag end for mobile swipe
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevTestimonial();
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial();
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
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
            {t('clients.title')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('clients.subtitle')}
          </motion.p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative w-full h-24 md:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
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
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">
            {t('clients.testimonials.title')}
          </h3>

          {/* Desktop: Standard carousel with auto-play */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Card className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm md:text-base text-muted-foreground italic mb-6 leading-relaxed">
                    &ldquo;{testimonials[currentTestimonial].shortQuote}&rdquo;
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

            {/* Desktop Carousel Controls */}
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

          {/* Mobile: Swipeable carousel with peek effect */}
          <div className="relative md:hidden overflow-visible">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <Card className="p-6 mr-4">
                    <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                      &ldquo;{testimonials[currentTestimonial].shortQuote}&rdquo;
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
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Peek effect - show partial next card */}
              <div className="absolute top-0 right-0 w-16 h-full pointer-events-none">
                <div className="h-full bg-gradient-to-l from-background via-background/50 to-transparent" />
              </div>
            </div>

            {/* Mobile Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
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
          </div>

          {/* View All Testimonials Button */}
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimonials">
                {t('clients.testimonials.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
