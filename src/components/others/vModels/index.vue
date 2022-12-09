<template>
  <!-- 多个v-model同时使用 -->
  <!-- <input v-model="name">
  <input v-model="email">
  <my-com  v-model:name="name" v-model:email="email" ></my-com> -->

  <p>{{name}}</p>
  <p>{{email}}</p>
  <my-com  v-model:name.trim="name" v-model:email="email" ></my-com>
  <input :value="searchText" @input="searchText = $event.target.value">
  <my-com
    :modelValue="searchText"
    @update:modelValue="newValue => searchText = newValue"
  />
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
      email: 'a@b.com',
      searchText: 'abc'
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>