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

    const resource = {
      source,
      index,
      image: image.default
    };

    if(!resources[source]) {
      resources[source] = [];
    }

    resources[source].push(resource);
  });

  return resources;
}

export function parseProducts(craft, stock) {
  const productLog = {};

  Object.entries(craft).forEach(([path, image]) => {
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

export function fluffTitle(ingredient: string, style: string, flavor: string, tarot: boolean): string {
  const capitalizeWords = (text: string) =>
    text
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  if(tarot) {
    return `${capitalizeWords(ingredient)} ${style} ${capitalizeWords(flavor)}`;
  }
  else {
    return `${capitalizeWords(ingredient)} ${capitalizeWords(style)} ${capitalizeWords(flavor)}`;
  }
}

export function fluffWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
