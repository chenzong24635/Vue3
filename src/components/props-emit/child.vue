<template>
  <div>
    {{props}}
    <button @click="handleClick">触发方法</button>
  </div>
</template>

<script>
export default {
  props:{
    name: String
  },
  setup(props, {emit} ){
    const handleClick = () => {
      console.log('父组件props传给子组件的值：',props)
      emit('childClick', '我是子组件的值')
    }
    return {
      props,
      handleClick
    }
  }
}
</script>