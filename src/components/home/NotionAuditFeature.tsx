"use client";

import { CheckCircle2, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const NotionAuditFeature = () => {
  const { t } = useTranslation();

  const benefits = [
    t('notionAudit.benefit1'),
    t('notionAudit.benefit2'),
    t('notionAudit.benefit3'),
    t('notionAudit.benefit4'),
  ];

  const whatYouGet = [
    t('notionAudit.whatYouGet1'),
    t('notionAudit.whatYouGet2'),
    t('notionAudit.whatYouGet3'),
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="notion-audit" className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="overflow-hidden border-2 border-accent bg-accent/5">
            <div className="p-8 md:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground">
                <Badge className="h-4 w-4" />
                {t('notionAudit.badge')}
              </div>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t('notionAudit.title')}
              </h2>

              <p className="mb-6 text-xl font-medium text-muted-foreground">
                {t('notionAudit.headline')}
              </p>

              <p className="mb-8 text-lg text-muted-foreground">
                {t('notionAudit.description')}
              </p>

              <div className="mb-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-lg bg-background p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  {t('notionAudit.whatYouGetTitle')}
                </h3>
                <ul className="space-y-2">
                  {whatYouGet.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-6 text-sm font-medium text-muted-foreground">
                {t('notionAudit.qualification')}
              </p>

              <Button size="lg" asChild>
                <a href="#contact" onClick={scrollToContact}>
                  {t('notionAudit.cta')} →
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default NotionAuditFeature;
