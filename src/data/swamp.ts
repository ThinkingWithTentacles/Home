import type { ImageMetadata } from 'astro';

import { parseResources } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import swampWoodStock from "/src/assets/Products/Swamp/SwampWood/swampWoodStock.json"

/* Swamp Site */
const swampcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Swamp/Zone/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const woodcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Swamp/Woodcraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const leathercraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Swamp/Leathercraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const glasscraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Swamp/Glasscraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const paracordcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Swamp/Paracordcraft/**/*.{jpg,jpeg,png}',
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
export const swamp = parseResources(swampcraft);

/* SwampLand Page Images */
export const swampWoodcraft = parseResources(woodcraft);
//export const swampLeathercraft = parseResource(leathercraft);
//export const swampGlasscraft = parseResource(glasscraft);
//export const swampParacordcraft = parseResource(paracordcraft);

/* SwampLand Product Catalogs */
export const swampWood = {tame: parseProducts(tameWood, swampWoodStock), hot: parseProducts(hotWood, swampWoodStock), spicy: parseProducts(spicyWood, swampWoodStock)};
//export const swampLeather = {coin: parseProducts(unfairCoins), anchor: parseProducts(anchorRings), keeper: parseProducts(bookKeepers), feral: parseProducts(feralToys)};
//export const swampGlass = {birds: parseProducts(birdsEye)};
//export const swampParacord= {funny: parseProducts(funnyMonkey), spicy: parseProducts(spicyMonkey)};

/* Swamp Shop */
export const shop = {deleted: parseResources(deletedPhotos), progress: parseResources(progressPhotos), stock: parseResources(stockPhotos)}