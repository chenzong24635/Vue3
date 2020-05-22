<template>
  <div class="">
    <p>store的state数据：{{storeState}}</p>
    <div>
      <button @click="update" >update Store age</button>
    </div>
  </div>
</template>
<script>
// 当前组件的实例
import { computed, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
  setup () {
    let currentInstance = getCurrentInstance()
    console.log('当前组件的实例', currentInstance)

    const {ctx} = currentInstance

    const currentRoute = ctx.$router.currentRoute.value
    console.log('组件路由参数',currentRoute);

    //路由
    const router = useRouter()
    console.log(router.currentRoute.value);
    console.log(router.currentRoute.value == currentRoute); //true

    // ctx的 通过计算属性使用 Vuex 状态
    const storeState = computed(() => ctx.$store.state)
    console.log(ctx.$store);//undefinde 直接获取不到$store
    // console.log(ctx.$store.state.user);// 会报错，因为 ctx.$store 为undefined，没有 state 属性
    console.log(storeState);

    // useStore的 Vuex 状态
    const store = useStore()
    console.log(store);

    const update = () => {
      // ctx.$store.commit('setUserAge', Math.floor(Math.random()*10))
      store.commit('setUserAge', Math.floor(Math.random()*100))
    }

    

    return {
      storeState,
      update,
    }
  }
}
</script>
<style scoped >
</style>
