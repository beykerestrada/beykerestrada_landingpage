import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const Contact = () => {
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
              <h1 className="mb-6">Let's Work Together</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're ready to start a project or exploring options, I'm here to help.
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
                  <h2 className="mb-3 text-xl font-semibold">Email</h2>
                  <p className="text-muted-foreground mb-4">
                    Send me a message about your project. I respond to all inquiries within 24 hours.
                  </p>
                  <a href="mailto:hello@example.com" className="text-accent hover:underline font-medium">
                    hello@example.com
                  </a>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold">Book a Call</h2>
                  <p className="text-muted-foreground mb-4">
                    Schedule a 30-minute call to discuss your needs and explore how I can help.
                  </p>
                  <a href="https://calendly.com/example" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                    View Available Times
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
                <h2 className="mb-6 text-2xl">What to Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Initial Response</h3>
                    <p className="text-muted-foreground">
                      I respond to all inquiries within 24 hours (usually same day). I'll ask clarifying questions to understand your needs.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Discovery Call</h3>
                    <p className="text-muted-foreground">
                      We'll schedule a 30-minute call to discuss your operations, pain points, and goals. No obligation, just exploration.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Proposal</h3>
                    <p className="text-muted-foreground">
                      If it's a good fit, I'll send a detailed proposal with scope, timeline, and pricing. Most proposals are delivered within 48 hours.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Project Start</h3>
                    <p className="text-muted-foreground">
                      Once you approve the proposal, we schedule kickoff and begin work. Most projects start within 1-2 weeks.
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
                <h3 className="mb-4 text-lg font-semibold">Not Sure Where to Start?</h3>
                <p className="text-muted-foreground mb-4">
                  If you're exploring options and not ready to commit to a project, consider starting with a Systems Audit. It's a low-commitment way to get expert assessment and recommendations.
                </p>
                <a href="/services/systems-audit" className="text-accent hover:underline font-medium">
                  Learn About Systems Audit →
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