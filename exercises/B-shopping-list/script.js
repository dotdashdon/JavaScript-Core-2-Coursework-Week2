// 1. Create a function called shoppingList 
//that takes an array of strings as an argument.
// 2. Create a new element called list.
// 3. Loop through the array of strings.
// 4. Create a new element called item.
// 5. Set the innerText of the item to the current string in the array.
// 6. Append the item to the list.
// 7. Append the list to the content element.

const content = document.querySelector('#content');

function shoppingList(arrayOfPeople) {

  const list = document.createElement('ul');

  arrayOfPeople.forEach((shoppingItem) => {
    const item = document.createElement('li');
    item.innerText = shoppingItem;
    list.appendChild(item);
  });

  content.appendChild(list);
}

let shopping = ['Milk', 'Bread', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea'];

shoppingList(shopping);