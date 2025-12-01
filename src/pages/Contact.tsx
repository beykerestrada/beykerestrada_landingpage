import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <motion.div
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h1 className="mb-6">{t("contact.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold">{t("contact.email.title")}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t("contact.email.description")}
                  </p>
                  <a href="mailto:hello@example.com" className="text-accent hover:underline font-medium">
                    {t("contact.email.address")}
                  </a>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold">{t("contact.call.title")}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t("contact.call.description")}
                  </p>
                  <a href="https://calendly.com/example" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                    {t("contact.call.link")}
                  </a>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Card className="p-8 md:p-12">
                <h2 className="mb-6 text-2xl">{t("contact.expectations.title")}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("contact.expectations.initialResponse.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contact.expectations.initialResponse.description")}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("contact.expectations.discoveryCall.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contact.expectations.discoveryCall.description")}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("contact.expectations.proposal.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contact.expectations.proposal.description")}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{t("contact.expectations.projectStart.title")}</h3>
                    <p className="text-muted-foreground">
                      {t("contact.expectations.projectStart.description")}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="mt-12 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <Card className="p-8 bg-muted/30">
                <h3 className="mb-4 text-lg font-semibold">{t("contact.notSure.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("contact.notSure.description")}
                </p>
                <a href="/services/systems-audit" className="text-accent hover:underline font-medium">
                  {t("contact.notSure.link")}
                </a>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;