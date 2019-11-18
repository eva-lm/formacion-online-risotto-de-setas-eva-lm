"use strict";

const url = "./service/data.json";
let rissoto = [];

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
  console.log("data", data);
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
    <p class="js__item-brand js-item">${item.brand}</p>
    <p class="js__item-quantity js-item">${item.quantity}</p>
    </li>`;
  });

  list.innerHTML = text;
};

getData();
