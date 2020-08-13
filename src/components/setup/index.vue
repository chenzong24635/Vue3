<template>
  <div class="content">
    <!-- <p>{{num}}</p>
    <button @click="add">add</button>
    <div>
      <router-link to="/LifeCycle1">LifeCycle1</router-link>
    </div> -->
  </div>
</template>

<script>

import {
  h,
  reactive,
  ref,
} from 'vue'

export default {
  beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },
  // props，上下文对象
  setup(props,context) {
    console.log(props,context); // context: {attrs, slots, emit}
    console.log('setup');
    /*const num = ref(0)
    const methods = {
      add() {
        num.value++
      }
    }
    return {
      num,
      ...methods
    } */

    // 渲染功能/ JSX的用法
    // setup 还可以返回一个 render 函数，该函数可以直接使用在同一作用域中声明的反应状态：
    const count = ref(0)
    const object = reactive({ foo: 'render' })
    return () => h('div', [count.value, object.foo])
  }
}
</script>
<style lang="less">

</style>

