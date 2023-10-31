class Todo {
    constructor(id, description) {
      this._id = id;
      this._description = description;
    }
  
    get id() {
      return this._id;
    }
  
    get description() {
      return this._description;
    }
  
    set description(newDescription) {
      this._description = newDescription;
    }
  }
  
  // Create a module for managing Todo items
  const TodoManagement = {
    todos: [],
  
    addTodo: function(id, description) {
      const newTodo = new Todo(id, description);
      this.todos.push(newTodo);
    },
  
    updateTodoDescription: function(id, newDescription) {
      const todoToUpdate = this.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.description = newDescription;
      }
    },
  
    deleteTodo: function(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  
    getTodos: function() {
      return this.todos;
    },
  };
  
  module.exports = TodoManagement;