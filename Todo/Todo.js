class Todo {
    static nextId = 1
    constructor(description) {
      this.id = Todo.nextId++
      this.description = description
    }
    getTodo() {
      return this
    }
    setDescription(newDescription) {
      this.description = newDescription
    }
  }
  module.exports = { Todo }