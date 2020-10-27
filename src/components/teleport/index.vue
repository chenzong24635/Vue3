<template>
  
  <button @click="modalOpen = true">
    点我打开模态框 (With teleport!)
  </button>
  <div id="container"></div>
    
  <!-- 渲染为body标签 的子级-->
  <teleport to="body">
  <!-- <teleport to="#container"> -->
    <div v-if="modalOpen" class="modal">
      <div >
        <p>I'm a teleported modal! (My parent is "body")</p>
        <!-- teleport也可以嵌入组件 -->
        <v-child />
        <button @click="modalOpen = false">
          点我关闭
        </button>
      </div>
    </div>
  </teleport>
  
  <!-- 在同一目标上使用多个 teleport -->
  <teleport to="body" >
    <div v-if="modalOpen" class="modal" style="margin-top:20px">
      我是另一个挂在body上的teleport
      
    </div>
  </teleport>

  <!-- 使用disabled属性 -->
  <teleport to="body" disabled>
    <div v-if="modalOpen" class="modal" style="margin-top:20px">
      我是个本该挂在body上的teleport，但使用 disabled 属性，因此不会移动，挂载在定义的位置
      
    </div>
  </teleport>
</template>
<script>
import {defineAsyncComponent, ref} from 'vue'
export default {
  components: {
    vChild: defineAsyncComponent(()=>import('./child.vue')),
  },
  setup(){
    const modalOpen = ref(false)
    return {modalOpen}
  }
}
</script>
<style scoped >
.modal{
  text-align: center;
}
</style>
