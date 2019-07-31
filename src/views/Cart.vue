<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div class="column is-two-thirds">
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
								<tr>
									<td>
										<figure class="image is-96x96">
											<img src="https://bulma.io/images/placeholders/128x128.png">
										</figure>
									</td>
									<td>dslfj</td>
									<td>dslfj</td>
									<td>
										<div class="columns">
											<div class="column">
											<input class="input" type="number" value="1">
										</div>
										<div class="column">
											<a class="button is-danger">Remove</a>
										</div>
										</div>
									</td>
									<td>dslfj</td>
								</tr>
							</tbody>
						</table>

						<div class="columns">
							<div class="column is-half"></div>
							<div class="column">
								<table class="table is-fullwidth">
									<tr>
										<td class="cart-total">Subtotal</td>
										<td class="cart-total cart-total-price">dsddsds</td>
									</tr>
									<tr>
										<td class="cart-total">Grand Total</td>
										<td class="cart-total cart-total-price"><b>$433</b></td>
									</tr>
								</table>
							</div>
						</div>

						<div class="columns">
							<div class="column">
								<a class="button is-success checkout-btn">Checkout</a>
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
		props: {
			term: String
		},
		mounted(){
		},
		computed: {
		}
	}
</script>