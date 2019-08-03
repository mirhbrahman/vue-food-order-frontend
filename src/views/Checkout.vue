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
									<td>${{singleProductPrice(product)}}</td>
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
										<span class="icon is-small"><i class="fas fa-address-card" aria-hidden="true"></i></span>
										<span>Delivery address</span>
									</a>
								</li>
								<li :class="{'is-active': payment}">
									<a @click="onPaymentClick">
										<span class="icon is-small"><i class="fas fa-money-check-alt" aria-hidden="true"></i></span>
										<span>Payment</span>
									</a>
								</li>
							</ul>
						</div>

						<div v-if="isError">
							<article class="message is-danger">
								<div class="message-header">
									<p>Errors</p>
								</div>
								<div class="message-body">
									<ul>
										<li v-for="(error, index) in errors" :key="index">
											{{error[0]}}
										</li>
									</ul>
								</div>
							</article>
						</div>
						
						<div v-if="address">
							<form>
								<div class="field">
									<label class="label">Recipient name</label>
									<div class="control">
										<input v-model="form.recipientName" class="input" type="text">
									</div>
								</div>
								<div class="field">
									<label class="label">Phone</label>
									<div class="control">
										<input v-model="form.phone" class="input" type="text">
									</div>
								</div>
								<div class="field">
									<label class="label">Address</label>
									<div class="control">
										<input v-model="form.address" class="input" type="text">
									</div>
								</div>
								<div class="field">
									<label class="label">Address 2 (Optional)</label>
									<div class="control">
										<input v-model="form.address2" class="input" type="text">
									</div>
								</div>

								<div class="columns">
									<div class="column">
										<div class="field">
											<label class="label">State</label>
											<div class="control">
												<input v-model="form.state" class="input" type="text">
											</div>
										</div>
									</div>
									<div class="column">
										<div class="field">
											<label class="label">Zip</label>
											<div class="control">
												<input v-model="form.zip" class="input" type="text">
											</div>
										</div>
									</div>
								</div>

							</form>

							<div class="columns">
								<div class="column">
									<a @click="onPaymentClick" class="button is-success checkout-btn">Payment</a>
								</div>
							</div>
						</div>

						<div v-if="payment">
							<div class="control">
								<label class="radio">
									<input type="radio" name="answer" @click="onCODClick">
									COD
								</label>
								<label class="radio">
									<input type="radio" name="answer" @click="onCardClick">
									Card
								</label>
							</div>

							<div v-if="showCardPayment" class="columns mt-20">
								<div class="column is-half">
									<form>
										<div class="columns">
											<div class="column is-two-thirds">
												<div class="field">
													<label class="label">Card number</label>
													<div class="control">
														<input v-model="form.cardNumber" class="input" type="text" placeholder="">
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field">
													<label class="label">Expires</label>
													<div class="control">
														<input v-model="form.expires" class="input" type="text" placeholder="MM/YY">
													</div>
												</div>
											</div>
										</div>
										<div class="columns">
											<div class="column is-two-thirds">
												<div class="field">
													<label class="label">Name on card</label>
													<div class="control">
														<input v-model="form.nameOnCard" class="input" type="text" placeholder="">
													</div>
												</div>
											</div>
											<div class="column">
												<div class="field">
													<label class="label">Card code</label>
													<div class="control">
														<input v-model="form.cardCode" class="input" type="text" placeholder="CVC">
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="columns">
								<div class="column">
									<a @click="onPayClick" class="button is-success checkout-btn" :disabled="paymentBtnInActive">Pay (${{grandTotal()}})</a>
								</div>
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
				payment: false,
				showCardPayment: false,
				paymentBtnInActive: true,
				form: {
					customerId: 0,
					recipientName: '',
					phone: '',
					address: '',
					address2: '',
					state: '',
					zip: '',
					cod: false,
					cardNumber: '',
					expires: '',
					nameOnCard: '',
					cardCode: ''
				}
			}
		},
		mounted(){
			store.dispatch(actions.GET_CART)
		},
		computed: {
			...mapGetters({
				isError: 'isError',
				errors: 'getErrors',
				customer: 'getAuthCustomer',
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
			onAddressClick(){
				this.address = true
				this.payment = false
			},
			onPaymentClick(){
				this.address = false
				this.payment = true
			},
			onCODClick(){
				this.form.cod = true
				this.paymentBtnInActive = false
			},
			onCardClick(){
				this.form.cod = false
				this.showCardPayment = true
				this.paymentBtnInActive = false
			},
			onPayClick(){
				this.form.customerId = this.customer.id
				store.dispatch(actions.PLACE_ORDER, this.form)
			}
		}
	}
</script>