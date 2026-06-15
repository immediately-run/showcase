// Same-origin platform routes. Every Open / Fork CTA is one click into the
// runner/editor — no new tab, no context switch.

const OWNER = 'immediately-run';

/** "Open / Run" — opens the app in the runner. */
export function presentUrl(repo: string, entry = 'src/App.tsx', branch = 'main'): string {
  return `/present/github/${OWNER}/${repo}/${branch}/files/${entry}`;
}

/** "Fork / Tinker" — opens the app in the editor (copy-on-write). */
export function editUrl(repo: string, entry = 'src/App.tsx', branch = 'main'): string {
  return `/edit/github/${OWNER}/${repo}/${branch}/files/${entry}`;
}
