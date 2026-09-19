import type { ImageMetadata } from 'astro';

import { parseResources } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import wickedBurnsStock from "/src/assets/Products/Wicked/WickedBurns/wickedBurnsStock.json"
import wickedDyesStock from "/src/assets/Products/Wicked/WickedDyes/wickedDyesStock.json"
import wickedWiresStock from "/src/assets/Products/Wicked/WickedWires/wickedWiresStock.json"

/* Garden Page Resources */
const gardenart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Garden/Zone/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const burnart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Garden/BurnArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Garden/DyeArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const wireart = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Garden/WireArt/**/*.{jpg,jpeg,png}',
  { eager: true }
);

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

/* SwampLand Stock Photos */
export const garden = parseResources(gardenart);
export const wickedDyeArt = parseResources(dyeart);
export const wickedBurnArt = parseResources(burnart);
export const wickedWireArt = parseResources(wireart);

/* SwampLand Product Catalogs */
export const wickedDyes = {dresses: parseProducts(dyeDresses, wickedDyesStock), shirts: parseProducts(dyeShirts, wickedDyesStock), shorts: parseProducts(dyeShorts, wickedDyesStock), kids: parseProducts(dyeKids, wickedDyesStock), tapes: parseProducts(dyeTapestries, wickedDyesStock)};
export const wickedBurns = {tame: parseProducts(tameBurns, wickedBurnsStock), tarot: parseProducts(tarotBurns, wickedBurnsStock), spicy: parseProducts(spicyBurns, wickedBurnsStock)};
export const wickedWires = {broom: parseProducts(broomWires, wickedWiresStock), blunt: parseProducts(bluntWires, wickedWiresStock)};