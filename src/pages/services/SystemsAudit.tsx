import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SystemsAudit = () => {
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
                Start Here
              </div>
              <h1 className="mb-6">Systems Audit</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive assessment of your operations, systems, and automation opportunities with actionable recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h2 className="mb-6">Who This Is For</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Teams unsure where to start with systems or automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Businesses wanting an expert assessment before investing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Organizations with systems in place that aren't working well</span>
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
                        <h3 className="mb-2 text-lg">Operations Review</h3>
                        <p className="text-sm text-muted-foreground">Current state assessment of workflows</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Systems Evaluation</h3>
                        <p className="text-sm text-muted-foreground">Notion and tool stack analysis</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Automation Mapping</h3>
                        <p className="text-sm text-muted-foreground">Identify automation opportunities</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Recommendations Report</h3>
                        <p className="text-sm text-muted-foreground">Prioritized action plan</p>
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
                        <h3 className="mb-2 text-lg font-semibold">Kick-off Interview</h3>
                        <p className="text-muted-foreground">Understand your business, team structure, and pain points.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">02</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Deep Dive</h3>
                        <p className="text-muted-foreground">Review existing systems, workflows, and tools.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">03</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Analysis</h3>
                        <p className="text-muted-foreground">Identify gaps, opportunities, and quick wins.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">04</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Report Delivery</h3>
                        <p className="text-muted-foreground">Receive a detailed report with prioritized recommendations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-6">What You'll Receive</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Current state analysis of your operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Notion workspace assessment with improvement recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>List of automation opportunities with ROI estimates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Prioritized roadmap for implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Quick wins you can implement immediately</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">Expected Outcomes</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Clear understanding of what's working and what isn't</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Confidence in next steps for improvement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Prioritized action plan you can implement yourself or with support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Time and cost estimates for recommended improvements</span>
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
                    <Card className="p-8 border-accent/50 bg-accent/5">
                      <h3 className="mb-6 text-xl font-semibold">Pricing</h3>
                      <div className="mb-6">
                        <div className="text-3xl font-bold mb-2">$1,500</div>
                        <p className="text-sm text-muted-foreground">Fixed price</p>
                      </div>
                      <div className="mb-8 space-y-2 text-sm text-muted-foreground">
                        <p>• 1-2 week turnaround</p>
                        <p>• Comprehensive report</p>
                        <p>• Prioritized roadmap</p>
                        <p>• Follow-up call included</p>
                      </div>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          Get Your Audit
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Audit fee credited toward future projects
                      </p>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">What Happens Next?</h4>
                    <p className="text-sm text-muted-foreground">
                      After the audit, you can implement recommendations yourself, work with your team, or engage me for implementation support.
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

export default SystemsAudit;
