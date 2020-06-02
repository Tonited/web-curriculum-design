import Vue from 'vue'
import App from './App.vue'
import constantRouter from './router';
import store from './stores'

Vue.config.productionTip = false

new Vue({
  router: constantRouter,
  store,
  render: h => h(App),
}).$mount('#app')
