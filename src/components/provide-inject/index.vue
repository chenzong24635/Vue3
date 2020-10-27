<template>
  <div class="">
    <p>age:{{age}}</p>
    <button @click="add">add</button>
    <my-child />
  </div>
</template>
<script>
import myChild from './child.vue'
import { provide, ref } from 'vue'

export default {
  components: {myChild},
  setup () {
    const age = ref(0)
    provide('myprovide')
    provide('myprovide1',age) //响应式的
    let methods = {
      add() {
        age.value++
      }
    }
    return {
      age,
      ...methods
    }
  }
  
}
</script>
<style scoped >
</style>
