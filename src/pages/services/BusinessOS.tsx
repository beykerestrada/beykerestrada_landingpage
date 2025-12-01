import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const BusinessOS = () => {
  const { t } = useTranslation();

  const whoThisIsFor = t("serviceDetail.businessOS.whoThisIsFor", { returnObjects: true }) as string[];
  const problems = t("serviceDetail.businessOS.problems", { returnObjects: true }) as string[];
  const included = t("serviceDetail.businessOS.included", { returnObjects: true }) as Record<string, { title: string; description: string }>;
  const process = t("serviceDetail.businessOS.process", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const outcomes = t("serviceDetail.businessOS.outcomes", { returnObjects: true }) as string[];
  const pricing = t("serviceDetail.businessOS.pricing", { returnObjects: true }) as { amount: string; details: string[] };
  const relatedCaseStudies = t("serviceDetail.businessOS.relatedCaseStudies", { returnObjects: true }) as Array<{ title: string; link: string }>;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h1 className="mb-6">{t("serviceDetail.businessOS.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {t("serviceDetail.businessOS.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="mb-6">{t("serviceDetail.common.whoThisIsFor")}</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    {whoThisIsFor.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">{t("serviceDetail.common.problemsSolves")}</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    {problems.map((problem, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">{t("serviceDetail.common.whatsIncluded")}</h2>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {Object.values(included).map((item, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Card className="p-6">
                          <h3 className="mb-3 text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">{t("serviceDetail.common.theProcess")}</h2>
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 text-3xl font-bold text-primary/20">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-6">{t("serviceDetail.common.expectedOutcomes")}</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    {outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={scaleIn}
                  >
                    <Card className="p-8">
                      <h3 className="mb-6 text-xl font-semibold">{t("serviceDetail.common.pricing")}</h3>
                      <div className="mb-6">
                        <div className="text-3xl font-bold mb-2">{pricing.amount}</div>
                        <p className="text-sm text-muted-foreground">{t("serviceDetail.common.oneTimeProjectFee")}</p>
                      </div>
                      <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                        {pricing.details.map((detail, index) => (
                          <p key={index}>• {detail}</p>
                        ))}
                      </div>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          {t("serviceDetail.businessOS.cta.primary")}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full" size="lg">
                        <Link to="/services/systems-audit">{t("serviceDetail.businessOS.cta.secondary")}</Link>
                      </Button>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">{t("serviceDetail.common.relatedCaseStudies")}</h4>
                    <div className="space-y-3">
                      {relatedCaseStudies.map((caseStudy, index) => (
                        <Link key={index} to={caseStudy.link} className="block text-sm text-accent hover:underline">
                          {caseStudy.title}
                        </Link>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessOS;
