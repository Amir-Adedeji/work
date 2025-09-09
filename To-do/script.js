// Get elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

// Handle form submit
taskForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
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
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
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
  });

  // Delete completed task
  completedItem.querySelector(".delete-btn").addEventListener("click", () => {
    completedItem.remove();
  });

  completedList.appendChild(completedItem);
}
