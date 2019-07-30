<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div class="column is-two-thirds">
					<section class="box">

						<nav class="breadcrumb" aria-label="breadcrumbs">
							<ul>
								<li><router-link class="has-text-primary" to="/">Home</router-link></li>
								<li class="is-active"><a v-if="this.products.data">{{this.products.data[0].category.name}}</a></li>
							</ul>
						</nav>

						<div class="columns is-multiline">
							<div v-if="products" v-for="(product, index) in products.data" :key="index" class="column is-one-third">
								<product-item :product="product"></product-item>
							</div>
						</div>
					</section>
				</div>
				<div class="column">
					<div class="box">
						<div class="columns">
							<div class="column">
								<img class="offer-image" src="@/assets/images/offer.png"/>
							</div>
							<dir class="column is-three-quarters">
								<h5 class="title is-5 has-text-danger mb-0">OFFER</h5>
								<p>60% off on orders above $99</p>
							</dir>
						</div>
					</div>
					<side-menu></side-menu>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import store from '../store'
	import * as actions from '../store/action-types'
	import {mapGetters} from 'vuex'

	import ProductItem from '@/components/product/ProductItem'
	import SideMenu from '@/components/layouts/partials/SideMenu.vue'

	export default {
		components:{
			ProductItem,
			SideMenu
		},
		props: {
			category: String
		},
		mounted(){
			store.dispatch(actions.GET_PRODUCTS_BY_CATEGORY, this.category);
		},
		watch: {
			category: function(category){
				store.dispatch(actions.GET_PRODUCTS_BY_CATEGORY, this.category);
			}
		},
		computed: {
			...mapGetters({
				products : 'getProducts'
			})
		}
	}
</script>