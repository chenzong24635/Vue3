<template>
  <div class="">
    <p>这里是child-one的provide：{{myprovide}}</p>
  </div>
</template>
<script>
import {inject} from 'vue'
export default {
  setup() {
    let myprovide = inject('myprovide')
    return {
      myprovide
    }
  }
}
</script>
<style scoped >
</style>
