import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    user: {
      age: 12
    },
    isLogin: false
  },
  mutations: {
    setUserAge(state, val){
      state.user.age = val
      console.log(state, val);
    }
  },
  actions: {
  },
  modules: {
  }
});
