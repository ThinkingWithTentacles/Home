import type { ImageMetadata } from 'astro';

import { parsePage } from '/src/utils/helper.ts';
import { parseArt } from '/src/utils/helper.ts';
import { parseCraft } from '/src/utils/helper.ts';

import wickedBurnsStock from "/src/assets/Products/Wicked/WickedBurns/wickedBurnsStock.json"
import wickedDyesStock from "/src/assets/Products/Wicked/WickedDyes/wickedDyesStock.json"
import wickedWiresStock from "/src/assets/Products/Wicked/WickedWires/wickedWiresStock.json"

/* Garden Sites */
const gardenart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Garden/Zone/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const burnart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Garden/BurnArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Garden/DyeArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const wireart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Garden/WireArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

/* ArtStudio Photos*/
const deletedPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/Studio/Deleted/*.{jpg,jpeg,png}',
  { eager: true }
);

const progressPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/Studio/Progress/*.{jpg,jpeg,png}',
  { eager: true }
);

const stockPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/Studio/Stock/*.{jpg,jpeg,png}',
  { eager: true }
);

/* WickedBurn Brands*/
const tameBurns= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedBurns/TameBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

const tarotBurns = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedBurns/TarotBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

const spicyBurns = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedBurns/SpicyBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

/* WickedDye Brands */
const dyeDresses = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Dresses/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeShirts = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Shirts/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeShorts = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Shorts/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeKids = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Kids/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeTapestries= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Tapestries/*.{jpg,jpeg,png}',
  { eager: true }
);

/* WickedWires Brands*/
const broomWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedWires/Broom/*.{jpg,jpeg,png}',
  { eager: true }
);
const bluntWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedWires/Blunt/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLand Stock Photos */
export const garden = parsePage(gardenart);
export const wickedBurnArt = parsePage(burnart);
export const wickedDyeArt = parsePage(dyeart);
export const wickedWireArt = parsePage(wireart);

/* SwampLand Product Catalogs */
export const wickedBurns = {tame: parseCraft(tameBurns, wickedBurnsStock), tarot: parseCraft(tarotBurns, wickedBurnsStock), spicy: parseCraft(spicyBurns, wickedBurnsStock)};
export const wickedWires = {broom: parseCraft(broomWires, wickedWiresStock), blunt: parseCraft(bluntWires, wickedWiresStock)};
export const wickedDyes = {dresses: parseArt(dyeDresses), shirts: parseArt(dyeShirts), shorts: parseArt(dyeShorts), kids: parseArt(dyeKids), tapes: parseArt(dyeTapestries)};