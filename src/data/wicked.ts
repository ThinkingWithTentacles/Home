import type { ImageMetadata } from 'astro';

import { parseResource } from '/src/utils/helper.ts';
import { parseProducts } from '/src/utils/helper.ts';

import burnStuff from "/src/assets/Products/Wicked/WickedBurns/wickedBurnsStock.json"
import dyeStuff from "/src/assets/Products/Wicked/WickedDyes/wickedDyesStock.json"
import wireStuff from "/src/assets/Products/Wicked/WickedWires/wickedWiresStock.json"

/* ArtStudio Product Image Data*/
const deletedPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/Studio/Deleted/*.{jpg,jpeg,png}',
  { eager: true }
);

const progressPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/Studio/Progress/*.{jpg,jpeg,png}',
  { eager: true }
);

const stockPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/Studio/Stock/*.{jpg,jpeg,png}',
  { eager: true }
);

/* WickedDye Brands */
const dyeDresses = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Dresses/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeshirt = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/shirt/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeShorts = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Shorts/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeKids = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Kids/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeSweatshirt = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Sweatshirt/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeHoodies= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Hoodies/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyePants = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Pants/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeRompers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Rompers/*.{jpg,jpeg,png}',
  { eager: true }
);

const dyeTapestries= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedDyes/Tapestries/*.{jpg,jpeg,png}',
  { eager: true }
);

/* WickedBurn Brands*/
const tameBurns= import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedBurns/TameBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

const tarotBurns = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedBurns/TarotBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

const spicyBurns = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedBurns/SpicyBurns/*.{jpg,jpeg,png}',
  { eager: true }
);

/* WickedWires Brands*/
const broomWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedWires/Broom/*.{jpg,jpeg,png}',
  { eager: true }
);
const bluntWires = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/Products/Wicked/WickedWires/Blunt/*.{jpg,jpeg,png}',
  { eager: true }
);

/* SwampLand Product Catalogs */
export const wickedDyes = {dresses: parseProducts(dyeDresses, dyeStuff), shirt: parseProducts(dyeshirt, dyeStuff), shorts: parseProducts(dyeShorts, dyeStuff), pants: parseProducts(dyePants, dyeStuff), sweatshirt: parseProducts(dyeSweatshirt, dyeStuff), rompers: parseProducts(dyeRompers, dyeStuff), hoodies: parseProducts(dyeHoodies, dyeStuff), kids: parseProducts(dyeKids, dyeStuff), tapes: parseProducts(dyeTapestries, dyeStuff)};
export const wickedBurns = {tame: parseProducts(tameBurns, burnStuff), tarot: parseProducts(tarotBurns, burnStuff), spicy: parseProducts(spicyBurns, burnStuff)};
export const wickedWires = {broom: parseProducts(broomWires, wireStuff), blunt: parseProducts(bluntWires, wireStuff)};

/* Wicked Studio */
export const studio = {deleted: parseResource(deletedPhotos), progress: parseResource(progressPhotos), stock: parseResource(stockPhotos)}\




{
"tapestry.01": {
"ingredients": ["", "Dharma dye"],
"size": "landscape",
"style": "mandala",
"flavor": "tapestry",
"value": 50
},

"tapestry.02": {
"ingredients": ["", "Dharma dye"],
"size": "landscape",
"style": "mandala",
"flavor": "tapestry",
"value": 50
},

"tapestry.03": {
"ingredients": ["", "Dharma dye"],
"size": "square",
"style": "twin spiral",
"flavor": "tapestry",
"value": 50
},

"dress.01": {
"ingredients": ["", "Dharma dye"],
"size": "x-large",
"style": "galaxy void",
"flavor": "dress",
"value": 30
},

"dress.02": {
"ingredients": ["", "Dharma dye"],
"size": "large",
"style": "firestorm",
"flavor": "dress",
"value": 30
},

"shirt.01": {
"ingredients": ["", "Dharma dye"],
"size": "large",
"style": "fault line",
"flavor": "shirt",
"value": 30
},

"shirt.02": {
"ingredients": ["", "Dharma dye"],
"size": "medium",
"style": "galaxy void",
"flavor": "shirt",
"value": 30
},

"shirt.03": {
"ingredients": ["", "Dharma dye"],
"size": "small",
"style": "galaxy void",
"flavor": "shirt",
"value": 30
},

"shirt.04": {
"ingredients": ["", "Dharma dye"],
"size": "small",
"style": "spectrum",
"flavor": "shirt",
"value": 30
},

"shirt.05": {
"ingredients": ["", "Dharma dye"],
"size": "x-large",
"style": "worm hole",
"flavor": "shirt",
"value": 30
},

"shorts.01": {
"ingredients": ["", "Dharma dye"],
"size": "x-large",
"style": "galaxy void",
"flavor": "shorts",
"value": 20
},

"shorts.02": {
"ingredients": ["", "Dharma dye"],
"size": "size-7",
"style": "rainbow spectrum",
"flavor": "shorts",
"value": 20
},

"kids.01": {
"ingredients": ["", "Dharma dye"],
"size": "small",
"style": "mandala",
"flavor": "kids",
"value": 15
},

"kids.02": {
"ingredients": ["", "Dharma dye"],
"size": "medium",
"style": "contrast splash",
"flavor": "kids",
"value": 15
},

"kids.03": {
"ingredients": ["", "Dharma dye"],
"size": "medium",
"style": "heart",
"flavor": "kids",
"value": 15
},

"kids.04": {
"ingredients": ["", "Dharma dye"],
"size": "medium",
"style": "spiral",
"flavor": "kids",
"value": 15
},

"kids.05": {
"ingredients": ["", "Dharma dye"],
"size": "medium",
"style": "contrast splash",
"flavor": "kids",
"value": 15
},

"kids.06": {
"ingredients": ["", "Dharma dye"],
"size": "x-small",
"style": "firestorm",
"flavor": "kids",
"value": 15
},

"kids.07": {
"ingredients": ["", "Dharma dye"],
"size": "x-large",
"style": "contrast splash",
"flavor": "kids",
"value": 15
},

"kids.08": {
"ingredients": ["", "Dharma dye"],
"size": "medium",
"style": "mandala",
"flavor": "kids",
"value": 15
},

"sweatshirt.03": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "goddess abs",
"flavor": "sweatshirt",
"size": "large",
"value": 40
},

"sweatshirt.02": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "blossom",
"flavor": "sweatshirt",
"size": "medium",
"value": 40
},

"sweatshirt.01": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "embroidered roses",
"flavor": "sweatshirt",
"size": "x-large",
"value": 40
},

"romper.01": {
"ingredients": ["", "Dharma dye"],
"subject": "halter-top",
"style": "goddess abs",
"flavor": "romper",
"size": "medium",
"value": 40
},

"pants.01": {
"ingredients": ["", "Dharma dye"],
  "subject": "pocketed",
  "style": "galaxy void",
  "flavor": "pants",
  "size": "x-large",
  "value": 30
},

"dress.03": {
"ingredients": ["", "Dharma dye"],
"subject": "kimono",
"style": "fault line",
"flavor": "dress",
"size": "torrid 4",
"value": 30
},

"dress.04": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "geode",
"flavor": "pockedted dress",
"size": "medium",
"value": 40
},

"dress.05": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "goddess abs",
"flavor": "dress",
"size": "large",
"value": 30
},

"hoodie.01": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "worm hole",
"flavor": "hoodie",
"size": "small",
"value": 40
},

"hoodie.02": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "",
"flavor": "hoodie",
"size": "18'' across",
"value": 30
},

"hoodie.03": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "galaxy void",
"flavor": "hoodie",
"size": "large",
"value": 40
},

"hoodie.04": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "galaxy void",
"flavor": "hoodie",
"size": "XXL",
"value": 40
},

"hoodie.05": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "sprial",
"flavor": "hoodie",
"size": "medium",
"value": 40
},

"kids.09": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "goddess abs",
"flavor": "dress",
"size": "5T",
"value": 20
},

"kids.10": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "galaxy void",
"flavor": "kids hoddie",
"size": "large",
"value": 25
},

"shirt.06": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "star fish",
"flavor": "crop top",
"size": "small",
"value": 20
},

"shirt.07": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "sprial",
"flavor": "shirt",
"size": "small",
"value": 20
},

"shirt.08": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "galaxy void",
"flavor": "shirt",
"size": "17.5'' across",
"value": 25
},

"shirt.09": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "galaxy void",
"flavor": "shirt",
"size": "large",
"value": 25
},

"shirt.10": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "spectrum",
"flavor": "shirt",
"size": "x-small",
"value": 25
},

"shirt.11": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "galaxy",
"flavor": "blouse",
"size": "medium",
"value": 25
},

"shirt.12": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "firestorm",
"flavor": "blouse",
"size": "torrid 3",
"value": 25
},

"shirt.13": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "spectrum",
"flavor": "blouse",
"size": "medium",
"value": 25
},

"shirt.14": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "star fish",
"flavor": "blouse",
"size": "medium",
"value": 30
},

"shirt.15": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "fault line",
"flavor": "crop top",
"size": "large",
"value": 25
},

"shirt.16": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "firestorm",
"flavor": "blouse",
"size": "18'' across",
"value": 25
},

"shirt.17": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "lunar eclipse",
"flavor": "shirt",
"size": "large",
"value": 25
},

"shirt.18": {
"ingredients": ["", "Dharma dye"],
"subject": "3 quarter-sleeve",
"style": "galaxy",
"flavor": "shirt",
"size": "chico's 2",
"value": 25
},

"shirt.19": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "firestorm",
"flavor": "shirt",
"size": "large",
"value": 25
},

"shirt.20": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "goddess abs",
"flavor": "shirt",
"size": "large",
"value": 30
},

"shirt.21": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "goddess wings",
"flavor": "shirt",
"size": "large",
"value": 30
},

"shirt.22": {
"ingredients": ["", "Dharma dye"],
"subject": "3 quarter-sleeve",
"style": "galaxy",
"flavor": "shirt",
"size": "medium",
"value": 30
},

"shirt.23": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "galaxy",
"flavor": "shirt",
"size": "large",
"value": 30
},

"shirt.24": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "galaxy",
"flavor": "shirt",
"size": "large",
"value": 30
},

"shirt.25": {
"ingredients": ["", "Dharma dye"],
"subject": "sleeveless",
"style": "galaxy",
"flavor": "shirt",
"size": "x-small",
"value": 20
}, 

"shirt.26": {
"ingredients": ["", "Dharma dye"],
"subject": "short-sleeve",
"style": "galaxy",
"flavor": "shirt",
"size": "medium",
"value": 30
},

"shirt.27": {
"ingredients": ["", "Dharma dye"],
"subject": "long-sleeve",
"style": "matrix",
"flavor": "shirt",
"size": "18'' across",
"value": 30
}

}