import type { ImageMetadata } from 'astro';

import { parseResource } from '/src/utils/helper.ts';

/* Wallpapers */
const landingGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Wallpapers/Landing/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

const thinkingGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Wallpapers/Thinking/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

const galaxyGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Wallpapers/Galaxy/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

const woodGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Wallpapers/Wood/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

/* Icons */
const socialGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Icons/Social/*.{jpeg,jpg,png,gif,webp}', { 
  eager: true 
});

const sampleGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Icons/Wood/*.{jpg,jpeg,png}',
  { eager: true }
);

/* Page Assets */
const swampGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Swamp/*.{jpg,jpeg,png}',
  { eager: true }
);

const gardenGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Garden/*.{jpg,jpeg,png}',
  { eager: true }
);

const homeGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Home/*.{jpg,jpeg,png}',
  { eager: true }
);

const randomGlob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Resources/Pages/Random/*.{jpg,jpeg,png}',
  { eager: true }
);

export const wallpapers = {"galaxy": parseResource(galaxyGlob), "landing": parseResource(landingGlob), "thinking": parseResource(thinkingGlob), "wood": parseResource(woodGlob)};
export const icons = {"social": parseResource(socialGlob), "sample": parseResource(sampleGlob)};
export const pages = {"swamp":parseResource(swampGlob), "wicked":parseResource(gardenGlob), "home":parseResource(homeGlob), "random":parseResource(randomGlob)};