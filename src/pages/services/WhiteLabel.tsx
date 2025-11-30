import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const WhiteLabel = () => {
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
                For Agencies
              </div>
              <h1 className="mb-6">White-Label Systems for Agencies</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Scale your agency by offering systems and automation services under your brand. I handle delivery while you own the client relationship.
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
                      <span>Marketing and creative agencies wanting to add systems services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Consultancies looking to productize operations expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Tech agencies expanding into automation and Notion</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">How It Works</h2>
                  <p className="text-muted-foreground mb-6">
                    You sell systems and automation services to your clients under your agency brand. I become your delivery partner, working behind the scenes to implement while you maintain the client relationship.
                  </p>
                  <p className="text-muted-foreground">
                    You set your own pricing and margins. I provide fixed-price delivery with predictable costs, allowing you to build a profitable service line.
                  </p>
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
                        <h3 className="mb-2 text-lg">White-Label Delivery</h3>
                        <p className="text-sm text-muted-foreground">All work delivered under your brand</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Fixed Pricing</h3>
                        <p className="text-sm text-muted-foreground">Predictable costs for margin planning</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Sales Support</h3>
                        <p className="text-sm text-muted-foreground">Help with scoping and proposals</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Client Training</h3>
                        <p className="text-sm text-muted-foreground">Branded training and documentation</p>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>

                <div>
                  <h2 className="mb-6">Services Available</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Business Operating Systems in Notion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Workflow automation (n8n, Zapier, Make)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Custom Notion workspace design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Operations audits and assessments</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-6">Pricing Structure</h2>
                  <p className="text-muted-foreground mb-6">
                    White-label services are priced at wholesale rates, typically 30-40% below retail pricing. This allows you to mark up services while remaining competitive.
                  </p>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Business OS</h3>
                        <p className="text-sm text-muted-foreground mb-2">$5,000 - $10,000 wholesale</p>
                        <p className="text-xs text-muted-foreground">Typical retail: $8,000 - $15,000</p>
                      </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Card className="p-6">
                        <h3 className="mb-2 text-lg">Automation Project</h3>
                        <p className="text-sm text-muted-foreground mb-2">$1,500 - $5,000 wholesale</p>
                        <p className="text-xs text-muted-foreground">Typical retail: $2,500 - $8,000</p>
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
                        <h3 className="mb-2 text-lg font-semibold">Partnership Setup</h3>
                        <p className="text-muted-foreground">Establish white-label agreement and communication protocols.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">02</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Project Scoping</h3>
                        <p className="text-muted-foreground">You bring the client opportunity, we scope together.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">03</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Delivery</h3>
                        <p className="text-muted-foreground">I handle all implementation under your brand.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 text-3xl font-bold text-primary/20">04</div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Handover</h3>
                        <p className="text-muted-foreground">Client training and documentation in your brand.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-6">Expected Outcomes</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>New revenue stream with healthy margins</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Expanded service offering without hiring specialists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Predictable delivery costs and timelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                      <span>Higher client lifetime value through additional services</span>
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
                      <h3 className="mb-6 text-xl font-semibold">Get Started</h3>
                      <p className="mb-8 text-sm text-muted-foreground">
                        Book a call to discuss partnership terms and how we can work together.
                      </p>
                      <Button asChild className="w-full mb-3" size="lg">
                        <Link to="/contact">
                          Schedule Partnership Call
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </Card>
                  </motion.div>

                  <Card className="p-6 mt-6">
                    <h4 className="mb-3 font-semibold">Minimum Commitment</h4>
                    <p className="text-sm text-muted-foreground">
                      White-label partnerships require a minimum of 2 projects per quarter to maintain the relationship.
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