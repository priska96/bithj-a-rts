import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Chip } from "../components/ui/Chip";
import { Image } from "../components/ui/Image";
import { artPieces } from "../constants/artwork";
import { RoutePaths } from "../general/RoutePaths";
import { NoArtworkFound } from "./NoArtworkFound";
import { ShareIcon } from "../components/icons/ShareIcon";
import { Card } from "../components/ui/Card";

export type Artwork = (typeof artPieces)[number];

export const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const numericId = Number(id);
  const artwork = artPieces.find((piece) => piece.id === numericId);

  const tableLabels = [
    { label: "Year", value: artwork.year },
    { label: "Creation Date", value: artwork.creationDate },
    { label: "Medium", value: artwork.medium },
    { label: "Materials", value: artwork.materials },
    { label: "Dimensions", value: artwork.dimensions },
    { label: "Series", value: artwork.series },
    { label: "Price", value: artwork.price, bold: true },
    {
      label: "Availability",
      value: artwork.availability,
      isStatus: true,
    },
  ];
  if (!artwork) {
    return <NoArtworkFound />;
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
          <Image src={artwork.image} alt={artwork.title} />
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
            <Card>
              <h2 className="mb-4 text-2xl font-bold text-main-text">
                Artwork Details
              </h2>
              <dl className="space-y-4">
                {tableLabels.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex ${item?.isStatus ? "" : "border-b border-main-text"} pb-3`}
                  >
                    <dt className="w-1/3 font-medium text-main-text/70">
                      {item.label}
                    </dt>
                    <dd className="w-2/3 text-main-text">
                      {item.isStatus ? (
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                            item.value === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.value}
                        </span>
                      ) : item.bold ? (
                        <span className="font-semibold">{item.value}</span>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>

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
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
