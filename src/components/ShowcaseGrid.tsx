// The curated grid plus its one-row category filter. Owns the active-category
// state; renders the chip row, the asymmetric grid, and an intentional empty
// state when a filter matches nothing.
import { useMemo, useState } from 'react';
import { SHOWCASE } from '../data/showcase';
import Card from './Card';
import CategoryChips from './CategoryChips';

function ShowcaseGrid() {
  const [active, setActive] = useState('all');

  const apps = useMemo(
    () => (active === 'all' ? SHOWCASE : SHOWCASE.filter((a) => a.category === active)),
    [active],
  );

  return (
    <>
      <CategoryChips active={active} onChange={setActive} />

      {apps.length === 0 ? (
        <div className="empty">
          <p className="empty__title">No apps in this category yet.</p>
          <a className="empty__link" href="/apps">
            Browse all apps →
          </a>
        </div>
      ) : (
        <section className="grid" aria-label="Apps built with immediately.run">
          {apps.map((app) => (
            <Card key={app.repo} app={app} />
          ))}
        </section>
      )}
    </>
  );
}

export default ShowcaseGrid;
