<template>
  <div class="">
    <p>这里是child的provide：：{{myprovide}}</p>
    <child-one />
  </div>
</template>
<script>
import ChildOne from './child-one.vue'
import {inject} from 'vue'
export default {
  components: {ChildOne},
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
