export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: post.upvotes,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

export const forumPosts: ForumPost[] = [
  guideDiscussion({
    slug: 'marvel-rivals-aimbot-fov-baseline',
    title: 'What FOV should I start with for Marvel Rivals aimbot?',
    upvotes: 62,
    excerpt: 'A practical starting FOV and smoothing pair for 1080p and 1440p.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Marvel Rivals aimbot setup',
    sourcePath: '/blog/marvel-rivals-aimbot-setup/',
    answer:
      'Begin near the portal conservative preset, then widen FOV only if you consistently lose flying targets. Gradual aim and humanizer should stay on for first sessions.',
    detail: 'Dynamic FOV helps in brawl maps but can feel unstable until you lock a max distance.',
    tip: 'Test in practice range before enabling lock mode in competitive.',
  }),
  guideDiscussion({
    slug: 'marvel-rivals-esp-cleanup',
    title: 'How do I keep hero ESP readable in team fights?',
    upvotes: 51,
    excerpt: 'Reduce clutter while keeping cooldown and health information.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Marvel Rivals hero ESP guide',
    sourcePath: '/blog/marvel-rivals-esp-wallhack-guide/',
    answer: 'Disable glow and tracers until boxes, health bars, and ultimate bars are positioned cleanly.',
    detail: 'Object ESP for packs and deployables can use a separate color profile from hero ESP.',
    tip: 'Turn on picks/bans overlay only if you review draft data between rounds.',
  }),
  guideDiscussion({
    slug: 'marvel-rivals-cloud-dma-first-steps',
    title: 'First steps for Cloud DMA with Marvel Rivals?',
    upvotes: 44,
    excerpt: 'Compatibility scan, firmware, and pairing order.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Cloud DMA setup',
    sourcePath: '/blog/marvel-rivals-cloud-dma-setup/',
    answer: 'Run the portal compatibility scan before purchase delivery. Flash firmware only from the operator channel.',
    detail: 'Pair Marvel Rivals modules after verification—do not stack old profiles from other games.',
    tip: 'Cloud DMA product page links from the main products hub.',
  }),
  {
    slug: 'marvel-rivals-patch-loader-reload',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Do I need to reload the loader after every Marvel Rivals patch?',
    excerpt: 'Patch-day habit: status, loader version, preset reload.',
    author: 'patch_ops',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 38,
    flair: 'Patch note',
    body: [
      'Yes—treat every Marvel Rivals update as a reason to reload the loader build and portal presets.',
      'The patch checklist blog post lists the exact order: status banner, loader, presets, then queue.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: '6 hours ago',
        score: 12,
        body: 'See /blog/marvel-rivals-patch-checklist/ for the full sequence.',
      },
    ],
    sourceTitle: 'Patch day checklist',
    sourcePath: '/blog/marvel-rivals-patch-checklist/',
  },
  {
    slug: 'marvel-rivals-combo-creator-tips',
    category: 'Community',
    categoryTone: 'green',
    title: 'Combo creator: stop on target lost?',
    excerpt: 'Why stop-on-target-lost saves broken sequences.',
    author: 'combo_fan',
    age: '3 days ago',
    commentsCount: 1,
    upvotes: 29,
    body: [
      'Leave stop-on-target-lost enabled until your sequence is stable. It prevents wasted cooldowns when a duelist blinks away.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: '2 days ago',
        score: 8,
        body: 'The combo creator guide covers step types and loop blocks in detail.',
      },
    ],
    sourceTitle: 'Combo creator basics',
    sourcePath: '/blog/marvel-rivals-combo-creator/',
  },
  {
    slug: 'marvel-rivals-hwid-when-to-use',
    category: 'General',
    categoryTone: 'purple',
    title: 'When is HWID spoofer the right fix?',
    excerpt: 'Hardware flag vs account ban scenarios.',
    author: 'support_hint',
    age: '4 days ago',
    commentsCount: 1,
    upvotes: 33,
    body: [
      'HWID tools help when fresh accounts fail on one machine but work elsewhere. They do not replace account recovery for suspension cases.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: '3 days ago',
        score: 6,
        body: 'Read the HWID workflow guide before running spoof tools.',
      },
    ],
    sourceTitle: 'HWID spoofer workflow',
    sourcePath: '/blog/marvel-rivals-hwid-spoofer-guide/',
  },
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function getAllForumSlugs() {
  return forumPosts.map((p) => p.slug);
}
