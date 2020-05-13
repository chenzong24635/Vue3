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
import { reactive, toRefs, watch, watchEffect } from 'vue'

export default {
  setup() {
    const state = reactive({
      age: 11,
      obj: {
        name: 'tom',
        arr: [1,2,3]
      }
    })

    state.age = 666

    //监听某个响应对象 
    const stopWatch = watch(
      () => state.age,
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
      {
        lazy: true
      }
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
        stopWatch()
      },
      handleStopWatchEffect(){
        stopWatchEffect()
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
