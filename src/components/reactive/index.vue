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
import {
  ref, 
  reactive, 
  toRef, 
  toRefs, 
  isRef, 
  isReactive, 
  readonly, 
  isProxy,
  onMounted,
  isReadonly,
  unref
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
    
    const {name} = state //解构后 name 变为非响应式
    console.log(name, isRef(name)); //Tom false

    // const {age} = toRefs(state)  //通过 toRefs 转换成可观察的响应式 Ref 对象
    const age = toRef(state, 'age')//通过 toRef 转换
    console.log('age：',age, isRef(age)); // {value: 11,_isRef: true} , true

    console.log('isReadonly(readonlyState)',isReadonly(readonlyState)) // true
    console.log('isReactive(state)：',isReactive(state)); // true
    console.log('isReactive(readonlyState):',isReactive(readonlyState)); // true
    console.log('isProxy(state)：',isProxy(state)); // true
    console.log('isProxy(readonlyState)：',isProxy(readonlyState)); // true
    console.log(isReactive(phone),isRef(phone)); //false true
    console.log('unref(phone)',unref(phone)); // 1222222
    console.log('unref(state.name)',unref(state.name)); // Tom
    

    const methods = {
      add1() {
        state.age++
      },
      add2() { 
        //改变值会 警告： Set operation on key "age" failed: target is readonly. 
        readonlyState.age++
      },
    }

    const refA = ref(null) // 获取组件
    // 必须return refA，组件必须绑定ref属性(ref="refA")
    onMounted(() => {
      //获取子组件实例，调用其内部函数
      console.log(1,refA)
    })

    return {
      phone, //ref作为渲染上下文（从中返回的对象setup()）的属性返回并在模板中进行访问时 它会自动展开为内部值。无需在模板中追加 .value
      readonlyState,
      age,
      refA,
      ...toRefs(state),
      // ...toRef(state,'age'),
      ...methods
    }
  }
}
</script>
<style scoped >
</style>
