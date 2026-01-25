import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useLocation } from "react-router-dom";
import ErrorFallback from "../components/ErrorFallback";
import { RoutePaths } from "./RoutePaths";

export const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: RoutePaths.HOME, label: "Home" },
    { to: RoutePaths.PORTFOLIO, label: "Portfolio" },
    { to: RoutePaths.ABOUT, label: "About" },
    { to: RoutePaths.COMMISSIONS, label: "Commissions" },
    { to: RoutePaths.CONTACT, label: "Contact" },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="py-20 px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <Link to={RoutePaths.HOME} className="flex items-center">
                <span className="text-2xl font-bold text-primary">
                  bithj.a.rts
                </span>
              </Link>
            </div>
            <div className="flex space-x-8">
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
              © {new Date().getFullYear()} Bithj.a.rts. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/faq"
                className="text-gray-400 transition-colors hover:text-white"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
