import type { ImageMetadata } from 'astro';

import { parseWallpaper } from '/src/utils/helper.ts';

const wallpaperGlob = import.meta.glob<{ default: ImageMetadata }>('/src/assets/Wallpaper/*.{jpeg,jpg,png,gif}', { 
  eager: true 
});

export const wallpapers = parseWallpaper(wallpaperGlob);