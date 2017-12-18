import Vue from 'vue'
import counter from './components/counter.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(counter),  // h: 根据组件生成对应标签的函数
  // components: {counter},
  // template: '<counter />'
 /* render: function (createElement) {
    return createElement(counter)
  }*/
  store
})