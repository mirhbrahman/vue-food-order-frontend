<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div class="column is-two-thirds">
					<section class="box">
						<h5 class="subtitle is-5">Checkout</h5>
						
						<table class="table table is-bordered is-fullwidth">
							<thead>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</thead>
							<tbody>
								<tr v-if="products" v-for="(product, index) in products">
									<td>{{product.name}}</td>
									<td>${{product.price}}</td>
									<td>
										{{quantity(product.id)}}
									</td>
									<td>{{singleProductTotal(product)}}</td>
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
					</section>

					<section class="box">
						<div class="tabs is-toggle">
							<ul>
								<li :class="{'is-active': address}">
									<a @click="onAddressClick">
										<span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
										<span>Delivery address</span>
									</a>
								</li>
								<li :class="{'is-active': payment}">
									<a @click="onPaymentClick">
										<span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
										<span>Payment</span>
									</a>
								</li>
							</ul>
						</div>
						
						<div v-if="address">
							<form>
							<div class="field">
								<label class="label">Recipient name</label>
								<div class="control">
									<input class="input" type="text">
								</div>
							</div>
							<div class="field">
								<label class="label">Phone</label>
								<div class="control">
									<input class="input" type="text">
								</div>
							</div>
							<div class="field">
								<label class="label">Address</label>
								<div class="control">
									<input class="input" type="text">
								</div>
							</div>
							<div class="field">
								<label class="label">Address 2 (Optional)</label>
								<div class="control">
									<input class="input" type="text">
								</div>
							</div>

							<div class="columns">
								<div class="column">
									<div class="field">
										<label class="label">State</label>
										<div class="control">
											<input class="input" type="text">
										</div>
									</div>
								</div>
								<div class="column">
									<div class="field">
										<label class="label">Zip</label>
										<div class="control">
											<input class="input" type="text">
										</div>
									</div>
								</div>
							</div>
							
						</form>
						</div>

						<div v-if="payment">
							payment
						</div>

						<div class="columns">
							<div class="column">
								<router-link to="/checkout" class="button is-success checkout-btn">Checkout</router-link>
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

	import SideMenu from '@/components/layouts/partials/SideMenu.vue'

	export default {
		components:{
			SideMenu
		},
		data(){
			return {
				address: true,
				payment: false
			}
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
			singleProductTotal(product){
				return this.cartItems[product.id] * product.price
			},
			grandTotal(){
				let grandTotal = 0;
				for(let product of Array.from(this.products)){
					grandTotal += (this.cartItems[product.id] * product.price)
				}
				return grandTotal;
			},
			onAddressClick(){
				this.address = true
				this.payment = false
			},
			onPaymentClick(){
				this.address = false
				this.payment = true
			}
		}
	}
</script>