import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "../../general/RoutePaths";

export const NoArtworkFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-main-text">
            {t("portfolio.notFoundTitle")}
          </h1>
          <p className="mt-4 text-xl text-main-text/70">
            {t("portfolio.notFoundText")}
          </p>
          <Button
            to={RoutePaths.PORTFOLIO}
            variant="solidPrimary"
            className="mt-8"
          >
            {t("portfolio.backToPortfolio")}
          </Button>
        </div>
      </div>
    </div>
  );
};
