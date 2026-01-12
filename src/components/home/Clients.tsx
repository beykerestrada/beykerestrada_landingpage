"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  const clients = t("clients.list", { returnObjects: true }) as Array<{
    name: string;
    logo: string;
  }>;

  const testimonials = t("clients.testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;

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

        {/* Featured Testimonial */}
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

          <Card className="p-8 md:p-12 mb-8">
            <p className="text-sm md:text-base text-muted-foreground italic mb-6 leading-relaxed">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">
                {testimonials[0].author}
              </span>
              <span className="text-sm text-muted-foreground">
                {testimonials[0].role}
                {testimonials[0].company && `, ${testimonials[0].company}`}
              </span>
            </div>
          </Card>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/testimonials">
                {t('clients.testimonials.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
