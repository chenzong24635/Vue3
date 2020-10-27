<template>
  <div>
    <p>---</p>
    <!-- <p>姓名：{{name}}</p>
    <p>邮箱：{{email}}</p> -->
    <input :value="name" @input="$emit('update:name', $event.target.value)">
    <input :value="email" @input="$emit('update:email', $event.target.value)">
  </div>
</template>
<script>
export default {
  props: ['name','email','nameModifiers'],
  setup(props) {
    // 获取修饰符对象
    console.log(props.nameModifiers); // {trim: true}
  }
};
</script>