/* ============================================================
   HERO STATS
   'from' is the starting number for the count-up animation.
   The CodinGame stat counts DOWN (100 → 2) since lower reads
   better for a percentile ranking.
   ============================================================ */
export const HERO_STATS = [
  { from: 0, target: 8, format: n => `${n}+`, label: 'years in games' },
  { from: 0, target: 40, format: n => `${n}+`, label: 'games &amp; tools built' },
  { from: 0, target: 7, format: n => `${n}`, label: 'studios &amp; companies' },
  { from: 100, target: 2, format: n => `Top ${n}%`, label: 'globally on CodinGame' },
];
