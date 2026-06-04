// Content for the immediately.run showcase — real, forkable apps that run on
// the platform. Pure data (no React) so component files stay HMR-friendly.
//
// Every app here is a public GitHub repo. The Open / Tinker links are
// same-origin immediately.run routes, so they work wherever this app is served.

export interface ShowcaseApp {
  /** Display name. */
  name: string;
  /** One-line description. Sentence case, ends on a period. */
  blurb: string;
  /** A single hashtag category, e.g. "#tools". */
  tag: string;
  /** GitHub `owner/repo`. */
  repo: string;
  /** Git ref to open (a branch or a pinned commit). */
  ref: string;
  /** Entry file within the repo (varies: some apps keep App.tsx at the root). */
  entry: string;
  /** Featured tiles get extra visual weight + span. */
  featured?: boolean;
  /** Optional accent treatment for variety in the grid. */
  variant?: 'accent' | 'violet';
}

const APP_BASE = 'github';

/** `/present/...` route that runs the app full-screen. */
export const openUrl = (a: ShowcaseApp): string =>
  `/present/${APP_BASE}/${a.repo}/${a.ref}/files/${a.entry}`;

/** `/edit/...` route that opens the app in tinker mode (pop the hood). */
export const tinkerUrl = (a: ShowcaseApp): string =>
  `/edit/${APP_BASE}/${a.repo}/${a.ref}/files/${a.entry}`;

export const SHOWCASE: ShowcaseApp[] = [
  {
    name: 'Landing page',
    blurb:
      "The immediately.run landing page itself — yes, the homepage is an app you can fork.",
    tag: '#meta',
    repo: 'immediately-run/landing-page',
    ref: 'main',
    entry: 'src/App.tsx',
    featured: true,
    variant: 'accent',
  },
  {
    name: 'File Commander',
    blurb:
      'An orthodox file manager in the browser — dual-pane, keyboard-driven, function keys and all.',
    tag: '#tools',
    repo: 'immediately-run/file-commander',
    ref: 'main',
    entry: 'src/App.tsx',
    variant: 'violet',
  },
  {
    name: 'Markdown Notebook',
    blurb:
      'A live Markdown notebook — write on the left, see it rendered on the right.',
    tag: '#writing',
    repo: 'immediately-run/markdown-notebook',
    ref: 'main',
    entry: 'src/App.tsx',
  },
  {
    name: 'Example Blog',
    blurb:
      'A clean, responsive blog template with posts and categories — ready to make your own.',
    tag: '#content',
    repo: 'immediately-run/example-blog',
    ref: 'main',
    entry: 'App.tsx',
  },
];
