import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Automation from $800 - n8n, Zapier & Make Integrations",
  description: "Eliminate manual data entry and repetitive tasks with custom workflow automation. Connect your tools, automate processes, and save 10+ hours per week. Built with n8n, Zapier, or Make.",
  keywords: [
    "workflow automation",
    "n8n automation",
    "Zapier automation",
    "Make automation",
    "business process automation",
    "no-code automation",
    "workflow integration",
    "API automation",
    "data automation",
    "task automation",
    "business automation consultant",
    "automation implementation"
  ],
  openGraph: {
    title: "Workflow Automation - Eliminate Manual Work & Save 10+ Hours/Week",
    description: "Custom automation workflows with n8n, Zapier, or Make. Connect your tools, eliminate manual data entry, and automate repetitive tasks from $800.",
    url: "https://beykerestrada.com/services/workflow-automation",
    type: "website",
    images: [
      {
        url: "/og-workflow-automation.png",
        width: 1200,
        height: 630,
        alt: "Workflow Automation - n8n, Zapier & Make Integrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation from $800 - Save 10+ Hours per Week",
    description: "Eliminate manual work with custom n8n, Zapier, or Make automation. Connect your tools and automate repetitive tasks.",
    images: ["/og-workflow-automation.png"],
  },
  alternates: {
    canonical: "https://beykerestrada.com/services/workflow-automation",
  },
};

export default function WorkflowAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
