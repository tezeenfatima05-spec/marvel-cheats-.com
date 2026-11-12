/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/marvel-rivals-cheats/'],
  ['/cheats/', '/products/marvel-rivals-cheats/'],
  ['/cheats/lite', '/products/marvel-rivals-cheats/'],
  ['/cheats/lite/', '/products/marvel-rivals-cheats/'],
  ['/cheats/pro', '/products/marvel-rivals-cheats/'],
  ['/cheats/pro/', '/products/marvel-rivals-cheats/'],
  ['/cheats/elite', '/products/marvel-rivals-cheats/marvel-rivals/'],
  ['/cheats/elite/', '/products/marvel-rivals-cheats/marvel-rivals/'],
  ['/cheats/compare', '/blog/marvel-rivals-features-guide/'],
  ['/cheats/compare/', '/blog/marvel-rivals-features-guide/'],
  ['/products/dota-2-cheats', '/products/marvel-rivals-cheats/'],
  ['/products/dota-2-cheats/', '/products/marvel-rivals-cheats/'],
  ['/products/marvel-rivals-cheats/utilities', '/products/marvel-rivals-cheats/utilities/'],
  ['/products/marvel-rivals-cheats', '/products/marvel-rivals-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
