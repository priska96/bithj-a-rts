import { RoutePaths } from "../../general/RoutePaths";
import { CTASection } from "../../components/ui/CTASection";
import { HeroSection } from "../../components/ui/HeroSection";
import { Image } from "../../components/ui/Image";
import { Section } from "../../components/ui/Section";
import ColorSwatchTable from "../../components/ui/ColorSwatchTable";

export const About = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <HeroSection
      title="The Artist"
      subtitle='"Art is not what you see, but what you make others see"'
    />

    {/* Main Bio Section */}
    <Section>
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Image
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
          alt="Artist portrait"
        />
        <div>
          <h2 className="mb-6 text-4xl font-bold text-main-text">My Story</h2>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p className="text-main-text">
              Hello! I'm a passionate visual artist dedicated to exploring the
              intersection of color, emotion, and form. My journey in art began
              over a decade ago, and since then, I've been captivated by the
              endless possibilities of creative expression.
            </p>
            <p className="text-main-text">
              My work ranges from bold abstract pieces to intimate portraits,
              each created with the intention of evoking emotion and sparking
              conversation. I believe that art has the power to connect us,
              challenge us, and help us see the world through new perspectives.
            </p>
            <p className="text-main-text">
              Whether working with traditional media or digital tools, I strive
              to create pieces that resonate deeply with viewers and stand the
              test of time. My artistic practice is rooted in experimentation,
              authenticity, and a deep love for the creative process.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Artistic Philosophy with decorative elements */}
    <Section title="Artistic Philosophy" center>
      <div className="prose prose-lg max-w-none space-y-6 text-center text-gray-700">
        <p className="text-xl font-light italic text-main-text">
          "For me, art is more than just creating beautiful objects—it's a
          dialogue between the artist, the artwork, and the viewer."
        </p>
        <p className="text-lg text-main-text">
          I believe in the transformative power of color. The way hues interact,
          contrast, and harmonize can evoke emotions that words cannot express.
          My palette choices are deliberate yet intuitive, always seeking to
          create a visceral response in the viewer.
        </p>
        <p className="text-lg text-main-text">
          My process is one of constant exploration and experimentation. I'm not
          afraid to take risks, try new techniques, or venture into unfamiliar
          territory. Some of my most meaningful work has emerged from moments of
          uncertainty and creative play.
        </p>
      </div>
    </Section>

    {/* CTA */}
    <CTASection
      heading="Let's Create Together"
      subheading="Interested in commissioning a piece, collaborating on a project, or learning more about my work?"
      primaryButtonText="View Portfolio"
      primaryButtonLink={RoutePaths.PORTFOLIO}
      secondaryButtonText="Get In Touch"
      secondaryButtonLink={RoutePaths.CONTACT}
    />

    {/* Color Palette Section */}
    <Section
      className="bg-gray-50"
      title="🎨 Religious Art Portfolio Palette"
      subtitle="Muted beige & nature-inspired tones"
    >
      <div className="mb-12">
        <h3 className="mb-6 text-2xl font-bold text-main-text">
          Core Backgrounds
        </h3>
        <ColorSwatchTable
          rows={[
            { color: "#F2EDE4", name: "Parchment Beige", code: "#F2EDE4" },
            { color: "#DED6C8", name: "Warm Limestone", code: "#DED6C8" },
            { color: "#CFC6B8", name: "Soft Sand", code: "#CFC6B8" },
          ]}
        />
      </div>
      <div className="mb-12">
        <h3 className="mb-6 text-2xl font-bold text-main-text">
          Nature & Earth Tones
        </h3>
        <ColorSwatchTable
          rows={[
            { color: "#8F9A7A", name: "Olive Sage", code: "#8F9A7A" },
            { color: "#6F7D5C", name: "Dried Moss", code: "#6F7D5C" },
            { color: "#8B6F5A", name: "Clay Umber", code: "#8B6F5A" },
            { color: "#9A948A", name: "Weathered Stone", code: "#9A948A" },
          ]}
        />
      </div>
      <div className="mb-12">
        <h3 className="mb-6 text-2xl font-bold text-main-text">
          Text & Sacred Accents
        </h3>
        <ColorSwatchTable
          rows={[
            { color: "#3B244D", name: "Deep Violet", code: "#3B244D" },
            { color: "#4D3360", name: "Royal Purple", code: "#4D3360" },
            { color: "#5F4372", name: "Twilight Amethyst", code: "#5F4372" },
          ]}
        />
      </div>
    </Section>
  </div>
);
