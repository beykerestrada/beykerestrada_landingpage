"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const ClientsSection = () => {
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
    <section className="w-full py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('clients.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full flex items-center justify-center hover:shadow-md transition-all group">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={80}
                  className="max-h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className="mt-16">
          <motion.h3
            className="text-2xl font-semibold text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            {t('clients.testimonials.title')}
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <p className="text-muted-foreground italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-col">
                    <span className="font-medium">{testimonial.author}</span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
