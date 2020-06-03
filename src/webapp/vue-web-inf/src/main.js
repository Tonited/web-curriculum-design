import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import constantRouter from './router';
import store from './stores'


Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router: constantRouter,
  store,
  render: h => h(App),
}).$mount('#app')
