import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Chip } from "../components/ui/Chip";
import { artPieces } from "../constants/artwork";
import { RoutePaths } from "../general/RoutePaths";

export type Artwork = (typeof artPieces)[number];

export const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const numericId = Number(id);
  const artwork = artPieces.find((piece) => piece.id === numericId);

  if (!artwork) {
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
  }

  return (
    <div className="min-h-screen bg-main-bg py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          as="button"
          variant="outlinePrimary"
          className="mb-8"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="sticky top-8 self-start">
            <div className="overflow-hidden rounded-lg bg-white shadow-xl">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            {/* Title and Category */}
            <div>
              <Chip>{artwork.category}</Chip>
              <h1 className="text-4xl font-bold text-main-text sm:text-5xl">
                {artwork.title}
              </h1>
              <p className="mt-4 text-xl text-main-text/70">
                {artwork.description}
              </p>
            </div>

            {/* Artwork Information */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-main-text">
                Artwork Details
              </h2>
              <dl className="space-y-4">
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">Year</dt>
                  <dd className="w-2/3 text-main-text">{artwork.year}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">
                    Creation Date
                  </dt>
                  <dd className="w-2/3 text-main-text">
                    {artwork.creationDate}
                  </dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">
                    Medium
                  </dt>
                  <dd className="w-2/3 text-main-text">{artwork.medium}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">
                    Materials
                  </dt>
                  <dd className="w-2/3 text-main-text">{artwork.materials}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">
                    Dimensions
                  </dt>
                  <dd className="w-2/3 text-main-text">{artwork.dimensions}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">
                    Series
                  </dt>
                  <dd className="w-2/3 text-main-text">{artwork.series}</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">Price</dt>
                  <dd className="w-2/3 text-main-text font-semibold">
                    {artwork.price}
                  </dd>
                </div>
                <div className="flex pb-3">
                  <dt className="w-1/3 font-medium text-main-text/70">
                    Availability
                  </dt>
                  <dd className="w-2/3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        artwork.availability === "Available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {artwork.availability}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Call to Action */}
            <div className="rounded-lg bg-primary/20 p-6">
              <h3 className="text-xl font-bold text-main-text">
                Interested in this piece?
              </h3>
              <p className="mt-2 text-main-text/70">
                {artwork.availability === "Available"
                  ? "This artwork is currently available for purchase. Contact me to discuss acquisition or commission similar work."
                  : "While this piece has been sold, I accept commissions for similar work. Get in touch to discuss your vision."}
              </p>
              <Link
                to={RoutePaths.CONTACT}
                className="mt-4 inline-block rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/80"
              >
                Contact Me
              </Link>
            </div>

            {/* Share Section */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-main-text">
                Share this artwork
              </h3>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram"].map((network) => (
                  <button
                    key={network}
                    className="rounded-md bg-gray-200 p-3 transition-colors hover:bg-gray-300"
                  >
                    {network === "facebook" && (
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {network === "twitter" && (
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {network === "instagram" && (
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
