export const swamp = "/ThinkingWithTentacles";
export const flower = "/WickedGabi";
export const deadEnd = "/Dead End";
export const landing = "/landing";

// Swamp Crafts
export const swampGlass = `${swamp}/Glasscraft/Glasscraft`;
export const swampLeather = `${swamp}/Leathercraft/Leathercraft`;
export const swampParacord = `${swamp}/Paracordcraft/Paracordcraft`;
export const swampWood = `${swamp}/Woodcraft`;
export const swampWorkShop = `${swamp}/Workshop`;

// Woodcraft Subcategories
export const mildWood = `${swampWood}/Mild Woodcraft`;
export const hotWood = `${swampWood}/Hot Woodcraft`;
export const spicyWood = `${swampWood}/Spicy Woodcraft`;

// Swamp Workshop & Subcategories
export const swampShop = `${swampWorkShop}/TheShop`;
export const swampCreature = `${swampWorkShop}/AboutMe`;
export const swampFixations = `${swampWorkShop}/HyperFixation`;

// Dead End Paths
export const rrr = `${deadEnd}/RRR`;
export const reDuce = `${rrr}/PleaseReduce`;
export const reUse = `${rrr}/NeedsUse`;
export const reCycle = `${rrr}/TurnCycle`;

// Global Navigation Menu using the variables above
export const NAVIGATION_LINKS = [
  { name: "Tentacles", href: swamp + landing },
  { name: "Flowers", href: flower + landing },
  { name: "Dead End", href: deadEnd + landing },
  { name: "Glasscraft", href: swampGlass },
  { name: "Leathercraft", href: swampLeather },
  { name: "Paracordcraft", href: swampParacord },
  { name: "Mild Woodcraft", href: mildWood },
  { name: "Hot Woodcraft", href: hotWood },
  { name: "Spicy Woodcraft", href: spicyWood },
  { name: "Swamp Shop", href: swampShop },
  { name: "Swamp Creature", href: swampCreature },
  { name: "Swamp Fixations", href: swampFixations },
  { name: "Reduce", href: reDuce },
  { name: "Reuse", href: reUse },
  { name: "Recycle", href: reCycle },
];