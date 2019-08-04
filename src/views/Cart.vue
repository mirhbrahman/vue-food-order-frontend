<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div v-if="products.length > 0" class="column is-two-thirds">
					<section class="box">
						<h5 class="subtitle is-5">Shopping Cart</h5>
						
						<table class="table table is-bordered is-fullwidth">
							<thead>
								<th>Image</th>
								<th>Product</th>
								<th>Price</th>
								<th width="30%">Quantity</th>
								<th>Total</th>
							</thead>
							<tbody>
								<tr v-if="products" v-for="(product, index) in products">
									<td>
										<figure class="image is-96x96">
											<img :src="product.thumb">
										</figure>
									</td>
									<td>{{product.name}}</td>
									<td>${{singleProductPrice(product)}}</td>
									<td>
										<div class="columns">
											<div class="column">
												<input class="input" type="number" 
												@change="onQuantityChange($event.target.value, product.id)" 
												:value="quantity(product.id)">
											</div>
											<div class="column">
												<a class="button is-danger" @click="onDeleteClick(product.id)">Remove</a>
											</div>
										</div>
									</td>
									<td>${{singleProductTotal(product)}}</td>
								</tr>
							</tbody>
						</table>

						<div class="columns">
							<div class="column is-half"></div>
							<div class="column">
								<table class="table is-fullwidth">
									<tr>
										<td class="cart-total">Subtotal</td>
										<td v-if="products" class="cart-total cart-total-price">${{grandTotal()}}</td>
									</tr>
									<tr>
										<td class="cart-total">Grand Total</td>
										<td v-if="products" class="cart-total cart-total-price"><b>${{grandTotal()}}</b></td>
									</tr>
								</table>
							</div>
						</div>

						<div class="columns">
							<div class="column">
								<router-link to="/checkout" class="button is-success checkout-btn">Checkout</router-link>
							</div>
						</div>

					</section>
				</div>

				<div v-else class="column is-two-thirds">
					<div class="box">
						<h5 class="subtitle is-5">No product on your cart</h5>
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
	</div>
	
</template>

<script>
	import store from '../store'
	import * as actions from '../store/action-types'
	import {mapGetters} from 'vuex'

	import SideMenu from '@/components/layouts/partials/SideMenu.vue'

	export default {
		components:{
			SideMenu
		},
		mounted(){
			store.dispatch(actions.GET_CART)
		},
		computed: {
			...mapGetters({
				cartItems: 'getCartItems',
				products : 'getCart'
			})
		},
		methods:{
			quantity(productId){
				return this.cartItems[productId]
			},
			singleProductPrice(product){
				if(product.on_discount){
					return product.discount_price
				}else{
					return product.price
				}
			},
			singleProductTotal(product){
				let price = 0;
				if(product.on_discount){
					price = this.cartItems[product.id] * product.discount_price
				}else{
					price = this.cartItems[product.id] * product.price
				}
				return price;
			},
			grandTotal(){
				let grandTotal = 0;
				for(let product of Array.from(this.products)){
					if(product.on_discount){
						grandTotal += (this.cartItems[product.id] * product.discount_price)
					}else{
						grandTotal += (this.cartItems[product.id] * product.price)
					}
					
				}
				return grandTotal;
			},
			onQuantityChange(newQuantity, productId){
				let payload = {
					newQuantity,
					productId
				}
				store.dispatch(actions.CHANGE_CART_QUANTITY, payload)
				.then(()=>{
					store.dispatch(actions.GET_CART)
				})
			},
			onDeleteClick(productId){
				store.dispatch(actions.REMOVE_FORM_CART, productId)
			}

		}
	}
</script>