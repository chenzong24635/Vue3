<template>
  <div class="content">
    <p>{{num}}</p>
    <button @click="add">查看数据更新</button>
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
  beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },
  setup() {
    const num = ref(0)
    console.log('初始化调用的生命周期---');
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
      console.log('组件销毁调用的生命周期---');
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
      // debugger;
    })

    const methods = {
      add() {
        console.log('以下是数据更新调用的生命周期---');
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

