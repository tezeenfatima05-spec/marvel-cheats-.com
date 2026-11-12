import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Marvel Cheats',
    domain: 'marvelcheats.com',
    title: 'Marvel Rivals Cheats — Aimbot, ESP & Skin Changer',
    description:
      'Explore Marvel Rivals cheats for PC featuring aimbot, hero ESP, triggerbot, combo creator, radar, skin changer, and Cloud DMA support on marvelcheats.com.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Marvel Rivals — patch build online',
    eyebrow: 'Premium PC tools',
    titleLine1: 'Marvel Rivals',
    titleLine2: 'Cheats for PC',
    subtitle:
      'Marvel Rivals cheats with aimbot, hero ESP, triggerbot, combo creator, radar, and skin changer—preset configs and operator support at marvelcheats.com.',
    ctaPrimary: 'Buy Now',
    ctaSecondary: 'View products',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Game modes',
    modes: ['Quick Match', 'Competitive', 'Convergence', 'Practice'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Marvel Rivals cheats for PC',
    subtitle: 'Aimbot, ESP, triggerbot, hero logic, radar, and skin tools maintained through Marvel Rivals patches.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Silent. Smooth. On target.',
        desc: 'Humanized aimbot with bone selector, prediction, and dynamic FOV for fast hero movement.',
        bullets: [
          'Silent aim with smoothing and humanizer',
          'Bone selector, prediction, and Y offset',
          'Dynamic FOV, visibility check, and lock mode',
          'Role filter and flying-target priority',
          'Portal presets per hero and game mode',
        ],
        tags: ['Marvel Rivals aimbot', 'silent aim', 'dynamic FOV'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Hero ESP',
        subtitle: 'See fights before they collapse.',
        desc: 'Player ESP with health, ultimates, skeletons, and cooldown tracking for 6v6 brawls.',
        bullets: [
          'ESP box, health bar, and ultimate bar',
          'Skeleton ESP, glow, and tracer lines',
          'Ability cooldown ESP and enemy overlay',
          'Out-of-FOV arrows and predicted position',
        ],
        tags: ['Marvel Rivals ESP', 'hero ESP', 'wallhack'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Triggerbot',
        subtitle: 'Fire when crosshair is true.',
        desc: 'Hotkey triggerbot with delay and prediction—including Hawkeye auto bow charge.',
        bullets: [
          'Require hotkey and activation key',
          'Trigger delay and accuracy scale',
          'Hawkeye auto charge and release stage',
          'Pairs with aimbot visibility checks',
        ],
        tags: ['Marvel Rivals triggerbot', 'auto fire', 'Hawkeye'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Auto Ability',
        subtitle: 'Hero logic on a timeline.',
        desc: 'Automation for abilities, melee, dash, and ultimate cancel with health thresholds.',
        bullets: [
          'Auto ability with cooldown and selector',
          'Auto melee and dash with keybinds',
          'Low HP dash and marked-target dash',
          'Auto ultimate cancel by detection range',
        ],
        tags: ['auto ability', 'auto dash', 'hero logic'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Combo Creator',
        subtitle: 'Sequences you can edit.',
        desc: 'Drag-and-drop step editor with cast, hold, wait, dash, and loop blocks.',
        bullets: [
          'Full step editor with reordering',
          'Stop on target lost or death',
          'Global cooldown and all-heroes toggle',
          'Per-hero combo profiles in portal',
        ],
        tags: ['combo creator', 'combo automation', 'hero combos'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Radar & Object ESP',
        subtitle: 'Map awareness beyond heroes.',
        desc: '2D radar plus object ESP for packs, illusions, nests, and deployables.',
        bullets: [
          'Radar range, size, and teammate toggles',
          'Health pack and object tracking',
          'Loki illusions, portals, and turret ESP',
          'Locked-target highlight on radar',
        ],
        tags: ['enemy radar', 'object ESP', 'map awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Skin Changer',
        subtitle: 'Per-hero looks.',
        desc: 'Live skin apply with auto-save per hero when new skins release.',
        bullets: [
          'Per-hero skin selection',
          'Auto-save and load per hero',
          'Live skin apply in menu',
          'New skin support on release',
        ],
        tags: ['skin changer', 'hero skins', 'cosmetic'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Misc & Gameplay',
        subtitle: 'Movement and FOV tools.',
        desc: 'FOV changer, movement assists, and per-hero skill control in one misc tab.',
        bullets: [
          'FOV changer and player size modifier',
          'Bunny hop, super jump, rapid fire',
          'Config system with cloud backup',
          'Hero autolock and time dilation options',
        ],
        tags: ['FOV changer', 'gameplay tools', 'config system'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Hardware path when supported.',
        desc: 'Cloud DMA pairing for compatible rigs—separate product with portal setup.',
        bullets: [
          'Cloud DMA module pairing',
          'Firmware and compatibility scan',
          'Conservative profiles after patches',
          'Discord #status for DMA notes',
        ],
        tags: ['Cloud DMA', 'DMA cheats', 'hardware'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most Marvel Rivals cheat shops ship stale loaders, obvious automation, and ticket bots. We built marvelcheats.com around patch-day delivery, humanized scripts, and live operators.',
    usLabel: 'Marvel Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Patch-aware builds pushed within hours of Marvel Rivals updates—check Discord #status before you queue.',
      },
      {
        title: 'Humanized scripts & delays',
        desc: 'Delay Setting, Target Selector and conservative defaults mimic high-MMR timing—not instant bot bursts that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, hero configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Marvel Rivals process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Ranked, Turbo and per-hero profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Marvel Rivals updates.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'PC players running aimbot, ESP, and utilities on marvelcheats.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and launch Marvel Rivals on Windows—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or Turbo presets, and tune scripts plus map hack sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Marvel Rivals',
        desc: 'Check the live status banner, launch Marvel Rivals, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Marvel Rivals after updates.',
    items: ['Windows 10 & 11', 'Marvel Rivals PC', 'Marvel Rivals client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'Marvel Rivals cheats',
    subtitle: 'Aimbot, hero ESP, triggerbot, combo creator, radar, and skin changer in one menu.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Full suite',
        name: 'Marvel Rivals',
        title: 'Marvel Rivals Cheats',
        desc: 'Marvel Rivals cheats for PC with aimbot, ESP, triggerbot, auto abilities, combo creator, radar, skin changer, and Cloud DMA support.',
        features: ['Silent aim & smoothing', 'Hero ESP & wallhack', 'Triggerbot & Hawkeye bow', 'Combo creator', 'Enemy radar', 'Skin changer'],
        more: 45,
        href: `${productBase}marvel-rivals/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Marvel Rivals products',
    subtitle: 'Marvel Rivals cheats plus Cloud DMA and HWID Spoofer utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Cloud DMA',
        title: 'Cloud DMA',
        subtitle: 'Hardware-isolated delivery',
        desc: 'Cloud DMA for compatible PCs—portal pairing, firmware updates, and Marvel Rivals module support.',
        features: ['Cloud DMA stack', 'Compatibility scan', 'Firmware channel', 'Module pairing guide'],
        more: 2,
        href: `${productBase}cloud-dma/`,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID tools with restore-point workflow and verification before you launch Marvel Rivals again.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 6,
        href: `${productBase}hwid-spoofer/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Aimbot, ESP, triggerbot, combo creator, Cloud DMA, and patch-day checks for Marvel Rivals.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Features',
        title: 'Marvel Rivals cheats features: aimbot, ESP, combo creator, and more',
        slug: 'marvel-rivals-features-guide',
        image: '/images/blog/marvel-rivals-visuals.webp',
        desc: 'Overview of Marvel Rivals cheats—aimbot, hero ESP, triggerbot, auto abilities, radar, skin changer, and Cloud DMA.',
        date: 'Nov 10, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Setup',
        title: 'Marvel Rivals aimbot setup: smoothing and FOV',
        slug: 'marvel-rivals-aimbot-setup',
        image: '/images/blog/marvel-rivals-screenshot-1.webp',
        desc: 'Tune silent aim, bone selector, prediction, and dynamic FOV for Marvel Rivals.',
        date: 'Nov 9, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Marvel Rivals hero ESP and wallhack guide',
        slug: 'marvel-rivals-esp-wallhack-guide',
        image: '/images/blog/marvel-rivals-world.webp',
        desc: 'Configure hero ESP, skeleton lines, cooldown ESP, and object tracking.',
        date: 'Nov 9, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Marvel Rivals triggerbot and Hawkeye bow automation',
        slug: 'marvel-rivals-triggerbot-guide',
        image: '/images/blog/marvel-rivals-misc.webp',
        desc: 'Hotkey triggerbot, accuracy scale, and Hawkeye auto charge settings.',
        date: 'Nov 8, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Marvel Rivals combo creator: step editor basics',
        slug: 'marvel-rivals-combo-creator',
        image: '/images/blog/marvel-rivals-screenshot-2.webp',
        desc: 'Build hero combos with cast, hold, wait, dash, and mark steps.',
        date: 'Nov 8, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Setup',
        title: 'Marvel Rivals Cloud DMA setup requirements',
        slug: 'marvel-rivals-cloud-dma-setup',
        image: '/images/blog/marvel-rivals-misc.webp',
        desc: 'Hardware checklist, portal pairing, and conservative profiles for Cloud DMA.',
        date: 'Nov 7, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'HWID spoofer workflow for Marvel Rivals players',
        slug: 'marvel-rivals-hwid-spoofer-guide',
        image: '/images/blog/marvel-rivals-world.webp',
        desc: 'When to spoof hardware and how to verify before returning to Marvel Rivals.',
        date: 'Nov 7, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Updates',
        title: 'Marvel Rivals patch day checklist for cheats',
        slug: 'marvel-rivals-patch-checklist',
        image: '/images/blog/marvel-rivals-visuals.webp',
        desc: 'Status banner, loader reload, and conservative profiles after every update.',
        date: 'Nov 6, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Scripts', title: 'Combos that adapt to your hero', desc: 'Auto Combo, Orbwalker, Smart Cast and Delay Setting in one scripts tab.' },
      { num: '02', label: 'Vision', title: 'Map hack that stays readable', desc: 'Filter by distance, team color, ward type and smoke alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Runes and rotates on lock', desc: 'Rune timers, enemy hints and minimap hack on a compact overlay.' },
      { num: '04', label: 'Heroes', title: 'Per-hero script profiles', desc: 'Save Invoker, Lion, PA and support scripts and swap with hotkeys.' },
      { num: '05', label: 'Bots', title: 'Farm & lane automation', desc: 'Auto Farm Bot, stack timer and courier manager for efficient farming.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Turbo and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Marvel Rivals profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Read the live banner on marvelcheats.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Marvel Rivals cheats, Cloud DMA, or HWID Spoofer—the product that matches your goal.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and Turbo presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Marvel Rivals plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and map hack ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or hero configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Marvel Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@marvelcheats.com',
        href: 'mailto:support@marvelcheats.com',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on marvelcheats.com or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam on Windows 10 or 11—and your Marvel Rivals client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Marvel Rivals cheats are online?',
        a: 'The live status banner is on marvelcheats.com and in the Discord #status channel. Always check after a Marvel Rivals update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Marvel Rivals.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Marvel Rivals cheats?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Marvel Rivals on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: `Marvel Rivals cheats, Cloud DMA, and HWID Spoofer live at marvelcheats.com${productBase} with feature lists and checkout via our partner.`,
      },
    ],
  },
  footer: {
    tagline: 'Marvel Rivals cheats — aimbot, ESP, and utilities for PC. marvelcheats.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}marvel-rivals/`, label: 'Marvel Rivals cheats', ariaLabel: 'Marvel Rivals cheats' },
      { href: productBase, label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Marvel Cheats',
      description:
        'Marvel Cheats provides Marvel Rivals cheat tiers, utility tools and PC support resources at marvelcheats.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Marvel Cheats is a PC-focused resource for Marvel Rivals players exploring scripts, map hack, zoom hack and Skin Changer workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate Marvel Rivals cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Marvel Rivals cheats, Cloud DMA, and HWID Spoofer utilities. Blog articles explain conservative configs, patch-day checks, and update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Windows version, and client build when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Marvel Cheats handles analytics, cookies, and contact data when you use marvelcheats.com.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on marvelcheats.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Marvel Cheats products and marvelcheats.com.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using marvelcheats.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Marvel Rivals cheats and utility tools (Cloud DMA, HWID Spoofer) delivered through an operator portal and loader for Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Marvel Rivals or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. marvelcheats.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Marvel Rivals.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Marvel Rivals on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Marvel Rivals build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Marvel Rivals can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Marvel Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at marvelcheats.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy Now',
    browseCheatsMobile: 'Buy Now',
    homeAria: 'Marvel Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Marvel Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
