import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleProduct from './views/SingleProduct.vue'
import Category from './views/Category.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
},
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:slug',
      name: 'singleProduct',
      component: SingleProduct,
      props: true
    },
    {
      path: '/category/:category',
      name: 'categoryProducts',
      component: Category,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
