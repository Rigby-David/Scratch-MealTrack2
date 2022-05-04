export function renderIngredientLi(item) {
    const li = document.createElementById('li');
    li.textContent = `${item.qty} ${item.measurement} of ${item.ingredient}`
    return li;
}