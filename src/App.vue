<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      
      <router-link to="/LifeCycle">lifeCycle</router-link>
      <router-link to="/Reactive"> ref, reactive, toRefs, isRef, readonly</router-link>
      <router-link to="/Props_Emit">Props_Emit</router-link>
      <router-link to="/Provide_Inject">Provide_Inject</router-link>
      <router-link to="/Computed">Computed</router-link>
      <router-link to="/Watch">Watch</router-link>
      <router-link to="/Mixins">Mixins</router-link>
      <router-link to="/GetCurrentInstance">GetCurrentInstance</router-link>
      <p style="border-top:1px solid #ddd"></p>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0;

  a {
    display: block;
    margin: 10px 0;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
