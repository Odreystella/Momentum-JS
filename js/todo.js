const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];
const TODOS_KEY =  "todos";

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const li = e.path[2];
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodo()
}

function paintTodoList(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("span");
    button.innerHTML = `<i class="far fa-times-circle"></i>`;
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit (e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    todos.push(newTodoObj);
    paintTodoList(newTodoObj);
    saveTodo()
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos;
    parsedTodos.forEach(paintTodoList)
}