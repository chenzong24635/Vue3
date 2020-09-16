<template>
  <div class="">
  <!-- router-link 添加 scoped-slot API 和 custom 属性 -->
  <router-link to="/store" custom v-slot="{ href, navigate, isActive }">
    <div :class="{ 'active': isActive }">
      <p>href路由路径---:  {{href}}</p>
      <p>navigate路由跳转函数--:  <code>{{navigate}}</code></p>
      <p>isActive路由是否激活--:  {{isActive}}</p>
      <a :href="href" @click="navigate">跳到store页面</a>
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
