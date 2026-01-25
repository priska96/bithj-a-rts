import { RoutePaths } from "../../general/RoutePaths";
import Button from "./Button";

export interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}
export const CTASection = ({
  heading,
  subheading,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) => {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
          {heading || "Ready to Start Your Commission?"}
        </h2>
        {subheading && (
          <p className="text-xl text-white/90 mb-10 font-light">{subheading}</p>
        )}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            to={primaryButtonLink || RoutePaths.PORTFOLIO}
            variant="primary"
          >
            {primaryButtonText || "View Portfolio for Inspiration"}
          </Button>
          {secondaryButtonText && (
            <Button to={secondaryButtonLink} variant="secondary">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
