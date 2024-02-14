function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask() {
    var taskList = document.getElementById("taskList");
    var selectedTasks = taskList.querySelectorAll("li.selected");
    selectedTasks.forEach(function(task) {
        task.parentNode.removeChild(task);
    });
}

function clearTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

document.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("selected");
    }
});