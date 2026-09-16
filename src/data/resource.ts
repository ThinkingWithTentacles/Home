import type { ImageMetadata } from 'astro';

import { parseResources } from '/src/utils/helper.ts';

const wallpaperGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Wallpapers/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

const iconGlob = import.meta.glob<{ default: ImageMetadata }>
  ('/src/assets/Resources/Icons/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

export const wallpapers = parseResources(wallpaperGlob);
export const icons = parseResources(iconGlob);