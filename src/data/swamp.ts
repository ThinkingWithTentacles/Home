import type { ImageMetadata } from 'astro';

import { parseResource } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import swampWoodStock from "/src/assets/Products/Swamp/SwampWood/swampWoodStock.json"

/* SwampShop Product Image Data */
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

/* SwampLand Product Catalogs */
export const swampWood = {tame: parseProducts(tameWood, swampWoodStock), hot: parseProducts(hotWood, swampWoodStock), spicy: parseProducts(spicyWood, swampWoodStock)};
//export const swampLeather = {coin: parseProducts(unfairCoins), anchor: parseProducts(anchorRings), keeper: parseProducts(bookKeepers), feral: parseProducts(feralToys)};
//export const swampParacord= {funny: parseProducts(funnyMonkey), spicy: parseProducts(spicyMonkey)};
//export const swampGlass = {birds: parseProducts(birdsEye)};

/* Swamp Shop */
export const shop = {deleted: parseResource(deletedPhotos), progress: parseResource(progressPhotos), stock: parseResource(stockPhotos)}