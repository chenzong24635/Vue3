<template>
  <div class="">
    <p style="margin-bottom:60px">刷新页面查看有个过渡效果</p>
    <Suspense>
      <template #default>
        <v-child />
      </template>
      <!-- 先显示 fallback内容，等 default模板内容加载完成后再替换 -->
      <template #fallback>
        正在拼了命的加载…
      </template>
    </Suspense>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    vChild: defineAsyncComponent(()=>import('./child.vue'))
  },
  setup () {
    
  }
}
</script>
<style scoped >
</style>
