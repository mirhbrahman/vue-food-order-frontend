<template>
  <nav class="navbar is-fixed-top">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <router-link to='/' class="navbar-item">
          <img
          src="http://bulma.io/images/bulma-logo.png"
          alt=""
          width="112"
          height="28"
          >
        </router-link>

        <a
        class="navbar-item is-hidden-desktop"
        href="https://github.com/jgthms/bulma"
        target="_blank"
        >
        <span
        class="icon"
        style="color: #333;"
        >
        <i class="fa fa-github"></i>
      </span>
    </a>

    <a
    class="navbar-item is-hidden-desktop"
    href="https://twitter.com/jgthms"
    target="_blank"
    >
    <span
    class="icon"
    style="color: #55acee;"
    >
    <i class="fa fa-twitter"></i>
  </span>
</a>

<div
class="navbar-burger burger"
data-target="navMenubd-example"
>
<span></span>
<span></span>
<span></span>
</div>
</div>

<div
id="navMenubd-example"
class="navbar-menu"
>
<div class="navbar-start">
  <div v-for="(category, index) in categories" :key="index" class="navbar-item has-dropdown is-hoverable is-mega">

    <router-link  class="navbar-link" :to="{name: 'categoryProducts', params: {category: category.slug}}">{{category.name}}</router-link>
    <div
    :id="category.id"
    class="navbar-dropdown "
    data-style="width: 18rem;"
    >
    <div class="container is-fluid">
      <div class="columns">
        <div v-for="(subCat, index) in category.sub_categories" :key="index" class="column">

          <router-link  class="title is-6 is-mega-menu-title has-text-primary" :to="{name: 'subCategoryProducts', params: {sub_category: subCat.slug}}">{{subCat.name}}
          </router-link>

          <a
          v-for="(childCat, index) in subCat.child_categories" :key="index"
          class="navbar-item"
          href="/2017/08/03/list-of-tags/"
          >
          <router-link  class="navbar-content has-text-dark" :to="{name: 'childCategoryProducts', params: {child_category: childCat.slug}}">{{childCat.name}}
          </router-link>
          
        </a>
      </div>
    </div>
  </div>

  <hr class="navbar-divider">
  <div class="navbar-item">
    <div class="navbar-content">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <strong>Hungry! Order now</strong>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <a
            class="button bd-is-rss is-small"
            href="http://bulma.io/atom.xml"
            >
            <span class="icon is-small">
              <i class="fa fa-rss"></i>
            </span>
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

<div class="navbar-end">
  <div class="navbar-item">
    <div class="field is-grouped">
      <p class="control">
        <router-link to="/cart" class="button is-primary is-outlined is-small">
      
        <span class="icon">
          <i class="fa fa-shopping-cart"></i>
        </span>
        <span>{{cartCount}}</span>
      </router-link>
    </p>
  </div>
</div>

<a v-if="isLogin" class="navbar-item has-text-danger" @click='logout'>Logout</a>

<router-link v-if="!isLogin" to="/login" class="navbar-item">Login</router-link>
<router-link v-if="!isLogin" to="/register" class="navbar-item">Register</router-link>

</div>
</div>
</div>
</nav>

</template>

<script>
  import store from '../../../store'
  import * as actions from '../../../store/action-types'
  import { mapGetters } from 'vuex'

  export default {
    mounted(){
      store.dispatch(actions.CART_COUNT)
      store.dispatch(actions.GET_CATEGORIES)
    },
    computed: {
      ...mapGetters({
        isLogin: 'isLogin',
        categories: 'getCategories',
        cartCount: 'getCartCount'
      })
    },
    methods: {
      logout(){
        store.dispatch(actions.LOGOUT_CUSTOMER)
      }
    }
  }
</script>
