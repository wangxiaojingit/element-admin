import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
// 第三方的包
import ElementUi from "element-ui"
// 全局配置
import "./common/reset.css";
import 'element-ui/lib/theme-chalk/index.css';
import  http from "./api/config";
import './mock'

// 把http对象挂载到Vue的原型上，供Vue的所有实例都可以调用
Vue.prototype.$http=http;



Vue.use(ElementUi);
router.beforeEach((to,from,next)=>{
    console.log(to);
    next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
