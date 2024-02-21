document.addEventListener("DOMContentLoaded", function () {
    // Query for the submit button and input task field
    var submit = document.getElementById("Submit");
    var newTaskInput = document.getElementById("tasks");

    // Disable the submit button by default
    submit.disabled = true;

    // Listen for input in the task field
    newTaskInput.addEventListener("input", function () {
        // Enable the submit button if there is text in the input field, disable otherwise
        submit.disabled = newTaskInput.value.trim() === "";
    });

    // Listen for form submission
    document.querySelector("form").addEventListener("submit", function () {
        
        // Find the task the user just submitted
        var taskText = newTaskInput.value.trim();

        // Create a list item for the new task and add the task to it
        var newTaskListItem = document.createElement("li");
        newTaskListItem.textContent = taskText;

        // Add new element to the unordered list
        document.getElementById("tasks").appendChild(newTaskListItem);

        // Clear the input field
        newTaskInput.value = "";

        // Disable the submit button again after submission
        submit.disabled = true;

        // Prevent the default form submission
        return false;
    });
});
