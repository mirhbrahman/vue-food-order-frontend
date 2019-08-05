<template>
	<section class="box">
		<h5 class="subtitle is-5">Your Orders</h5>
		<table class="table table is-bordered is-fullwidth">
			<thead>
				<th>Order ID</th>
				<th>Order Date</th>
				<th>Total Amount</th>
				<th>Payment</th>
				<th>Status</th>
				<th>Action</th>
			</thead>
			<tbody>
				<tr v-if="orders" v-for="(order, index) in orders" :key="index">
					<td>{{order.order_id}}</td>
					<td>{{order.created_at}}</td>
					<td>${{order.total_amount}}</td>
					<td>
						Type : {{order.payment_type}}
						<span v-if="order.is_paid" class="tag is-success">Paid</span>
						<span v-else class="tag is-link">Unpaid</span>
					</td>
					<td>
						<span v-if="order.status" class="tag is-success">Delivered</span>
						<span v-else class="tag is-link">Pending</span>
					</td>
					<td>
						<single-order :order="order"></single-order>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
	import store from '@/store'
	import * as actions from '@/store/action-types'
	import {mapGetters} from 'vuex'

	import SingleOrder from '@/components/order/SingleOrder.vue'

	export default {
		components: {
			SingleOrder
		},
		computed: {
			...mapGetters({
				orders: 'getOrders'
			})
		},
		mounted(){
			store.dispatch(actions.GET_ORDERS)
		}
	}
</script>