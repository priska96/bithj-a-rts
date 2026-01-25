import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, useLocation } from "react-router-dom";
import ErrorFallback from "../components/ErrorFallback";
import { RoutePaths } from "./RoutePaths";

export const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
              <Link
                to={RoutePaths.HOME}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.HOME)
                    ? "border-primary text-main-text"
                    : "border-transparent text-main-text/50 hover:border-gray-300 hover:text-main-text/70"
                }`}
              >
                Home
              </Link>
              <Link
                to={RoutePaths.PORTFOLIO}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.PORTFOLIO)
                    ? "border-primary text-main-text"
                    : "border-transparent text-main-text/50 hover:border-gray-300 hover:text-main-text/70"
                }`}
              >
                Portfolio
              </Link>
              <Link
                to={RoutePaths.ABOUT}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.ABOUT)
                    ? "border-primary text-main-text"
                    : "border-transparent text-main-text/50 hover:border-gray-300 hover:text-main-text/70"
                }`}
              >
                About
              </Link>
              <Link
                to={RoutePaths.COMMISSIONS}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.COMMISSIONS)
                    ? "border-primary text-main-text"
                    : "border-transparent text-main-text/50 hover:border-gray-300 hover:text-main-text/70"
                }`}
              >
                Commissions
              </Link>
              <Link
                to={RoutePaths.CONTACT}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.CONTACT)
                    ? "border-primary text-main-text"
                    : "border-transparent text-main-text/50 hover:border-gray-300 hover:text-main-text/70"
                }`}
              >
                Contact
              </Link>
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
              © {new Date().getFullYear()} Bithja Arts. All rights reserved.
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
                Twitter
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
