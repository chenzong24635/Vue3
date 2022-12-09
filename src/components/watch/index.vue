<template>
  <div class="">
    <p ref="refP">age--- {{age}}</p>
    <p>number--- {{number}}</p>
    <p>obj--- {{obj}}</p>
    <button @click="add">add</button>
    <button @click="changeObj">changeObj</button>
    <button @click="handleStopWatch">取消watch监听</button>
    <button @click="handleStopWatchEffect">取消watchEffect监听</button>
  </div>
</template>
<script>
import {onBeforeUpdate,ref, reactive, toRefs, watch, watchEffect,onUpdated  } from 'vue'

export default {
  setup() {
    const state = reactive({
      age: 11,
      obj: {
        name: 'tom',
        arr: [1,2,3]
      }
    })
    let number = ref(111)
    let refP = ref({value:1})
    console.log(number);

    state.age = 666

    // watch监听某个响应对象
    const stopWatch = watch(
      // number, // 直接监听ref
      () => state.obj,
      // () => state.age, //监听一个 getter
      // () => state.obj,
      (val, prevVal) => {
        console.log(`watch: 新值： ${val}; 旧值： ${prevVal}`)
      },
      {
        deep: true, // 深度监听
        immediate: true // 立即执行
      }
    )

    //监听多个响应对象
    const stopWatch1 = watch(
      [
        () => state.age,
        () => state.obj,
      ],
      (
        [age, obj],
        [prevage, prevobj],
      ) => {
        console.log("watch--- age:",age,"prev age",prevage)
        console.log("watch--- obj:",obj,"prev obj",prevobj)
      },
      {
        deep: true // 是否触发深度监听
      }
    )

    // watchEffect
    // 与watch有所不同，watchEffect会传入一个函数，然后立即执行这个函数，
    // 对于函数里面的响应式依赖会进行监听，然后当依赖发生变化时，会重新调用传入的函数
    const stopWatchEffect = watchEffect(
      () => {
        console.log('watchEffect--- age:', state.age,refP && refP.value.outerHTML)
      },
      {
        flush: 'post', //在组件更新后重新运行侦听器副作用
        // onTrigger(e) { // 侦听器调试
        //   console.log(e);v-cloak
        //   debugger
        // }
      }
    )
   
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate',refP.value.outerHTML);
      
    })
    onUpdated(() => {
      // state.age += 1
      console.log('onUpdated',refP.value.outerHTML);
    })
    
    const methods = {
      add() {
        state.obj.name = 333
        state.age++
        number.value++
      },
      changeObj() {
        state.obj.arr.push(444)
      },
      handleStopWatch(){
        stopWatch() //取消watch监听
        stopWatch1() //取消watch监听
      },
      handleStopWatchEffect(){
        stopWatchEffect() //取消watchEffect监听
      }
    }

    return {
      ...toRefs(state),
      number,
      refP,
      ...methods
    }
  }
}
</script>
<style scoped >
button{
  display: block;
  margin: 10px auto;
}
</style>
