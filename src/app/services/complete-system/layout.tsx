import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Business System $2,000 - Notion + Automation - Most Popular",
  description: "Transform your entire operation with a custom Notion workspace + automated workflows. Everything you need to run your business: project management, CRM, SOPs, automation, and training. Most popular package.",
  keywords: [
    "complete business system",
    "business operating system",
    "Notion business OS",
    "business automation package",
    "end-to-end business solution",
    "Notion and automation",
    "complete Notion setup",
    "business transformation",
    "operations overhaul",
    "turnkey business system",
    "Notion implementation package"
  ],
  openGraph: {
    title: "Complete Business System $2,000 - Notion + Automation (Most Popular)",
    description: "Transform your entire operation. Custom Notion workspace + automated workflows + team training + 30-day support. Everything you need to run efficiently from $2,000.",
    url: "https://beykerestrada.com/services/complete-system",
    type: "website",
    images: [
      {
        url: "/og-complete-system.png",
        width: 1200,
        height: 630,
        alt: "Complete Business System - Notion + Automation Package",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Business System $2,000 - Most Popular Package",
    description: "Transform your entire operation with custom Notion workspace + automated workflows + training. Everything you need to run efficiently.",
    images: ["/og-complete-system.png"],
  },
  alternates: {
    canonical: "https://beykerestrada.com/services/complete-system",
  },
};

export default function CompleteSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
