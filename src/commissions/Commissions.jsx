import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths.jsx';
import { Button } from '../components/ui/Button.jsx';
import { COLORS } from '../constants/theme.js';

export const Commissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artworkType: '',
    size: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:your-email@example.com?subject=Commission Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Commission Request Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Artwork Type: ${formData.artworkType}\n` +
      `Preferred Size: ${formData.size}\n` +
      `Budget Range: ${formData.budget}\n` +
      `Timeline: ${formData.timeline}\n\n` +
      `Project Description:\n${formData.description}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BACKGROUND }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Commission Custom Artwork
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Let's create something uniquely yours. A personal artwork that tells your story.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              The Journey to Your Unique Artwork
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              A collaborative process from concept to creation
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-25"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-bold mb-6">
                      1
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Personal Consultation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Every commissioned piece begins with an open conversation. We'll discuss what moves you—
                      thoughts, motifs, images, or life phases seeking expression. My existing works can serve 
                      as a starting point. From this dialogue, the foundation for your personal artwork emerges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=800"
                  alt="Personal consultation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur-xl opacity-25"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-2xl font-bold mb-6">
                      2
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Concept Development</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      From our conversation, I develop an initial conceptual and visual design. Sketches and 
                      visual ideas make visible the direction the work can take. We'll discuss these drafts 
                      together, refining motifs, atmosphere, and details until everything feels right. 
                      Step by step, a clear vision of your personal artwork emerges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800"
                  alt="Concept development"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-3xl blur-xl opacity-25"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-pink-100">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-2xl font-bold mb-6">
                      3
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Creation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Once our shared vision is established, the artistic process begins. I work along our 
                      design while staying true to my artistic signature. You'll receive progress updates 
                      throughout the creation process, ensuring the final piece exceeds your expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800"
                  alt="Artwork creation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-xl border border-indigo-100">
                <div className="flex items-center mb-6">
                  <svg className="w-12 h-12 text-indigo-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-3xl font-bold text-gray-900">Investment</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Commissioned artworks start at <span className="font-bold text-indigo-600">$1,000</span>. 
                  The exact pricing depends on size, complexity, and individual requirements.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50% deposit to begin the work</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Remaining 50% before completion and delivery</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All details discussed transparently upfront</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center mb-6">
                  <svg className="w-12 h-12 text-purple-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-3xl font-bold text-gray-900">Timeline</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  The creation process typically takes <span className="font-bold text-purple-600">4-8 weeks</span>, 
                  depending on the complexity and size of the artwork.
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Initial consultation within 1-2 days</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Concept sketches within 1-2 weeks</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular progress updates during creation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Request a Commission
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Artwork Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="artworkType" className="block text-sm font-medium text-gray-700 mb-2">
                    Artwork Type *
                  </label>
                  <select
                    id="artworkType"
                    name="artworkType"
                    required
                    value={formData.artworkType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select type...</option>
                    <option value="abstract">Abstract</option>
                    <option value="portrait">Portrait</option>
                    <option value="landscape">Landscape</option>
                    <option value="mixed-media">Mixed Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Size *
                  </label>
                  <select
                    id="size"
                    name="size"
                    required
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select size...</option>
                    <option value="small">Small (up to 24")</option>
                    <option value="medium">Medium (24"-40")</option>
                    <option value="large">Large (40"-60")</option>
                    <option value="xlarge">Extra Large (60"+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select budget...</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select timeline...</option>
                    <option value="flexible">Flexible</option>
                    <option value="4-6weeks">4-6 weeks</option>
                    <option value="6-8weeks">6-8 weeks</option>
                    <option value="2-3months">2-3 months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell me about your vision... What inspires you? What emotions or themes would you like to explore? Are there any specific colors, motifs, or existing works of mine that resonate with you?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full rounded-lg"
              >
                Submit Commission Request
              </Button>

              <p className="text-sm text-gray-600 text-center">
                * By submitting this form, you agree to be contacted regarding your commission request
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg.white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I see the artwork before it's finished?</h3>
              <p className="text-gray-700">
                Absolutely! You'll receive progress updates throughout the creation process. After the initial 
                concept approval, I'll share photos at key stages so you can see your artwork coming to life.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if I'm not satisfied with the result?</h3>
              <p className="text-gray-700">
                Your satisfaction is my priority. We'll work together through the concept and sketch phases 
                to ensure we're aligned on the vision before I begin the final piece. Minor adjustments can 
                be made during the creation process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you ship internationally?</h3>
              <p className="text-gray-700">
                Yes! I carefully package and ship artwork worldwide. Shipping costs will be calculated 
                based on your location and the artwork size, and discussed during our initial consultation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I commission a piece similar to one I've seen?</h3>
              <p className="text-gray-700">
                Yes! My existing works can absolutely serve as inspiration. We'll discuss what elements 
                you love and create something unique while maintaining those aesthetic qualities you admire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Start Your Commission?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Have questions before requesting a commission? Feel free to reach out!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button to={RoutePaths.PORTFOLIO} variant="primary">View Portfolio for Inspiration</Button>
            <Button to={RoutePaths.CONTACT} variant="secondary">Contact Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
