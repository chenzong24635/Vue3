<template>
  <div class="">
    <p>age--- {{age}}</p>
    <p>obj--- {{obj}}</p>
    <button @click="add">add</button>
    <button @click="changeObj">changeObj</button>
    <button @click="handleStopWatch">停止watch</button>
    <button @click="handleStopWatchEffect">停止watchEffect</button>


  </div>
</template>
<script>

/** 
 * watch : 创建 watch 监听
 * watchEffect : 如果响应性的属性改变，就会触发这个函数
*/
import { ref, reactive, toRefs, watch, watchEffect } from 'vue'

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

    //监听某个响应对象
    
    const stopWatch = watch(
      // number, // 直接是ref
      () => state.age, //返回值的getter函数
      (val, prevVal) => {
        console.log(`watch: age 当前值 ${val}; 改变前的值 ${prevVal}`)
      },
      /* {
        lazy: true // 是否触发深度监听
      } */
    )

    //监听多个响应对象
    /* watch(
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
    ) */

    //watchEffect
    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect ', state.age)
    })
    

    const methods = {
      add() {
        state.age++
      },
      changeObj() {
        state.obj.arr.push(444)
      },
      handleStopWatch(){
        stopWatch() //停止watch
      },
      handleStopWatchEffect(){
        stopWatchEffect() //停止watchEffect
      }
    }

    return {
      ...toRefs(state),
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
