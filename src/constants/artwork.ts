import kiwi from "../assets/kiwi.jpeg";
import hands from "../assets/hands.jpeg";
import looksmaxxing from "../assets/looksmaxxing.jpeg";
import skinBeforeSin from "../assets/skinBeforeSin.jpeg";
import water from "../assets/water.jpeg";
import walache from "../assets/walache.jpeg";
import freeIran from "../assets/freeIran.jpeg";
import bumbleInBerlin from "../assets/bumbleInBerlin.jpeg";
import pomegranate from "../assets/pomegranate.jpeg";
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
  series?: string;
  year: string;
  summary?: string;
  idea?: string;
}

export const artPieces: ArtPiece[] = [
  {
    id: 1,
    title: "Don't Let Go",
    category: ArtCategory.FigureDrawing,
    image: hands,
    description:
      "Zwei ineinander greifende Hände halten sich in einem Moment, der zugleich zart und intensiv ist. In dieser Berührung verdichten sich, durch weiche fließende Linien Verliebtheit, Leidenschaft und das Gefühl, für einen Augenblick vollkommen beim anderen angekommen zu sein. Diese Verbindung ist fast instinktiv – als wollten sie ein Gefühl festhalten, das sich kaum in Worte fassen lässt. Es ist der kurze, kostbare Augenblick eines Höhepunkts, der Nähe, in dem zwei Menschen einander so festhalten, als könnten sie damit die Zeit selbst anhalten.",
    idea: "Die Idee zu diesem Bild entstand aus der Beobachtung der heutigen Dating-Kultur, die oft schnelllebig und oberflächlich wirkt – geprägt von Situationships, Unsicherheit und Ghosting. Dabei fragte ich mich, ob die tiefe Form von Intimität, in der man sich wirklich aufeinander einlässt und vollkommen fallen lassen kann, immer seltener wird. Die ineinander greifenden Hände stehen deshalb für einen Moment echter Vertrautheit und Geborgenheit – für die Sehnsucht nach einer Nähe, die in unserer Zeit oft verloren zu gehen scheint.",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "21 x 29,7 cm (BxH)",
    medium: ArtMediums.Drawing,
    price: "$2,500",
    availability: Availability.Available,
    year: "2022",
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
    year: "2012",
    summary:
      "City life through an artistic lens, capturing the dynamic energy and architectural beauty of modern urban environments at golden hour. The interplay of light and shadow creates a mesmerizing dance across the canvas, celebrating the rhythm of metropolitan life.",
  },
  {
    id: 3,
    title: "Skin before Sin – Als Nacktheit noch kein Urteil war",
    category: ArtCategory.FigureDrawing,
    image: skinBeforeSin,
    description:
      "In „Skin before Sin – Als Nacktheit noch kein Urteil war“ erscheint der weibliche Körper nicht als Objekt, sondern als ursprüngliche Präsenz – eine Erinnerung an eine Zeit vor dem Urteil, bevor Scham, Moral und gesellschaftliche Blicke den Körper mit Bedeutung überluden. Der Rücken bleibt dem Betrachter zugewandt und entzieht sich bewusst dem Anspruch, bewertet zu werden. Die fließenden Grün-, Blau- und Lichttöne umgeben die Figur wie ein stiller, fast paradiesischer Raum – ein Moment, in dem Haut noch einfach Haut war: frei, verletzlich und menschlich.",
    idea: "Die Idee hinter diesem Bild entspringt der alten Erzählung von Eva, mit der bis heute oft sofort Schuld verbunden wird. Seit Jahrhunderten trägt die Frau in vielen religiösen Deutungen das Bild der Sünderin – ein Urteil, das sich tief in unser Denken eingeschrieben hat. Dieses Bild versucht, einen Moment davor sichtbar zu machen: einen Zustand, in dem Haut noch nicht Schuld war und Weiblichkeit noch kein Urteil tragen musste.",
    materials: ArtMaterials.MixedMediaOnCanvas,
    dimensions: '30 × 40 cm (BxH)"',
    medium: ArtMediums.MixedMedia,
    price: "$2,200",
    availability: Availability.Available,
    year: "2024",
    summary:
      "Contemporary portrait work that explores identity and emotion through expressive use of color and texture, creating a dialogue between subject and viewer. This piece challenges traditional portraiture by infusing it with modern artistic techniques and personal expression.",
  },
  {
    id: 4,
    title: "Free Iran",
    category: ArtCategory.AllegoricalScene,
    image: freeIran,
    description:
      "An allegorical composition exploring resistance, identity, and solidarity through layered symbolic forms.",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "40 x 40 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 5,
    title: "Das Wasser dort oben",
    category: ArtCategory.Landscape,
    image: water,
    description:
      "A landscape study focused on movement, reflection, and tonal shifts of water.",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "26 x 32 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 6,
    title: "Granatapfel",
    category: ArtCategory.StillLife,
    image: pomegranate,
    description:
      "A still-life piece centering form, surface texture, and color contrast around a pomegranate motif.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "24 x 29 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 7,
    title: "Bumble in Berlin",
    category: ArtCategory.AbstractCollage,
    image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800",
    description:
      "A collage-oriented abstract work combining fragmented shapes and contrasting rhythms.",
    materials: ArtMaterials.MixedMediaOnCanvas,
    dimensions: "33 x 36 cm (BxH)",
    medium: ArtMediums.MixedMedia,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 8,
    title: "Maher",
    category: ArtCategory.AbstractCollage,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description:
      "A compact collage study that emphasizes layered structure and expressive mark-making.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "16.5 x 25 cm (BxH)",
    medium: ArtMediums.MixedMedia,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 9,
    title: "Maher Mama",
    category: ArtCategory.AbstractCollage,
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?w=800",
    description:
      "A collage work balancing layered forms with expressive color and texture.",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "40 x 40 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 10,
    title: "Bike",
    category: ArtCategory.Comic,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    description:
      "A comic-inspired composition focused on dynamic line work and motion.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "30 x 40 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 11,
    title: "Lou",
    category: ArtCategory.Portrait,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    description:
      "A portrait study centered on expression, proportion, and tonal contrast.",
    materials: ArtMaterials.WatercolorOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Watercolor,
    price: "On request",
    availability: Availability.Sold,
    year: "2026",
  },
  {
    id: 12,
    title: "Der Walache",
    category: ArtCategory.Portrait,
    image: walache,
    description:
      "Der Walache erscheint hier als stille Erinnerung an eine Kultur, die langsam aus dem kollektiven Gedächtnis verschwindet. In seiner Haltung, seiner Kleidung und den kräftigen Farben liegt ein Echo von Geschichte, Tradition und Identität. Das Bild fragt zugleich, wie wir heute mit kulturellem Erbe umgehen – was wir erinnern, was wir bewahren und was im Lärm der Gegenwart unbemerkt verloren geht.",
    idea: "Die Idee zu diesem Bild entstand durch einen sehr guten Freund von mir, der selbst Walache ist. Immer wieder erlebe ich, wie er erklären muss, wer die Walachen sind – als würde eine ganze Kultur erst wieder sichtbar werden müssen, sobald jemand beginnt, von ihr zu erzählen. Dieses Bild ist deshalb auch ein Versuch, Aufmerksamkeit zu schenken: einer Geschichte, einer Identität und einem kulturellen Erbe, das nicht klein ist – sondern nur zu selten gesehen wird.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Sold,
    year: "2026",
  },
  {
    id: 13,
    title: "LooksMaxxing",
    category: ArtCategory.Portrait,
    image: looksmaxxing,
    description:
      "Ein halb gezeichnetes Gesicht zwischen Licht und Schatten spiegelt den modernen Wunsch nach perfekter Schönheit – und erinnert zugleich daran, dass ein Teil unserer Identität immer verborgen bleibt. Hinter der Jagd nach dem perfekten Gesicht wächst eine stille Leere – als würde jeder Strich der Optimierung etwas Menschliches ausradieren. Je makelloser die Oberfläche wird, desto lauter fragt die Seele, wo sie in diesem Bild noch Platz hat.",
    idea: "Die Idee zu diesem Bild entstand, als ich immer mehr Zeit auf Social Media verbrachte und dort unzählige Filter, Schönheitsideale und den Trend des „Looksmaxxing“ sah. Dabei fragte ich mich, was passiert, wenn die ständige Optimierung des Äußeren immer wichtiger wird – und was dabei vielleicht vom eigentlichen Menschen verloren geht.",
    materials: ArtMaterials.PastelOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 14,
    title: "Hildi",
    category: ArtCategory.Portrait,
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
    description:
      "A portrait in watercolor with soft layering and balanced contrast.",
    materials: ArtMaterials.WatercolorOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Sold,
    year: "2026",
  },
  {
    id: 15,
    title: "Alucard",
    category: ArtCategory.Comic,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description:
      "A comic-style drawing built around line rhythm and character attitude.",
    materials: ArtMaterials.PencilOnCardboard,
    dimensions: "19 x 23 cm (BxH)",
    medium: ArtMediums.Drawing,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
  {
    id: 16,
    title: "Reset & Reseed",
    category: ArtCategory.StillLife,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    description:
      "A still life painting capturing the essence of natural forms and textures.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "19 x 23 cm (BxH)",
    medium: ArtMediums.Painting,
    price: "On request",
    availability: Availability.Available,
    year: "2026",
  },
];
