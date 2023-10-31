const { Todo, TodoManagement } = require('./ToDoManagement.js');

// Add a new todo
TodoManagement.addTodo(1, "Buy groceries");

// Update a todo's description
TodoManagement.updateTodoDescription(1, "Buy vegetables");

// Delete a todo
TodoManagement.deleteTodo(1);

// Get the list of todos
const todos = TodoManagement.getTodos();
console.log(todos);