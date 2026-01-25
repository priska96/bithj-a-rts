import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { COLORS } from '../constants/theme.js';
import { RoutePaths } from '../general/RoutePaths.jsx';

// Sample art pieces - should match the ones in Portfolio.jsx
const artPieces = [
  {
    id: 1,
    title: 'Abstract Dreams',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    description: 'An exploration of color and form that delves into the subconscious mind, bringing dreams and imagination to life through bold brushstrokes and vibrant hues.',
    creationDate: 'March 15, 2025',
    materials: 'Acrylic on canvas',
    dimensions: '36" × 48" (91.4 × 121.9 cm)',
    medium: 'Painting',
    price: '$2,500',
    availability: 'Available',
    series: 'Dream Series',
    year: '2025',
  },
  {
    id: 2,
    title: 'Urban Landscape',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800',
    description: 'City life through an artistic lens, capturing the dynamic energy and architectural beauty of modern urban environments at golden hour.',
    creationDate: 'January 8, 2025',
    materials: 'Oil on canvas',
    dimensions: '24" × 36" (61 × 91.4 cm)',
    medium: 'Painting',
    price: '$1,800',
    availability: 'Available',
    series: 'Urban Collection',
    year: '2025',
  },
  {
    id: 3,
    title: 'Portrait Series #1',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=800',
    description: 'Contemporary portrait work that explores identity and emotion through expressive use of color and texture, creating a dialogue between subject and viewer.',
    creationDate: 'November 22, 2024',
    materials: 'Mixed media on canvas',
    dimensions: '30" × 40" (76.2 × 101.6 cm)',
    medium: 'Mixed Media',
    price: '$2,200',
    availability: 'Sold',
    series: 'Portrait Series',
    year: '2024',
  },
  {
    id: 4,
    title: 'Nature\'s Palette',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    description: 'Inspired by natural beauty, this piece celebrates the organic forms and colors found in the wilderness, inviting viewers to reconnect with nature.',
    creationDate: 'September 5, 2024',
    materials: 'Watercolor and ink on paper',
    dimensions: '18" × 24" (45.7 × 61 cm)',
    medium: 'Watercolor',
    price: '$950',
    availability: 'Available',
    series: 'Nature Studies',
    year: '2024',
  },
  {
    id: 5,
    title: 'Geometric Harmony',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
    description: 'Balance through geometry, exploring mathematical precision and organic flow in a harmonious composition of shapes and colors.',
    creationDate: 'July 12, 2024',
    materials: 'Acrylic and gold leaf on panel',
    dimensions: '20" × 20" (50.8 × 50.8 cm)',
    medium: 'Painting',
    price: '$1,500',
    availability: 'Available',
    series: 'Geometric Series',
    year: '2024',
  },
  {
    id: 6,
    title: 'Sunset Dreams',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800',
    description: 'Capturing the golden hour with rich, warm tones that evoke the peaceful transition from day to night.',
    creationDate: 'May 18, 2024',
    materials: 'Oil on linen',
    dimensions: '30" × 48" (76.2 × 121.9 cm)',
    medium: 'Painting',
    price: '$2,800',
    availability: 'Available',
    series: 'Horizons',
    year: '2024',
  },
];

export const ArtworkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artPieces.find(piece => piece.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Artwork Not Found</h1>
            <p className="mt-4 text-xl text-gray-600">
              The artwork you're looking for doesn't exist.
            </p>
            <Button to={RoutePaths.PORTFOLIO} variant="solidIndigo" className="mt-8">Back to Portfolio</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: COLORS.BACKGROUND }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button onClick={() => navigate(-1)} as="button" variant="outlineIndigo" className="mb-8">
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="sticky top-8 self-start">
            <div className="overflow-hidden rounded-lg bg-white shadow-xl">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            {/* Title and Category */}
            <div>
              <div className="mb-2 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-800">
                {artwork.category}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                {artwork.title}
              </h1>
              <p className="mt-4 text-xl text-gray-600">{artwork.description}</p>
            </div>

            {/* Artwork Information */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Artwork Details</h2>
              <dl className="space-y-4">
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Year</dt>
                  <dd className="w-2/3 text-gray-900">{artwork.year}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Creation Date</dt>
                  <dd className="w-2/3 text-gray-900">{artwork.creationDate}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Medium</dt>
                  <dd className="w-2/3 text-gray-900">{artwork.medium}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Materials</dt>
                  <dd className="w-2/3 text-gray-900">{artwork.materials}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Dimensions</dt>
                  <dd className="w-2/3 text-gray-900">{artwork.dimensions}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Series</dt>
                  <dd className="w-2/3 text-gray-900">{artwork.series}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Price</dt>
                  <dd className="w-2/3 text-gray-900 font-semibold">{artwork.price}</dd>
                </div>
                <div className="flex pb-3">
                  <dt className="w-1/3 font-medium text-gray-700">Availability</dt>
                  <dd className="w-2/3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        artwork.availability === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {artwork.availability}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Call to Action */}
            <div className="rounded-lg bg-indigo-50 p-6">
              <h3 className="text-xl font-bold text-gray-900">Interested in this piece?</h3>
              <p className="mt-2 text-gray-700">
                {artwork.availability === 'Available'
                  ? 'This artwork is currently available for purchase. Contact me to discuss acquisition or commission similar work.'
                  : 'While this piece has been sold, I accept commissions for similar work. Get in touch to discuss your vision.'}
              </p>
              <Link
                to={RoutePaths.CONTACT}
                className="mt-4 inline-block rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </Link>
            </div>

            {/* Share Section */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-900">Share this artwork</h3>
              <div className="flex gap-3">
                <button className="rounded-md bg-gray-200 p-3 hover:bg-gray-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="rounded-md bg-gray-200 p-3 hover:bg-gray-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="rounded-md bg-gray-200 p-3 hover:bg-gray-300 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
