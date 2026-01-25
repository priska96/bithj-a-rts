import React from "react";
import { Card } from "../components/ui/Card";

export interface CommissionTermsProps {
  title?: string;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  bullets?: string[];
}
export const CommissionTerms = ({
  title,
  icon,
  description,
  bullets,
}: CommissionTermsProps) => {
  return (
    <Card>
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-3xl font-bold text-main-text">{title}</h3>
      </div>
      <p className="text-lg text-main-text/70 mb-6">{description}</p>
      <div className="space-y-3 text-gray-700">
        {bullets.map((bullet, index) => (
          <div className="flex items-start" key={index}>
            <svg
              className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
