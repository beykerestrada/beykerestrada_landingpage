"use client";

import { Layers, RefreshCw, TrendingUp, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const ProblemSolution = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: Layers,
      problem: t('problemSolution.fragmentation.problem'),
      solution: t('problemSolution.fragmentation.solution'),
    },
    {
      icon: RefreshCw,
      problem: t('problemSolution.manual.problem'),
      solution: t('problemSolution.manual.solution'),
    },
    {
      icon: TrendingUp,
      problem: t('problemSolution.scaling.problem'),
      solution: t('problemSolution.scaling.solution'),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-100">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold" variants={fadeInUp}>
            {t('problemSolution.headline')}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('problemSolution.subheadline')}
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-border">
                <CardContent className="p-8 md:p-10">
                  {/* Icon at top */}
                  <div className="mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="mb-8">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 block">
                      {t('problemSolution.problemLabel')}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* Arrow down */}
                  <div className="flex justify-center my-6">
                    <ArrowDown className="h-6 w-6 text-primary/40" />
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">
                      {t('problemSolution.solutionLabel')}
                    </span>
                    <p className="text-foreground font-semibold leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
