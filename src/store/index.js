import Vue from 'vue'
import Vuex from 'vuex'

import categories from './modules/categories'
import products from './modules/products'
import cart from './modules/cart'
import auth from './modules/auth'
import error from './modules/utils/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  	categories,
  	products,
  	cart,
  	auth,
  	error
  }
})
