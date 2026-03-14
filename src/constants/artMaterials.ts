export const artMaterials = [
  "acrylicOnCanvas",
  "oilOnCanvas",
  "mixedMediaOnCanvas",
  "watercolorAndInkOnPaper",
  "acrylicAndGoldLeafOnPanel",
  "oilOnLinen",
] as const;

export type MaterialsKey = (typeof artMaterials)[number];

export const artMediums = ["painting", "mixedMedia", "watercolor"] as const;

export type MediumKey = (typeof artMediums)[number];
