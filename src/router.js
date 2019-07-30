import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleProduct from './views/SingleProduct.vue'
import Category from './views/Category.vue'
import SubCategory from './views/SubCategory.vue'
import ChildCategory from './views/ChildCategory.vue'
import SearchProduct from './views/SearchProduct.vue'

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
      path: '/sub-category/:sub_category',
      name: 'subCategoryProducts',
      component: SubCategory,
      props: true
    },
    {
      path: '/child-category/:child_category',
      name: 'childCategoryProducts',
      component: ChildCategory,
      props: true
    },
    ,
    {
      path: '/search/:term',
      name: 'searchProducts',
      component: SearchProduct,
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
