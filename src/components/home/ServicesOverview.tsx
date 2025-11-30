import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const ServicesOverview = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.businessOS.title'),
      description: t('services.businessOS.description'),
      link: "/services/business-os",
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      link: "/services/automation",
    },
    {
      title: t('services.notionRetainer.title'),
      description: t('services.notionRetainer.description'),
      link: "/services/notion-retainer",
    },
    {
      title: t('services.automationRetainer.title'),
      description: t('services.automationRetainer.description'),
      link: "/services/automation-retainer",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <h3 className="mb-3 text-xl">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Button asChild variant="ghost" size="sm" className="px-0">
                  <Link to={service.link}>
                    {t('services.learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Button asChild variant="outline">
            <Link to="/services">{t('services.viewAll')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;