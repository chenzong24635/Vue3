<template>
  <div class="child">
    <div>我是子组件</div>
    <h3>{{sum}}</h3>
  </div>
</template>

<script>import { ref,onRenderTracked,onRenderTriggered } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const sum = ref(0);
    let data = new Promise((resolve) => {
      setTimeout(() => {
        resolve(sum);
      }, 3000);
     
    });
    onRenderTracked(()=>{
    // 
console.error(111);
    debugger
  })
    onRenderTriggered(()=>{
    // 检查哪个依赖项导致组件重新呈现
console.error(222);
    debugger
  })
    return data
  },

};
</script>
<style scoped>
.child {
  padding: 10px;
  background-color: #e8f;
}
</style>