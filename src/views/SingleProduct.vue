<template>
	<div class="container">
		<div class="columns pt-20">
			<div class="column is-two-thirds">
				<div class="box">

					<nav class="breadcrumb" aria-label="breadcrumbs">
							<ul>
								<li><router-link class="has-text-primary" to="/">Home</router-link></li>
								<li><router-link  class="has-text-primary"  :to="{name: 'categoryProducts', params: {category: this.product.category.slug}}" v-if="product.name">{{this.product.category.name}}</router-link></li>
								<li class="is-active"><a>{{this.product.name}}</a></li>
							</ul>
						</nav>


					<div v-if="product.name" class="columns">
						<div class="column">
							<figure class="image image is-5by4">
								<img :src="product.thumb" alt="product">
							</figure>
						</div>
						<div class="column">
							<h5 class="subtitle is-5 mb-5">{{product.name}}</h5>
							<p class="has-text-primary ">
								<i class="fa fa-star" aria-hidden="true"></i> 3.1 <span class="customer-review-tag has-text-info">(3 customers review)</span>
							</p>

							<div v-if="product.on_discount" class="mt-20">
								<span class="subtitle is-5 has-text-grey-light discount-price">${{product.price}}</span>
								<span><strong class=" subtitle is-5 has-text-primary">${{product.discount_price}}</strong> <span class="s-offer-tag tag is-danger">Offer</span></span> 
							</div>
							<div v-else class="mt-20">
								<span class="subtitle is-5 has-text-primary">${{product.price}}</span>
							</div>

							<div class="columns mt-20">
								<div class="column is-3">
									<input class="input" type="number" v-model="quantity" value="1" placeholder="">
								</div>
								<div class="column">
									<button @click="addToCart" class="button is-primary">Add to cart</button>
								</div>
							</div>

							<hr>

							<h6 class="subtitle is-6">Category: <a class="has-text-primary" href="">{{product.category.name}}</a></h6>

						</div>
					</div>	
				</div>

				<div class="box">
					<h5 class="subtitle is-5">Overview</h5>
					<div v-html="product.sort_desc"> </div>
				</div>

				<div class="box">
					<h5 class="subtitle is-5">Details</h5>
					<div v-html="product.long_desc"> </div>
				</div>

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
</template>

<script>
	import store from '../store'
	import * as actions from '../store/action-types'
	import {mapGetters} from 'vuex'

	import SideMenu from '../components/layouts/partials/SideMenu'

	export default{
		components:{
			SideMenu,
		},
		props: {
			slug : String
		},
		data(){
			return {
				quantity : 1
			}
		},
		mounted(){
			store.dispatch(actions.GET_PRODUCT, this.slug)
		},
		computed: {
			...mapGetters({
				product: 'getProduct'
			})
		},
		methods: {
			addToCart(){
				let payload = {
					productId: this.product.id,
					quantity : this.quantity
				}

				store.dispatch(actions.ADD_TO_CART, payload);
			}
		}
	}
</script>