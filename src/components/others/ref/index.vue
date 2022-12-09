<template>
  <div class="">
    <div ref="refA">ref 组件实例</div>
    
    
    <div v-for="item in lists" :key="item" :ref="setItemRef">
      {{item}}
    </div>
    <button @click="addList">add</button>
  </div>
</template>
<script>
import { ref,onMounted, reactive, onBeforeUpdate, onUpdated,  } from 'vue'
export default {
  setup () {

    const refA = ref(null) // 获取组件
    // 必须在最后return refA，组件必须绑定ref属性(ref="refA")
    onMounted(() => {
      //获取子组件实例，调用其内部函数
      console.log('refA',refA)
    })

    let lists = reactive([1,2,3])
    const addList = ()=>{
      lists.push(lists.length+1)
    }

    let itemRefs = reactive([])
    const setItemRef = el => {
      itemRefs.push(el)
    }
    onBeforeUpdate(() => {
      itemRefs = reactive([])
    })
    onUpdated(() => {
      console.log('itemRefs',itemRefs)
    })


    return {
      refA,
      lists,
      addList,
      setItemRef
    }
  }
}
</script>
<style scoped >
</style>
