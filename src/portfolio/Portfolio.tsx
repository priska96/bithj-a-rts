import { useState } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/ui/HeroSection";
import { Button } from "../components/ui/Button";
import { artPieces } from "../constants/artwork";
import { ImageCard } from "../components/ui/ImageCard";

const categories = [
  "All",
  ...new Set(artPieces.map((piece) => piece.category)),
];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPieces =
    selectedCategory === "All"
      ? artPieces
      : artPieces.filter((piece) => piece.category === selectedCategory);

  return (
    <div className="min-h-screen pb-12 bg-main-bg">
      <HeroSection
        title="My Portfolio"
        subtitle="Explore my collection of artwork"
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
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPieces.map((piece) => (
            <Link
              key={piece.id}
              to={`/artwork/${piece.id}`}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <ImageCard
                src={piece.image}
                alt={piece.title}
                title={piece.title}
                category={piece.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
