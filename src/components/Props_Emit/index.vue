<template>
  <div>
    {{childMessage}}
    <my-child :name="name" @childClick="parentClick" />
  </div>
</template>

<script>
import {ref} from 'vue'
import myChild from './child.vue'
export default {
  components:{
    myChild
  },
  setup(){
    const name = ref('父传子的值')
    const childMessage = ref(null);
    const parentClick = (e)=> {
      console.log('子组件emit返回值：',e)
      childMessage.value = e
    }
    return {
      name,
      childMessage,
      parentClick
    }
  }  
}
</script>