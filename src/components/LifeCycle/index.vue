<template>
  <div class="content">
    <p>{{num}}</p>
    <button @click="add">add</button>
    <div>
      <router-link to="/LifeCycle1">LifeCycle1</router-link>
    </div>
    <!-- 生命周期调用顺序 -->

    <!-- 创建 -->
    <!-- 
      setup ->
      onRenderTracked ->
      onBeforeMount ->
      onRenderTracked ->
      onMounted ->
      onRenderTriggered  ->
      onRenderTracked  ->
      onBeforeUpdate  ->
      onUpdated  ->
    -->

    <!-- 更新 -->
    <!-- 
      onRenderTriggered ->
      onRenderTracked  ->
      onBeforeUpdate ->
      onUpdated ->
    -->

    <!-- 销毁 -->
    <!-- 
      旧 onBeforeUnmount  ->
      新 setup  ->
      新 onRenderTracked ->
      新 onBeforeMount  ->
      旧 onUnmounted  ->
      新 onMounted  ->
    -->
  </div>
</template>

<script>

/**
 * 2.x生命周期选项和Composition API之间的映射
 * beforeCreate -> 使用 setup()
 * created -> 使用 setup()
 * beforeMount -> onBeforeMount
 * mounted -> onMounted
 * beforeUpdate -> onBeforeUpdate
 * updated -> onUpdated
 * beforeDestroy -> onBeforeUnmount
 * destroyed -> onUnmounted
 * errorCaptured -> onErrorCaptured
 * onRenderTracked, 新增
 * onRenderTriggered, 新增
 * 
 * 两个新增的钩子都接收DebuggerEvent类似于onTrack和onTrigger观察者的选项：
 */
import {
  ref,
  // 生命周期钩子
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from 'vue'

export default {
  /* beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  }, */
  setup() {
    const num = ref(0)
    console.log('setup');

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
      num.value++
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })

    onRenderTracked(() => {
      console.log('onRenderTracked', '')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered', '')
    })

    const methods = {
      add() {
        num.value++
      }
    }
    return {
      num,
      ...methods
    }
  }
}
</script>
<style lang="less">

</style>

