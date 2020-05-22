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

/**
 * setup 充当在组件内部使用Composition API的入口点。
 * setup创建组件实例时，在初始道具解析后立即调用。在生命周期方面，它在beforeCreate挂接之前被调用。
 * setup接受两个参数，第一个参数是props(默认是响应式)， 另一个参数是context，
 *  >return 返回一个对象,返回数据和方法
 */
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

