import { createApp} from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import customDirectives from '@/directives'

const app = createApp(App)
app.config.globalProperties.$api = ()=>{
  console.log('全局方法');
}
app.use(customDirectives).use(router).use(store).mount('#app')
