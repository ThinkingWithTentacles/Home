import type { ImageMetadata } from 'astro';

import { parseResources } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

/* DeadEnd Sites */
const deadends = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/DeadEnds/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const reDuce = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/DeadEnd/FilteredArt/*.{jpg,jpeg,png}',
  { eager: true }
);

const reUse = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/DeadEnd/UseMe/*.{jpg,jpeg,png}',
  { eager: true }
);

const reCycle = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/DeadEnd/MeepMorps/*.{jpg,jpeg,png}',
  { eager: true }
);

/* DeadEnd Stock Photos */
export const deadend = parseResources(deadends);

/* DeadEnd Loose Ends */
export const ends = {filtered: parseProducts(reDuce), useful: parseProducts(reUse), meepmorps: parseProducts(reCycle)}