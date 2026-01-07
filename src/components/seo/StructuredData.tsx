export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://beykerestrada.com/#organization",
        "name": "Beyker Estrada Consulting",
        "url": "https://beykerestrada.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://beykerestrada.com/logo.png",
          "width": 512,
          "height": 512
        },
        "image": "https://beykerestrada.com/og-image.png",
        "description": "Custom Notion templates, workflow automation, and complete business systems for growing teams and agencies. Notion Certified Consultant with 20+ systems deployed.",
        "founder": {
          "@type": "Person",
          "@id": "https://beykerestrada.com/#founder"
        },
        "sameAs": [
          "https://www.linkedin.com/in/beykerestrada/",
          "https://www.youtube.com/@Devstrada",
          "https://www.notion.com/@beykerestrada",
          "https://www.upwork.com/freelancers/beyker"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Worldwide"
        },
        "serviceType": [
          "Notion Consulting",
          "Workflow Automation",
          "Business Systems Implementation",
          "Operations Consulting"
        ],
        "priceRange": "$150 - $2000+"
      },
      {
        "@type": "Person",
        "@id": "https://beykerestrada.com/#founder",
        "name": "Beyker Estrada",
        "url": "https://beykerestrada.com",
        "jobTitle": "Notion Systems & Workflow Automation Consultant",
        "description": "Notion Certified Consultant specializing in custom templates, workflow automation, and complete business systems for startups and agencies.",
        "sameAs": [
          "https://www.linkedin.com/in/beykerestrada/",
          "https://www.youtube.com/@Devstrada",
          "https://www.notion.com/@beykerestrada",
          "https://www.upwork.com/freelancers/beyker"
        ],
        "knowsAbout": [
          "Notion",
          "Workflow Automation",
          "n8n",
          "Business Process Automation",
          "No-Code Systems",
          "Operations Consulting",
          "Database Design"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://beykerestrada.com/services/systems-audit",
        "serviceType": "Systems Audit",
        "provider": {
          "@id": "https://beykerestrada.com/#organization"
        },
        "name": "Systems Audit",
        "description": "Complete operational assessment identifying bottlenecks and providing a prioritized roadmap for optimization.",
        "offers": {
          "@type": "Offer",
          "price": "150",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://beykerestrada.com/services/systems-audit",
          "priceValidUntil": "2025-12-31"
        }
      },
      {
        "@type": "Service",
        "@id": "https://beykerestrada.com/services/notion-templates",
        "serviceType": "Custom Notion Templates",
        "provider": {
          "@id": "https://beykerestrada.com/#organization"
        },
        "name": "Custom Notion Templates",
        "description": "Tailored Notion workspaces with custom database architecture, views, and formulas designed for your team's specific workflows.",
        "offers": {
          "@type": "Offer",
          "price": "500",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://beykerestrada.com/services/notion-templates",
          "priceValidUntil": "2025-12-31"
        }
      },
      {
        "@type": "Service",
        "@id": "https://beykerestrada.com/services/workflow-automation",
        "serviceType": "Workflow Automation",
        "provider": {
          "@id": "https://beykerestrada.com/#organization"
        },
        "name": "Workflow Automation",
        "description": "Custom automation workflows using n8n, Zapier, or Make to eliminate manual data entry and repetitive tasks.",
        "offers": {
          "@type": "Offer",
          "price": "800",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://beykerestrada.com/services/workflow-automation",
          "priceValidUntil": "2025-12-31"
        }
      },
      {
        "@type": "Service",
        "@id": "https://beykerestrada.com/services/complete-system",
        "serviceType": "Complete Business System",
        "provider": {
          "@id": "https://beykerestrada.com/#organization"
        },
        "name": "Complete Business System",
        "description": "Comprehensive business operating system combining custom Notion workspace with automated workflows, team training, and ongoing support.",
        "offers": {
          "@type": "Offer",
          "price": "2000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://beykerestrada.com/services/complete-system",
          "priceValidUntil": "2025-12-31"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
