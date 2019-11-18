"use strict";

const url = "./assets/services/data.json";
let rissoto = [];

const selectButton = document.querySelector(".header__button-select");
const unSelectButton = document.querySelector(".header__button-unselect");

const getData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      formatData(data);
    });
};

const formatData = data => {
  const title = document.querySelector(".header__title");
  title.innerHTML = "Nombre del plato: " + data.recipe.name;

  data.recipe.ingredients.map(item => {
    return rissoto.push({
      ingredients: item.product,
      brand: item.brand,
      items: item.items,
      price: item.price,
      quantity: item.quantity
    });
  });

  // for (const item of data.recipe.ingredients) {
  //   const ingredients = item.product;
  //   console.log(ingredients);
  // }
  console.log("risotittooo", rissoto);
  paintIngredients();
};

// const paintIngredients = () => {
//   const list = document.querySelector(".article__list");
//   let text = "";
//   for (let i = 0; i < rissoto.length; i++) {
//     text += `<li class="js-item">
//   <p class="article__name">${rissoto[i].ingredients}</p>
//   <p class="article__brand">${rissoto[i].brand}</p>
//   <p class="article__kg">${rissoto[i].quantity}</p>
//   </li>`;
//   }
//   list.innerHTML = text;
//   console.log(list);
// };

const paintIngredients = () => {
  const list = document.querySelector(".article__list");

  const text = rissoto.map(item => {
    return `<li class="js__item">
    <p class="js__item-ingredients js-item">${item.ingredients}</p>
    <input class="js-checkbox" type="checkbox"  />
    <p class="js__item-brand js-item">Marca: ${item.brand}</p>
    <p class="js__item-quantity js-item">Cantidad: ${item.quantity}</p>
    <p>Precio: ${item.price}</p>
    <input class="js__item-number" type="number" value="${item.items}" />
    </li>`;
  });
  list.innerHTML = text;
};

const selectIngredients = () => {
  const input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++)
    if (input[i].type == "checkbox") input[i].checked = 1;
};

const unSelectIngredients = () => {
  const input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++)
    if (input[i].type == "checkbox") input[i].checked = 0;
};

const addPrice = () => {
  const elpreciojusto = document.querySelector(".items__total");

  // for (let i = 0; i < rissoto.length; i++) {
  //   acc += rissoto.price[i];
  // }

  for (const item of rissoto) {
    const precio = item.price;
    console.log(precio);
    elpreciojusto.innerHTML = "Total: " + precio;
  }
  // const yokese = rissoto.map(item => {
  //   return parseInt(item.price);
  // });

  // elpreciojusto.innerHTML = "Total: " + yokese + acc;
  // console.log("precio", yokese);
};

selectButton.addEventListener("click", selectIngredients);
unSelectButton.addEventListener("click", unSelectIngredients);
getData();
addPrice();
