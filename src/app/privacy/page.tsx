"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  const sections = t("privacyPolicy.sections", { returnObjects: true }) as Array<{
    heading: string;
    content?: string;
    intro?: string;
    subsections?: Array<{
      subheading: string;
      content?: string;
      list?: string[];
    }>;
    list?: Array<{
      title?: string;
      items?: string[];
    }> | string[];
    rights?: Array<{
      title: string;
      items: string[];
    }>;
    note?: string;
  }>;

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="mb-4">{t("privacyPolicy.title")}</h1>
          <p className="text-sm text-muted-foreground">
            {t("privacyPolicy.lastUpdated")}
          </p>
        </motion.div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.05 }}
            >
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>

              {section.intro && (
                <p className="text-muted-foreground mb-4 whitespace-pre-line">
                  {section.intro}
                </p>
              )}

              {section.content && (
                <p className="text-muted-foreground mb-4 whitespace-pre-line">
                  {section.content}
                </p>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-semibold mb-3">
                        {subsection.subheading}
                      </h3>
                      {subsection.content && (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {subsection.content}
                        </p>
                      )}
                      {subsection.list && (
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          {subsection.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.list && (
                <div className="space-y-4">
                  {Array.isArray(section.list) && typeof section.list[0] === 'object' ? (
                    (section.list as Array<{ title?: string; items?: string[] }>).map((item, i) => (
                      <div key={i}>
                        {item.title && (
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
                        )}
                        {item.items && (
                          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                            {item.items.map((listItem, j) => (
                              <li key={j}>{listItem}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))
                  ) : (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {(section.list as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {section.rights && (
                <div className="space-y-4">
                  {section.rights.map((right, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold mb-2">{right.title}</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        {right.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.note && (
                <p className="text-sm text-muted-foreground mt-4 italic">
                  {section.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
