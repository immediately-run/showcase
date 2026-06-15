// A single showcase tile: stripe/preview, corner category, name, provenance
// chip, blurb, and the Open/Fork pair. One component per file, default export.
import type { ShowcaseApp } from '../data/showcase';
import { presentUrl, editUrl } from '../lib/routes';
import ProvenanceChip from './ProvenanceChip';

function Card({ app }: { app: ShowcaseApp }) {
  const saturated = Boolean(app.variant);
  const classes = ['tile', `tile--${app.span}`, app.variant ? `tile--${app.variant}` : '']
    .filter(Boolean)
    .join(' ');
  const cornerLabel = app.featured ? `${app.categoryLabel} · featured` : app.categoryLabel;

  return (
    <article className={classes}>
      <div className="tile__pic">
        <span className="tile__cat">{cornerLabel}</span>
      </div>
      <div className="tile__foot">
        <h3 className="tile__name">{app.name}</h3>
        <ProvenanceChip provenance={app.provenance} onSaturated={saturated} />
        <p className="tile__blurb">{app.blurb}</p>
        <div className="tile__actions">
          <a className="btn btn--open" href={presentUrl(app.repo, app.entry)}>
            Open
          </a>
          <a className="btn btn--fork" href={editUrl(app.repo, app.entry)}>
            Fork
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
