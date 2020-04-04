import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import { List } from 'vant';
Vue.use(List);

axios.defaults.baseURL="https://gank.io/api/v2/";
Vue.prototype.axios=axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
