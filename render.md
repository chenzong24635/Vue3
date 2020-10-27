[render渲染函数使用](https://v3.cn.vuejs.org/guide/render-function.html#%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0)

# [render](/src\components\render\index.vue)

## h() 参数
h() 函数是一个用于创建 vnode 的实用程序。也许可以更准确地将其命名为 createVNode()，但由于频繁使用和简洁，它被称为 h() 。它接受三个参数
* tag: 必须值， 一个 HTML 标签名、一个组件、一个异步组件，或者 null
  >类型：{String | Object | Function | null}
  >使用 null 将会渲染一个注释

* props: 可选值，与 attribute、prop 和事件相对应的对象。
  >类型：{Object}

* vnode：可选的值，子 VNodes
  >类型： {String | Array | Object}
  >使用 `h()` 构建,或使用字符串获取 "文本 Vnode" 或者有 slot 的对象


## 使用 JavaScript 代替模板功能

### v-if 和 v-for
```js
import { h } from 'vue';
export default {
  props: ['items'],
  render() {
    console.log(this.items);
    if (this.items.length) {
      return h('ul', this.items.map((item) => {
        return h('li', item.name)
      }))
    } else {
      return h('p', 'No items found.')
    }
  }
}
```

## JSX
如果你写了很多渲染函数，上面这样的代码写起来很痛苦：
```js
render() {
  return h(
    'anchored-heading',
    {
      level: 1
    },
    [h('span', 'Hello'), ' world!']
  )
}
```

可以通过一个[babel插件](https://github.com/vuejs/jsx-next)，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。
```js
render() {
  return (
    <AnchoredHeading level={1}>
      <span>Hello</span> world!
    </AnchoredHeading>
  )
}
```