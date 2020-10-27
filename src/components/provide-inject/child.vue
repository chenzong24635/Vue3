<template>
  <div class="">
    <p>这里是child的provide：{{myprovide}}</p>
    <p>这里是child的响应式provide1：{{myprovide1}}</p>
    <child-one />
  </div>
</template>
<script>
import ChildOne from './child-one.vue'
import {inject, watchEffect} from 'vue'
export default {
  components: {ChildOne},
  setup() {
    // inject接受可选的默认值作为第二个参数。如果未提供默认值，并且在Provide上下文中找不到该属性，则inject返回undefined
    //然而试了下默认值未生效 
    let myprovide = inject('myprovide', '我是默认值')
    let myprovide1 = inject('myprovide1','我是默认值1')
    console.log(myprovide,myprovide1);

    watchEffect(() => {
      console.log(`theme set to: ${myprovide1.value}`)
    })
    return {
      myprovide,
      myprovide1
    }
  }
}
</script>
<style scoped >
</style>
