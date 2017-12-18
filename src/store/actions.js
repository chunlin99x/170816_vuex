import storageUtil from '../util/storageUtil'
export default {

  addTodo ({commit}, todo) {
    commit('ADD_TODO', {todo})   // action提交mutation时, 如果需要携带数据, 最好传包含数据的对象
  },

  removeTodo ({commit}, index) {
    commit('REMOVE_TODO', {index})
  },

  selectAll ({commit}, isCheck) {
    commit('SELECT_ALL', {isCheck})
  },

  clearCompletedTodos ({commit}) {
    commit('CLEAR_COMPLETED_TODOS')
  },

  readSavedTodos ({commit} ) {
    // 模拟异步读取数据
    setTimeout(() => {
      const todos = storageUtil.readTodos()
      commit('RECEIVE_TODOS', {todos})
    }, 1000)

  }
}