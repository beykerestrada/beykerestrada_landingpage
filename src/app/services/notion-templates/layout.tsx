import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Notion Templates from $500 - Tailored Database Architecture",
  description: "Get a Notion workspace designed for your team's unique workflows. Custom databases, tailored views, automated formulas, and team training included. No generic templates—built specifically for you.",
  keywords: [
    "custom Notion templates",
    "Notion database design",
    "Notion workspace setup",
    "custom Notion workspace",
    "Notion consulting",
    "Notion database architecture",
    "Notion CRM",
    "Notion project management",
    "Notion for teams",
    "Notion implementation",
    "Notion certified consultant"
  ],
  openGraph: {
    title: "Custom Notion Templates - Built for Your Team's Workflow",
    description: "Tailored Notion workspaces with custom databases, automated views, and team training. No generic templates—designed specifically for your processes from $500.",
    url: "https://beykerestrada.com/services/notion-templates",
    type: "website",
    images: [
      {
        url: "/og-notion-templates.png",
        width: 1200,
        height: 630,
        alt: "Custom Notion Templates - Tailored Database Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Notion Templates from $500 - Built for Your Team",
    description: "Tailored Notion workspaces with custom databases, automated views, and team training. No generic templates.",
    images: ["/og-notion-templates.png"],
  },
  alternates: {
    canonical: "https://beykerestrada.com/services/notion-templates",
  },
};

export default function NotionTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
