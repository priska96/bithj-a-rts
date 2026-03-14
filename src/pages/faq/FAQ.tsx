import { Card } from "../../components/ui/Card";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/ui/HeroSection";
import Section from "../../components/ui/Section";

export const FAQ = () => {
  const { t } = useTranslation();
  const faqItems = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="min-h-screen bg-main-bg">
      <HeroSection title={t("faq.title")} />
      {/* FAQ Section */}
      <Section>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-main-text mb-3">
                {item.question}
              </h3>
              <p className="text-gray-700">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};
