<template>
  <div class="">
    <p>age:{{age}}</p>
    <button @click="add">add</button>
    <my-child />
  </div>
</template>
<script>
import myChild from './child.vue'
import { provide, toRefs, reactive } from 'vue'

export default {
  components: {myChild},
  setup () {
    const state = reactive({
      age: 11,
    })
    // state.age++
    provide('myprovide',state.age)

    let methods = {
      add() {
        state.age++
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
</style>
