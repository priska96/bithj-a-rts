import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HeroSection } from "../../components/ui/HeroSection";
import { Button } from "../../components/ui/Button";
import { artPieces } from "../../constants/artwork";
import { ArtCategory } from "../../constants/artCategory";
import { ImageCard } from "../../components/ui/ImageCard";

const categories: Array<ArtCategory | "All"> = [
  "All",
  ...new Set(
    artPieces.filter((artwork) => artwork.image).map((piece) => piece.category),
  ),
];

export const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | "All">(
    "All",
  );

  const categoryLabel = (category: string) =>
    t(`categories.${category}`, { defaultValue: category });

  const filteredPieces =
    selectedCategory === "All"
      ? artPieces.filter((artwork) => artwork.image)
      : artPieces
          .filter((artwork) => artwork.image)
          .filter((piece) => piece.category === selectedCategory);

  return (
    <div className="min-h-screen pb-12 bg-main-bg">
      <HeroSection
        title={t("portfolio.heroTitle")}
        subtitle={t("portfolio.heroSubtitle")}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              as="button"
              variant={selectedCategory === category ? "chipActive" : "chip"}
              className="px-4 py-1.5 text-sm"
            >
              {category === "All"
                ? t("portfolio.all")
                : categoryLabel(category)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPieces.map((piece) => (
            <Link
              key={piece.id}
              to={`${baseUrl}artwork/${piece.id}`}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <ImageCard
                src={piece.image}
                alt={piece.title}
                title={piece.title}
                category={categoryLabel(piece.category)}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
