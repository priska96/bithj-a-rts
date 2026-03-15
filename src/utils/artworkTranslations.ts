import { TFunction } from "i18next";
import { ArtPiece } from "../constants/artwork";

type ArtworkTextField = "description" | "idea" | "summary";

export const getArtworkText = (
  t: TFunction,
  artwork: Pick<ArtPiece, "id" | "description" | "idea" | "summary">,
  field: ArtworkTextField,
): string =>
  t(`artwork.${artwork.id}.${field}`, {
    defaultValue: artwork[field] ?? "",
  });

export const getArtworkTexts = (
  t: TFunction,
  artwork: Pick<ArtPiece, "id" | "description" | "idea" | "summary">,
) => ({
  description: getArtworkText(t, artwork, "description"),
  idea: getArtworkText(t, artwork, "idea"),
  summary: getArtworkText(t, artwork, "summary"),
});
