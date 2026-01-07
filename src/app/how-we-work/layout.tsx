import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work - Our 6-Step Process for Systems Implementation",
  description: "Transparent, collaborative approach to building your systems. From discovery to launch and support, see exactly how we transform your operations with Notion and automation.",
  keywords: [
    "implementation process",
    "systems implementation methodology",
    "Notion implementation process",
    "automation implementation",
    "project methodology",
    "consulting process",
    "systems development process",
    "how Notion consulting works",
    "implementation framework"
  ],
  openGraph: {
    title: "How We Work - Transparent 6-Step Implementation Process",
    description: "See our proven methodology for building custom systems. Discovery → Design → Build → Launch → Training → Support. Transparent, collaborative, and no vendor lock-in.",
    url: "https://beykerestrada.com/how-we-work",
    type: "website",
    images: [
      {
        url: "/og-how-we-work.png",
        width: 1200,
        height: 630,
        alt: "How We Work - 6-Step Implementation Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work - Our Transparent Implementation Process",
    description: "Discovery → Design → Build → Launch → Training → Support. See exactly how we transform your operations.",
    images: ["/og-how-we-work.png"],
  },
  alternates: {
    canonical: "https://beykerestrada.com/how-we-work",
  },
};

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
