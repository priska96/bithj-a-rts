import { RoutePaths } from "../../general/RoutePaths";
import { useTranslation } from "react-i18next";
import { CTASection } from "../../components/ui/CTASection";
import { HeroSection } from "../../components/ui/HeroSection";
import { Image } from "../../components/ui/Image";
import { Section } from "../../components/ui/Section";
import ColorSwatchTable from "../../components/ui/ColorSwatchTable";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
      />

      {/* Main Bio Section */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
            alt={t("about.storyAlt")}
          />
          <div>
            <h2 className="mb-6 text-4xl font-bold text-main-text">
              {t("about.storyTitle")}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p className="text-main-text">{t("about.storyParagraph1")}</p>
              <p className="text-main-text">{t("about.storyParagraph2")}</p>
              <p className="text-main-text">{t("about.storyParagraph3")}</p>
              <p className="text-main-text">{t("about.storyParagraph4")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Artistic Philosophy with decorative elements */}
      <Section title={t("about.philosophyTitle")} center>
        <div className="prose prose-lg max-w-none space-y-6 text-center text-gray-700">
          <p className="text-xl font-light italic text-main-text">
            &quot;Art should never be quiet 🎨 Kunst ist kein Kommentar zur
            Welt. Sie ist Teil von ihr.&quot;
          </p>
          <p className="text-lg text-main-text">
            {t("about.philosophyParagraph1")}
          </p>
          <p className="text-lg text-main-text">
            {t("about.philosophyParagraph2")}
          </p>
          <p className="text-lg text-main-text">
            {t("about.philosophyParagraph3")}
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        heading={t("about.ctaHeading")}
        subheading={t("about.ctaSubheading")}
        primaryButtonText={t("about.ctaPrimary")}
        primaryButtonLink={RoutePaths.PORTFOLIO}
        secondaryButtonText={t("about.ctaSecondary")}
        secondaryButtonLink={RoutePaths.CONTACT}
      />
    </div>
  );
};
