// This function runs when the webpage finishes loading
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input field, add button, and to-do list
    const addButton = document.getElementById('add-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // When the "Add" button is clicked, call the addTodo function
    addButton.addEventListener('click', addTodo);
    
    // When the Enter key is pressed in the input field, call the addTodo function
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // This function adds a new to-do item to the list
    function addTodo() {
        // Get the text from the input field and remove any extra spaces
        const todoText = inputField.value.trim();

        // If the input field is not empty
        if (todoText !== '') {
            // Create a new list item (li) element
            const todoItem = document.createElement('li');
            // Set the text of the list item to the input field value
            todoItem.textContent = todoText;

            // Create a new button element for deleting the to-do item
            const deleteButton = document.createElement('button');
            // Set the button text to 'Delete'
            deleteButton.textContent = 'Delete';
            // When the delete button is clicked, remove the to-do item from the list
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(todoItem);
            });

            // Add the delete button to the list item
            todoItem.appendChild(deleteButton);
            // Add the list item to the to-do list
            todoList.appendChild(todoItem);

            // Clear the input field for the next to-do item
            inputField.value = '';
        }
    }
});
