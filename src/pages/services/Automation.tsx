import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Automation = () => {
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
              <h1 className="mb-6">Automation Projects</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Custom workflow automation using n8n, Zapier, and Make to eliminate repetitive tasks and connect your tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="mb-6">Who This Is For</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Teams spending hours on manual data entry and transfers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Businesses with disconnected tools that need to talk to each other</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Operations teams looking to scale without adding headcount</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">Common Automation Projects</h2>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Lead Routing</h3>
                        <p className="text-sm text-muted-foreground">Automatic distribution and enrichment of inbound leads</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Client Onboarding</h3>
                        <p className="text-sm text-muted-foreground">End-to-end automation from contract to kickoff</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Data Sync</h3>
                        <p className="text-sm text-muted-foreground">Keep multiple systems in sync automatically</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Reporting</h3>
                        <p className="text-sm text-muted-foreground">Automated data aggregation and report generation</p>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">What's Included</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Workflow mapping and requirements documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Platform selection (n8n, Zapier, or Make)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Complete automation build and testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Error handling and monitoring setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Documentation and team handover</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">The Process</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">01</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Workflow Audit</h3>
                        <p className="text-muted-foreground">Map current manual processes and identify automation opportunities.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">02</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Design</h3>
                        <p className="text-muted-foreground">Design the automation flow and select the right platform.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">03</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Build & Test</h3>
                        <p className="text-muted-foreground">Implement the automation with thorough testing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">04</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Deploy & Monitor</h3>
                        <p className="text-muted-foreground">Launch with monitoring and support for any adjustments.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-6">Expected Outcomes</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Significant time savings on repetitive tasks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Reduced human error in data transfers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Better data consistency across systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Ability to scale operations without proportional headcount growth</span>
                    </li>
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
                      <h3 className="mb-6 text-xl font-semibold">Pricing</h3>
                      <div className="mb-6">
                        <div className="text-3xl font-bold mb-2">$2,500 - $8,000</div>
                        <p className="text-sm text-muted-foreground">Per automation project</p>
                      </div>
                      <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                        <p>• 2-4 week timeline</p>
                        <p>• Includes implementation</p>
                        <p>• Testing and QA included</p>
                        <p>• 2 weeks post-launch support</p>
                      </div>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full" size="lg">
                        <Link to="/services/automation-retainer">Ongoing Support</Link>
                      </Button>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">Related Case Study</h4>
                    <Link to="/case-studies/saas-startup" className="block text-sm text-accent hover:underline">
                      SaaS Customer Onboarding Automation
                    </Link>
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

export default Automation;
