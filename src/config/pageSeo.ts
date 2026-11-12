/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Marvel Rivals Cheats — Aimbot, ESP & Skin Changer',
    description:
      'Explore Marvel Rivals cheats for PC featuring customizable aimbot, hero ESP, triggerbot, auto abilities, combo creator, enemy radar, skin changer, and Cloud DMA support.',
  },
  '/products/marvel-rivals-cheats/': {
    title: 'Marvel Rivals Cheats, Cloud DMA & HWID Spoofer',
    description:
      'Marvel Rivals cheats for PC plus Cloud DMA and HWID Spoofer utilities—aimbot, hero ESP, radar, combo tools, and skin changer on marvelcheats.com.',
  },
  '/products/marvel-rivals-cheats/marvel-rivals/': {
    title: 'Marvel Rivals Cheats | Aimbot, ESP & Combo Creator',
    description:
      'Full Marvel Rivals cheat menu: aimbot, hero ESP, triggerbot, auto abilities, combo creator, radar, skin changer, and Cloud DMA support.',
  },
  '/products/marvel-rivals-cheats/cloud-dma/': {
    title: 'Cloud DMA for Marvel Rivals',
    description:
      'Cloud DMA product for Marvel Rivals—hardware-isolated stack, portal setup, and module pairing when compatibility requirements are met.',
  },
  '/products/marvel-rivals-cheats/hwid-spoofer/': {
    title: 'HWID Spoofer | Marvel Rivals Utilities',
    description:
      'HWID Spoofer utility with restore-point workflow, compatibility scan, and post-spoof verification before Marvel Rivals.',
  },
  '/products/marvel-rivals-cheats/utilities/': {
    title: 'Marvel Rivals Utilities | Cloud DMA & HWID',
    description:
      'Compare Cloud DMA and HWID Spoofer—when each utility fits and links to full product pages on marvelcheats.com.',
  },
  '/blog/': {
    title: 'Marvel Rivals Guides & Setup Notes',
    description:
      'Setup guides for aimbot, ESP, triggerbot, combo creator, Cloud DMA, HWID tools, and patch-day checks for Marvel Rivals cheats.',
  },
  '/forum/': {
    title: 'Marvel Rivals Community Forum | Marvel Cheats',
    description: 'Discuss Marvel Rivals cheats setup, configs, patch changes, and feature tips with the community.',
  },
  '/faq/': {
    title: 'FAQ | Marvel Rivals Cheats & Utilities',
    description:
      'Answers on Marvel Rivals cheats features, Cloud DMA, HWID Spoofer, checkout, and setup on marvelcheats.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Marvel Cheats',
    description: 'Purchase terms, license use, and refund policy for Marvel Cheats products sold through marvelcheats.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Marvel Cheats',
    description: 'How marvelcheats.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Marvel Cheats',
    description: 'What Marvel Cheats publishes: Marvel Rivals cheats, utilities, guides, and status notes at marvelcheats.com.',
  },
  '/support/': {
    title: 'Support | Marvel Cheats',
    description: 'Get help with loader setup, HWID, Cloud DMA, and checkout for Marvel Rivals products.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
