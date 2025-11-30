import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BusinessOS = () => {
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
              <h1 className="mb-6">Business OS Design & Implementation</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A complete operating system that connects your strategy, team workflows, and execution in one unified Notion workspace.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="mb-6">Who This Is For</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Growing teams with fragmented tools and unclear workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Agencies managing multiple clients without a central system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Founders who need to systematize before scaling</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">Problems This Solves</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Information scattered across multiple tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>No single source of truth for team operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Unclear workflows and handoffs between departments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Difficulty onboarding new team members</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">What's Included</h2>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-3 text-lg">Operations Audit</h3>
                        <p className="text-sm text-muted-foreground">Complete review of current systems and workflows</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-3 text-lg">System Architecture</h3>
                        <p className="text-sm text-muted-foreground">Custom-designed Notion workspace structure</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-3 text-lg">Workflow Design</h3>
                        <p className="text-sm text-muted-foreground">End-to-end process documentation</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-3 text-lg">Team Training</h3>
                        <p className="text-sm text-muted-foreground">Onboarding sessions and documentation</p>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">The Process</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">01</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Discovery & Audit</h3>
                        <p className="text-muted-foreground">Map current operations, identify gaps, and define requirements.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">02</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Architecture Design</h3>
                        <p className="text-muted-foreground">Design the system structure and workflow connections.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">03</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Implementation</h3>
                        <p className="text-muted-foreground">Build the Notion workspace with all databases and views.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">04</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Training & Handover</h3>
                        <p className="text-muted-foreground">Team training, documentation, and ongoing support setup.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-6">Expected Outcomes</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Single source of truth for all team operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Clear, documented workflows for every department</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Faster onboarding for new team members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Scalable system that grows with your business</span>
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
                        <div className="text-3xl font-bold mb-2">$8,000 - $15,000</div>
                        <p className="text-sm text-muted-foreground">One-time project fee</p>
                      </div>
                      <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                        <p>• 6-8 week timeline</p>
                        <p>• Includes full implementation</p>
                        <p>• Team training included</p>
                        <p>• 30-day post-launch support</p>
                      </div>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full" size="lg">
                        <Link to="/services/systems-audit">Start with an Audit</Link>
                      </Button>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">Related Case Studies</h4>
                    <div className="space-y-3">
                      <Link to="/case-studies/marketing-agency" className="block text-sm text-accent hover:underline">
                        Marketing Agency Business OS
                      </Link>
                      <Link to="/case-studies/consulting-firm" className="block text-sm text-accent hover:underline">
                        Consulting Firm Workspace
                      </Link>
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
