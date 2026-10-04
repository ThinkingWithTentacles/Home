import type { ImageMetadata } from 'astro';

import { parseResource } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import creations from "/src/assets/Vault/archive.json"

/* Vault Page Resourses */
const vaultfacade = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Vault/*.{jpg,jpeg,png}',
  { eager: true }
);

/* Vault Photo Dumps */

const wheelin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Creations/Swamp/*.{jpg,jpeg,png}',
  { eager: true }
);

const castin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Creations/Wicked/*.{jpg,jpeg,png}',
  { eager: true }
);

const dealin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Pushed/*.{jpg,jpeg,png}',
  { eager: true }
);

const schemin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Prints/*.{jpg,jpeg,png}',
  { eager: true }
);

/* Vault Stock Photos */
export const vault = parseResource(vaultfacade);

/* Vault Archives */
export const creations = {swamp: parseProducts(wheelin, creations), wicked: parseProducts(castin, creations)};
export const pushed = parseProducts(dealin, creations);