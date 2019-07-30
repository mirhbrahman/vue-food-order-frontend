<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div class="column is-two-thirds">
					<section class="box">
						<h5 class="subtitle is-5">Search result for: {{this.term}}</h5>
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
			term: String
		},
		mounted(){
			store.dispatch(actions.GET_SEARCHED_PRODUCT, this.term);
		},
		computed: {
			...mapGetters({
				products : 'getProducts'
			})
		},
		watch: {
			term: function(term){
				store.dispatch(actions.GET_SEARCHED_PRODUCT, this.term);
			}
		}
	}
</script>