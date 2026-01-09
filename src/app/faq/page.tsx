"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const faqSections = t("faqPage.sections", { returnObjects: true }) as Array<{
    category: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  }>;

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="mb-6">{t("faqPage.title")}</h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            {t("faqPage.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h2 className="mb-6 text-xl md:text-2xl">{section.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${section.category}-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <h2 className="mb-4">{t("faqPage.cta.title")}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("faqPage.cta.description")}
          </p>
          <Button asChild size="lg">
            <Link href={t("faqPage.cta.buttonLink")} target="_blank">
              {t("faqPage.cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
