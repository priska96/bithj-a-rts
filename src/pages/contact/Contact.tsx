import { EmailIcon } from "../../components/icons/EmailIcon";
import { LocationIcon } from "../../components/icons/LocationIcon";
import { TimeIconSmall } from "../../components/icons/TimeIconSmall";
import { Card } from "../../components/ui/Card";
import { HeroSection } from "../../components/ui/HeroSection";
import { Section } from "../../components/ui/Section";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="min-h-screen -main-bg">
      <HeroSection
        title="Get In Touch"
        subtitle="I'd love to hear from you. Send me a message and I'll get back to you as soon as possible."
      />
      <Section>
        <Card>
          <ContactForm />

          {/* Contact Info */}
          <div className="mt-12 border-t border-main-text pt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <EmailIcon />
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  Email
                </h3>
                <p className="mt-2 text-main-text/70">your-email@example.com</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <LocationIcon />
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  Location
                </h3>
                <p className="mt-2 text-main-text/70">Your City, Country</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <TimeIconSmall />
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  Response Time
                </h3>
                <p className="mt-2 text-main-text/70">Within 24-48 hours</p>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};
