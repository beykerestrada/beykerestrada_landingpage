"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Beyker Estrada</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/systems-audit" className="hover:text-foreground transition-colors">
                  {t('footer.systemsAudit')}
                </Link>
              </li>
              <li>
                <Link href="/services/notion-templates" className="hover:text-foreground transition-colors">
                  {t('footer.notionTemplates')}
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation" className="hover:text-foreground transition-colors">
                  {t('footer.workflowAutomation')}
                </Link>
              </li>
              <li>
                <Link href="/services/complete-system" className="hover:text-foreground transition-colors">
                  {t('footer.completeSystem')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.companyTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/how-we-work" className="hover:text-foreground transition-colors">
                  {t('footer.howWeWork')}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-foreground transition-colors">
                  {t('footer.caseStudies')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.connectTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://www.linkedin.com/in/beykerestrada/"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@Devstrada"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.notion.com/@beykerestrada"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                >
                  Notion
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.upwork.com/freelancers/beyker"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                >
                  Upwork
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Beyker Estrada. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;