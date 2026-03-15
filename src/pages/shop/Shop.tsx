import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeroSection } from "../../components/ui/HeroSection";
import Section from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Chip } from "../../components/ui/Chip";
import { ContactForm } from "../contact/ContactForm";
import { artPieces } from "../../constants/artwork";
import { Availability } from "../../constants/availability";
import { RoutePaths } from "../../general/RoutePaths";
import { getArtworkText } from "../../utils/artworkTranslations";

type PurchaseType = "print" | "original";

export const Shop = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("print");

  const artworkId = Number(searchParams.get("artworkId"));
  const artwork = artPieces.find((piece) => piece.id === artworkId);
  const translatedDescription = artwork
    ? getArtworkText(t, artwork, "description")
    : "";

  const originalAvailable = artwork?.availability === Availability.Available;

  const selectedTypeText =
    purchaseType === "print"
      ? t("shop.options.print.title")
      : t("shop.options.original.title");

  const initialSubject = useMemo(() => {
    const artworkLabel = artwork ? ` - ${artwork.title}` : "";
    return `${t("shop.form.subjectPrefix")}${artworkLabel} (${selectedTypeText})`;
  }, [artwork, selectedTypeText, t]);

  const initialMessage = useMemo(() => {
    const artworkLine = artwork
      ? `${t("shop.form.artwork")}: ${artwork.title}\n`
      : "";

    return `${artworkLine}${t("shop.form.purchaseType")}: ${selectedTypeText}\n${t("shop.form.messageHint")}`;
  }, [artwork, selectedTypeText, t]);

  return (
    <div className="min-h-screen bg-main-bg">
      <HeroSection
        title={t("shop.heroTitle")}
        subtitle={t("shop.heroSubtitle")}
      />

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          {artwork ? (
            <Card>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="h-48 w-full rounded-xl object-cover"
                />
                <div className="space-y-3 md:col-span-2">
                  <Chip>
                    {t(`categories.${artwork.category}`, {
                      defaultValue: artwork.category,
                    })}
                  </Chip>
                  <h2 className="text-2xl font-bold text-main-text">
                    {artwork.title}
                  </h2>
                  <p className="text-main-text/70">{translatedDescription}</p>
                </div>
              </div>
            </Card>
          ) : (
            <Card>
              <p className="text-main-text">{t("shop.noArtworkSelected")}</p>
              <Link
                to={RoutePaths.PORTFOLIO}
                className="mt-4 inline-block font-medium text-primary hover:underline"
              >
                {t("shop.goToPortfolio")}
              </Link>
            </Card>
          )}

          <Card>
            <h3 className="mb-4 text-2xl font-bold text-main-text">
              {t("shop.chooseTypeTitle")}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button
                as="button"
                variant={purchaseType === "print" ? "chipActive" : "chip"}
                onClick={() => setPurchaseType("print")}
              >
                {t("shop.options.print.title")}
              </Button>
              <Button
                as="button"
                variant={purchaseType === "original" ? "chipActive" : "chip"}
                onClick={() => setPurchaseType("original")}
                disabled={Boolean(artwork) && !originalAvailable}
              >
                {t("shop.options.original.title")}
              </Button>
            </div>
            <p className="mt-4 text-main-text/70">
              {purchaseType === "print"
                ? t("shop.options.print.description")
                : Boolean(artwork) && !originalAvailable
                  ? t("shop.options.original.unavailable")
                  : t("shop.options.original.description")}
            </p>
          </Card>

          <Card>
            <h3 className="mb-6 text-2xl font-bold text-main-text">
              {t("shop.contactTitle")}
            </h3>
            <ContactForm
              initialSubject={initialSubject}
              initialMessage={initialMessage}
            />
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Shop;
