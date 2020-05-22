<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      
      <router-link to="/setup">setup</router-link>
      <router-link to="/lifeCycle">lifeCycle</router-link>
      <router-link to="/reactive"> ref, reactive, toRefs, isRef, readonly</router-link>
      <router-link to="/props-emit">props-emit</router-link>
      <router-link to="/provide-inject">provide-inject</router-link>
      <router-link to="/computed">computed</router-link>
      <router-link to="/watch">watch</router-link>
      <router-link to="/mixins">mixins</router-link>
      <router-link to="/getCurrentInstance">getCurrentInstance</router-link>
      <p style="border-top:1px solid #ddd"></p>
    </div>
    <router-view/>
  </div>
</template>
<script>
// import { reactive, watchEffect } from 'vue'

export default {
  setup(){
    
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px 0;

  a {
    display: block;
    margin: 10px 0;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
