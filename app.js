import { renderIngredientLi } from './utils.js';
// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove');

const mealName = document.getElementById('meal-name');
const save = document.getElementById('save-meal');

// let state
let ingredients = [];
let meals = [];

// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = {
        ingredient: data.get('ingredient'),
        qty: data.get('qty'),
        measurement: data.get('measurement'),
    };
    ingredients.push(item);
    renderIngredients();
});

remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

save.addEventListener('click', () => {
    const name = mealName.value;
    const count = ingredients.length;
    meals.push({ name, count});
    
});
// write functions

function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLi(item);
        ingredientList.append(li);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
