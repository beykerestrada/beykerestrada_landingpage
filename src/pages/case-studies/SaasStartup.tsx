import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const SaasStartup = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-8 px-0">
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>

            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-medium text-accent">SaaS Startup</span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">Software</span>
              </div>
              <h1 className="mb-6">Automated Customer Onboarding Pipeline</h1>
              <div className="text-xl font-semibold text-accent">
                Onboarding time reduced from 2 weeks to 2 days
              </div>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Card className="p-8 bg-muted/30">
                  <h2 className="mb-4 text-xl">Key Metrics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">14 → 2</div>
                      <div className="text-sm text-muted-foreground">Days to onboard</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">90%</div>
                      <div className="text-sm text-muted-foreground">Manual work eliminated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">Zero</div>
                      <div className="text-sm text-muted-foreground">Customer complaints</div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="mb-4">Client Context</h2>
                <p className="text-muted-foreground leading-relaxed">
                  An early-stage B2B SaaS company with 8 employees and growing MRR. Customer success team was spending most of their time manually onboarding new customers instead of driving retention and expansion. Process involved 15+ manual steps across multiple tools.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="mb-4">The Problem</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• New customers waiting 2+ weeks for full onboarding</li>
                  <li>• CS team creating the same documents and accounts manually for each customer</li>
                  <li>• Inconsistent onboarding experience across customers</li>
                  <li>• No way to track onboarding progress or identify bottlenecks</li>
                  <li>• Unable to scale CS team proportionally with customer growth</li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="mb-4">Scope of Work</h2>
                <p className="text-muted-foreground mb-4">
                  3-week automation project to eliminate manual onboarding tasks and create a seamless customer experience.
                </p>
                <h3 className="mb-3 text-lg font-semibold">Deliverables</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Automated customer provisioning workflow</li>
                  <li>• Document generation automation</li>
                  <li>• Progress tracking dashboard</li>
                  <li>• Email sequence automation</li>
                  <li>• Training resource delivery system</li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <h2 className="mb-4">Systems & Automations Delivered</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Account Provisioning</h3>
                    <p className="text-muted-foreground">
                      n8n automation triggered when deal closes in CRM. Automatically creates customer accounts, sets permissions, generates API keys, and sends welcome email with credentials.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Document Pipeline</h3>
                    <p className="text-muted-foreground">
                      Automated generation of onboarding docs, setup guides, and training materials personalized with customer details. Delivered via branded portal.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Progress Dashboard</h3>
                    <p className="text-muted-foreground">
                      Real-time Notion dashboard showing onboarding status for all customers. CS team can see where each customer is and identify stuck onboardings.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Communication Sequence</h3>
                    <p className="text-muted-foreground">
                      Automated email sequence with check-ins, training resources, and milestone celebrations. Personalized based on customer's progress through onboarding.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="mb-4">Before / After</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="mb-3 text-lg font-semibold">Before</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 2 weeks average onboarding time</li>
                      <li>• 15+ manual steps per customer</li>
                      <li>• CS team at capacity with 50 customers</li>
                      <li>• Inconsistent customer experience</li>
                      <li>• Frequent delays and errors</li>
                    </ul>
                  </Card>
                  <Card className="p-6">
                    <h3 className="mb-3 text-lg font-semibold">After</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 2 days average onboarding time</li>
                      <li>• 2 manual touchpoints per customer</li>
                      <li>• CS managing 150+ customers</li>
                      <li>• Standardized, excellent experience</li>
                      <li>• Zero onboarding-related complaints</li>
                    </ul>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="mb-4">Outcomes & Impact</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Onboarding time reduced from 14 days to 2 days</li>
                  <li>• CS team freed up to focus on retention and expansion</li>
                  <li>• Customer satisfaction scores improved by 35%</li>
                  <li>• Able to 3x customer base without adding CS headcount</li>
                  <li>• Time-to-value dramatically improved; faster activation</li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="mb-4">Client Testimonial</h2>
                <Card className="p-8 border-accent/50 bg-accent/5">
                  <p className="text-lg italic mb-4">
                    "This automation was a game-changer. We went from dreading new customer onboarding to having it happen seamlessly in the background. Our CS team can finally focus on helping customers succeed instead of pushing paper."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    — Head of Customer Success, SaaS Startup
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 rounded-lg border border-border bg-card p-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <h2 className="mb-4">Need Automation for Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how automation can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/services/automation">
                    View Automation Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Book a Call</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SaasStartup;