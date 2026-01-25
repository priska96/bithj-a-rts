export const RoutePaths = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  ABOUT: "/about",
  COMMISSIONS: "/commissions",
  CONTACT: "/contact",
  FAQ: "/faq",
  ARTWORK_DETAIL: "/artwork/:id",
} as const;

export type RoutePathKey = keyof typeof RoutePaths;
