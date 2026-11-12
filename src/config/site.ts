/** Central site configuration — update these values when cloning the template for a new game. */

export const SITE_DOMAIN = 'marvelcheats.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const PRODUCT_BASE = '/products/marvel-rivals-cheats/';
export const TITLE_PREFIX = 'Marvel Rivals Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;

export const PRIMARY_KEYWORD = 'Marvel Rivals cheats';

/** Visible / affiliate checkout destinations (external). */
export const CTA_MARVEL_RIVALS =
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fmarvel-rivals';
export const CTA_CLOUD_DMA =
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fcloud-dma';
export const CTA_HWID_SPOOFER =
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fhwid-spoofer';

export const DISCORD_URL = 'https://discord.com/invite/wmFY3xVtwm';

export const SITE_ASSETS = {
  ogImage: '/images/gameplay/marvel-rivals-visuals.webp',
  heroPoster: '/images/gameplay/marvel-rivals-screenshot-1.webp',
  screenshots: [
    '/images/gameplay/marvel-rivals-visuals.webp',
    '/images/gameplay/marvel-rivals-world.webp',
    '/images/gameplay/marvel-rivals-misc.webp',
    '/images/gameplay/marvel-rivals-screenshot-1.webp',
    '/images/gameplay/marvel-rivals-screenshot-2.webp',
  ],
} as const;
