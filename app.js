// Select necessary DOM elements
const taskForm = document.getElementById("task-form");
const taskTitleInput = document.getElementById("task-title");
const taskDescriptionInput = document.getElementById("task-description");
const taskDateInput = document.getElementById("task-date");
const taskList = document.getElementById("task-list");

// Function to create and append a new task item
function addTaskToList(title, description, date) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Due:</strong> ${date}</p>
    `;
    taskList.appendChild(taskItem);
}

// Handle task form submission
taskForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get task values
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const date = taskDateInput.value;

    // Check if all fields are filled
    if (title && description && date) {
        // Add task to the list
        addTaskToList(title, description, date);

        // Clear input fields
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDateInput.value = "";
    } else {
        alert("Please fill in all fields.");
    }
});
