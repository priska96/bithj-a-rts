import { Card } from "../components/ui/Card";
import HeroSection from "../components/ui/HeroSection";
import Section from "../components/ui/Section";

export const FAQ = () => {
  return (
    <div className="min-h-screen bg-main-bg">
      <HeroSection title="Frequently Asked Questions" />
      {/* FAQ Section */}
      <Section>
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold text-main-text mb-3">
              Can I see the artwork before it's finished?
            </h3>
            <p className="text-gray-700">
              Absolutely! You'll receive progress updates throughout the
              creation process. After the initial concept approval, I'll share
              photos at key stages so you can see your artwork coming to life.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-main-text mb-3">
              What if I'm not satisfied with the result?
            </h3>
            <p className="text-gray-700">
              Your satisfaction is my priority. We'll work together through the
              concept and sketch phases to ensure we're aligned on the vision
              before I begin the final piece. Minor adjustments can be made
              during the creation process.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-main-text mb-3">
              Do you ship internationally?
            </h3>
            <p className="text-gray-700">
              Yes! I carefully package and ship artwork worldwide. Shipping
              costs will be calculated based on your location and the artwork
              size, and discussed during our initial consultation.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-main-text mb-3">
              Can I commission a piece similar to one I've seen?
            </h3>
            <p className="text-gray-700">
              Yes! My existing works can absolutely serve as inspiration. We'll
              discuss what elements you love and create something unique while
              maintaining those aesthetic qualities you admire.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
};
