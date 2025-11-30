import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3">Beyker Estrada</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services/business-os" className="hover:text-foreground transition-colors">
                  {t('footer.businessOS')}
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="hover:text-foreground transition-colors">
                  {t('footer.automation')}
                </Link>
              </li>
              <li>
                <Link to="/services/notion-retainer" className="hover:text-foreground transition-colors">
                  {t('footer.notionArchitect')}
                </Link>
              </li>
              <li>
                <Link to="/services/automation-retainer" className="hover:text-foreground transition-colors">
                  {t('footer.automationOps')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t('footer.companyTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/case-studies" className="hover:text-foreground transition-colors">
                  {t('footer.caseStudies')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  {t('footer.contact')}
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