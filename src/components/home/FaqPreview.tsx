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
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const FaqPreview = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faqPreview.question1.q'),
      answer: t('faqPreview.question1.a'),
    },
    {
      question: t('faqPreview.question2.q'),
      answer: t('faqPreview.question2.a'),
    },
    {
      question: t('faqPreview.question3.q'),
      answer: t('faqPreview.question3.a'),
    },
    {
      question: t('faqPreview.question4.q'),
      answer: t('faqPreview.question4.a'),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t('faqPreview.headline')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('faqPreview.subheadline')}
          </motion.p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion
              type="multiple"
              defaultValue={["item-0", "item-1", "item-2"]}
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
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
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button asChild variant="outline">
              <Link href="/faq">{t('faqPreview.viewAll')}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqPreview;