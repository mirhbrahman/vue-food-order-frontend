<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div class="column is-two-thirds">
					<section class="box">

						<nav class="breadcrumb" aria-label="breadcrumbs">
							<ul>
								<li><router-link class="has-text-primary" to="/">Home</router-link></li>
								<li>
									<router-link 
									v-if="this.products.data"
									:to="{name:'categoryProducts', params: {category: this.products.data[0].category.slug}}" 
									class="has-text-primary" 
									>
									{{this.products.data[0].category.name}}
								</router-link>
							</li>
							<li>
								<router-link 
								:to="{name:'subCategoryProducts', params: {sub_category: this.products.data[0].sub_category.slug}}" 
								class="has-text-primary" 
								v-if="this.products.data">
								{{this.products.data[0].sub_category.name}}
							</router-link>
						</li>
						<li class="is-active">
							<a v-if="this.products.data">{{this.products.data[0].child_category.name}}</a>
						</li>
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
			child_category: String
		},
		mounted(){
			store.dispatch(actions.GET_PRODUCTS_BY_CHILD_CATEGORY, this.child_category);
		},
		watch: {
			child_category: function(child_category){
				store.dispatch(actions.GET_PRODUCTS_BY_CHILD_CATEGORY, this.child_category);
			}
		},
		computed: {
			...mapGetters({
				products : 'getProducts'
			})
		}
	}
</script>