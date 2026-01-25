import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section.jsx';
import { Button } from '../components/ui/Button.jsx';
import { COLORS } from '../constants/theme.js';

// Sample art pieces - replace these with your actual artwork
const artPieces = [
  {
    id: 1,
    title: 'Abstract Dreams',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    description: 'An exploration of color and form',
  },
  {
    id: 2,
    title: 'Urban Landscape',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800',
    description: 'City life through an artistic lens',
  },
  {
    id: 3,
    title: 'Portrait Series #1',
    category: 'Portrait',
    image: 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=800',
    description: 'Contemporary portrait work',
  },
  {
    id: 4,
    title: 'Nature\'s Palette',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    description: 'Inspired by natural beauty',
  },
  {
    id: 5,
    title: 'Geometric Harmony',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
    description: 'Balance through geometry',
  },
  {
    id: 6,
    title: 'Sunset Dreams',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800',
    description: 'Capturing the golden hour',
  },
];

const categories = ['All', ...new Set(artPieces.map(piece => piece.category))];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPiece, setSelectedPiece] = useState(null);

  const filteredPieces = selectedCategory === 'All'
    ? artPieces
    : artPieces.filter(piece => piece.category === selectedCategory);

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: COLORS.BACKGROUND }}>
      <Section center title="My Portfolio" subtitle="Explore my collection of artwork" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              as="button"
              variant={selectedCategory === category ? 'chipActive' : 'chip'}
              className={`px-4 py-1.5 text-sm`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPieces.map(piece => (
            <Link
              key={piece.id}
              to={`/artwork/${piece.id}`}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{piece.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{piece.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedPiece && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setSelectedPiece(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white"
              onClick={e => e.stopPropagation()}
            >
              <Button
                onClick={() => setSelectedPiece(null)}
                as="button"
                variant="outlineIndigo"
                className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-700 hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
              <img
                src={selectedPiece.image}
                alt={selectedPiece.title}
                className="max-h-[70vh] w-full object-contain"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPiece.title}</h2>
                <p className="mt-2 text-sm text-gray-500">{selectedPiece.category}</p>
                <p className="mt-4 text-gray-700">{selectedPiece.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
