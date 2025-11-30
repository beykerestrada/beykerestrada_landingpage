import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const ProcessOverview = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: "02",
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: "03",
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      number: "04",
      title: t('process.step4.title'),
      description: t('process.step4.description'),
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
          <h2 className="mb-4">{t('process.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="text-5xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="mb-2 text-xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessOverview;