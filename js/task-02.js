const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredient = document.getElementById('ingredients'); 

const liElements = ingredients.map(ingredient => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  return liElement;
});

ulIngredient.append(...liElements);