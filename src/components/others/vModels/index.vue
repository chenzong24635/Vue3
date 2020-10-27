<template>
  <!-- 多个v-model同时使用 -->
  <!-- <input v-model="name">
  <input v-model="email">
  <my-com  v-model:name="name" v-model:email="email" ></my-com> -->

  <p>{{name}}</p>
  <p>{{email}}</p>
  <my-com  v-model:name.trim="name" v-model:email="email" ></my-com>
</template>

<script>
import { toRefs, reactive, defineAsyncComponent } from 'vue'
export default {
  components:{
    myCom: defineAsyncComponent(()=>import('./child.vue'))
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