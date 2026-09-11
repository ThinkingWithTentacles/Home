import type { ImageMetadata } from 'astro';

import { parsePage } from '/src/utils/helper.ts';
import { parseCraft } from '/src/utils/helper.ts';

/* Vault Site */
const vault = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Vault/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const wheelin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Creations/*.{jpg,jpeg,png}',
  { eager: true }
);

const dealin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Site/Vault/Creations/*.{jpg,jpeg,png}',
  { eager: true }
);

const schemin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Creations/*.{jpg,jpeg,png}',
  { eager: true }
);

/* Vault Stock Photos */
export const grove = parsePage(vault);

/* Vault Archives */
export const creations = {tame: parseCraft(wheelin)};
export const pushed = {coin: parseCraft(deelin)};
export const prints = {birds: parseCraft(schemin)};