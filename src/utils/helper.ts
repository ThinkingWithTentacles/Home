type Path = string;

export const getFileName = (path: Path): string => {
  return path.replace(/\.[^/.]+$/, '').split(/[/\\]/).pop() || ''; 
};

export function parseResource(folder) {
  const resources = {};

  Object.entries(folder).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const page = bits[0];
    const priority = Number(bits[1]);

    const resource = {
      priority,
      image: image.default
    };

    if(!resources[page]) {
      resources[page] = [];
    }

    resources[page].push(resource);
  });

  return resources;
}

export function parsePage(page) {
  const stockPhotos = {};

  Object.entries(page).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const type = bits[0];
    const index = Number(bits[1]);
    const name = bits[2];

    const photo = {
      type,
      index,
      name,
      image: image.default
    };

    if(!stockPhotos[type]) {
      stockPhotos[type] = [];
    }

    stockPhotos[type].push(photo);
  });

  return stockPhotos;
}

export function parseCraft(craft, stock) {
  const craftLog = {};

  Object.entries(craft).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const flavor = bits[0];
    const order = bits[1];
    const shot = bits[2];

    const product = stock[flavor + "." + order];  
    
    {console.log(product)}

    if (!craftLog[flavor]) {
      craftLog[flavor] = {};
    }

    if (!craftLog[flavor][order]) {
      craftLog[flavor][order] = {
        order,
        ...product,
        flagshot: null,
        shots: {}
      };
    }

    if (shot === "A") {
      craftLog[flavor][order].flagshot = image.default;
    } else {
        craftLog[flavor][order].shots[shot] = image.default;
    }
  });

  return craftLog;
}

export function parseArt(art) {
  const artLog = {};

  Object.entries(art).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const order = prepOrder(bits[0]);
    const value = prepValue(bits[1]);
    const flavor = prepFlavor(bits[2]);
    const style = prepStyle(bits[3]);
    const ingredients = prepIngredients(bits[4]);
    const shot = bits[5];

    if (!artLog[flavor]) {
      artLog[flavor] = {};
    }

    if (!artLog[flavor][order]) {
      artLog[flavor][order] = {
        value,
        flavor,
        style,
        ingredients,
        flagshot: null,
        shots: {}
      };
    }

    if (shot === "F") {
      artLog[flavor][order].flagshot = image.default;
    } else {
        artLog[flavor][order].shots[shot] = image.default;
    }
  });

  return artLog;
}

export function prepOrder(order: string): string {
  return "PN" + order;
}

export function prepFlavor(flavor: string): string {
  return flavor.replace(/\b\w/g, (char) => char.toUpperCase()).replaceAll("-", ' ');
}

export function prepIngredients(ingredients: string): string {
  return ingredients.replace(/(?:^|[-_\s])\w/g, char => char.toUpperCase()).replaceAll("-", " ").split("_");
}

export function prepStyle(style: string): string {
  return style.replace(/\b\w/g, (char) => char.toUpperCase()).replaceAll("-", ' ');
}

export function prepValue(value: string): string {
  return Number(value);
}

export function fluffIngredients(ingredients: string): string {
  return ingredients.replace(/\b\w/g, (char) => char.toUpperCase()).replaceAll("-", ' ');
}