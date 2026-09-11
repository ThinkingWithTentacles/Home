import type { ImageMetadata } from 'astro';

import { parsePage } from '/src/utils/helper.ts';
import { parseArt } from '/src/utils/helper.ts';

/* Garden Sites */
const garden = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Garden/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const burnart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/BurnArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/DyeArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const wireart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/WireArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

/* ArtStudio Photos*/
const deletedPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/Studio//Deleted/*.{jpg,jpeg,png}',
  { eager: true }
);

const progressPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/Studio/Progress/*.{jpg,jpeg,png}',
  { eager: true }
);

const stockPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/Studio/Stock/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampWood Brands*/
const tameBurns= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/WickedBurns/TameBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

const tarotBurns = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/WickedBurns/TarotBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

const spicyBurns = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/WickedBurns/SpicyBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLeahter Brands */
const tieDyes = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/WickedDyes/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampParacord Brands*/
const broomWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/WickedWires/Broom/*.{jpg,jpeg,png}',
  { eager: true }
);
const bluntWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Wicked/WickedWires/Blunt/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLand Stock Photos */
export const wickedBurnArt = parsePage(burnart);
export const wickedDyeArt = parsePage(dyeart);
export const wickedWireArt = parsePage(wireart);
export const grove = parsePage(garden);

/* SwampLand Product Catalogs */
export const wickedBurns = {tame: parseArt(tameBurns), hot: parseArt(tarotBurns), spicy: parseArt(spicyBurns)};
//export const wickedWires = {broom: parseArt(broomWires), blunt: parseArt(bluntWires)};
//export const wickedDyes = {dyes: parseArt(tieDyes)};