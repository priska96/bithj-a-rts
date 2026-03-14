import { baseUrl } from "../constants/baseUrl";

export const RoutePaths = {
  HOME: baseUrl,
  PORTFOLIO: `${baseUrl}portfolio`,
  SHOP: `${baseUrl}shop`,
  ABOUT: `${baseUrl}about`,
  COMMISSIONS: `${baseUrl}commissions`,
  CONTACT: `${baseUrl}contact`,
  FAQ: `${baseUrl}faq`,
  ARTWORK_DETAIL: `${baseUrl}artwork/:id`,
} as const;

export type RoutePathKey = keyof typeof RoutePaths;
