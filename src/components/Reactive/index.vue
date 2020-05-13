<template>
  <div class="">
    <p>name:{{name}}</p>
    <p>phone:{{phone}}</p>
    <!-- <p>phone1:{{phone1}}</p> -->
    <p>age:{{age}}</p>

    <div ref="refA">ref 组件实例</div>

    <button @click="add1">addAge</button>
    <button @click="add2">addAge--readonly</button>

  </div>
</template>
<script>
/** 
 * ref : 创建一个响应式的数据对象 ,通过 .value 获取值
 * reactive: 创建响应式数据对象
 * toRefs: 将 reactive 创建的对象展开为ref
 * toRef： 将 reactive 创建的对象的某个属性展开为ref
 * isRef: 检查值是否是 ref 生成的响应式数据对象
 * isReactive: 检查值是否是 reactive 生成的响应式数据对象
 * readonly: 只读
*/
import {
  ref, 
  reactive, 
  toRef, 
  toRefs, 
  isRef, 
  isReactive, 
  readonly, 
  onMounted
} from 'vue'

export default {
  setup() {
    const state = reactive({
      name: 'Tom',
      age: 11,
    })

    const readonlyState = readonly(state)

    const phone = ref(18888888888)
    phone.value = 1222222
    console.log(phone);
    
    const {name} = state //解构后 name 变为非响应式
    console.log(name, isRef(name)); //Tom false

    // const {age} = toRefs(state)  //通过 toRefs 转换成可观察的响应式 Ref 对象
    const age = toRef(state, 'age')//通过 toRef 转换
    console.log(age, isRef(age)); // {value: 11,_isRef: true} , true

    console.log(isReactive(state)); // true
    console.log(isReactive(readonlyState)); // true
    console.log(isReactive(phone),isRef(phone)); //false true

    const methods = {
      add1() {
        state.age++
      },
      add2() { 
        //改变值会 警告： Set operation on key "age" failed: target is readonly. 
        readonlyState.age++
      },
    }

    const refA = ref(null)
    onMounted(() => {
      //获取子组件实例，调用其内部函数
      console.log(refA)
    })

    return {
      phone,
      readonlyState,
      age,
      ...toRefs(state),
      // ...toRef(state,'age'),
      ...methods
    }
  }
}
</script>
<style scoped >
</style>
