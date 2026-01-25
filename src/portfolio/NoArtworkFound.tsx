import Button from "../components/ui/Button";
import { RoutePaths } from "../general/RoutePaths";

export const NoArtworkFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-main-text">
            Artwork Not Found
          </h1>
          <p className="mt-4 text-xl text-main-text/70">
            The artwork you're looking for doesn't exist.
          </p>
          <Button
            to={RoutePaths.PORTFOLIO}
            variant="solidPrimary"
            className="mt-8"
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};
