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
      
    })
let age1= computed({
        get(){
         return state.age
        },
        set(val){
          return val;
        }
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
    state.age1 = 1

    console.log(userMsg)
    console.log(state,state.age,age1,'--');

    const methods = {
      add() {
        state.age++
      }
    }

    return {
      ...toRefs(state),
      age1,
      count,
      userMsg,
      ...methods
    }
  }
}
</script>
<style scoped >
</style>
