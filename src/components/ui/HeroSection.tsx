export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 text-2xl text-white/90 font-light italic">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
