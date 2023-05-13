const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const todoItem = input.value.trim();
  if (todoItem !== '') {
    const li = document.createElement('li');
    li.textContent = todoItem;
    todoList.appendChild(li);
    input.value = '';
  }
});
