export const availability = ["sold", "available"] as const;

export type AvailabilityKey = (typeof availability)[number];
