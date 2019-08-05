<template>
<div>
	<button @click="showModal = !showModal" class="button is-info is-small"><i class="fas fa-eye"></i></button>
		<div :class="['modal', {'is-active': showModal}]">
		<div class="modal-background"></div>
		<div class="modal-content box">
			<section>
				<h5 class="subtitle is-5">Products</h5>

				<table class="table table is-bordered is-fullwidth">
					<thead>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</thead>
					<tbody>
						<tr v-if="order.order_products" v-for="(order_product, index) in order.order_products">
							<td>{{order_product.product.name}}</td>
							<td>${{order_product.unit_price}}</td>
							<td>{{order_product.quantity}}</td>
							<td>${{order_product.quantity * order_product.unit_price }}</td>
						</tr>
					</tbody>
				</table>

				<div class="columns">
					<div class="column is-half"></div>
					<div class="column">
						<table class="table is-fullwidth">
							<tr>
								<td class="cart-total">Subtotal</td>
								<td class="cart-total cart-total-price">$ {{order.total_amount}}</td>
							</tr>
							<tr>
								<td class="cart-total">Grand Total</td>
								<td class="cart-total cart-total-price"><b>$ {{order.total_amount}}</b></td>
							</tr>
						</table>
					</div>
				</div>
			</section>

			<section>
				<hr>
				<h5 class="subtitle is-5">Delivery Option</h5>
				
				<table class="table table is-bordered is-fullwidth">
					<tr>
						<th>Recipient name</th>
						<td>{{order.recipient_name}}</td>
					</tr>
					<tr>
						<th>Phone</th>
						<td>{{order.phone}}</td>
					</tr>
					<tr>
						<th>Address</th>
						<td>{{order.address}}</td>
					</tr>
					<tr>
						<th>Address 2</th>
						<td>{{order.address2}}</td>
					</tr>
					<tr>
						<th>State</th>
						<td>{{order.state}}</td>
					</tr>
					<tr>
						<th>Zip</th>
						<td>{{order.zip}}</td>
					</tr>
				</table>

			</section>
		</div>
		<button @click="showModal = !showModal" class="modal-close is-large" aria-label="close"></button>
	</div>
</div>
</template>

<script>
	export default {
		props: ['order'],
		data(){
			return {
				showModal: false
			}
		}
	}
</script>