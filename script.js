document.addEventListener('DOMContentLoaded', function() {
    // This event listener ensures that the DOM is fully loaded before running our script.
    
        const addButton = document.getElementById('add-task-btn');
        // Selects the "Add Task" button from the HTML.
    
        const taskInput = document.getElementById('task-input');
        // Selects the input field where users enter tasks.
    
        const taskList = document.getElementById('task-list');
        // Selects the unordered list that will display the tasks.
    
        function loadTasks() {
        // This function loads tasks from Local Storage when the page loads.
    
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            // Retrieves tasks from Local Storage. If there are no tasks, it defaults to an empty array.
            // JSON.parse converts the stored JSON string back into a JavaScript array.
    
            storedTasks.forEach(taskText => addTask(taskText, false));
            // For each task in the stored tasks, we call addTask.
            // The 'false' parameter indicates not to save again to Local Storage to avoid duplication.
        }
    
        function addTask(taskText, save = true) {
        // This function adds a task to the list. It can be called with a task text and a save flag.
    
            if (typeof taskText !== 'string') {
                taskText = taskInput.value.trim();
            // If taskText is not provided as a string (e.g., when adding a new task), get it from the input field.
            }
    
            if (taskText === "") {
                alert("Please enter a task!");
                return;
            // If the task text is empty, show an alert and exit the function.
            }
    
            const li = document.createElement('li');
            li.textContent = taskText;
            // Create a new list item and set its text to the task.
    
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            // Create a remove button for the task.
    
            removeButton.onclick = function() {
            // When the remove button is clicked:
    
                taskList.removeChild(li);
                // Remove the task from the DOM.
    
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                // Get the current tasks from Local Storage.
    
                const updatedTasks = storedTasks.filter(task => task !== taskText);
                // Create a new array without the removed task.
    
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                // Save the updated tasks back to Local Storage.
            };
    
            li.appendChild(removeButton);
            taskList.appendChild(li);
            // Add the remove button to the list item, and the list item to the task list.
    
            taskInput.value = "";
            // Clear the input field.
    
            if (save) {
            // If save is true (default when adding a new task):
    
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
                // Add the new task to the stored tasks and save back to Local Storage.
            }
        }
    
        addButton.addEventListener('click', () => addTask());
        // Add a click event listener to the add button that calls addTask.
    
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
        // Add a keypress event listener to the input field that calls addTask when Enter is pressed.
    
        loadTasks();
        // Call loadTasks when the page loads to populate the list from Local Storage.
    });