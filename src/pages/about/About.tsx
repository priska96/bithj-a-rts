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
            </div>
          </div>
        </div>
      </Section>

      {/* Artistic Philosophy with decorative elements */}
      <Section title={t("about.philosophyTitle")} center>
        <div className="prose prose-lg max-w-none space-y-6 text-center text-gray-700">
          <p className="text-xl font-light italic text-main-text">
            &quot;{t("about.philosophyQuote")}&quot;
          </p>
          <p className="text-lg text-main-text">
            {t("about.philosophyParagraph1")}
          </p>
          <p className="text-lg text-main-text">
            {t("about.philosophyParagraph2")}
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

      {/* Color Palette Section */}
      <Section
        className="bg-gray-50"
        title={t("about.paletteTitle")}
        subtitle={t("about.paletteSubtitle")}
      >
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-main-text">
            {t("about.palette.backgrounds")}
          </h3>
          <ColorSwatchTable
            rows={[
              {
                color: "#F2EDE4",
                name: t("about.palette.parchmentBeige"),
                code: "#F2EDE4",
              },
              {
                color: "#DED6C8",
                name: t("about.palette.warmLimestone"),
                code: "#DED6C8",
              },
              {
                color: "#CFC6B8",
                name: t("about.palette.softSand"),
                code: "#CFC6B8",
              },
            ]}
          />
        </div>
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-main-text">
            {t("about.palette.nature")}
          </h3>
          <ColorSwatchTable
            rows={[
              {
                color: "#8F9A7A",
                name: t("about.palette.oliveSage"),
                code: "#8F9A7A",
              },
              {
                color: "#6F7D5C",
                name: t("about.palette.driedMoss"),
                code: "#6F7D5C",
              },
              {
                color: "#8B6F5A",
                name: t("about.palette.clayUmber"),
                code: "#8B6F5A",
              },
              {
                color: "#9A948A",
                name: t("about.palette.weatheredStone"),
                code: "#9A948A",
              },
            ]}
          />
        </div>
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-main-text">
            {t("about.palette.accents")}
          </h3>
          <ColorSwatchTable
            rows={[
              {
                color: "#3B244D",
                name: t("about.palette.deepViolet"),
                code: "#3B244D",
              },
              {
                color: "#4D3360",
                name: t("about.palette.royalPurple"),
                code: "#4D3360",
              },
              {
                color: "#5F4372",
                name: t("about.palette.twilightAmethyst"),
                code: "#5F4372",
              },
            ]}
          />
        </div>
      </Section>
    </div>
  );
};
