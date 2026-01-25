import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Section } from '../components/ui/Section.jsx';
import ColorSwatchTable from '../components/ui/ColorSwatchTable.jsx';
import { GRADIENTS, gradientText, COLORS } from '../constants/theme.js';

export const About = () => (
  <div className="min-h-screen" style={{ backgroundColor: COLORS.BACKGROUND }}>
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-32">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          The Artist
        </h1>
        <p className="mt-6 text-2xl text-white/90 font-light italic">
          "Art is not what you see, but what you make others see"
        </p>
      </div>
    </section>

    {/* Main Bio Section */}
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600"
              alt="Artist portrait"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                My Story
              </span>
            </h2>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Hello! I'm a passionate visual artist dedicated to exploring the intersection of 
                color, emotion, and form. My journey in art began over a decade ago, and since then, 
                I've been captivated by the endless possibilities of creative expression.
              </p>
              <p>
                My work ranges from bold abstract pieces to intimate portraits, each created with 
                the intention of evoking emotion and sparking conversation. I believe that art has 
                the power to connect us, challenge us, and help us see the world through new perspectives.
              </p>
              <p>
                Whether working with traditional media or digital tools, I strive to create pieces 
                that resonate deeply with viewers and stand the test of time. My artistic practice 
                is rooted in experimentation, authenticity, and a deep love for the creative process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Artistic Philosophy with decorative elements */}
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50/30 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Artistic Philosophy
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6 text-center">
          <p className="text-xl italic font-light">
            "For me, art is more than just creating beautiful objects—it's a dialogue between the artist, 
            the artwork, and the viewer."
          </p>
          <p className="text-lg">
            I believe in the transformative power of color. The way hues interact, contrast, and harmonize 
            can evoke emotions that words cannot express. My palette choices are deliberate yet intuitive, 
            always seeking to create a visceral response in the viewer.
          </p>
          <p className="text-lg">
            My process is one of constant exploration and experimentation. I'm not afraid to take risks, 
            try new techniques, or venture into unfamiliar territory. Some of my most meaningful work has 
            emerged from moments of uncertainty and creative play.
          </p>
        </div>
      </div>
    </section>

    {/* Skills & Techniques - Enhanced Artistic Design */}
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Creative Arsenal
          </span>
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16">
          Tools, techniques, and mediums I work with
        </p>

        {/* Traditional Media Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
            <h3 className="px-6 text-3xl font-bold text-gray-900">Traditional Media</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Acrylic Painting', icon: '🎨', description: 'Bold, vibrant works with rich texture and depth' },
              { name: 'Oil Painting', icon: '🖌️', description: 'Classical technique with luminous, layered results' },
              { name: 'Watercolor', icon: '💧', description: 'Delicate washes and fluid, organic expressions' },
              { name: 'Mixed Media', icon: '✨', description: 'Combining materials for unique visual narratives' },
            ].map((medium) => (
              <div key={medium.name} className="group relative bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {medium.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{medium.name}</h4>
                <p className="text-gray-600 text-sm">{medium.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Techniques Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <h3 className="px-6 text-3xl font-bold text-gray-900">Digital Techniques</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Digital Illustration', icon: '💻', description: 'Modern tools for contemporary artistic expression' },
              { name: 'Photo Manipulation', icon: '📸', description: 'Transforming reality into artistic vision' },
              { name: 'Color Studies', icon: '🎨', description: 'Exploring palettes and color relationships' },
              { name: 'Concept Development', icon: '💡', description: 'Sketching and refining creative ideas' },
            ].map((technique) => (
              <div key={technique.name} className="group relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {technique.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{technique.name}</h4>
                <p className="text-gray-600 text-sm">{technique.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            <h3 className="px-6 text-3xl font-bold text-gray-900">Artistic Specialties</h3>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Abstract Expressionism', 
                icon: '🌊',
                description: 'Channeling emotion through spontaneous, gestural mark-making and bold color choices. Creating visual experiences that transcend literal representation.',
                tags: ['Gestural', 'Emotional', 'Non-representational']
              },
              { 
                name: 'Contemporary Portraiture', 
                icon: '👁️',
                description: 'Modern interpretations of the human form, capturing essence rather than likeness. Exploring identity and emotion through expressive techniques.',
                tags: ['Human Form', 'Identity', 'Expression']
              },
              { 
                name: 'Landscape Interpretation', 
                icon: '🏔️',
                description: 'Reimagining natural and urban environments through color, form, and mood. Creating atmospheric pieces that evoke place and memory.',
                tags: ['Nature', 'Urban', 'Atmospheric']
              },
              { 
                name: 'Color Theory Application', 
                icon: '🌈',
                description: 'Deep understanding of color relationships, harmonies, and psychological impact. Using color as the primary tool for emotional communication.',
                tags: ['Harmony', 'Psychology', 'Vibrant']
              },
            ].map((specialty) => (
              <div key={specialty.name} className="group relative bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{specialty.name}</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">{specialty.description}</p>
                <div className="flex flex-wrap gap-2">
                  {specialty.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className={`relative overflow-hidden ${GRADIENTS.primaryR} py-20`}>
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
          Let's Create Together
        </h2>
        <p className="text-xl text-white/90 mb-10 font-light">
          Interested in commissioning a piece, collaborating on a project, or learning more about my work?
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button to={RoutePaths.PORTFOLIO} variant="primary">View Portfolio</Button>
          <Button to={RoutePaths.CONTACT} variant="secondary">Get In Touch</Button>
        </div>
      </div>
    </section>

    {/* Color Palette Section */}
    <Section
      className="bg-gradient-to-br from-gray-50 to-indigo-50/30"
      title={<span className={gradientText}>🎨 Religious Art Portfolio Palette</span>}
      subtitle="Muted beige & nature-inspired tones"
    >
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Backgrounds</h3>
        <ColorSwatchTable
          rows={[
            { color: '#F2EDE4', name: 'Parchment Beige', code: '#F2EDE4' },
            { color: '#DED6C8', name: 'Warm Limestone', code: '#DED6C8' },
            { color: '#CFC6B8', name: 'Soft Sand', code: '#CFC6B8' },
          ]}
        />
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Nature & Earth Tones</h3>
        <ColorSwatchTable
          rows={[
            { color: '#8F9A7A', name: 'Olive Sage', code: '#8F9A7A' },
            { color: '#6F7D5C', name: 'Dried Moss', code: '#6F7D5C' },
            { color: '#8B6F5A', name: 'Clay Umber', code: '#8B6F5A' },
            { color: '#9A948A', name: 'Weathered Stone', code: '#9A948A' },
          ]}
        />
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Text & Sacred Accents</h3>
        <ColorSwatchTable
          rows={[
            { color: '#3B244D', name: 'Deep Violet', code: '#3B244D' },
            { color: '#4D3360', name: 'Royal Purple', code: '#4D3360' },
            { color: '#5F4372', name: 'Twilight Amethyst', code: '#5F4372' },
          ]}
        />
      </div>
    </Section>
  </div>
);