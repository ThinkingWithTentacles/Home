type Path = string;

export const getFileName = (path: Path): string => {
  return path.replace(/\.[^/.]+$/, '').split(/[/\\]/).pop() || ''; 
};

export function parseResources(folder) {
  const resources = {};

  Object.entries(folder).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const source = bits[0];
    const index = Number(bits[1]);
    const name = bits[2];

    const resource = {
      source,
      index,
      name,
      image: image.default
    };

    if(!resources[source]) {
      resources[source] = [];
    }

    resources[source].push(resource);
  });

  return resources;
}

export function parseProducts(products, stock) {
  const productLog = {};

  Object.entries(products).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const flavor = bits[0];
    const order = bits[1];
    const shot = bits[2];

    const product = stock[flavor + "." + order];  

    if (!productLog[flavor]) {
      productLog[flavor] = {};
    }

    if (!productLog[flavor][order]) {
      productLog[flavor][order] = {
        order,
        ...product,
        flagshot: null,
        shots: {}
      };
    }

    if (shot == "A" || shot == "A1") {
      productLog[flavor][order].flagshot = image.default;
    } else {
        productLog[flavor][order].shots[shot] = image.default;
    }
  });

  return productLog;
}

export function fluffWords(words: string): string {
  if (!words) return "";
  return words.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

export function fluffWord(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function formatter(words: string[]): string {
  if (!words || words.length === 0) return "";
  
  return new Intl.ListFormat('en', { 
    style: 'long', 
    type: 'conjunction' 
  }).format(words); // Added .format() here
}

export function fluffTitle(product: any): string {
  const ingredient = product.ingredients?.[0] ? fluffWords(product.ingredients[0]): "";
  const subject = product.subject ? product.flavor == "tarot card" ? product.subject : fluffWords(product.subject): "";
  const style = product.style ? fluffWords(product.style): "";
  const flavor = product.flavor ? fluffWords(product.flavor) : "";

  return (ingredient + " " + subject + " " + style + " " + flavor).trim();
}

export function fluffFlavor(product: any): string {
  return product.style ? `Featuring a ${product.style} design` : "";
}

export function fluffIngredients(product: any): string {
  return product.ingredients?.[0] ? `Made with ${formatter(product.ingredients)}` : "";
}

export function fluffSize(product: any): string {
  return product.size ? `Size: ${fluffWord(product.size)}` : "";
}

export function fluffValue(product: any): string {
  return product.value ? "$" + product.value : "";
}