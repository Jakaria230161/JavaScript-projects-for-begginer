// Find the Elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const inputTodo = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

// showMessage
const showMessage = (text, status) => {
  messageElement.textContent = text;
  messageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
}
// create todo id
const createTodo = (todoId, inputValue) => {
  const todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style");
  todoElement.innerHTML = `
    <span> ${inputValue} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
  `;
  todoLists.appendChild(todoElement);
  const deleteButton = todoElement.querySelector("#deleteButton");
  deleteButton.addEventListener("click", deleteTodo)
}

const deleteTodo = (event) => {
  const selectedTodo = event.target.parentElement.parentElement.parentElement;
  todoLists.removeChild(selectedTodo);
  showMessage("You are successfully deleted a todo", "danger");

  //delete from localStorage
  let myTodo = getTodoFromLocalStorage();
  myTodo = myTodo.filter((todo) => todo.todoId !== selectedTodo.id);
  localStorage.setItem("myTodo", JSON.stringify(myTodo));
}


//getTodoFromLocalStorage
const getTodoFromLocalStorage = () => {
  return localStorage.getItem("myTodo") ? JSON.parse(localStorage.getItem("myTodo")) : [];
}
// addTodo function
const addTodo = (event) => {
  event.preventDefault();
  const inputValue = inputTodo.value;
  console.log(inputValue);

  // unique id generator
  const todoId = Date.now().toString();
  console.log(todoId);
  createTodo(todoId, inputValue);
  showMessage("You are successfully added a Todo", "success");

  // LocalStorage
  const myTodo = getTodoFromLocalStorage();
  myTodo.push({todoId, inputValue});
  localStorage.setItem("myTodo", JSON.stringify(myTodo));
  inputValue.value = "";
}

const todoLoaded = () => {
  let myTodo = getTodoFromLocalStorage();
  myTodo.map((todo) => createTodo(todo.todoId, todo.inputValue));
}

// Adding even listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", todoLoaded);