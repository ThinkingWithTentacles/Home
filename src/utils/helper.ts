type Path = string;

export const getFileName = (path: Path): string => {
  return path.replace(/\.[^/.]+$/, '').split(/[/\\]/).pop() || ''; 
};

export function parseResource(folder) {
  const resources = {};

  Object.entries(folder).forEach(([path, image]) => {
    const file = getFileName(path);

    const resource = {
      image: image.default
    };

    resources[file] = image.default;
  });

  return resources;
}

export function parseProducts(products, stock) {
  const resourceLog = {};

  Object.entries(products).forEach(([path, image]) => {
    const file = getFileName(path);
    const bits = file.split(".");

    const flavor = bits[0];
    const order = bits[1];
    const shot = bits[2];

    const product = stock[flavor + "." + order];  

    if (!resourceLog[flavor]) {
      resourceLog[flavor] = {};
    }

    if (!resourceLog[flavor][order]) {
      resourceLog[flavor][order] = {
        order,
        ...product,
        flagshot: null,
        shots: {}
      };
    }

    if (shot == "A" || shot == "A1") {
      resourceLog[flavor][order].flagshot = image.default;
    } else {
        resourceLog[flavor][order].shots[shot] = image.default;
    }4
  });

  return resourceLog;
}

export function fluffWords(words: string): string {
  if (!words) return "";
  return words.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

export function fluffWord(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function wordsFormatter(words?: string[]): string {
  if (!words || words.length === 0) {
    return "";
  }
  
  const filteredWords = words
    .map(word => word.trim())
    .filter(word => word !== "" && word.toLowerCase() !== "ingredient");

  if (filteredWords.length === 0) {
    return "";
  }
  
  return new Intl.ListFormat('en', { 
    style: 'long', 
    type: 'conjunction' 
  }).format(filteredWords);
}

export function fluffTitle(product: any): string {
  const ingredient = product.ingredients?.[0] ? fluffWords(product.ingredients[0]): "";
  const subject = product.subject ? product.flavor == "tarot card" ? product.subject : fluffWords(product.subject): "";
  const style = product.style ? fluffWords(product.style): "";
  const flavor = product.flavor ? fluffWords(product.flavor) : "";

  return (ingredient + " " + subject + " " + style + " " + flavor).trim();
}

export function fluffStyle(product: any): string {
  return product.style ? `Featuring a ${product.style} design` : "";
}

export function fluffIngredients(product: any): string {
  return product.ingredients?.[0] || product.ingredients?.[1] ? `Made with ${wordsFormatter(product.ingredients)}` : "";
}

export function fluffSize(product: any): string {
  return product.size ? `Size: ${fluffWord(product.size)}` : "";
}

export function fluffValue(product: any): string {
  return product.value ? "$" + product.value : "";
}