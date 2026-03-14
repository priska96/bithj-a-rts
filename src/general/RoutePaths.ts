export const RoutePaths = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  SHOP: "/shop",
  ABOUT: "/about",
  COMMISSIONS: "/commissions",
  CONTACT: "/contact",
  FAQ: "/faq",
  ARTWORK_DETAIL: "/artwork/:id",
} as const;

export type RoutePathKey = keyof typeof RoutePaths;
