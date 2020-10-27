// 所有全局指令
const directives = {
  myDirective: {
    beforeMount(el,binding,vnode,prevNode){
      console.log('beforeMount',el,binding,vnode,prevNode);
    },
    mounted(el,binding,vnode,prevNode){
      console.log('mounted',el,binding,vnode,prevNode);
    }
  }
}

export default {
  install(app) {
    let keys = Reflect.ownKeys(directives);
    console.log(keys);
    keys.forEach(key=>{
      // 依次注册指令
      app.directive(key,directives[key]);
    })
  }
}