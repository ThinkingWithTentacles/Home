import type { ImageMetadata } from 'astro';

import { parsePage } from '/src/utils/helper.ts';
import { parseCraft } from '/src/utils/helper.ts';

import swampWoodStock from "/src/assets/Products/Swamp/SwampWood/swampWoodStock.json"

/* Swamp Site */
const swampcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Swamp/Zone/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const woodcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Swamp/Woodcraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const leathercraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Swamp/Leathercraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const glasscraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Swamp/Glasscraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const paracordcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Pages/Swamp/Paracordcraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampShop Photos */
const deletedPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/Shop/Deleted/*.{jpg,jpeg,png}',
  { eager: true }
);

const progressPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/Shop/Progress/*.{jpg,jpeg,png}',
  { eager: true }
);

const stockPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/Shop/Stock/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampWood Brands*/
const tameWood = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampWood/TameWood/*.{jpg,jpeg,png}',
  { eager: true }
);

const hotWood = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampWood/HotWood/*.{jpg,jpeg,png}',
  { eager: true }
);

const spicyWood = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampWood/SpicyWood/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLeahter Brands */
const unfairCoins = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampLeather/UnfairCoins/*.{jpg,jpeg,png}',
  { eager: true }
);

const anchorRings = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampLeather/AnchorRings/*.{jpg,jpeg,png}',
  { eager: true }
);

const bookKeepers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampLeather/BookKeepers/*.{jpg,jpeg,png}',
  { eager: true }
);

const feralToys = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampLeather/FeralToys/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampGlass Brands*/
const birdsEye = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampGlass/BirdsEye/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampParacord Brands*/
const funnyMonkey = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampParacord/FunnyMonkey/*.{jpg,jpeg,png}',
  { eager: true }
);
const spicyMonkey = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Swamp/SwampParacord/SpicyMonkey/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLand Stock Photos */
export const swamp = parsePage(swampcraft);
export const swampWoodcraft = parsePage(woodcraft);
//export const swampLeathercraft = parsePage(leathercraft);
//export const swampGlasscraft = parsePage(glasscraft);
//export const swampParacordcraft = parsePage(paracordcraft);

/* SwampLand Product Catalogs */
export const swampWood = {tame: parseCraft(tameWood, swampWoodStock), hot: parseCraft(hotWood, swampWoodStock), spicy: parseCraft(spicyWood, swampWoodStock)};
//export const swampLeather = {coin: parseCraft(unfairCoins), anchor: parseCraft(anchorRings), keeper: parseCraft(bookKeepers), feral: parseCraft(feralToys)};
//export const swampGlass = {birds: parseCraft(birdsEye)};
//export const swampParacord= {funny: parseCraft(funnyMonkey), spicy: parseCraft(spicyMonkey)};