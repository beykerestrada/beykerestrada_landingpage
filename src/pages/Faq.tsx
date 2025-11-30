import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";

const faqSections = [
  {
    category: "General",
    questions: [
      {
        question: "What types of businesses do you work with?",
        answer: "I work with growing teams, agencies, and startups across industries. Most clients are between 5-50 people and need systems to scale operations without proportional headcount growth.",
      },
      {
        question: "Do you work with clients remotely?",
        answer: "Yes, all projects are conducted remotely. Most clients are in the US and Europe, but I've worked with teams worldwide.",
      },
      {
        question: "How do I get started?",
        answer: "The best starting point is either a Systems Audit (if you're exploring options) or booking a call to discuss your specific needs. Both options help us determine the right approach.",
      },
    ],
  },
  {
    category: "Notion Systems",
    questions: [
      {
        question: "Do you only work in Notion?",
        answer: "Notion is my primary platform for Business Operating Systems, but I work with other tools when they're the right fit. The goal is choosing the best solution for your needs, not forcing everything into Notion.",
      },
      {
        question: "Can you migrate data from our current system into Notion?",
        answer: "Yes, data migration is typically included in Business OS projects. We assess your current data, clean it up, and migrate what's relevant to the new system.",
      },
      {
        question: "What if our team doesn't know how to use Notion?",
        answer: "Team training is included in all Notion projects. Most teams become comfortable within a week of daily use. Documentation and training videos are also provided.",
      },
    ],
  },
  {
    category: "Automation",
    questions: [
      {
        question: "Which automation platform should I use: n8n, Zapier, or Make?",
        answer: "It depends on your technical capabilities, budget, and specific needs. n8n offers the most flexibility but requires some technical setup. Zapier is user-friendly with extensive integrations. Make is powerful and cost-effective for complex workflows. I help choose the right platform during scoping.",
      },
      {
        question: "Do I need technical skills to maintain automations?",
        answer: "No. All automations include documentation and are designed to be maintainable by non-technical users. Error notifications are set up so you know when something breaks.",
      },
      {
        question: "What happens if an automation breaks?",
        answer: "For one-time projects, basic support is included for 2-4 weeks post-launch. For ongoing needs, the Automation Ops Partner retainer provides monitoring and rapid fixes.",
      },
    ],
  },
  {
    category: "Pricing & Process",
    questions: [
      {
        question: "What's the difference between a one-time project and a retainer?",
        answer: "One-time projects have a defined scope and deliverable. Retainers provide ongoing support, optimization, and new feature development. Retainers make sense when your systems need to evolve regularly.",
      },
      {
        question: "How long does implementation take?",
        answer: "Systems Audits: 1-2 weeks. Automation projects: 2-4 weeks. Business OS: 6-8 weeks. Timelines depend on project scope and your team's availability for feedback.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, projects over $5,000 can be split into milestone-based payments. Retainers are billed monthly.",
      },
      {
        question: "What's included in post-launch support?",
        answer: "All projects include 2-4 weeks of post-launch support for bug fixes and minor adjustments. This ensures the system works as expected before handover.",
      },
    ],
  },
  {
    category: "Agencies & Partners",
    questions: [
      {
        question: "How does white-label work?",
        answer: "You sell services to your clients under your brand. I handle delivery behind the scenes. You maintain the client relationship and set your own pricing. I provide wholesale pricing with predictable costs.",
      },
      {
        question: "What's the minimum commitment for white-label partnerships?",
        answer: "Minimum 2 projects per quarter to maintain the partnership. This ensures we build familiarity with your brand and delivery standards.",
      },
      {
        question: "Can you help with sales and scoping?",
        answer: "Yes, I provide sales support including scoping assistance, proposal templates, and pricing guidance to help you close deals.",
      },
    ],
  },
  {
    category: "Implementation & Handover",
    questions: [
      {
        question: "Will our team be able to maintain the system after you're done?",
        answer: "Yes. All projects include training and documentation designed for non-technical users. Systems are built to be maintained by your team, not dependent on me.",
      },
      {
        question: "What if we need changes after the project is complete?",
        answer: "Minor changes are covered during the support period. For ongoing needs, you can book ad-hoc hours or establish a retainer. Many clients start with a one-time project and move to a retainer as needs evolve.",
      },
      {
        question: "Do you provide ongoing support after handover?",
        answer: "Ongoing support is available through retainer agreements (Notion Architect or Automation Ops Partner). Ad-hoc support can also be purchased as needed.",
      },
    ],
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="w-full py-24">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h1 className="mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Everything you need to know about working together, from process to pricing.
              </p>
            </motion.div>

            <div className="space-y-12">
              {faqSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <h2 className="mb-6 text-2xl">{section.category}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${section.category}-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 rounded-lg border border-border bg-card p-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <h2 className="mb-4">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a call to discuss your specific situation and get personalized answers.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Book a Call</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;