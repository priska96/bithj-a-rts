import { Card } from "../../components/ui/Card";

export interface CommissionStepProps {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}
export const CommissionStep = ({
  step,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: CommissionStepProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={`lg:order-${reverse ? "2" : "1"}`}>
        <Card>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6">
            {step}
          </div>
          <h3 className="text-3xl font-bold text-main-text mb-4">{title}</h3>
          <p className="text-lg text-main-text/70 leading-relaxed">
            {description}
          </p>
        </Card>
      </div>
      <div className={`lg:order-${reverse ? "1" : "2"}`}>
        <img src={imageSrc} alt={imageAlt} className="rounded-2xl shadow-2xl" />
      </div>
    </div>
  );
};
