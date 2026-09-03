//////////////////////////////////////////////
/*            River Haven Grotto            */
//////////////////////////////////////////////

const swamp = "/ThinkingWithTentacles";
const wicked = "/WickedGabi";
const end = "/DeadEnd";
const vault = "/Vault";

//////////////////////////////////////////////
/*                  Lands                   */
//////////////////////////////////////////////

export const swampLand = `${swamp}/landing`;
export const wickedLand = `${wicked}/landing`;
export const deadEnd = `${end}/landing`;
export const theVault = `${vault}/landing`;

//////////////////////////////////////////////
/*                 Swamp                    */
//////////////////////////////////////////////

/* Tentacles */
export const swampGlasscraft = `${swamp}/Glasscraft`;
export const swampLeathercraft = `${swamp}/Leathercraft`;
export const swampParacordcraft = `${swamp}/Paracordcraft`;
export const swampWoodcraft = `${swamp}/Woodcraft`;
export const swampWorkshop = `${swamp}/Workshop`;

/* Suckers */
export const swampGlass = `${swampGlasscraft}/glasscraft`;
export const swampLeather = `${swampLeathercraft}/leathercraft`;
export const swampParacord = `${swampParacordcraft}/paracordcraft`;
export const swampWood = `${swampWoodcraft}/woodcraft`;
export const swampShop = `${swampWorkshop}/swamp`;

/* Teeth */
export const swampTameWood = `${swampWoodcraft}/Tame/tame-wood`;
export const swampHotWood = `${swampWoodcraft}/Hot/hot-wood`;
export const swampSpicyWood = `${swampWoodcraft}/Spicy/spicy-wood`;

/* Pylops */
export const swampCreature = `${swampWorkshop}/About/me`;
export const swampFixations = `${swampWorkshop}/Current/hyper-fixation`;
export const swampCraft = `${swampWorkshop}/Shop/the-shop`;

//////////////////////////////////////////////
/*                 Wicked                   */
//////////////////////////////////////////////

/* Flowers */
export const wickedBurningArt = `${wicked}/BurningArt`;
export const wickedDyeArt = `${wicked}/DyeArt`;
export const wickedWireArt = `${wicked}/WireArt`;
export const wickedArtStudio = `${wicked}/ArtStudio`;

/* Pollen */
export const wickedBurn = `${wickedBurningArt}/burning-art`;
export const wickedDye = `${wickedDyeArt}/dye-art`;
export const wickedWire = `${wickedWireArt}/wire-art`;
export const wickedStudio = `${wickedArtStudio}/the-garden`;

/* Roots */
export const wickedTameBurn = `${wickedBurningArt}/Tame/tame-burn`;
export const wickedTarotBurn = `${wickedBurningArt}/Tarot/tarot-burn`;
export const wickedSpicyBurn = `${wickedBurningArt}/Spicy/spicy-burn`;

/* Petals */
export const wickedCreature = `${wickedArtStudio}/About/me`;
export const wickedFixation = `${wickedArtStudio}/Current/hyper-fixation`;
export const wickedArt = `${wickedArtStudio}/Studio/the-studio`;


//////////////////////////////////////////////
/*             Product Catalogs             */
//////////////////////////////////////////////

export const assets = `/src/assets`;

/* Swamp Crafts */
export const swampCraftedGlass = `${assets}/Swamp/SwampGlass`; 
export const swampCraftedLeather = `${assets}/Swamp/SwampLeather`;
export const swampCraftedParacord = `${assets}/Swamp/SwampParacord`;
export const swampCraftedTameWood = `${assets}/Swamp/Swampwood/TameWood`;
export const swampCraftedHotWood = `${assets}/Swamp/Swampwood/HotWood`;
export const swampCraftedSpicyWood = `${assets}/Swamp/Swampwood/SpicyWood`;

/* Wicked Art */
export const wickedArtDyes = `${assets}/Wicked/WickedDyes`;
export const wickedArtWiresBroom = `${assets}/Wicked/WickedWires/Broom`;
export const wickedArtWiresBlunt = `${assets}/Wicked/WickedWires/Blunt`;
export const wickedArtTameBurns = `${assets}/Wicked/WickedBurns/TameBurns`;
export const wickedArtTarotBurns = `${assets}/Wicked/WickedBurns/TarotBurns`;
export const wickedArtSpicyBurns = `${assets}/Wicked/WickedBurns/SpicyBurns`;

/* Filtered Used Art */
export const reCollecting = `${assets}/DeadEnd/FilterArt`;
export const forUse = `${assets}/DeadEnd/UseMe`;
export const upCycled = `${assets}/DeadEnd/MeepMorps`;

/* Archive */
export const sold = `${assets}/Vault/Sold`;
export const creations = `${assets}/Vault/Creations`;

//////////////////////////////////////////////
/*                   Work                   */
//////////////////////////////////////////////

/* Swamp */
export const swampDeleted = `${assets}/Swamp/Shop/Deleted`;
export const swampProgress = `${assets}/Swamp/Shop/Progress`;
export const swampStock = `${assets}/Swamp/Shop/Stock`;

/* Wicked */
export const wickedDeleted = `${assets}/Wicked/Studio/Deleted`;
export const wickedProgress = `${assets}/Wicked/Studio/Progress`;
export const wickedStock = `${assets}/Wicked/Studio/Stock`;

//////////////////////////////////////////////
/*               Stock Photos               */
//////////////////////////////////////////////
export const sampleHardwood = `${swampStock}/HardwoodSamples`;

//////////////////////////////////////////////
/*                Dead End                  */
//////////////////////////////////////////////

/* Pilfer, Filter, Transfer */
export const reDuce = `${end}/ReDuce/CollectingTrash`;
export const reUse = `${end}/ReUse/UsefulTrash`;
export const reCycle = `${end}/ReCycle/ArtisticTrash`;

//////////////////////////////////////////////
/*                  Vault                   */
//////////////////////////////////////////////

//* Open Secrets */
export const archive = `${vault}/Archive/stuff`;

/* Not So Open Secrets */
export const duckPrints = `${vault}/DuckPrints`;

/* Truth */
export const bluePrints = `${vault}/BluePrints`;

/* The Whole Truth */
export const yellowPrints = `${vault}/YellowPrints`;

/* Nothing But the Truth */
export const redPrints = `${vault}/RedPrints`;

/* Duck Prints */
export const duck = `${duckPrints}/duck`;