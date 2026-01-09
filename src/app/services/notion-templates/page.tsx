"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Layout, Zap, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const NotionTemplatesPage = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 px-0">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('servicePages.backToServices')}
          </Link>
        </Button>

        {/* Hero Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="mb-4">
            {t('servicePages.notionTemplates.title')}
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-6">
            <div className="text-5xl font-bold text-primary">
              {t('servicePages.notionTemplates.price')}
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('servicePages.notionTemplates.description')}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button asChild size="lg">
              <Link href={t('servicePages.notionTemplates.ctaLink')} target="_blank">
                {t('servicePages.notionTemplates.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Who is this for? */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-6">{t('servicePages.notionTemplates.whoIsThisFor.title')}</h2>
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {(t('servicePages.notionTemplates.whoIsThisFor.points', { returnObjects: true }) as string[]).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* What You Get */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="mb-8">
            {t('servicePages.notionTemplates.whatYouGet.title')}
          </motion.h2>

          <div className="grid gap-6">
            {(t('servicePages.notionTemplates.whatYouGet.items', { returnObjects: true }) as any[]).map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {index === 0 && <Database className="h-5 w-5 text-primary" />}
                        {index === 1 && <Layout className="h-5 w-5 text-primary" />}
                        {index === 2 && <Zap className="h-5 w-5 text-primary" />}
                        {index === 3 && <Users className="h-5 w-5 text-primary" />}
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Process */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.notionTemplates.process.title')}</h2>

          <div className="space-y-8">
            {(t('servicePages.notionTemplates.process.steps', { returnObjects: true }) as any[]).map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Example Use Cases */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-8">{t('servicePages.notionTemplates.useCases.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(t('servicePages.notionTemplates.useCases.examples', { returnObjects: true }) as any[]).map((example, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="rounded-lg border border-border bg-card p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('servicePages.notionTemplates.finalCta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('servicePages.notionTemplates.finalCta.description')}
          </p>
          <Button asChild size="lg">
            <Link href={t('servicePages.notionTemplates.ctaLink')} target="_blank">
              {t('servicePages.notionTemplates.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NotionTemplatesPage;
