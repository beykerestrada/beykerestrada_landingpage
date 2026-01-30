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

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return names[0][0] + names[names.length - 1][0];
    }
    return names[0][0];
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [currentTestimonial, isHovering]);

  // Handle drag end for mobile swipe
  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevTestimonial();
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial();
    }
  };

  return (
    <section className="w-full">
      {/* Client Logos Section */}
      <div className="bg-white border-t border-b border-border py-12 md:py-16">
        <div className="mx-auto max-w-content">
          {/* Header */}
          <motion.div
            className="mb-8 md:mb-12 text-center px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {t('clients.title')}
            </p>
          </motion.div>

          {/* Client Logos Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Infinite scroll animation */}
            <motion.div
              className="flex gap-12 md:gap-16 lg:gap-20"
              animate={{
                x: [0, -100 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate clients array for seamless loop */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mx-auto max-w-content px-6 lg:px-8 py-16 md:py-24 bg-background">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" variants={fadeInUp}>
            {t('clients.testimonials.title')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('clients.subtitle')}
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >

          {/* Desktop: Standard carousel with auto-play */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Card className="p-10 md:p-12 bg-white shadow-sm border border-border rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Large Quote Icon */}
                  <div className="mb-6">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary/20">
                      <path d="M12 24C12 18.48 16.48 14 22 14V11C14.82 11 9 16.82 9 24C9 28.41 11.59 32.17 15.41 34.17C15.78 34.37 16.22 34.37 16.59 34.17C17.37 33.73 17.72 32.78 17.28 32C16.5 30.5 16 28.8 16 27C16 25.34 17.34 24 19 24H22V27C22 28.66 20.66 30 19 30C17.34 30 16 28.66 16 27V24H12ZM29 24C29 18.48 33.48 14 39 14V11C31.82 11 26 16.82 26 24C26 28.41 28.59 32.17 32.41 34.17C32.78 34.37 33.22 34.37 33.59 34.17C34.37 33.73 34.72 32.78 34.28 32C33.5 30.5 33 28.8 33 27C33 25.34 34.34 24 36 24H39V27C39 28.66 37.66 30 36 30C34.34 30 33 28.66 33 27V24H29Z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base md:text-lg text-foreground mb-8 leading-relaxed">
                    &ldquo;{testimonials[currentTestimonial].shortQuote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-base font-semibold text-primary">
                        {getInitials(testimonials[currentTestimonial].author)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                        {testimonials[currentTestimonial].company && `, ${testimonials[currentTestimonial].company}`}
                      </div>
                    </div>
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

          {/* Mobile: Swipeable carousel */}
          <div className="relative md:hidden">
            {/* Swipe Hint */}
            <div className="text-center mb-3">
              <p className="text-xs text-muted-foreground">
                Desliza para ver más →
              </p>
            </div>

            <div className="relative">
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
                  className="cursor-grab active:cursor-grabbing touch-pan-y"
                >
                  <Card className="p-6 bg-white shadow-sm border border-border rounded-2xl">
                    {/* Quote Icon - Smaller on mobile */}
                    <div className="mb-4">
                      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-primary/20">
                        <path d="M12 24C12 18.48 16.48 14 22 14V11C14.82 11 9 16.82 9 24C9 28.41 11.59 32.17 15.41 34.17C15.78 34.37 16.22 34.37 16.59 34.17C17.37 33.73 17.72 32.78 17.28 32C16.5 30.5 16 28.8 16 27C16 25.34 17.34 24 19 24H22V27C22 28.66 20.66 30 19 30C17.34 30 16 28.66 16 27V24H12ZM29 24C29 18.48 33.48 14 39 14V11C31.82 11 26 16.82 26 24C26 28.41 28.59 32.17 32.41 34.17C32.78 34.37 33.22 34.37 33.59 34.17C34.37 33.73 34.72 32.78 34.28 32C33.5 30.5 33 28.8 33 27C33 25.34 34.34 24 36 24H39V27C39 28.66 37.66 30 36 30C34.34 30 33 28.66 33 27V24H29Z" fill="currentColor"/>
                      </svg>
                    </div>

                    {/* Testimonial Quote - Reduced margins */}
                    <p className="text-sm leading-relaxed text-foreground mb-5">
                      &ldquo;{testimonials[currentTestimonial].shortQuote}&rdquo;
                    </p>

                    {/* Author Info - Compact */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">
                          {getInitials(testimonials[currentTestimonial].author)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-foreground">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonials[currentTestimonial].role}
                          {testimonials[currentTestimonial].company && `, ${testimonials[currentTestimonial].company}`}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Dot Indicators - More accessible positioning */}
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'w-8 bg-primary'
                      : 'w-2.5 bg-muted-foreground/30'
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
