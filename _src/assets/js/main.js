"use strict";

const url = "./service/data.json";
let rissoto = [];
let total = 0;
let productos = [];

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

  console.log("risotittooo", rissoto);
  paintIngredients();
};

const paintIngredients = () => {
  const list = document.querySelector(".article__list");

  const text = rissoto.map(item => {
    return `<li class="js__item">
    <p class="js__item-ingredients js-item">${item.ingredients}</p>
    <input class="js-checkbox" type="checkbox" onclick=addItem(this) value=${item.price}/>
    <p class="js__item-brand js-item">Marca: ${item.brand}</p>
    <p class="js__item-quantity js-item">Cantidad: ${item.quantity}</p>
    <p>Precio: ${item.price}</p>
    <input class="js__item-number" type="number" onclick=addIngredient(this) value="${item.items}" />
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

const addItem = item => {
  const subTotalPrice = document.querySelector(".items__subtotal");
  const totalPrice = document.querySelector(".items__total");

  let valueInput = parseFloat(item.value);
  if (item.checked) {
    total += valueInput;
    const sum = total + 7;
    totalPrice.innerHTML = "Total: " + sum.toFixed(2);
  } else {
    total -= valueInput;
    totalPrice.innerHTML = "Total: 0.00€ ";
  }
  subTotalPrice.innerHTML = "Subtotal: " + total.toFixed(2) + "€";
};

const addIngredient = () => {
  const inputNumber = document.querySelector(".js__item-number");

  productos.push(parseInt(inputNumber.value));

  console.log("soy el array de productos", productos);
};

selectButton.addEventListener("click", selectIngredients);
unSelectButton.addEventListener("click", unSelectIngredients);
getData();
