import { FC } from "react";
import { useTranslation } from "react-i18next";

interface LoadingProps {
  name?: string;
}

export const Loading: FC<LoadingProps> = ({ name }) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-main-text">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-lg font-medium">
          {name ? t("loading.named", { name }) : t("loading.default")}
        </p>
      </div>
    </div>
  );
};

export default Loading;
