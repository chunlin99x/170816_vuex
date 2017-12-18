export default {

  ADD_TODO (state, {todo}) {
    state.todos.unshift(todo)
  },

  REMOVE_TODO (state, {index}) {
    state.todos.splice(index, 1)
  }
}