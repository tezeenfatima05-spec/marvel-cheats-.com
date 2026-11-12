import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Marvel Rivals cheats', productPath('marvel-rivals'));
const productsHub = link('Marvel Rivals products', ROUTES.products);
const cloudDma = link('Cloud DMA', productPath('cloud-dma'));
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Marvel Rivals cheats are online?',
    a: 'The live status banner is on marvelcheats.com and in the Discord #status channel. Always check after a Marvel Rivals update.',
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: 'Your portal unlocks the loader, setup guide, and config library via our secure checkout. Follow the guide before launching Marvel Rivals.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using Marvel Rivals cheats?',
    a: 'Yes—any third-party tool carries risk. Anti-cheat and report systems change. Read current status and accept the risk before use.',
  },
  {
    id: 'platform',
    topic: 'setup',
    icon: 'reqWindows',
    q: 'Which platforms are supported?',
    a: 'Marvel Rivals on Windows 10/11 64-bit. macOS and Linux are not supported.',
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your product.',
  },
  {
    id: 'product-list',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products listed?',
    aHtml: `${cheats}, ${cloudDma}, and ${hwid} live at ${productsHub} with feature checklists and checkout.`,
    a: '',
  },
  {
    id: 'aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'What is Marvel Rivals aimbot in this build?',
    a: 'Silent aim, smoothing, bone selector, prediction, dynamic FOV, visibility checks, and role filters—tuned from the portal presets guide.',
  },
  {
    id: 'esp',
    topic: 'esp',
    icon: 'eye',
    q: 'What is Marvel Rivals hero ESP?',
    a: 'Boxes, health and ultimate bars, skeleton ESP, cooldown ESP, glow, tracers, and object ESP for map items and deployables.',
  },
  {
    id: 'cloud-dma',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'What is Cloud DMA for Marvel Rivals?',
    aHtml: `${cloudDma} covers hardware-isolated delivery when your rig passes the portal compatibility scan.`,
    a: '',
  },
  {
    id: 'blog-help',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where are setup guides?',
    aHtml: `See ${blog} for aimbot, ESP, triggerbot, combo creator, Cloud DMA, and patch-day articles.`,
    a: '',
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platform', 'license-move', 'product-list'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter aimbot, ESP, products, setup, safety, and blog answers for Marvel Rivals.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined =
    kind === 'tier'
      ? [...scoped, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${cheats} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: 'Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: 'Re-check status after every Marvel Rivals update. Reload portal presets instead of copying old sliders.',
  },
];

export function getBlogFaqs(_tag: string, slug: string): SiteFaqItem[] {
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers hero ESP from this article?',
      a: `${cheats} includes hero ESP, object ESP, and radar modules.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('triggerbot') || slug.includes('combo')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes aimbot and combo tools from this article?',
      a: `${cheats} ships aimbot, triggerbot, auto abilities, and combo creator modules.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('cloud-dma')) {
    slugHints.push({
      id: 'blog-slug-util',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Is this article about a utility product?',
      a: `Hardware and Cloud DMA topics link to ${hwid} or ${cloudDma} on the products hub.`,
    });
  }

  return [...slugHints, ...defaultBlogFaqs].slice(0, 8);
}
