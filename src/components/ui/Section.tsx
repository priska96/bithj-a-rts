import { ReactNode } from "react";

interface SectionProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
  children: ReactNode;
}

export function Section({
  title,
  subtitle,
  center = false,
  className = "",
  children,
}: SectionProps) {
  return (
    <section className={`py-20 bg-main-bg ${className}`}>
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${center ? "text-center" : ""}`}
      >
        {title && (
          <h2
            className={`text-4xl font-bold text-main-text mb-4 ${center ? "" : ""}`}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`text-xl text-main-text mb-12 ${center ? "" : ""}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
