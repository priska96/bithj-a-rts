import { EmailIcon } from "../../components/icons/EmailIcon";
import { LocationIcon } from "../../components/icons/LocationIcon";
import { TimeIconSmall } from "../../components/icons/TimeIconSmall";
import { useTranslation } from "react-i18next";
import { Card } from "../../components/ui/Card";
import { HeroSection } from "../../components/ui/HeroSection";
import { Section } from "../../components/ui/Section";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen -main-bg">
      <HeroSection
        title={t("contact.heroTitle")}
        subtitle={t("contact.heroSubtitle")}
      />
      <Section>
        <Card>
          <ContactForm />

          {/* Contact Info */}
          <div className="mt-12 border-t border-main-text pt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <EmailIcon />
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  {t("common.email")}
                </h3>
                <p className="mt-2 text-main-text/70">
                  {t("contact.emailValue")}
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <LocationIcon />
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  {t("common.location")}
                </h3>
                <p className="mt-2 text-main-text/70">
                  {t("contact.locationValue")}
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <TimeIconSmall />
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  {t("common.responseTime")}
                </h3>
                <p className="mt-2 text-main-text/70">
                  {t("contact.responseValue")}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};
