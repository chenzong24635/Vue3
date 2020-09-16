<template>
  <div class="">
    <p>age--- {{age}}</p>
    <p>number--- {{number}}</p>
    <p>obj--- {{obj}}</p>
    <button @click="add">add</button>
    <button @click="changeObj">changeObj</button>
    <button @click="handleStopWatch">取消watch监听</button>
    <button @click="handleStopWatchEffect">取消watchEffect监听</button>
  </div>
</template>
<script>
import { ref, reactive, toRefs, watch, watchEffect,  } from 'vue'

export default {
  setup() {
    const state = reactive({
      age: 11,
      obj: {
        name: 'tom',
        arr: [1,2,3]
      }
    })
    const number = ref(0)
    console.log(number);

    state.age = 666

    // watch与Vue2.0中的$watch用法基本是一模一样的
    // watch监听某个响应对象
    const stopWatch = watch(
      number, // 直接是ref
      // () => state.age, //返回值的getter函数
      // () => state.obj,
      (val, prevVal) => {
        console.log(`watch: 新值： ${val}; 旧值： ${prevVal}`)
      },
      {
        // deep: true, // 深度监听
        immediate: true // 立即执行
      }
    )

    //监听多个响应对象
    watch(
      [
        () => state.age,
        () => state.obj,
      ],
      (
        [age, obj],
        [prevage, prevobj],
      ) => {
        console.log("age:",age,"prev age",prevage)
        console.log("obj:",obj,"prev obj",prevobj)
      },
      {
        deep: true // 是否触发深度监听
      }
    )

    // watchEffect
    // 与watch有所不同，watchEffect会传入一个函数，然后立即执行这个函数，
    // 对于函数里面的响应式依赖会进行监听，然后当依赖发生变化时，会重新调用传入的函数
    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect ', state.age)
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
      },
      handleStopWatchEffect(){
        stopWatchEffect() //取消watchEffect监听
      }
    }

    return {
      ...toRefs(state),
      number,
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
