import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";
import { Button } from "../components/ui/Button";
import { Chip } from "../components/ui/Chip";
import { CTASection } from "../components/ui/CTASection";
import { Section } from "../components/ui/Section";
import { artPieces } from "../constants/artwork";

export const Home = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left Half - Text Content */}
        <div className="flex items-center justify-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold tracking-tight text-main-text sm:text-6xl lg:text-7xl">
              <span className="block">Visual Artist &</span>
              <span className="text-primary">Creative Soul</span>
            </h1>
            <p className="mt-6 text-xl text-main-text/70 lg:text-2xl">
              Transforming emotions and experiences into captivating visual
              stories
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to={RoutePaths.PORTFOLIO} variant="solidPrimary">
                Explore My Work
              </Button>
              <Button to={RoutePaths.CONTACT} variant="outlinePrimary">
                Let's Collaborate
              </Button>
            </div>
          </div>
        </div>

        {/* Right Half - Hero Image */}
        <div className="relative h-[400px] lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200"
            alt="Artist hero image"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/0"></div>
        </div>
      </div>
    </section>

    {/* Featured Works Section */}
    <Section
      title="Featured Works"
      subtitle="A glimpse into my latest creations"
    >
      {/* Featured Artwork Items - Alternating Layout */}
      <div className="space-y-24">
        {artPieces.slice(0, 3).map((artwork, index) => (
          <Link
            key={artwork.id}
            to={`/artwork/${artwork.id}`}
            className="group block"
          >
            <div
              className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image - Left on even, Right on odd */}
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Text - Right on even, Left on odd */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <Chip>
                  {artwork.category} • {artwork.year}
                </Chip>
                <h3 className="text-3xl font-bold text-main-text sm:text-4xl mb-6 group-hover:text-primary transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-lg text-main-text/70 leading-relaxed mb-6">
                  {artwork.summary}
                </p>
                <div className="inline-flex items-center text-lg font-medium text-primary group-hover:text-primary/200">
                  View Details
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button to={RoutePaths.PORTFOLIO} variant="solidPrimary">
          See All Artwork
        </Button>
      </div>
    </Section>

    {/* CTA */}
    <CTASection
      heading="Let's Create Something Beautiful Together"
      subheading="Whether you're interested in commissioning a piece, collaborating on a project, or just want to say hello, I'd love to hear from you."
      primaryButtonText="Get In Touch"
      primaryButtonLink={RoutePaths.CONTACT}
    />

    {/* About Me Section - Moved to Bottom */}
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/50 opacity-75 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
                alt="Artist at work"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-main-text sm:text-5xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-lg text-main-text/70">
              <p>
                Hello! I'm a passionate visual artist dedicated to exploring the
                intersection of color, emotion, and form. My journey in art
                began over a decade ago, and since then, I've been captivated by
                the endless possibilities of creative expression.
              </p>
              <p>
                My work ranges from bold abstract pieces to intimate portraits,
                each created with the intention of evoking emotion and sparking
                conversation.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to={RoutePaths.ABOUT} variant="solidPrimary">
                Read My Story
              </Button>
              <Button to={RoutePaths.PORTFOLIO} variant="outlinePrimary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);
