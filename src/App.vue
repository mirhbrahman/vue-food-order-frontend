<template>
  <div id="app" class="">
    <page-navbar></page-navbar>
    <div class="mt-60">
      <router-view/>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageNavbar from '@/components/layouts/partials/PageNavbar.vue'
import PageFooter from '@/components/layouts/partials/PageFooter.vue'

export default {
  components: {
    PageNavbar,
    PageFooter
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
