import { Building2, Workflow, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const ValuePillars = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Building2,
      title: t('valuePillars.operatingSystems.title'),
      description: t('valuePillars.operatingSystems.description'),
    },
    {
      icon: FileText,
      title: t('valuePillars.notionArchitecture.title'),
      description: t('valuePillars.notionArchitecture.description'),
    },
    {
      icon: Workflow,
      title: t('valuePillars.automationDesign.title'),
      description: t('valuePillars.automationDesign.description'),
    },
  ];

  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePillars;