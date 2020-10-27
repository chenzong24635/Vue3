<template>
    <div id="nav">
      <div
        v-for="item in routes"
        :key="item.name"
      >
        <router-link  :to="item.path">{{item.name}}</router-link>
      </div>
      <p style="border-top:1px solid #ddd"></p>
    </div>
    <router-view/>
</template>
<script>
import {routes} from './router/routes'
import { computed } from 'vue'
export default {
  setup(){
    return{
      routes: computed(()=>routes.filter(item=>!item.meta || !item.meta.hide))
    }
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
    display: inline-block;
    margin: 5px 0;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
