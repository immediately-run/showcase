import { CATEGORIES } from '../data/showcase';

interface CategoryChipsProps {
  active: string;
  onChange: (slug: string) => void;
}

// Slim, single-row filter within the curated set. Heavy filtering/sorting lives
// in the directory; this is just the quick cut.
function CategoryChips({ active, onChange }: CategoryChipsProps) {
  const chips = [{ slug: 'all', label: 'All' }, ...CATEGORIES];
  return (
    <div className="chips" role="group" aria-label="Filter by category">
      {chips.map((c) => (
        <button
          key={c.slug}
          type="button"
          className={`chip${active === c.slug ? ' chip--active' : ''}`}
          aria-pressed={active === c.slug}
          onClick={() => onChange(c.slug)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryChips;
