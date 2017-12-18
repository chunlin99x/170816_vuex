export default {

  addTodo ({commit}, todo) {
    commit('ADD_TODO', {todo})   // action提交mutation时, 如果需要携带数据, 最好传包含数据的对象
  },

  removeTodo ({commit}, index) {
    commit('REMOVE_TODO', {index})
  }
}