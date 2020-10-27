<script>
import { h } from 'vue'
export default {
  render() {
    return h(
      'h' + this.level,
      {
        class: 'h1'
      },
      this.$slots.default()
      // 'abcd'
      /* Array.apply(null, { length: 3 }).map(() => {
        return h('p', 'hi')
      }) */
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped >
</style>
