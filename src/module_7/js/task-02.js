const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredientsEl = document.querySelector('ul#ingredients');

// Способ 1 ============================
// ingredients.forEach(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;

//   ulIngredientsEl.appendChild(liEl);
// });

// Способ 2 ============================
// function makeArrayLiEl(array) {
//   const arrayEl = [];

//   array.forEach(element => {
//     const liEl = document.createElement('li');
//     liEl.textContent = element;
  
//     arrayEl.push(liEl);
//   });

//   return arrayEl;
// };

// const arrayLi = makeArrayLiEl(ingredients);

// ulIngredientsEl.append(...arrayLi);

// Способ 3 ============================
const arrayLi = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  
  return liEl;
});

ulIngredientsEl.append(...arrayLi);