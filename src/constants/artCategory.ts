export const artCategories = [
  "figureDrawing",
  "allegoricalScene",
  "abstractCollage",
  "comic",
  "landscape",
  "stillLife",
  "portrait",
  "nature",
  "abstract",
] as const;

export type ArtCategoryKey = (typeof artCategories)[number];
