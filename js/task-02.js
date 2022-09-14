const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulEl = document.querySelector("#ingredients");
// ulEl.textContent = "Ingredients:";
// ulEl.className = "list";


// const liArray = [];

// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.className = "item";
//   item.textContent = ingredient;
//   liArray.push(item);
// });

// ulEl.append(...liArray);

const ulEl = document.querySelector("ul");
ulEl.textContent = "Ingredients:";

const elements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});

console.log(elements);
ulEl.append(...elements);