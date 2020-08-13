<template>
  <div class="content">
    <p>{{num}}</p>
    <button @click="add">add</button>
    <p>----</p>
    <div>
      <router-link to="/LifeCycle1">查看组件销毁</router-link>
    </div>
  </div>
</template>

<script>
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

