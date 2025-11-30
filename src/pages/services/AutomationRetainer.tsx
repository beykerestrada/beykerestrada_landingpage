import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const AutomationRetainer = () => {
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
              <h1 className="mb-6">Automation Ops Partner</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Monthly automation maintenance, monitoring, and optimization to ensure your workflows run reliably.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="mb-6">Who This Is For</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Teams relying on critical automations for daily operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Businesses without in-house automation expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Companies wanting to expand automation coverage</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">Problems This Solves</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Broken automations causing operational delays</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>No visibility into automation performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Inability to modify or expand existing automations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>API changes breaking existing workflows</span>
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
                        <h3 className="mb-2 text-lg">Proactive Monitoring</h3>
                        <p className="text-sm text-muted-foreground">Daily checks and error alerts</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Maintenance & Fixes</h3>
                        <p className="text-sm text-muted-foreground">Rapid response to issues</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Optimization</h3>
                        <p className="text-sm text-muted-foreground">Performance improvements</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">New Workflows</h3>
                        <p className="text-sm text-muted-foreground">Monthly automation hours included</p>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">Monthly Activities</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Monitor all automation performance and error rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Fix broken workflows within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Update automations when APIs change</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Build new workflows as business needs evolve</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Monthly performance reports</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">How It Works</h2>
                  <p className="text-muted-foreground mb-6">
                    I become your automation operations partner. You get proactive monitoring, rapid issue resolution, and a monthly allocation of hours for new automation projects or improvements.
                  </p>
                  <p className="text-muted-foreground">
                    Communication via Slack or email. Emergency fixes handled within 24 hours. Monthly check-ins to review performance and plan upcoming work.
                  </p>
                </div>

                <div>
                  <h2 className="mb-6">Expected Outcomes</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Reliable automation infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Fast resolution when issues arise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Continuous improvement and expansion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Peace of mind that automations are monitored</span>
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
                        <div className="text-3xl font-bold mb-2">$1,200 - $2,500</div>
                        <p className="text-sm text-muted-foreground">Per month</p>
                      </div>
                      <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                        <p>• Proactive monitoring</p>
                        <p>• 24-hour fix response time</p>
                        <p>• 8-15 hours for new workflows</p>
                        <p>• Monthly reporting</p>
                      </div>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">Don't have automations yet?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Start with a one-time automation project.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/services/automation">View Automation Projects</Link>
                    </Button>
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

export default AutomationRetainer;