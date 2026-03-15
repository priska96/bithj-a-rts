import { ArtCategory } from "./artCategory";
import { Availability } from "./availability";
import { ArtMaterials, ArtMediums } from "./artMaterials";
import { ON_REQUEST_PRICE } from "./price";
import hands from "/images/hands.jpeg"; // references the public folder
import kiwi from "/images/kiwi.jpeg";
import skinBeforeSin from "/images/skinBeforeSin.jpeg";
import freeIran from "/images/freeIran.jpeg";
import water from "/images/water.jpeg";
import pomegranate from "/images/pomegranate.jpeg";
import bumbleInBerlin from "/images/bumbleInBerlin.jpeg";
import walache from "/images/walache.jpeg";
import looksMaxxing from "/images/looksmaxxing.jpeg";

export interface ArtPiece {
  id: number;
  title: string;
  category: ArtCategory;
  image?: string;
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
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2022",
    summary:
      "Das Bild verbindet die zarte Intensität ineinandergreifender Hände aus der Beschreibung mit der Idee einer in der Dating-Kultur verloren gehenden, echten Intimität und Geborgenheit.",
  },
  {
    id: 2,
    title: "Kiwi",
    category: ArtCategory.StillLife,
    image: kiwi,
    description: "",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "60 x 80 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2012",
    summary:
      "Als Stillleben fokussiert „Kiwi“ die reduzierte Präsenz der Frucht und formuliert die Idee, im Einfachen eine ruhige, konzentrierte Form von Schönheit sichtbar zu machen.",
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
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2024",
    summary:
      "Die Darstellung des weiblichen Körpers als ursprüngliche, urteilsfreie Präsenz verbindet sich mit der Idee, Eva vor dem historischen Schuldurteil sichtbar zu machen und Weiblichkeit von Scham zu lösen.",
  },
  {
    id: 4,
    title: "Free Iran",
    category: ArtCategory.AllegoricalScene,
    image: freeIran,
    description:
      "„Free Iran“ trägt den Schmerz und die Sehnsucht eines Volkes, das nach Freiheit ruft. Es erinnert daran, dass politische Gewalt nicht nur Systeme betrifft, sondern Menschen – ihre Körper, ihre Stimmen und ihr Leben.Das Bild steht für Solidarität mit denen, die sich nach Veränderung sehnen, aber oft kaum gehört werden. Es ist ein stiller Ausdruck von Hoffnung, dass Freiheit eines Tages stärker sein wird als Angst.",
    idea: "Die Idee hinter „Free Iran“ entstand aus dem Gefühl einer stillen Leere – als die Straßen ruhig blieben und der Protest kaum sichtbar war. Dieses Bild möchte das zeigen, was oft fehlt: Aufmerksamkeit, Solidarität und eine Stimme von außen. Es versteht sich als leiser Protest auf Leinwand, als Erinnerung daran, dass Freiheit nicht nur im Inneren eines Landes verteidigt wird. Wenn dort kaum protestiert werden kann – wer erhebt dann die Stimme?",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "40 x 40 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2026",
    summary:
      "„Free Iran“ verbindet die Beschreibung von Schmerz, Sehnsucht und Hoffnung eines unterdrückten Volkes mit der Idee eines leisen Protestes, der fehlende Aufmerksamkeit und internationale Solidarität einfordert.",
  },
  {
    id: 5,
    title: "Das Wasser dort oben",
    category: ArtCategory.Landscape,
    image: water,
    description:
      "„Das Wasser dort oben“ zeigt eine klare Linie: den Horizont, der Wasser und Himmel voneinander trennt – so wie auch der Mensch von Gott getrennt erscheint. Und doch liegt im Hebräischen im Wort für Himmel (Schamaim) bereits das Wasser (Maim) verborgen, als würde sich beides trotz der Trennung heimlich ineinander spiegeln.Der Bilderrahmen steht für unser menschliches Bedürfnis, die Welt zu ordnen und zu begrenzen. Doch die göttliche Wirklichkeit fügt sich nicht vollständig in diesen Rahmen – sie reicht darüber hinaus, leise und unendlich.",
    idea: "„Das Wasser dort oben“ entstand aus einer Beobachtung während meines Theologiestudiums: Im Hebräischen liegt im Wort für Himmel (Schamaim) bereits das Wort für Wasser (Maim). Im Bild trennt der Horizont klar Himmel und Wasser – eine von Gott gesetzte Ordnung, die auch die Distanz zwischen Gott und Mensch sichtbar macht. Und doch erinnert die Sprache daran, dass diese Welten nicht völlig voneinander gelöst sind. Der Bilderrahmen steht für unser menschliches Bedürfnis nach Ordnung – aber wie durchlässig ist diese Grenze eigentlich, wenn das Göttliche dennoch in unserer Welt wirkt?",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "26 x 32 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2025",
    summary:
      "Das Bild setzt die sichtbare Trennung von Himmel und Wasser aus der Beschreibung mit der Idee zusammen, dass im Hebräischen trotz Distanz eine tiefe Verbindung zwischen göttlicher und menschlicher Wirklichkeit aufscheint.",
  },
  {
    id: 6,
    title: "Reset & Reseed",
    category: ArtCategory.StillLife,
    image: pomegranate,
    description:
      "„Reset & Reseed“ ist ein Gedanke über Neubeginn. Manchmal braucht eine Gesellschaft einen Moment des Innehaltens – einen Reset –, um sich daran zu erinnern, was einmal ihre Wurzeln waren. Die iranische Kultur trägt eine lange Geschichte von Vielfalt, Schönheit und Stärke in sich. Wie ein Samen liegt diese Erinnerung noch immer im Boden der Zeit. Die Hoffnung dieses Bildes ist einfach: dass das, was unterdrückt wurde, eines Tages wieder wachsen kann – freier, sichtbarer und tiefer verwurzelt als zuvor.",
    idea: "Die Idee zu dem Bild ist ein politisches Statement, als stiller Aufruf zum Neuanfang. Es zeigt den Granatapfel – die nationale Frucht des Iran – als Symbol für Ursprung und Erinnerung. Muss nicht manchmal alles auf „Reset“ gesetzt werden, damit das Eigentliche wieder wachsen kann? Wie Samen im Inneren der Frucht trägt auch die iranische Kultur die Möglichkeit in sich, neu gepflanzt zu werden – frei, lebendig und ohne Unterdrückung von Frauen.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "24 x 29 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2025",
    summary:
      "„Reset & Reseed“ verbindet den Granatapfel als Bild eines gesellschaftlichen Neubeginns mit der Idee eines politischen Resets, in dem iranische Kultur frei, sichtbar und ohne Unterdrückung neu Wurzeln schlagen kann.",
  },
  {
    id: 7,
    title: "Bumble in Berlin",
    category: ArtCategory.AbstractCollage,
    image: bumbleInBerlin,
    description:
      "„Bumble in Berlin“ erzählt von Begegnungen im schnellen Rhythmus der Großstadt. Zwischen Hoffnung, Neugier und dem Gefühl von Verliebtheit finden sich Hände für einen Moment – doch die Augen bleiben offen, immer auf der Suche nach der nächsten Möglichkeit. In dieser Dynamik entsteht eine Nähe, die intensiv und schön wirken kann, aber oft nur für kurze Zeit besteht. Was bleibt, sind flüchtige Bekanntschaften und Erinnerungen an Momente, die genauso schnell verschwinden, wie sie entstanden sind.",
    idea: "Die Idee zu diesem Bild entstand aus meinem eigenen „failed dating summer“ – ein Sommer voller Hoffnung, erster Verliebtheit, widersprüchlicher Signale und plötzlichem Verschwinden. Begegnungen, die sich für einen Moment bedeutend anfühlten und doch so flüchtig blieben wie ein Wischen über den Bildschirm. Diese fragile Dynamik – zwischen Nähe und Distanz, zwischen Versprechen und Schweigen – stellt eine stille Frage: Wenn uns heute unendlich viele Möglichkeiten offenstehen, verlieren wir dann vielleicht genau das, wonach wir eigentlich suchen?",
    materials: ArtMaterials.MixedMediaOnCanvas,
    dimensions: "33 x 36 cm (BxH)",
    medium: ArtMediums.MixedMedia,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2025",
    summary:
      "Die Collage verdichtet die in der Beschreibung benannte Flüchtigkeit urbaner Begegnungen mit der Idee eines ‚failed dating summer‘, in dem Nähe, Hoffnung und Verschwinden permanent ineinander kippen.",
  },
  {
    id: 8,
    title: "Maher",
    category: ArtCategory.AbstractCollage,
    image: undefined,
    description: "",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "16.5 x 25 cm (BxH)",
    medium: ArtMediums.MixedMedia,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2026",
    summary:
      "„Maher“ erscheint als abstrakte Collage, die die knappe Beschreibung bewusst offen lässt und die Idee eines fragmentarischen, emotionalen Resonanzraums trägt.",
  },
  {
    id: 9,
    title: "Maher Mama",
    category: ArtCategory.AbstractCollage,
    image: undefined,
    description: "",
    materials: ArtMaterials.AcrylicOnCanvas,
    dimensions: "40 x 40 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2026",
    summary:
      "„Maher Mama“ verbindet die reduzierte formale Anlage mit der Idee einer stillen, persönlichen Erzählung über Nähe, Herkunft und Erinnerung.",
  },
  {
    id: 10,
    title: "Bike",
    category: ArtCategory.Comic,
    image: undefined,
    description:
      "A comic-inspired composition focused on dynamic line work and motion.",
    materials: ArtMaterials.AcrylicOnCardboard,
    dimensions: "30 x 40 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2026",
    summary:
      "„Bike“ verbindet die comicartige Dynamik und bewegte Linienführung der Beschreibung mit der Idee, Geschwindigkeit und urbane Energie in ein verdichtetes Bildmoment zu übersetzen.",
  },
  {
    id: 11,
    title: "Lou",
    category: ArtCategory.Portrait,
    image: undefined,
    description: "",
    materials: ArtMaterials.WatercolorOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Watercolor,
    price: ON_REQUEST_PRICE,
    availability: Availability.Sold,
    year: "2026",
    summary:
      "„Lou“ ist als sensibles Aquarellporträt angelegt und folgt der Idee, Persönlichkeit durch leichte Farbschichten und zurückhaltende Form sichtbar zu machen.",
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
    price: ON_REQUEST_PRICE,
    availability: Availability.Sold,
    year: "2018",
    summary:
      "„Der Walache“ verbindet die Beschreibung einer bedrohten kulturellen Erinnerung mit der Idee, durch persönliche Nähe und Sichtbarkeit ein oft übersehenes Erbe bewusst ins Zentrum zu rücken.",
  },
  {
    id: 13,
    title: "LooksMaxxing",
    category: ArtCategory.Portrait,
    image: looksMaxxing,
    description:
      "Ein halb gezeichnetes Gesicht zwischen Licht und Schatten spiegelt den modernen Wunsch nach perfekter Schönheit – und erinnert zugleich daran, dass ein Teil unserer Identität immer verborgen bleibt. Hinter der Jagd nach dem perfekten Gesicht wächst eine stille Leere – als würde jeder Strich der Optimierung etwas Menschliches ausradieren. Je makelloser die Oberfläche wird, desto lauter fragt die Seele, wo sie in diesem Bild noch Platz hat.",
    idea: "Die Idee zu diesem Bild entstand, als ich immer mehr Zeit auf Social Media verbrachte und dort unzählige Filter, Schönheitsideale und den Trend des „Looksmaxxing“ sah. Dabei fragte ich mich, was passiert, wenn die ständige Optimierung des Äußeren immer wichtiger wird – und was dabei vielleicht vom eigentlichen Menschen verloren geht.",
    materials: ArtMaterials.PastelOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2025",
    summary:
      "Das halb gezeichnete Gesicht zwischen Licht und Schatten verbindet die Beschreibung einer entmenschlichenden Schönheitsoptimierung mit der Idee, dass im Looksmaxxing-Trend das Eigentliche des Menschen verloren gehen kann.",
  },
  {
    id: 14,
    title: "Hildi",
    category: ArtCategory.Portrait,
    image: undefined,
    description: "",
    materials: ArtMaterials.WatercolorOnCardboard,
    dimensions: "29.7 x 42 cm (BxH)",
    medium: ArtMediums.Painting,
    price: ON_REQUEST_PRICE,
    availability: Availability.Sold,
    year: "2026",
    summary:
      "„Hildi“ ist als Porträtarbeit gedacht und trägt die Idee, Individualität in einer stillen, konzentrierten Bildsprache sichtbar werden zu lassen.",
  },
  {
    id: 15,
    title: "Alucard",
    category: ArtCategory.Comic,
    image: undefined,
    description: "",
    materials: ArtMaterials.PencilOnCardboard,
    dimensions: "19 x 23 cm (BxH)",
    medium: ArtMediums.Drawing,
    price: ON_REQUEST_PRICE,
    availability: Availability.Available,
    year: "2026",
    summary:
      "„Alucard“ setzt die zeichnerische Präzision des Comic-Genres mit der Idee in Beziehung, Charakter und Spannung über klare Konturen und verdichtete Gestik zu erzählen.",
  },
];
