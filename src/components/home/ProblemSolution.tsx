"use client";

import { XCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const ProblemSolution = () => {
  const { t } = useTranslation();

  const problems = [
    {
      problem: t('problemSolution.fragmentation.problem'),
      solution: t('problemSolution.fragmentation.solution'),
    },
    {
      problem: t('problemSolution.manual.problem'),
      solution: t('problemSolution.manual.solution'),
    },
    {
      problem: t('problemSolution.scaling.problem'),
      solution: t('problemSolution.scaling.solution'),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="mb-4" variants={fadeInUp}>
            {t('problemSolution.headline')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('problemSolution.subheadline')}
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  {/* Problem */}
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-destructive">
                        {t('problemSolution.problemLabel')}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm ml-7">
                      {item.problem}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-4">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-success">
                        {t('problemSolution.solutionLabel')}
                      </span>
                    </div>
                    <p className="text-foreground text-sm font-medium ml-7">
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
