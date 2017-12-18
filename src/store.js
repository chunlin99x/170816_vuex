/*
vuex最核心的store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 相当于data的对象
const state = {
  count: 0  // 初始化状态
}

// 包含多个直接更新状态的方法的对象
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

// 包含多个触发mutation调用间接更新状态的方法的对象
// 方法与component中的行为是一一对应的
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

const getters = {
  evenOrOdd (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})