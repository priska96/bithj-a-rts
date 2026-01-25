// Centralized theme colors and common gradient class names

export const COLORS = {
  PRIMARY: '#4F46E5', // indigo-600
  SECONDARY: '#9333EA', // purple-600
  TERTIARY: '#EC4899', // pink-500
  BACKGROUND: '#DED6C8', // main site background
};

export const ACCENTS = {
  DEEP_VIOLET: '#3B244D',
  ROYAL_PURPLE: '#4D3360',
  TWILIGHT_AMETHYST: '#5F4372',
};

// Common gradient utility class strings used across the app
export const GRADIENTS = {
  primaryBr: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500',
  primaryR: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500',
  softHero: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50',
};

// Helper to compose gradient text color via bg-clip
export const gradientText = 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent';
