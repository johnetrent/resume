const tablet = '768';
const tabletLandscape = '1024';

export default {
  '<tablet': `@media (max-width: ${tablet - 1}px)`,
  '≥tablet': `@media (min-width: ${tablet}px)`,
  '≥tabletLandscape': `@media (min-width: ${tabletLandscape}px)`,
};
