import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import ErrorFallback from "../components/ErrorFallback";
import { RoutePaths } from "./RoutePaths";

export const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: RoutePaths.HOME, label: t("nav.home") },
    { to: RoutePaths.PORTFOLIO, label: t("nav.portfolio") },
    { to: RoutePaths.ABOUT, label: t("nav.about") },
    { to: RoutePaths.COMMISSIONS, label: t("nav.commissions") },
    { to: RoutePaths.CONTACT, label: t("nav.contact") },
  ];

  const isGerman = i18n.language.startsWith("de");

  const languageButtonClass = (isActiveLanguage: boolean) =>
    `rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
      isActiveLanguage
        ? "border-primary bg-primary text-white"
        : "border-primary text-primary hover:bg-primary/10"
    }`;

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="py-20 px-8">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-6">
            <div className="flex">
              <Link to={RoutePaths.HOME} className="flex items-center">
                <span className="text-2xl font-bold text-primary">
                  bithj.a.rts
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-wrap gap-8">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`inline-flex items-center border-b-2 px-1 pt-1 text-md font-medium transition-colors ${
                      isActive(to)
                        ? "border-primary text-main-text"
                        : "border-transparent text-main-text/50 hover:border-gray-300 hover:text-main-text/70"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div
                className="flex items-center gap-2"
                aria-label={t("common.language")}
              >
                <button
                  type="button"
                  onClick={() => void i18n.changeLanguage("de")}
                  className={languageButtonClass(isGerman)}
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => void i18n.changeLanguage("en")}
                  className={languageButtonClass(!isGerman)}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="p-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              {t("footer.rights", { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-6">
              <Link
                to={RoutePaths.FAQ}
                className="text-gray-400 transition-colors hover:text-white"
              >
                {t("footer.faq")}
              </Link>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                {t("footer.instagram")}
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                {t("footer.facebook")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
