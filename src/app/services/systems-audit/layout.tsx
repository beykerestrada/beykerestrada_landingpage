import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$150 Systems Audit - Identify Bottlenecks & Get a Clear Roadmap",
  description: "Get a complete operational assessment, identify bottlenecks, and receive a prioritized roadmap for optimization. 60-minute consultation + detailed report + no-pressure follow-up. Money-back guarantee.",
  keywords: [
    "systems audit",
    "business operations audit",
    "Notion workspace audit",
    "operational assessment",
    "workflow analysis",
    "business bottlenecks",
    "systems consultation",
    "Notion review",
    "operations roadmap",
    "business efficiency audit"
  ],
  openGraph: {
    title: "$150 Systems Audit - Fix Your Systems & Automate Your Workflow",
    description: "60-minute deep-dive consultation + comprehensive report + implementation roadmap. Identify what's broken and get a clear path forward. Money-back guarantee.",
    url: "https://beykerestrada.com/services/systems-audit",
    type: "website",
    images: [
      {
        url: "/og-systems-audit.png",
        width: 1200,
        height: 630,
        alt: "Systems Audit - $150 Operational Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$150 Systems Audit - Identify Bottlenecks & Get a Roadmap",
    description: "60-minute consultation + detailed report + clear roadmap. Find what's broken in your operations and get actionable recommendations.",
    images: ["/og-systems-audit.png"],
  },
  alternates: {
    canonical: "https://beykerestrada.com/services/systems-audit",
  },
};

export default function SystemsAuditLayout({
  children,
}: {
  children: React.Node;
}) {
  return children;
}
