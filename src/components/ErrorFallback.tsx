import { FC } from "react";
import { FallbackProps } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import Button from "./ui/Button";

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();
  const errorMessage =
    error instanceof Error ? error.message : t("error.title");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-main-bg px-4 text-center text-main-text">
      <h2 className="text-3xl font-bold mb-2">{t("error.title")}</h2>
      <p className="mb-4 text-gray-700">{errorMessage}</p>
      <Button onClick={resetErrorBoundary} variant="solidPrimary">
        {t("error.retry")}
      </Button>
    </div>
  );
};

export default ErrorFallback;
