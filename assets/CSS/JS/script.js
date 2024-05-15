document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskButton"); // Correzione del nome della variabile
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
    // Correzione del nome della variabile
    const taskText = taskInput.value;
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
  }
});
