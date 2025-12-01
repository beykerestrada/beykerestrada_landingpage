"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const FaqPreview = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.question1.q'),
      answer: t('faq.question1.a'),
    },
    {
      question: t('faq.question2.q'),
      answer: t('faq.question2.a'),
    },
    {
      question: t('faq.question3.q'),
      answer: t('faq.question3.a'),
    },
  ];

  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('faq.title')}</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Button asChild variant="outline">
              <Link href="/faq">{t('faq.viewAll')}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqPreview;