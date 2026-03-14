import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "./RoutePaths";

export const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-lg text-base font-medium">
        {t("notFound.title")}
      </h3>
      <button
        onClick={() => navigate(RoutePaths.HOME)}
        type="button"
        className="text-indigo-600 underline"
      >
        {t("notFound.action")}
      </button>
    </div>
  );
};
