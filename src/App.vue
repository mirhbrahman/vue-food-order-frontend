<template>
  <div id="app" class="">
    <page-navbar></page-navbar>
    <router-view/>
  </div>
</template>

<script>
import PageNavbar from '@/components/layouts/partials/PageNavbar.vue'
export default {
  components: {
    PageNavbar
  }
}
</script>

<style>
.navbar-item.is-mega {
  position: static;

  .is-mega-menu-title {
    margin-bottom: 0;
    padding: .375rem 1rem;
  }
}

.navbar-link:not(.is-arrowless)::after {
    border-color: hsl(171, 100%, 41%);
    margin-top: -0.375em;
    right: 1.125em;
}

</style>
