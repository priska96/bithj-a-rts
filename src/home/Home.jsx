import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths.jsx';
import { COLORS } from '../constants/theme.js';
import { Button } from '../components/ui/Button.jsx';

const featuredArtworks = [
  {
    id: 1,
    title: 'Abstract Dreams',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200',
    summary: 'An exploration of color and form that delves into the subconscious mind, bringing dreams and imagination to life through bold brushstrokes and vibrant hues. This piece represents the freedom of artistic expression and the boundless nature of creativity.',
    category: 'Abstract',
    year: '2025',
  },
  {
    id: 2,
    title: 'Urban Reflections',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200',
    summary: 'City life through an artistic lens, capturing the dynamic energy and architectural beauty of modern urban environments at golden hour. The interplay of light and shadow creates a mesmerizing dance across the canvas, celebrating the rhythm of metropolitan life.',
    category: 'Landscape',
    year: '2025',
  },
  {
    id: 3,
    title: 'Nature\'s Whisper',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200',
    summary: 'Inspired by natural beauty, this piece celebrates the organic forms and colors found in the wilderness. Each brushstroke invites viewers to reconnect with nature and rediscover the simple elegance that surrounds us in the natural world.',
    category: 'Nature',
    year: '2024',
  },
];

export const Home = () => (
  <div className="min-h-screen" style={{ backgroundColor: COLORS.BACKGROUND }}>
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left Half - Text Content */}
        <div className="flex items-center justify-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Visual Artist &</span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Creative Soul
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 lg:text-2xl">
              Transforming emotions and experiences into captivating visual stories
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to={RoutePaths.PORTFOLIO} variant="solidIndigo">Explore My Work</Button>
              <Button to={RoutePaths.CONTACT} variant="outlineIndigo">Let's Collaborate</Button>
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/40 to-transparent"></div>
        </div>
      </div>
    </section>

    {/* Featured Works Section */}
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Featured Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            A glimpse into my latest creations
          </p>
        </div>

        {/* Featured Artwork Items - Alternating Layout */}
        <div className="space-y-24">
          {featuredArtworks.map((artwork, index) => (
            <Link
              key={artwork.id}
              to={`/artwork/${artwork.id}`}
              className="group block"
            >
              <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image - Left on even, Right on odd */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Text - Right on even, Left on odd */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-800">
                    {artwork.category} • {artwork.year}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6 group-hover:text-indigo-600 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {artwork.summary}
                  </p>
                  <div className="inline-flex items-center text-lg font-medium text-indigo-600 group-hover:text-indigo-700">
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
          <Button to={RoutePaths.PORTFOLIO} variant="solidIndigo">See All Artwork</Button>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Create Something Beautiful Together
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Whether you're interested in commissioning a piece, collaborating on a project, 
            or just want to say hello, I'd love to hear from you.
          </p>
          <div className="mt-8">
            <Button to={RoutePaths.CONTACT} variant="outlineIndigo">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>

    {/* About Me Section - Moved to Bottom */}
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 opacity-75 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
                alt="Artist at work"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                Hello! I'm a passionate visual artist dedicated to exploring the intersection 
                of color, emotion, and form. My journey in art began over a decade ago, and 
                since then, I've been captivated by the endless possibilities of creative expression.
              </p>
              <p>
                My work ranges from bold abstract pieces to intimate portraits, each created with 
                the intention of evoking emotion and sparking conversation.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to={RoutePaths.ABOUT} variant="solidIndigo">Read My Story</Button>
              <Button to={RoutePaths.PORTFOLIO} variant="outlineIndigo">View Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
