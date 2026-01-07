import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationStructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://beykerestrada.com'),
  title: {
    default: "Beyker Estrada | Notion Systems & Workflow Automation Consultant",
    template: "%s | Beyker Estrada"
  },
  description: "Transform your business operations with custom Notion templates, workflow automation, and complete business systems. $150 Systems Audit • Notion Certified • 20+ Systems Deployed.",
  keywords: [
    "Notion consultant",
    "Notion certified admin",
    "business automation",
    "workflow automation",
    "Notion templates",
    "n8n automation",
    "business operating system",
    "operations consultant",
    "systems audit",
    "Notion database design",
    "no-code automation",
    "business process automation",
    "startup operations",
    "agency operations",
    "Notion expert"
  ],
  authors: [{ name: "Beyker Estrada", url: "https://beykerestrada.com" }],
  creator: "Beyker Estrada",
  publisher: "Beyker Estrada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: "https://beykerestrada.com",
    siteName: "Beyker Estrada Consulting",
    title: "Notion Systems & Workflow Automation Consultant | Beyker Estrada",
    description: "Custom Notion templates, workflow automation, and complete business systems for growing teams. Start with a $150 Systems Audit. Notion Certified • 20+ Systems Deployed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beyker Estrada - Notion Systems & Workflow Automation Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notion Systems & Workflow Automation Consultant | Beyker Estrada",
    description: "Custom Notion templates, workflow automation, and complete business systems for growing teams. Start with a $150 Systems Audit.",
    images: ["/og-image.png"],
    creator: "@beykerestrada",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-inter">
        <OrganizationStructuredData />
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
