import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
export function useResize(){
  const state = reactive({
    width: 0,
    height: 0
  })
  const update=(e)=>{
    const {innerWidth, innerHeight} = e.currentTarget
    state.width = innerWidth
    state.height = innerHeight
  }
  onMounted(()=>{
    window.addEventListener('resize',update)
  })
  onUnmounted(()=>{
    window.removeEventListener('resize',update)
  })
  return {
      ...toRefs(state)
  }
}

export function  onMountedFn() {
  console.log('common onMounted');
}
