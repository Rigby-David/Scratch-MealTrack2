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
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
