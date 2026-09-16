import type { ImageMetadata } from 'astro';

import { parseResources } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import creations from "/src/assets/Vault/archive.json"

/* Vault Site */
const vaultfacade = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Vault/**/*.{jpg,jpeg,png}',
  { eager: true }
);



const wheelin = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Vault/Creations/*.{jpg,jpeg,png}',
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
export const vault = parseResources(vaultfacade);

/* Vault Archives */
export const archive = {shelf: parseProducts(wheelin, creations), pushed: parseProducts(dealin, creations), prints: parseProducts(schemin, creations)};

{console.log(archive)}