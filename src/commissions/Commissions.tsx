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
