const renderingHtml = (stock) => {
  return (productsContainer.innerHTML = stock
    .map((product) => productCard(product))
    .join(""));
};

const popularProducts = (stockProducts) => {
  const popularList = stockProducts.filter(
    (product) => product.popular === true
  );
  renderingHtml(popularList);
};

// const addProduct = ({ target }) => {
//   if (!target.classList.contains("product")) return;
// };
const addToCart = (e) => {
  if (!e.target.classList.contains("product")) return;
  const products = [...stockProducts];
  products.forEach((product) => {
    if (product.id == Number(e.target.dataset.id)) {
      const AddedProduct = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        descrip: e.target.dataset.bid,
        img: e.target.dataset.img,
        cant: e.target.dataset.cant,
        price: e.target.dataset.price,
      };
      const existingCartItem = cart.find((item) => item.id === product.id);
      if (existingCartItem) {
        cart = cart.map((item) => {
          return item.id === product.id
            ? { ...item, cant: Number(item.cant) + 1 }
            : item;
        });
      } else {
        cart = [...cart, { ...AddedProduct, cant: 1 }];
      }
      saveLocalStorage(cart);
      renderCart(cart);
      showTotal(cart);
      // cartContainer.innerHTML += renderCardCart(AddedProduct);
    }
  });
};

const renderCart = (cartList) => {
  if (!cartList.length) {
    cartContainer.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  cartContainer.innerHTML = cartList.map(renderCardCart).join("");
};
const filterCategory = (e) => {
  const selectedCategory = e.target.dataset.category;
  const categories = [...categoriesList];
  categories.forEach((category) => {
    if (category.dataset.category !== selectedCategory) {
      category.classList.remove("active");
    } else {
      category.classList.add("active");
    }
  });
};

const filterProducts = (e) => {
  if (!e.target.classList.contains("categories__caja")) return;
  const target = e.target;
  if (target.classList.contains("active")) {
    target.classList.remove("active");
    titleCategory.innerHTML = "Lo más populares";
    return popularProducts(stockProducts);
  } else {
    filterCategory(e);
  }
  const filterProductCategory = stockProducts.filter(
    (product) => product.category === target.dataset.category.toLowerCase()
  );
  titleCategory.innerHTML = capitaliceStr(target.innerText);
  renderingHtml(filterProductCategory);
};

const recommendRandom = () => {
  let randomArray = [];
  for (let i = 0; i < stockProducts.length; i++) {
    const element =
      stockProducts[parseInt(Math.random() * stockProducts.length)];
    if (!randomArray.some((e) => e.id === element.id)) {
      randomArray.push(element);
    }
    if (randomArray.length === 3) {
      break;
    }
  }
  recommendContainer.innerHTML = randomArray
    .map((product) => recommendCard(product))
    .join("");
};
const firstLetterMayus = (strs) => {
  const str = strs.trim();
  const firstLetterUpper = str.charAt(0).toUpperCase();
  const sliceStr = str.slice(1);
  const strFirstLetterMayus = firstLetterUpper + sliceStr;
  return strFirstLetterMayus;
};
const capitaliceStr = (strs) => {
  const strsNormalice = strs.toLowerCase();
  const strArr = strsNormalice.split(" ");
  let capitaliceString = "";
  strArr.forEach((str) => (capitaliceString += `${firstLetterMayus(str)} `));
  return capitaliceString.trim();
};
