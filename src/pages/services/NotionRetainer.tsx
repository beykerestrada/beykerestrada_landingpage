import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const NotionRetainer = () => {
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
              <h1 className="mb-6">Notion Architect Retainer</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Ongoing Notion system design, optimization, and team support to keep your workspace running smoothly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="mb-6">Who This Is For</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Teams with evolving workflows that need regular system updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Growing companies that need expert support as they scale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Organizations wanting to maximize their Notion investment</span>
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
                        <h3 className="mb-2 text-lg">Monthly Design Hours</h3>
                        <p className="text-sm text-muted-foreground">Dedicated time for workspace improvements</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Template Creation</h3>
                        <p className="text-sm text-muted-foreground">Custom templates for common workflows</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Team Support</h3>
                        <p className="text-sm text-muted-foreground">Answer questions and solve issues</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">System Optimization</h3>
                        <p className="text-sm text-muted-foreground">Performance improvements and cleanup</p>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">Monthly Activities</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>New database and view creation as needs evolve</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Formula and automation updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Team training on new features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Regular system health checks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Documentation updates</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">How It Works</h2>
                  <p className="text-muted-foreground mb-6">
                    You get a dedicated monthly allocation of design hours. Use them for new features, optimizations, training, or troubleshooting. Unused hours don't roll over, ensuring you maximize value each month.
                  </p>
                  <p className="text-muted-foreground">
                    We meet monthly to review priorities and plan upcoming work. Communication happens async via Slack or your preferred tool.
                  </p>
                </div>

                <div>
                  <h2 className="mb-6">Expected Outcomes</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Notion workspace that evolves with your business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Fast resolution of system issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Team confidence using the system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Ongoing optimization and improvements</span>
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
                        <div className="text-3xl font-bold mb-2">$1,500 - $3,500</div>
                        <p className="text-sm text-muted-foreground">Per month</p>
                      </div>
                      <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                        <p>• 10-20 hours per month</p>
                        <p>• Priority support</p>
                        <p>• Flexible scope</p>
                        <p>• 3-month minimum commitment</p>
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
                    <h4 className="mb-3 font-semibold">Not sure if this fits?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Book a call to discuss your needs.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Schedule Call</Link>
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

export default NotionRetainer;
