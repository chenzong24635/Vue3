<template>
  <div class="">
    <p>age--- {{age}}</p>
    <p>age1--- {{age1}}</p>
    <p>count--- {{count}}</p>
    <p>userMsg--- {{userMsg}}</p>
    <button @click="add">add</button>
  </div>
</template>
<script>

import { reactive, toRefs, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      age: 11,
      age1: computed(()=> state.age - 1) 
    })

    //computed--函数的方式
    const count = computed(()=> 'age:' + state.age)
    console.log(count);
    //computed--对象自定义get set的形式
    const userMsg = computed({
      get(){
        return `我的年龄是:`+  state.age
      },
      set(val){
        state.age = val;
      }
    })

    state.age = 666
    console.log(userMsg)

    const methods = {
      add() {
        state.age++
      }
    }

    return {
      ...toRefs(state),
      count,
      userMsg,
      ...methods
    }
  }
}
</script>
<style scoped >
</style>
