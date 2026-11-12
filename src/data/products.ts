import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'marvel-rivals': [
    'marvel-rivals-features-guide',
    'marvel-rivals-aimbot-setup',
    'marvel-rivals-esp-wallhack-guide',
    'marvel-rivals-patch-checklist',
  ],
  'cloud-dma': ['marvel-rivals-cloud-dma-setup', 'marvel-rivals-features-guide'],
  'hwid-spoofer': ['marvel-rivals-hwid-spoofer-guide', 'marvel-rivals-patch-checklist'],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on marvelcheats.com and Discord #status before purchase—especially after a Marvel Rivals update.',
  },
  {
    num: '02',
    title: 'Choose your product',
    desc: 'Select Marvel Rivals cheats, Cloud DMA, or HWID Spoofer. Review the feature checklist before checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord if you need help confirming compatibility, platform, or delivery details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use the operator portal, patch loader, and setup guide. Test in practice, load presets, then queue competitive.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Marvel Rivals receives frequent updates. Confirm module availability on the live status panel at marvelcheats.com before you purchase or launch. Overlay behavior may differ in custom modes and spectator view after patches.';

const sharedLimitations =
  'Third-party software in Marvel Rivals can violate game terms and lead to account action. You use this software at your own risk. Compatibility and availability can change after game or Windows updates without notice.';

const marvelSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Marvel Rivals client via your PC launcher with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Marvel Rivals published hardware requirements.' },
];

const gameplay = '/images/gameplay';

const galleryRaw = {
  visuals: {
    src: `${gameplay}/marvel-rivals-visuals.webp`,
    alt: 'Marvel Rivals hero ESP with health bars and skeleton overlay',
    caption: 'Hero ESP & visuals',
    captionDesc: 'Enemy boxes, health bars, ultimate charge and skeleton ESP during a team fight.',
  },
  world: {
    src: `${gameplay}/marvel-rivals-world.webp`,
    alt: 'Marvel Rivals world ESP showing health packs and map objects',
    caption: 'World & map ESP',
    captionDesc: 'Health packs, portals, and object ESP for stronger map awareness.',
  },
  misc: {
    src: `${gameplay}/marvel-rivals-misc.webp`,
    alt: 'Marvel Rivals misc gameplay options and radar overlay',
    caption: 'Radar & gameplay tools',
    captionDesc: 'Radar overlay, FOV tools, and misc combat options in one menu.',
  },
  shot1: {
    src: `${gameplay}/marvel-rivals-screenshot-1.webp`,
    alt: 'Marvel Rivals aimbot FOV and targeting preset menu',
    caption: 'Aimbot tuning',
    captionDesc: 'Silent aim, bone selector, smoothing, and dynamic FOV presets.',
  },
  shot2: {
    src: `${gameplay}/marvel-rivals-screenshot-2.webp`,
    alt: 'Marvel Rivals combo creator step editor interface',
    caption: 'Combo creator',
    captionDesc: 'Drag-and-drop ability sequences with hero logic and auto-ability rules.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return { src: item.src, alt: item.alt, caption: item.caption, captionDesc: item.captionDesc };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'marvel-rivals';
}

const marvelFullFeatures = [
  'Enable aimbot',
  'Silent aim & smoothing',
  'Bone selector & prediction',
  'Dynamic FOV & visibility check',
  'Triggerbot with hotkey',
  'Hawkeye auto charge bow',
  'Auto ability & auto melee',
  'Auto dash & ultimate cancel',
  'Combo creator with step editor',
  'ESP box, health & ultimate bars',
  'Skeleton ESP, glow & tracers',
  'Ability cooldown ESP',
  'Object ESP (packs, illusions, nests)',
  'Enemy radar overlay',
  'Skin changer per hero',
  'FOV changer & config system',
  'Cloud DMA support',
];

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  'marvel-rivals': {
    images: slide('visuals', 'shot1', 'world'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: marvelSystemRequirements,
    fullFeatures: marvelFullFeatures,
    overview: {
      title: 'Built around Marvel Rivals PC combat',
      paragraphs: [
        'Marvel Rivals cheats combine aimbot, hero ESP, triggerbot, auto abilities, combo automation, radar, and skin changer tools in one configurable menu. Modules are grouped so you can tune FOV, smoothing, and ESP density before your first competitive queue.',
        'The build is maintained through Marvel Rivals patches with cloud-backed presets and operator support on marvelcheats.com.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('misc', 'visuals', 'world'),
    goodToKnow:
      'Cloud DMA requires compatible hardware and a clean setup path. Follow the portal checklist and confirm firmware compatibility before pairing with Marvel Rivals modules.',
    limitations:
      'DMA does not remove all detection risk. You accept hardware, driver, and account risk. Shared or work PCs may not be suitable.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqCpu', text: 'Compatible DMA hardware per the portal compatibility list.' },
      { icon: 'reqWifi', text: 'Stable connection for cloud DMA portal and firmware delivery.' },
      { icon: 'reqShieldGuide', text: 'Follow the Cloud DMA setup guide before launching Marvel Rivals.' },
    ],
    fullFeatures: [
      'Cloud-hosted DMA stack',
      'Marvel Rivals module pairing',
      'Firmware update channel',
      'Hardware compatibility scan',
      'Portal setup walkthrough',
      'Operator support on Discord',
    ],
    overview: {
      title: 'Cloud DMA for Marvel Rivals',
      paragraphs: [
        'Cloud DMA delivers a hardware-isolated path for Marvel Rivals aimbot and ESP modules when your rig meets the compatibility requirements. Setup docs cover firmware, pairing, and conservative in-game profiles.',
        'Use Cloud DMA when you want the DMA workflow—not a substitute for reading status and patch notes before every session.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('world', 'visuals', 'shot2'),
    goodToKnow:
      'Create a Windows restore point before spoofing. Verify identifiers changed after a cold reboot before launching Marvel Rivals.',
    limitations:
      'Spoofing does not help account-only ban cases. Never stack two spoof tools. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal guide before launching Marvel Rivals after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Post-spoof verification',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for a clean hardware profile',
      paragraphs: [
        'The HWID Spoofer helps when Marvel Rivals or anti-cheat flags your PC hardware but your account is still usable. Disk and MAC profile tools ship with restore-point and verification steps.',
        'Use when fresh accounts fail on one machine but work elsewhere—not as a fix for account-only restrictions.',
      ],
    },
  },
};

const tierAbout: Record<string, ProductPage['about']> = {
  'marvel-rivals': [
    {
      type: 'p',
      text: 'Marvel Rivals cheats focus on hero fights, ability trades, and fast repositioning. Aimbot, ESP, triggerbot, and combo tools are tuned for 6v6 team battles—not slow-paced shooters.',
    },
    { type: 'h2', text: 'Configure before you queue' },
    {
      type: 'p',
      text: 'Start with conservative aim smoothing, readable ESP, and auto-ability thresholds. Scale up after practice—not before your first ranked session.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  'marvel-rivals': [
    { type: 'h2', text: 'Aimbot and targeting' },
    {
      type: 'p',
      text: 'Silent aim, bone selector, prediction, dynamic FOV, team filters, and role-based targeting help you stay on flying and stealthed heroes without maxed-out snap settings.',
    },
    { type: 'h2', text: 'ESP, radar, and hero logic' },
    {
      type: 'p',
      text: 'Hero ESP, cooldown tracking, object ESP, radar, and auto dash/melee/ultimate logic cover both aim and ability rhythm. Combo creator ties ability sequences to your keybinds.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'cloud-dma': [
    { type: 'h2', text: 'When to choose Cloud DMA' },
    {
      type: 'p',
      text: 'Choose Cloud DMA when you already run—or plan to run—DMA hardware and want Marvel Rivals modules delivered through the cloud DMA stack and portal workflow.',
    },
    { type: 'h2', text: 'Setup expectations' },
    {
      type: 'p',
      text: 'Follow firmware and pairing steps in the portal before enabling combat modules. Test with conservative profiles after every Marvel Rivals patch.',
    },
  ],
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail instantly on one PC but work elsewhere—typical hardware enforcement. Not for account-only ban cases.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then a conservative cheat profile before competitive play.',
    },
  ],
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('visuals', 'world', 'misc', 'shot1', 'shot2');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Marvel Rivals cheats for PC plus Cloud DMA and HWID Spoofer utilities—aimbot, hero ESP, radar, and skin changer tools.',
  buyUrl: checkoutPath('marvelRivals'),
};
