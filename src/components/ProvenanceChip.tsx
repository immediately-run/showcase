import type { Provenance } from '../data/showcase';

interface ProvenanceChipProps {
  provenance: Provenance;
  /** Saturated tiles invert the chip for contrast on the gradient. */
  onSaturated?: boolean;
}

// Trust signal, not decoration: first-party apps read "official"; community apps
// show their verified GitHub identity as "by @github:owner".
function ProvenanceChip({ provenance, onSaturated }: ProvenanceChipProps) {
  const cls = onSaturated ? 'prov prov-on-sat' : 'prov';
  if (provenance === 'official') {
    return <span className={`${cls} official`}>official</span>;
  }
  return <span className={`${cls} github`}>by @github:{provenance.github}</span>;
}

export default ProvenanceChip;
