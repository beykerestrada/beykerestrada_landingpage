import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhiteLabel = () => {
  const { t } = useTranslation();

  const whoThisIsFor = t("serviceDetail.whiteLabel.whoThisIsFor", { returnObjects: true }) as string[];
  const howItWorks = t("serviceDetail.whiteLabel.howItWorks", { returnObjects: true }) as { paragraph1: string; paragraph2: string };
  const included = t("serviceDetail.whiteLabel.included", { returnObjects: true }) as Record<string, { title: string; description: string }>;
  const servicesAvailable = t("serviceDetail.whiteLabel.servicesAvailable", { returnObjects: true }) as string[];
  const pricingStructure = t("serviceDetail.whiteLabel.pricingStructure", { returnObjects: true }) as { intro: string; items: Record<string, { title: string; wholesale: string; retail: string }> };
  const process = t("serviceDetail.whiteLabel.process", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const outcomes = t("serviceDetail.whiteLabel.outcomes", { returnObjects: true }) as string[];
  const getStarted = t("serviceDetail.whiteLabel.getStarted", { returnObjects: true }) as { description: string; button: string };
  const minimumCommitment = t("serviceDetail.whiteLabel.minimumCommitment", { returnObjects: true }) as { title: string; description: string };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full py-24 bg-accent/5">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                {t("serviceDetail.whiteLabel.badge")}
              </div>
              <h1 className="mb-6">{t("serviceDetail.whiteLabel.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("serviceDetail.whiteLabel.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
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
                  <h2 className="mb-6">How It Works</h2>
                  <p className="text-muted-foreground mb-6">
                    {howItWorks.paragraph1}
                  </p>
                  <p className="text-muted-foreground">
                    {howItWorks.paragraph2}
                  </p>
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
                          <h3 className="mb-2 text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">Services Available</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    {servicesAvailable.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">Pricing Structure</h2>
                  <p className="text-muted-foreground mb-6">
                    {pricingStructure.intro}
                  </p>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {Object.values(pricingStructure.items).map((item, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <Card className="p-6">
                          <h3 className="mb-2 text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.wholesale}</p>
                          <p className="text-xs text-muted-foreground">{item.retail}</p>
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
                    <Card className="p-8 border-accent/50 bg-accent/5">
                      <h3 className="mb-6 text-xl font-semibold">Get Started</h3>
                      <p className="mb-8 text-sm text-muted-foreground">
                        {getStarted.description}
                      </p>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          {getStarted.button}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">{minimumCommitment.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {minimumCommitment.description}
                    </p>
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

export default WhiteLabel;
