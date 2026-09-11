import type { ImageMetadata } from 'astro';

import { parsePage } from '/src/utils/helper.ts';
import { parseCraft } from '/src/utils/helper.ts';

/* DeadEnd Sites */
const deadends = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/DeadEnds/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const reDuce = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/DeadEnd/FilteredArt/*.{jpg,jpeg,png}',
  { eager: true }
);

const reUse = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/DeadEnd/MeepMorps/*.{jpg,jpeg,png}',
  { eager: true }
);

const recycle = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/DeadEnd/UseMe/*.{jpg,jpeg,png}',
  { eager: true }
);

/* DeadEnd Stock Photos */
export const grove = parsePage(deadends);

/* DeadEnd Loose Ends */
export const collectedTrash = {tame: parseCraft(reDuce)};
export const artisticTrash = {coin: parseCraft(reUse)};
export const usefulTrash = {birds: parseCraft(reCycle)};