<template>
<!-- 多个v-model同时使用 -->
  <input v-model="name">
  <input v-model="email">
  <my-com  v-model:name="name" v-model:email="email" ></my-com>
</template>

<script>
import myCom from './child.vue'
import { toRefs, reactive } from 'vue'
export default {
  components:{
    myCom,
    // myCom: defineAsyncComponent(()=>import('./a.vue'))
  },
  setup(){
    let state = reactive({
      name: 'tom',
      email: 'a@b.com'
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>