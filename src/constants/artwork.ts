import kiwi from "../assets/kiwi.jpeg";
import hands from "../assets/hands.jpeg";
import { ArtCategory } from "./artCategory";
import { Availability } from "./availability";
import { ArtMaterials, ArtMediums } from "./artMaterials";

export interface ArtPiece {
  id: number;
  title: string;
  category: ArtCategory;
  image: string;
  description: string;
  materials: ArtMaterials;
  dimensions: string;
  medium: ArtMediums;
  price: string;
  availability: Availability;
  series: string;
  year: string;
  summary?: string;
}

export const artPieces: ArtPiece[] = [
  {
    id: 1,
    title: "Don't Let Go",
    category: ArtCategory.FigureDrawing,
    image: hands,
    description:
      "An exploration of color and form that delves into the subconscious mind, bringing dreams and imagination to life through bold brushstrokes and vibrant hues.",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "21 x 29,7 cm (BxH)",
    medium: ArtMediums.Drawing,
    price: "$2,500",
    availability: Availability.Available,
    series: "Dream Series",
    year: "2025",
    summary:
      "An exploration of color and form that delves into the subconscious mind, bringing dreams and imagination to life through bold brushstrokes and vibrant hues. This piece represents the freedom of artistic expression and the boundless nature of creativity.",
  },
  {
    id: 2,
    title: "Kiwi",
    category: ArtCategory.StillLife,
    image: kiwi,
    description:
      "City life through an artistic lens, capturing the dynamic energy and architectural beauty of modern urban environments at golden hour.",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "60 x 80 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "$1,800",
    availability: Availability.Available,
    series: "Urban Collection",
    year: "2025",
    summary:
      "City life through an artistic lens, capturing the dynamic energy and architectural beauty of modern urban environments at golden hour. The interplay of light and shadow creates a mesmerizing dance across the canvas, celebrating the rhythm of metropolitan life.",
  },
  {
    id: 3,
    title: "Portrait Series #1",
    category: ArtCategory.Portrait,
    image: "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=800",
    description:
      "Contemporary portrait work that explores identity and emotion through expressive use of color and texture, creating a dialogue between subject and viewer.",
    materials: ArtMaterials.MixedMediaOnCanvas,
    dimensions: '30" × 40" (76.2 × 101.6 cm)',
    medium: ArtMediums.MixedMedia,
    price: "$2,200",
    availability: Availability.Sold,
    series: "Portrait Series",
    year: "2024",
    summary:
      "Contemporary portrait work that explores identity and emotion through expressive use of color and texture, creating a dialogue between subject and viewer. This piece challenges traditional portraiture by infusing it with modern artistic techniques and personal expression.",
  },
  {
    id: 4,
    title: "Nature's Palette",
    category: ArtCategory.Nature,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    description:
      "Inspired by natural beauty, this piece celebrates the organic forms and colors found in the wilderness, inviting viewers to reconnect with nature.",
    materials: ArtMaterials.WatercolorOnCardboard,
    dimensions: '18" × 24" (45.7 × 61 cm)',
    medium: ArtMediums.Watercolor,
    price: "$950",
    availability: Availability.Available,
    series: "Nature Studies",
    year: "2024",
    summary:
      "Inspired by natural beauty, this piece celebrates the organic forms and colors found in the wilderness. Each brushstroke invites viewers to reconnect with nature and rediscover the simple elegance that surrounds us in the natural world.",
  },
  {
    id: 5,
    title: "Geometric Harmony",
    category: ArtCategory.Abstract,
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800",
    description:
      "Balance through geometry, exploring mathematical precision and organic flow in a harmonious composition of shapes and colors.",
    materials: ArtMaterials.MixedMediaOnWood,
    dimensions: '20" × 20" (50.8 × 50.8 cm)',
    medium: ArtMediums.Painting,
    price: "$1,500",
    availability: Availability.Available,
    series: "Geometric Series",
    year: "2024",
    summary:
      "Balance through geometry, exploring mathematical precision and organic flow in a harmonious composition of shapes and colors. This piece invites contemplation on the relationship between order and chaos, structure and freedom.",
  },
  {
    id: 6,
    title: "Sunset Dreams",
    category: ArtCategory.Landscape,
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
    description:
      "Capturing the golden hour with rich, warm tones that evoke the peaceful transition from day to night.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: '30" × 48" (76.2 × 121.9 cm)',
    medium: ArtMediums.Painting,
    price: "$2,800",
    availability: Availability.Available,
    series: "Horizons",
    year: "2024",
    summary:
      "Capturing the golden hour with rich, warm tones that evoke the peaceful transition from day to night. The interplay of light and shadow creates a serene atmosphere, inviting viewers to pause and reflect on the beauty of fleeting moments in nature.",
  },
];
