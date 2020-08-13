<template>
  <div>
    <p>---</p>
    <p>姓名：{{name}}</p>
    <p>邮箱：{{email}}</p>
  </div>
</template>
<script>
export default {
  props: ['name','email'],
};
</script>