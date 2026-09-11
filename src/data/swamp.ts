import type { ImageMetadata } from 'astro';

import { parsePage } from '/src/utils/helper.ts';
import { parseCraft } from '/src/utils/helper.ts';

/* Swamp Site */
const swamp = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Swamp/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const woodcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Woodcraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const leathercraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Leathercraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const glasscraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets//Site/Glasscraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const paracordcraft = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Paracordcraft/**/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampShop Photos */
const deletedPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/Shop/Deleted/*.{jpg,jpeg,png}',
  { eager: true }
);

const progressPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/Shop/Progress/*.{jpg,jpeg,png}',
  { eager: true }
);

const stockPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/Shop/Stock/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampWood Brands*/
const tameWood = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampWood/TameWood/*.{jpg,jpeg,png}',
  { eager: true }
);

const hotWood = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampWood/HotWood/*.{jpg,jpeg,png}',
  { eager: true }
);

const spicyWood = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampWood/SpicyWood/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLeahter Brands */
const unfairCoins = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampLeather/UnfairCoins/*.{jpg,jpeg,png}',
  { eager: true }
);

const anchorRings = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampLeather/AnchorRings/*.{jpg,jpeg,png}',
  { eager: true }
);

const bookKeepers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampLeather/BookKeepers/*.{jpg,jpeg,png}',
  { eager: true }
);

const feralToys = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampLeather/FeralToys/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampGlass Brands*/
const birdsEye = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampGlass/BirdsEye/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampParacord Brands*/
const funnyMonkey = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampParacord/FunnyMonkey/*.{jpg,jpeg,png}',
  { eager: true }
);
const spicyMonkey = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Swamp/SwampParacord/SpicyMonkey/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLand Stock Photos */
export const grove = parsePage(swamp);
export const swampWoodcraft = parsePage(woodcraft);
export const swampLeathercraft = parsePage(leathercraft);
export const swampGlasscraft = parsePage(glasscraft);
export const swampParacordcraft = parsePage(paracordcraft);

/* SwampLand Product Catalogs */
export const swampWood = {tame: parseCraft(tameWood), hot: parseCraft(hotWood), spicy: parseCraft(spicyWood)};
export const swampLeather = {coin: parseCraft(unfairCoins), anchor: parseCraft(anchorRings), keeper: parseCraft(bookKeepers), feral: parseCraft(feralToys)};
export const swampGlass = {birds: parseCraft(birdsEye)};
export const swampParacord= {funny: parseCraft(funnyMonkey), spicy: parseCraft(spicyMonkey)};