import { RoutePaths } from "../general/RoutePaths";
import { Card } from "../components/ui/Card";
import { CTASection } from "../components/ui/CTASection";
import { HeroSection } from "../components/ui/HeroSection";
import Section from "../components/ui/Section";
import { CommissionStep } from "./CommissionStep";
import { CommissionTerms } from "./CommissionTerms";
import { CashIcon } from "../components/icons/CashIcon";
import { TimeIcon } from "../components/icons/TimeIcon";
import { CommissionRequestForm } from "./CommissonRequestForm";

export const Commissions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Commission Custom Artwork"
        subtitle="Let's create something uniquely yours. A personal artwork that tells your story."
      />
      {/* Process Section */}
      <Section
        title="The Journey to Your Unique Artwork"
        subtitle="A collaborative process from concept to creation"
      >
        <div className="space-y-16">
          {/* Step 1 */}
          <CommissionStep
            step={1}
            title="Personal Consultation"
            description="Every commissioned piece begins with an open conversation. We'll discuss what moves you— thoughts, motifs, images, or life phases seeking expression. My existing works can serve as a starting point. From this dialogue, the foundation for your personal artwork emerges."
            imageSrc="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=800"
            imageAlt="Personal consultation"
          />

          {/* Step 2 */}
          <CommissionStep
            step={2}
            title="Concept Development"
            description="From our conversation, I develop an initial conceptual and visual design. Sketches and visual ideas make visible the direction the work can take. We'll discuss these drafts together, refining motifs, atmosphere, and details until everything feels right. Step by step, a clear vision of your personal artwork emerges."
            imageSrc="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800"
            imageAlt="Concept development"
            reverse
          />

          {/* Step 3 */}
          <CommissionStep
            step={3}
            title="Creation"
            description="Once our shared vision is established, the artistic process begins. I work along our design while staying true to my artistic signature. You'll receive progress updates throughout the creation process, ensuring the final piece exceeds your expectations."
            imageSrc="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800"
            imageAlt="Artwork creation"
          />
        </div>
      </Section>

      {/* Pricing & Timeline */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pricing */}
          <CommissionTerms
            title="Investment"
            icon={<CashIcon />}
            description={
              <>
                Commissioned artworks start at{" "}
                <span className="font-bold text-primary">$1,000</span>. The
                exact pricing depends on size, complexity, and individual
                requirements.
              </>
            }
            bullets={[
              "50% deposit to begin the work",
              "Remaining 50% before completion and delivery",
              "All details discussed transparently upfront",
            ]}
          />

          {/* Timeline */}
          <CommissionTerms
            title="Timeline"
            icon={<TimeIcon />}
            description={
              <>
                The creation process typically takes{" "}
                <span className="font-bold text-primary">4-8 weeks</span>,
                depending on the complexity and size of the artwork.
              </>
            }
            bullets={[
              "Initial consultation within 1-2 days",
              "Concept sketches within 1-2 weeks",
              "Regular progress updates during creation",
            ]}
          />
        </div>
      </Section>

      {/* Commission Request Form */}
      <Section
        title="Request a Commission"
        subtitle="Fill out the form below and I'll get back to you within 24 hours"
      >
        <Card>
          <CommissionRequestForm />
        </Card>
      </Section>

      {/* FAQ Section */}
      <section className="py-20 bg.white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-main-text mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-main-text mb-3">
                Can I see the artwork before it's finished?
              </h3>
              <p className="text-gray-700">
                Absolutely! You'll receive progress updates throughout the
                creation process. After the initial concept approval, I'll share
                photos at key stages so you can see your artwork coming to life.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-main-text mb-3">
                What if I'm not satisfied with the result?
              </h3>
              <p className="text-gray-700">
                Your satisfaction is my priority. We'll work together through
                the concept and sketch phases to ensure we're aligned on the
                vision before I begin the final piece. Minor adjustments can be
                made during the creation process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-main-text mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-gray-700">
                Yes! I carefully package and ship artwork worldwide. Shipping
                costs will be calculated based on your location and the artwork
                size, and discussed during our initial consultation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-main-text mb-3">
                Can I commission a piece similar to one I've seen?
              </h3>
              <p className="text-gray-700">
                Yes! My existing works can absolutely serve as inspiration.
                We'll discuss what elements you love and create something unique
                while maintaining those aesthetic qualities you admire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Start Your Commission?"
        subheading="Have questions before requesting a commission? Feel free to reach out!"
        primaryButtonText="View Portfolio for Inspiration"
        primaryButtonLink={RoutePaths.PORTFOLIO}
        secondaryButtonText="Contact Me"
        secondaryButtonLink={RoutePaths.CONTACT}
      />
    </div>
  );
};
