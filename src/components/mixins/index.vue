<template>
  <div>
    <p>改变窗口大小</p>
    <h1>{{WidthResize}}</h1>
    <h1>{{HeightResize}}</h1>
  </div>
</template>

<script>
import  {useResize, onMountedFn}  from './common.js'//导入用于逻辑复用的文件
import { onMounted } from 'vue'

export default {
  setup(){
    const { width: WidthResize, height:  HeightResize} = useResize()
    //利用es6语法的解构，将需要用到的属性名或者方法结构出来
    //如果遇到变量名重复的情况，可以在解构值的后面加上自定义的属性名,如WidthResize
    
    onMounted(onMountedFn)
    onMounted(() => {
      console.log('onMounted');
    })
    
    return{
      WidthResize,
      HeightResize
    }
  }
}
</script>
