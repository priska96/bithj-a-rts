import { ErrorBoundary } from "react-error-boundary";
import { Link, useLocation } from "react-router-dom";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import { RoutePaths } from "./RoutePaths.jsx";
import { Section } from "../components/ui/Section.jsx";

export const Layout = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <Section as="div" className="py-0">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <Link to={RoutePaths.HOME} className="flex items-center">
                <span className="text-2xl font-bold text-indigo-600">bithj.a.rts</span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link
                to={RoutePaths.HOME}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.HOME)
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                to={RoutePaths.PORTFOLIO}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.PORTFOLIO)
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Portfolio
              </Link>
              <Link
                to={RoutePaths.ABOUT}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.ABOUT)
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                About
              </Link>
              <Link
                to={RoutePaths.COMMISSIONS}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.COMMISSIONS)
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Commissions
              </Link>
              <Link
                to={RoutePaths.CONTACT}
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive(RoutePaths.CONTACT)
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </Section>
      </nav>

      {/* Main Content */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <Section as="div" className="py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Bithja Arts. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </Section>
      </footer>
    </>
  );
};
