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
 * reactive: 创建响应式数据对象 //相当于2.x的Vue.observable()
 * toRefs: 将 reactive 创建的对象展开为ref
 * toRef： 将 reactive 创建的对象的某个属性展开为ref
 * isRef: 检查值是否是 ref 生成的响应式数据对象
 * isProxy: 检查对象是否是由reactive或readonly创建的
 * isReactive: 检查值是否是 reactive 生成的响应式数据对象
 * readonly: 设置为只读
*/
import {
  ref, 
  reactive, 
  toRef, 
  toRefs, 
  isRef, 
  isReactive, 
  readonly, 
  isProxy,
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
    console.log('age：',age, isRef(age)); // {value: 11,_isRef: true} , true

    console.log('isReactive(state)：',isReactive(state)); // true
    console.log('isReactive(readonlyState):',isReactive(readonlyState)); // true
    console.log('isProxy(state)：',isProxy(state)); // true
    console.log('isProxy(readonlyState)：',isProxy(readonlyState)); // true
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
      phone, //ref作为渲染上下文（从中返回的对象setup()）的属性返回并在模板中进行访问时 它会自动展开为内部值。无需在模板中追加 .value
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
