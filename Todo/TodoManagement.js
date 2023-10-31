const { Todo } = require('./Todo/Todo.js')
function todoManagement() {
  let todos = []
  function addTodo(description) {
    const todo = new Todo(description)
    return todos.push(todo)
  }
  function findTodo(searchId) {
    // console.log(todos)
    const result = todos.find((todo) => searchId === todo.id)
    return result
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => searchId === todo.id)
  }
  function removeTodo(removeId) {
    todos.splice(findIndexTodo(removeId), 1)
    console.log(todos)
  }
  function getTodos() {
    return todos
  }
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos
  }
}
function doSomething(msg) {
  return msg
}
module.exports = { todoManagement, doSomething }