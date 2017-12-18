<template>
  <div>
    ----clicked: {{count}} times, count is {{evenOrOdd}}
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    /*
    computed: mapGetters(['evenOrOdd']),
    computed: mapState(['count']),
    */
    computed: {
      ...mapState(['count']),
      ...mapGetters({
        evenOrOdd2: 'evenOrOdd'
      }),
    },

    /*
    ...
    1. 函数形参
      function fn (...as)  //as包含所有实参的数组
      fn(1, 2)
      fn(1, 3, 5)

    2. 数组中
      const arr1 = [4, 6]
      const arr2 = [1, 3, ...arr1]

    3. 三点操作符的作用:
      1). 打包: 函数形参
      2). 解包: 数组

    */
    /*computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters['evenOrOdd']
      }
    },*/
    mounted () {
      console.log('mounted()', this.$store)
    },

    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }

  }
</script>

<style>

</style>