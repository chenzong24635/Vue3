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
    const num1 = ref(1)

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

    onRenderTracked((event) => {
      console.log('onRenderTracked', '渲染的时候可以追踪到',event)
    })
    onRenderTriggered((event) => {
      console.log('onRenderTriggered', '数据更新时触发',event)
      // debugger;
    })

    const methods = {
      add() {
        console.log('以下是数据更新调用的生命周期---');
        num.value++
        num1.value++

      }
    }
    return {
      num,
      num1,
      ...methods
    }
  }
}
</script>
<style lang="less">

</style>

