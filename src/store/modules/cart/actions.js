import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'

export default {
	[actions.CART_COUNT]({commit}){
		// Count cart form local storage
		let cartItems = JSON.parse(localStorage.getItem('cart'))
		let count = 0
		if(cartItems !== null && Object.keys(cartItems).length > 0){
			let count = Object.keys(cartItems).length
		}
		
		// Adde cart count ot state
		commit(mutations.SET_CART_COUNT, count)
	},
	[actions.ADD_TO_CART]({commit}, payload){
		// Store cart item to local storage
		// {productId : quantity}
		let items = localStorage.getItem('cart') === null ? {} : JSON.parse(localStorage.getItem('cart'))
		let olditem = false

		// If already product in cart just incrise queantity
		for(let key in items){
			if(key == payload.productId){
				olditem = true
				items[key] = parseInt(items[key]) + parseInt(payload.quantity)
			}
		}
		// If new product add to cart
		if(!olditem){
			items[payload.productId] = payload.quantity
		}

		// Store in localStorage
		localStorage.setItem('cart', JSON.stringify(items));

		let cartItems = JSON.parse(localStorage.getItem('cart'));

		// Adde cart count ot state
		commit(mutations.SET_CART_COUNT, Object.keys(cartItems).length)

	}
}