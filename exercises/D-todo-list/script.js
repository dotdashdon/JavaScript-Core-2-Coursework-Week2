
// 1. We create a function called todoList that takes in an array of objects.
// 2. We create a new <ul> element and add it to the content element.
// 3. We loop through the array of objects and create a new <li> element for each object.
// 4. We add an event listener to each <li> element that will toggle the class of the <li> element when clicked.
// 5. We append each <li> element to the <ul> element.
// 6. We call the todoList function and pass in the todos array.




const content = document.querySelector('#content');

function toggleIsCompleted(event) {
  const targetedTodo = event.target;
  targetedTodo.classList.toggle('is-complete');
}

function todoList(todos) {
  const todoList = document.createElement('ul');
  todos.forEach(({ todo }) => {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo;
    todoItem.addEventListener('click', toggleIsCompleted);
    todoList.appendChild(todoItem);
  });

  content.appendChild(todoList);
}

const todos = [
  { todo: 'wash the dishes' },
  { todo: 'walk the dog' },
  { todo: 'learn javascript' },
  { todo: 'go shopping' },
];

todoList(todos);

