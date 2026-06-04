// The grid of showcase tiles. Pulls the typed app list and renders a Card each.
import { SHOWCASE } from '../data/showcase';
import Card from './Card';

function ShowcaseGrid() {
  return (
    <section className="grid" aria-label="Apps built with immediately.run">
      {SHOWCASE.map((app) => (
        <Card key={app.repo} app={app} />
      ))}
    </section>
  );
}

export default ShowcaseGrid;
