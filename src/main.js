import Vue from 'vue'
import axios from 'axios'

// Custom css
import 'bulma/css/bulma.css'
import './assets/css/style.css'

// Util files
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// Setup axios to be available globally through Vue
Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
