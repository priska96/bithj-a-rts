import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import deTranslation from "./locales/de/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
} as const;

const supportedLanguages = ["en", "de"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") {
    return "de";
  }

  const savedLanguage = window.localStorage.getItem("language");
  const browserLanguage = window.navigator.language.split(
    "-"
  )[0] as SupportedLanguage;
  const preferredLanguage = (savedLanguage ??
    browserLanguage) as SupportedLanguage;

  return supportedLanguages.includes(preferredLanguage)
    ? preferredLanguage
    : "de";
};

const initialLanguage = getInitialLanguage();

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage;
}

i18n.on("languageChanged", (language) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("language", language);
  }

  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }
});

export default i18n;
