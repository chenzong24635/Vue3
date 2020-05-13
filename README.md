[Composition API RFC](https://composition-api.vuejs.org/#summary)


[Vue RFCs](https://github.com/vuejs/rfcs/blob/function-apis/active-rfcs)

[抄笔记：尤雨溪在Vue3.0 Beta直播里聊到了这些…](https://juejin.im/post/5e9f6b3251882573a855cd52)

# 
Vue2.x 使用 Options API   
Vue3 使用 Composition API（组合API）
![img](/src/assets/optionsAPI_compositionAPI.jpg)


体验
>vue create vue3 (vue-cli4版本)
>vue add vue-next 

基本使用
```js
import { createApp, createComponent } from 'vue'
// 根组件
const App = createComponent({
    components: { Counter },
    template: `
        <div class="container">
            <h3>计数器示例</h3>
            <Counter />
        </div>
    `
})
```



## Vue3基础API
```js
import {
  createApp,
  ref, // 创建一个响应式的数据对象
  reactive, // 创建响应式数据对象
  toRefs, // 将响应式数据对象转换为单一响应式对象
  isRef, // 判断某值是否是引用类型
  computed, // 创建计算属性
  watch, // 创建watch监听
  getCurrentInstance, // 当前组件的实例
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

```

## [生命周期](/src/components/LifeCycle)
![img](/src/assets/hook.jpg)


## setup()
是 vue3 中统一的入口函数,所有生命周期函数定义都是需要定义在次函数下才生效，  
setup 函数中无法访问到 this，所有的组件参数都是通过， 
setup函数中包含props和context参数，props参数默认是响应式的

setup函数会在 beforeCreate之后 created之前执行
```js
setup(props,context){

    //组件参数 上下文对象
    console.log(props,context)// {attrs, slots, emit}
} 
```

## [ref、reactive、isRef 、toRefs 、watchEffect](/src/components/Reactive)
* ref 创建一个引用值，它主要是对String,Number,Boolean等基本类型的数据响应

* reactive 函数接受一个普通对象 返回一个响应式数据对象; 好处是一次性可以观察多个属性

* toRefs 可以将 reactive 创建的可观察对象中的属性都转换成可观察的 Ref 对象，这样一来，即使解构后，也可以被独立进行观察了。

```html
为什么将可观察对象中的属性解构出来后，变成不再可观察了呢？因为通过 reactive 函数创建的可观察对象，内部的属性本身并不是可观察类型的，对他们访问和观察其实都是通过Proxy代理访问来实现的。如果将这些属性解构，这些属性就不再通过原对象的代理来访问了，就无法再进行观察。
```

## [getCurrentInstance](/src/components/GetCurrentInstance)
当前组件的实例


## [props、emit](/src/components/Props_Emit)

## [provide、inject](/src/components/Provide_Inject)

## [computed](/src/components/Computed)

## [watch](/src/components/Watch)

## [如何逻辑复用,替代mixins](/src/components/Mixins)
在vue2当中,如果我们想要复用逻辑，通常都是采用mixins来导入需要的函数方法，
单有很多的缺点，例如:
* 渲染上下文中公开的属性的来源不清楚。 例如，当使用多个 mixin 读取组件的模板时，可能很难确定从哪个 mixin 注入了特定的属性。
* 命名空间冲突。 mixins 可能会在属性和方法名称上发生冲突，

在vue3 利用CompositionAPI，通过在公用js导出，需要时 按需引入即可

## 碎片 Fragments
vue2创建一个Vue组件，只能有一个根节点

这意味着无法创建这样的组件：
```vue
<template>
  <div>Hello</div>
  <div>World</div>
</template>
```
原因是代表任何Vue组件的Vue实例都需要绑定到单个DOM元素中。  
创建具有多个DOM节点的组件的唯一方法是通过创建不具有基础Vue实例的功能组件。

vue3 
* 不再限于模板中的单个根节点
* render 函数也可以返回数组了，类似实现了 React.Fragments 的功能 

## 获取路由
```js
import { getCurrentInstance } from 'vue'

export default {
  setup () {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router.currentRoute.value)
  }
}
```

## 获取 Vuex 状态
```js
import { computed, getCurrentInstance } from 'vue'

export default {
  setup () {
    const { ctx } = getCurrentInstance()
    const isLogin = computed(() => ctx.$store.state.isLogin)
    console.log(isLogin);

    const update = () => {
      ctx.$store.commit('update', isLogin)
    }

    return {
      isLogin,
      update
    }
  }
}
```


## 多个v-model同时使用

## Suspense组件
* 可在嵌套层级中等待嵌套的异步依赖项
* 支持async setup()
* 支持异步组件


## Teleport
\<Teleport\>原先是对标 React Portal（增加多个新功能，更强）

但因为Chrome有个提案，会增加一个名为Portal的原生element，为避免命名冲突，改为Teleport

Teleport是特殊的组件，旨在在当前组件之外呈现某些内容。这也是这是处理模态框、弹出窗口和通常显示在页面顶部的组件的一种非常好的方法。
通过使用Portals，您可以确保没有任何主机组件CSS规则，会影响您要显示的组件，并使您免于使用进行讨厌的黑客攻击

vue2需通过portal-vue库实现

# 标签嵌套问题

# 未定义属性问题

