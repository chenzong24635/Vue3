<script>
import { h } from 'vue';
export default {
  render() {
  return h('div', {
    onClick: $event => console.log('clicked', $event.target)
  })
}
}
</script>
<style scoped >
</style>
