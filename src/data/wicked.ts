import type { ImageMetadata } from 'astro';

import { parseResource } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import burnStuff from "/src/assets/Products/Wicked/WickedBurns/wickedBurnsStock.json"
import dyeStuff from "/src/assets/Products/Wicked/WickedDyes/wickedDyesStock.json"
import wireStuff from "/src/assets/Products/Wicked/WickedWires/wickedWiresStock.json"

/* ArtStudio Product Image Data*/
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

const dyeSweatshirts = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Sweatshirts/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeHoodies= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Hoodies/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyePants = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Pants/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeRompers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Rompers/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeTapestries= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Tapestries/*.{jpg,jpeg,png}',
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

/* WickedWires Brands*/
const broomWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedWires/Broom/*.{jpg,jpeg,png}',
  { eager: true }
);
const bluntWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedWires/Blunt/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLand Product Catalogs */
export const wickedDyes = {dresses: parseProducts(dyeDresses, dyeStuff), shirts: parseProducts(dyeShirts, dyeStuff), shorts: parseProducts(dyeShorts, dyeStuff), pants: parseProducts(dyePants, dyeStuff), sweatshirts: parseProducts(dyeSweatshirts, dyeStuff), rompers: parseProducts(dyeRompers, dyeStuff), hoodies: parseProducts(dyeHoodies, dyeStuff), kids: parseProducts(dyeKids, dyeStuff), tapes: parseProducts(dyeTapestries, dyeStuff)};
export const wickedBurns = {tame: parseProducts(tameBurns, burnStuff), tarot: parseProducts(tarotBurns, burnStuff), spicy: parseProducts(spicyBurns, burnStuff)};
export const wickedWires = {broom: parseProducts(broomWires, wireStuff), blunt: parseProducts(bluntWires, wireStuff)};

/* Wicked Studio */
export const studio = {deleted: parseResource(deletedPhotos), progress: parseResource(progressPhotos), stock: parseResource(stockPhotos)};