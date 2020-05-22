<template>
  <div class="test">
    {{x}}--{{y}}
  </div>
</template>

<script >
import { ref, onMounted, onUnmounted } from 'vue'

export  default{
  setup() {
    const { x, y } = useMouse()
    return { x, y }
  }
}

// 可以看到，useMouse 将所有与 “处理鼠标位置” 相关的逻辑都封装了进去，乍一看与 React Hooks 很像，但是有两个区别：
// useMouse 函数内改变 x、y 后，不会重新触发 setup 执行。
// x y 拿到的都是 Wrapper 而不是原始值，且这个值会动态变化。


/* 由于 setup 函数仅执行一次，怎么做到当 useMouse 导致 x、y 值变化时，可以在 setup 中拿到最新的值？ */
// 在 Vue 中，将 Hooks 与 Immutable 深度结合，通过包装 x.value，使得当 x 变更时，引用保持不变，仅值发生了变化。
// 所以 Vue 利用 Proxy 监听机制，可以做到 setup 函数不重新执行，但 Template 重新渲染的效果。


function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
</script>
