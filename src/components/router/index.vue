<template>
  <div class="">
  <!-- router-link 添加 scoped-slot API 和 custom 属性 -->
  <router-link to="/" custom v-slot="{ href, navigate, isActive }">
    <div :class="{ 'active': isActive }">
      <p>{{href}}</p>
      <p>{{navigate}}</p>
      <p>{{isActive}}</p>
      <a :href="href" @click="navigate">Home</a>
    </div>
  </router-link>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  setup () {
    let router = useRouter()
    let route = useRoute()
    console.log(router)
    console.log(route)
    return {
      router,
      route,
      navigate: ()=>{
        console.log(1)
      }
    }
  }
}
</script>
<style scoped >
</style>
