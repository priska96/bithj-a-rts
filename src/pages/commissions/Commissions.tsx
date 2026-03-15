import { RoutePaths } from "../../general/RoutePaths";
import { useTranslation } from "react-i18next";
import { Card } from "../../components/ui/Card";
import { CTASection } from "../../components/ui/CTASection";
import { HeroSection } from "../../components/ui/HeroSection";
import Section from "../../components/ui/Section";
import { CommissionStep } from "./CommissionStep";
import { CommissionTerms } from "./CommissionTerms";
import { CashIcon } from "../../components/icons/CashIcon";
import { TimeIcon } from "../../components/icons/TimeIcon";
import { CommissionRequestForm } from "./CommissonRequestForm";

export const Commissions = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("commissions.heroTitle")}
        subtitle={t("commissions.heroSubtitle")}
      />
      {/* Process Section */}
      <Section
        title={t("commissions.journeyTitle")}
        subtitle={t("commissions.journeySubtitle")}
      >
        <div className="space-y-16">
          {/* Step 1 */}
          <CommissionStep
            step={1}
            title={t("commissions.steps.consultationTitle")}
            description={t("commissions.steps.consultationDescription")}
            imageSrc="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=800"
            imageAlt={t("commissions.steps.consultationAlt")}
          />

          {/* Step 2 */}
          <CommissionStep
            step={2}
            title={t("commissions.steps.conceptTitle")}
            description={t("commissions.steps.conceptDescription")}
            imageSrc="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800"
            imageAlt={t("commissions.steps.conceptAlt")}
            reverse
          />

          {/* Step 3 */}
          <CommissionStep
            step={3}
            title={t("commissions.steps.creationTitle")}
            description={t("commissions.steps.creationDescription")}
            imageSrc="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800"
            imageAlt={t("commissions.steps.creationAlt")}
          />
        </div>
      </Section>

      {/* Pricing & Timeline */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pricing */}
          <CommissionTerms
            title={t("commissions.investment.title")}
            icon={<CashIcon />}
            description={
              <>
                {t("commissions.investment.descriptionPrefix")}{" "}
                <span className="font-bold text-primary">800€</span>
                {t("commissions.investment.descriptionSuffix")}
              </>
            }
            bullets={
              t("commissions.investment.bullets", {
                returnObjects: true,
              }) as string[]
            }
          />

          {/* Timeline */}
          <CommissionTerms
            title={t("commissions.timeline.title")}
            icon={<TimeIcon />}
            description={
              <>
                {t("commissions.timeline.descriptionPrefix")}{" "}
                <span className="font-bold text-primary">
                  {t("commissions.timeline.weeksRange")}
                </span>
                {t("commissions.timeline.descriptionSuffix")}
              </>
            }
            bullets={
              t("commissions.timeline.bullets", {
                returnObjects: true,
              }) as string[]
            }
          />
        </div>
      </Section>

      {/* Commission Request Form */}
      <Section
        title={t("commissions.request.title")}
        subtitle={t("commissions.request.subtitle")}
      >
        <Card>
          <CommissionRequestForm />
        </Card>
      </Section>

      {/* CTA */}
      <CTASection
        heading={t("commissions.request.ctaHeading")}
        subheading={t("commissions.request.ctaSubheading")}
        primaryButtonText={t("commissions.request.ctaPrimary")}
        primaryButtonLink={RoutePaths.PORTFOLIO}
        secondaryButtonText={t("commissions.request.ctaSecondary")}
        secondaryButtonLink={RoutePaths.CONTACT}
      />
    </div>
  );
};
