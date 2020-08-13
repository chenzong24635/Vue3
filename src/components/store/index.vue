<template>
  <div class="">
    <p>user:{{user}}</p>
    <button @click="change">change</button>
    <p>isLogin:{{isLogin}}</p>
    <button @click="setLogin(!isLogin)">setLogin</button>


  </div>
</template>
<script>
import { mapMutations ,useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup () {
    const store = useStore()
    console.log(store)

    let user = store.state.user
    let setUserAge = (val) => {
      store.commit('setUserAge',val)
    }
    console.log(user)

    function change(){
      setUserAge(++user.age)
    }

    let isLogin = computed(()=>store.state.isLogin)
    console.log(isLogin)

    return{
      store,
      user,
      change,
      isLogin,
      ...mapMutations([
        'setLogin'
      ])
    }
  }
}
</script>
<style scoped >
</style>
