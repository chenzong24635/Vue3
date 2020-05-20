<template>
  <div>
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
 * setup 函数是个新的入口函数，初始化状态，
 * 相当于 vue2.x 中 beforeCreate 和 created，在 beforeCreate 和 created 之前执行。
 * setup接受两个参数，第一个参数是props(默认是响应式)， 另一个参数是context，
 *  >return 返回数据和方法
 * 
 * 生命周期钩子变更
 * beforeCreate -> 请使用 setup()
 * created -> 请使用 setup()
 * beforeMount -> onBeforeMount
 * mounted -> onMounted
 * beforeUpdate -> onBeforeUpdate
 * updated -> onUpdated
 * beforeDestroy -> onBeforeUnmount
 * destroyed -> onUnmounted
 * errorCaptured -> onErrorCaptured
 * onRenderTracked,
 * onRenderTriggered,
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
  setup(props,context) {
    console.log(props,context); // context: {attrs, slots, emit}
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

