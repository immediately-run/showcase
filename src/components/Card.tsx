// A single showcase tile: app name, blurb, and the two things that matter —
// Open (run it) and Tinker (pop the hood). One component per file, default
// export, per the immediately.run authoring rules.
import { openUrl, tinkerUrl, type ShowcaseApp } from '../data/showcase';

function Card({ app }: { app: ShowcaseApp }) {
  const classes = [
    'card',
    app.featured ? 'card--featured' : '',
    app.variant ? `card--${app.variant}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes}>
      <div className="card__top">
        <span className="card__tag">{app.tag}</span>
        {app.featured && <span className="card__badge">featured</span>}
      </div>

      <h3 className="card__name">{app.name}</h3>
      <p className="card__blurb">{app.blurb}</p>

      <div className="card__repo">{app.repo}</div>

      <div className="card__actions">
        <a className="btn btn--primary" href={openUrl(app)}>
          Open <span aria-hidden="true">→</span>
        </a>
        <a className="btn btn--ghost" href={tinkerUrl(app)}>
          Tinker
        </a>
      </div>
    </article>
  );
}

export default Card;
