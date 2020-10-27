<template>
  <div class="">
    <child-1 :level="1" >我是h1</child-1>
    <child-2 >
      abc
    </child-2>
  </div>
</template>
<script>
import { defineAsyncComponent, reactive,  } from 'vue'
export default { 
  components: {
    child1: defineAsyncComponent(()=>import('./child1.vue')),
    child2: defineAsyncComponent(()=>import('./child2.vue'))
  },
  setup () {
    const lists = reactive([
      {name:'a'},
      {name:'b'},
    ])
    return {
      lists
    }
  },
}
</script>
<style scoped >
</style>
