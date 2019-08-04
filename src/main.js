import Vue from 'vue'
import axios from 'axios'
import jwtDecode from "vue-jwt-decode"
import setAuthToken from "./utils/setAuthToken"
import * as actions from './store/action-types'

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

// Vue toastr
import VueToastr from "vue-toastr";
// use plugin
Vue.use(VueToastr, {
  timeout: 2000
})
// Check for token
if (localStorage.getItem("customer_jwt")) {
  // Getting token form local storage
  const token = localStorage.getItem("customer_jwt");
  // Set auth token to header auth
  setAuthToken(token);
  // Decoded token
  const decoded = jwtDecode.decode(token);
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout customer
    store.dispatch(actions.LOGOUT_CUSTOMER);
    // Redirect to login
    router.push({ name: "login" });
  }

  // Store customer to state
  store.dispatch(actions.SET_AUTH_CUSTOMER);
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
