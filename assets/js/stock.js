const stockProducts = [];

let Product = class {
  constructor(img, id, name, category, text, price, popular) {
    this.img = img;
    this.id = id;
    this.name = name;
    this.category = category;
    this.text = text;
    this.price = price;
    this.popular = popular;
  }
};
let createAndPush = (img, id, name, category, text, price, popular) => {
  return stockProducts.push(
    new Product(img, id, name, category, text, price, popular)
  );
};

// categorias: pizza,burger,fries, individual, wraps(burritos),mexican, float(batidos)
const idRandom = () => {
  let randomId = parseInt(Math.random() * 1000);
  if (stockProducts.some((product) => product.id === randomId)) {
    randomId = parseInt(Math.random() * 1000);
  }
  return randomId;
};
// pizzas
createAndPush(
  "assets/images/products/pizzaCuatroQuesos.jpg",
  idRandom(),
  "Pizza cuatro quesos",
  "pizza",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaPeperoni.jpg",
  idRandom(),
  "Pizza de pepperoni",
  "pizza",
  "La más completa",
  3200,
  false
);
createAndPush(
  "assets/images/products/pizzaFugazza.jpg",
  idRandom(),
  "Pizza fugazza",
  "pizza",
  "La más completa",
  3200,
  false
);
createAndPush(
  "assets/images/products/pizzaDeChampiñones.png",
  idRandom(),
  "Pizza de champiñones",
  "pizza",
  "La más completa",
  3200,
  true
);
createAndPush(
  "assets/images/products/pizzaNapolitana.jpg",
  idRandom(),
  "Pizza napolitana",
  "pizza",
  "La más completa",
  3200,
  false
);

createAndPush(
  "assets/images/products/pizzaHawaiana.jpg",
  idRandom(),
  "Pizza hawaiana",
  "pizza",
  "La más completa",
  3200,
  false
);
createAndPush(
  "assets/images/products/pizzaMargarita.jpg",
  idRandom(),
  "Pizza margarita",
  "pizza",
  "La más completa",
  3200,
  false
);
createAndPush(
  "assets/images/products/pizzaMarinara.jpg",
  idRandom(),
  "Pizza marinara",
  "pizza",
  "La más completa",
  3200,
  true
);
// hamburguesas;
createAndPush(
  "assets/images/products/burger1.jpg",
  idRandom(),
  "Cheesse Burger",
  "burger",
  "Extra queso",
  1200,
  true
);
createAndPush(
  "assets/images/products/burger2.jpg",
  idRandom(),
  "MigBac",
  "burger",
  "Se parece a la del payaso",
  1200,
  false
);
createAndPush(
  "assets/images/products/burger3.jpg",
  idRandom(),
  "Vergan Burger",
  "burger",
  "la mas tranqui",
  3150,
  false
);
// Napapuki;
createAndPush(
  "assets/images/products/papas1.jpg",
  idRandom(),
  "Papas con Cheddar",
  "fries",
  "Las nuevas clasicas",
  1000,
  true
);
createAndPush(
  "assets/images/products/papas2.jpg",
  idRandom(),
  "Papas Rusticas",
  "fries",
  "Mas caras y sin pelar",
  2500,
  false
);
createAndPush(
  "assets/images/products/papas3.jpg",
  idRandom(),
  "Papas Hasselback",
  "fries",
  "Si salen bien es un milagro",
  3000,
  false
);
// individuales;
createAndPush(
  "assets/images/products/porcion1.jpg",
  idRandom(),
  "Tarta de verduras",
  "individual",
  "Que acelga",
  1200,
  false
);
createAndPush(
  "assets/images/products/porcion2.jpg",
  idRandom(),
  "Tortilla de papa",
  "individual",
  "Sin cebolla",
  1500,
  true
);
createAndPush(
  "assets/images/products/porcion3.jpg",
  idRandom(),
  "Tarta de jamon y queso",
  "individual",
  "Muy buena",
  1800,
  true
);
// wraps;
createAndPush(
  "assets/images/products/wrap1.jpg",
  idRandom(),
  "Wrap de carne",
  "wraps",
  "Extra carne",
  1800,
  true
);
createAndPush(
  "assets/images/products/wrap2.jpg",
  idRandom(),
  "Wrap de pollo",
  "wraps",
  "Barato",
  500,
  true
);
createAndPush(
  "assets/images/products/wrap3.jpg",
  idRandom(),
  "Wrap de vegano",
  "wraps",
  "Light",
  2200,
  false
);
// mexican food;
createAndPush(
  "assets/images/products/mexican1.jpg",
  idRandom(),
  "Torta de Jamon",
  "mexican",
  "La que le gusta al chavo",
  2200,
  true
);
createAndPush(
  "assets/images/products/mexican2.jpg",
  idRandom(),
  "Burritos",
  "mexican",
  "El que disfruta el señor barriga",
  1800,
  true
);
createAndPush(
  "assets/images/products/mexican3.jpg",
  idRandom(),
  "Tacos",
  "mexican",
  "El que le gusta a Don Ramon",
  2900,
  true
);
// batidukis;
createAndPush(
  "assets/images/products/batidos1.jpg",
  idRandom(),
  "Licuados al agua",
  "float",
  "muy rico",
  900,
  true
);
createAndPush(
  "assets/images/products/batidos2.jpg",
  idRandom(),
  "Smoothie",
  "float",
  "Disfruta!",
  1100,
  true
);
createAndPush(
  "assets/images/products/batidos3.jpg",
  idRandom(),
  "Milkshakes",
  "float",
  "El mejor",
  2000,
  false
);
