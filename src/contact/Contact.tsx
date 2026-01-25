import { HeroSection } from "../components/ui/HeroSection";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="min-h-screen pb-12 bg-main-bg">
      <HeroSection
        title="Get In Touch"
        subtitle="I'd love to hear from you. Send me a message and I'll get back to you as soon as possible."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Contact Form */}
          <div className="mt-12">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="mt-12 border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  Email
                </h3>
                <p className="mt-2 text-gray-500">your-email@example.com</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  Location
                </h3>
                <p className="mt-2 text-gray-500">Your City, Country</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-main-text">
                  Response Time
                </h3>
                <p className="mt-2 text-gray-500">Within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
