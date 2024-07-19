document.addEventListener('DOMContentLoaded', function() {
    // This line adds an event listener to the entire document. It waits for the DOM (Document Object Model) to be fully loaded before executing the function.
    // This ensures that all HTML elements are available before we try to interact with them.
    
        const addButton = document.getElementById('add-task-btn');
        // This line finds the HTML element with the id 'add-task-btn' and stores it in the constant 'addButton'.
        // This button will be used to add new tasks to our list.
    
        const taskInput = document.getElementById('task-input');
        // This line selects the input field where users will type their tasks. It's stored in the constant 'taskInput'.
    
        const taskList = document.getElementById('task-list');
        // This line selects the unordered list element where we'll display our tasks. It's stored in 'taskList'.
    
        function addTask() {
        // This defines a function named addTask. It will be called when we want to add a new task to our list.
    
            const taskText = taskInput.value.trim();
            // This gets the text from the input field and removes any whitespace from the beginning and end.
            // The trimmed text is stored in the 'taskText' variable.
    
            if (taskText === "") {
            // This checks if the taskText is empty after trimming.
    
                alert("Please enter a task!");
                // If taskText is empty, this shows an alert asking the user to enter a task.
                return;
                // This ends the function execution if no task was entered.
            }
    
            const li = document.createElement('li');
            // This creates a new list item element and stores it in the 'li' variable.
    
            li.textContent = taskText;
            // This sets the text content of the list item to the task the user entered.
    
            const removeButton = document.createElement('button');
            // This creates a new button element that will be used to remove the task.
    
            removeButton.textContent = "Remove";
            // This sets the text of the remove button to "Remove".
    
            removeButton.className = 'remove-btn';
            // This adds the class 'remove-btn' to the remove button, which will style it according to our CSS.
    
            removeButton.onclick = function() {
            // This assigns a function to be called when the remove button is clicked.
    
                taskList.removeChild(li);
                // When clicked, this line removes the entire list item (including the task text and remove button) from the task list.
            };
    
            li.appendChild(removeButton);
            // This adds the remove button to the list item.
    
            taskList.appendChild(li);
            // This adds the complete list item (task text and remove button) to our task list.
    
            taskInput.value = "";
            // This clears the input field after adding the task, ready for the next task to be entered.
        }
    
        addButton.addEventListener('click', addTask);
        // This adds a click event listener to the add button. When clicked, it will call the addTask function.
    
        taskInput.addEventListener('keypress', function(event) {
        // This adds a keypress event listener to the input field.
    
            if (event.key === 'Enter') {
            // This checks if the pressed key is the Enter key.
    
                addTask();
                // If Enter was pressed, this calls the addTask function.
            }
        });
    
        addTask();
        // This calls the addTask function once when the page loads.
        // In this case, it doesn't actually add a task, but it ensures the function is working and ready to use.
    });