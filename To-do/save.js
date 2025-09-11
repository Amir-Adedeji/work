// Get elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

// Load saved tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Handle form submit
taskForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    saveTasks(); // Save after adding
    taskInput.value = ""; // Clear input
  }
});

// Add a task to the Todo list
function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <div class="actions">
      <button class="done-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  // Mark as completed
  li.querySelector(".done-btn").addEventListener("click", () => {
    moveToCompleted(li, text);
    saveTasks();
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  todoList.appendChild(li);
}

// Move a task to Completed list
function moveToCompleted(li, text) {
  li.remove();

  const completedItem = document.createElement("li");
  completedItem.innerHTML = `
    <span>${text}</span>
    <div class="actions">
      <button class="undo-btn">↩</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  // Undo completed
  completedItem.querySelector(".undo-btn").addEventListener("click", () => {
    addTask(text);
    completedItem.remove();
    saveTasks();
  });

  // Delete completed task
  completedItem.querySelector(".delete-btn").addEventListener("click", () => {
    completedItem.remove();
    saveTasks();
  });

  completedList.appendChild(completedItem);
  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  const todos = [];
  const completed = [];

  document.querySelectorAll("#todo-list li span").forEach((el) => {
    todos.push(el.textContent);
  });

  document.querySelectorAll("#completed-list li span").forEach((el) => {
    completed.push(el.textContent);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("completed", JSON.stringify(completed));
}

// Load tasks from localStorage
function loadTasks() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const completed = JSON.parse(localStorage.getItem("completed")) || [];

  todos.forEach((task) => addTask(task));
  completed.forEach((task) => {
    const fakeLi = document.createElement("li");
    moveToCompleted(fakeLi, task); // Rebuild completed tasks
  });
}
