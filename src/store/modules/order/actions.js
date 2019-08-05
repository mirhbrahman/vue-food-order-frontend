import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'
import Vue from 'vue'

export default {
	[actions.PLACE_ORDER]({commit}, payload){
		return new Promise((resolve, reject)=>{
			// Get product ids form localstorage
			let cartItems = JSON.parse(localStorage.getItem('cart'))
			payload['cartItems'] = cartItems

			// Call api for place order
			Vue.axios.post('/product/order', payload)
			.then(res=>{
				if(res.data.success){
					// Remove cart form localstorage
					if(localStorage.getItem('cart')){
						localStorage.removeItem('cart')
					}
					// Clear cart
					commit(mutations.CLEAR_CART)
					resolve(res)
				}
			})
			.catch(err=>{
				commit(mutations.SET_ERRORS, err.response.data)
				reject(err)
			})
		})
	},
	[actions.GET_ORDERS]({commit}){
		return new Promise((resolve, reject)=>{
			// Call API for orders
			Vue.axios.post('/customer/orders')
			.then(res=>{
				if(res.data.success){
					// Set all orders to order state
					commit(mutations.SET_ORDERS, res.data.orders)
					resolve(res)
				}
			})
			.catch(err=>{
				reject(err)
			})
		})
	}
}