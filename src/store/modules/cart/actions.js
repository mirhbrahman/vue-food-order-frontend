import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'
import Vue from 'vue'

export default {
	[actions.CART_COUNT]({commit}){
		// Count cart form local storage
		let cartItems = JSON.parse(localStorage.getItem('cart'))
		let count = 0
		if(cartItems !== null && Object.keys(cartItems).length > 0){
			count = Object.keys(cartItems).length
		}
		// Adde cart count ot state
		commit(mutations.SET_CART_COUNT, count)
		// Set cart item
		commit(mutations.SET_CART_ITEMS, cartItems)
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
		// Set cart item
		commit(mutations.SET_CART_ITEMS, cartItems)

	},
	[actions.GET_CART]({commit}, payload){
		return new Promise((resolve, reject)=>{
			// Cart form local storage
			let cartItems = JSON.parse(localStorage.getItem('cart'))
			if(cartItems !== null && Object.keys(cartItems).length > 0){
				let productIds = Object.keys(cartItems)
					// Call API get cart product list
					Vue.axios.post('/product/products/cart', {productIds : productIds})
					.then(res=>{
				// Set all cart product to state
				commit(mutations.SET_CART, res.data.data)
				resolve(res)
			})
					.catch(err=>{
						reject(err)
					})
				}else{
					reject()
				}
			})
	},
	[actions.REMOVE_FORM_CART]({commit}, productId){
		// Cart form local storage
		let cartItems = JSON.parse(localStorage.getItem('cart'))

		// Remove item form cart
		let newCartItems = {}
		for(let itemId in cartItems){
			if(itemId != productId){
				newCartItems[itemId] = cartItems[itemId]
			}
		}

		// Store in localStorage
		localStorage.setItem('cart', JSON.stringify(newCartItems));

		cartItems = JSON.parse(localStorage.getItem('cart'));

		// Adde cart count ot state
		commit(mutations.SET_CART_COUNT, Object.keys(cartItems).length)
		// Set cart item
		commit(mutations.SET_CART_ITEMS, cartItems)
		// Remove product form cart state
		commit(mutations.REMOVE_FORM_CART, productId)
	},
	[actions.CHANGE_CART_QUANTITY]({commit}, payload){
		return new Promise((resolve, reject)=>{
			try{
				// Cart form local storage
				let cartItems = JSON.parse(localStorage.getItem('cart'))
				// Change item quantity
				cartItems[payload.productId] = parseInt(payload.newQuantity)
				
				// Store in localStorage
				localStorage.setItem('cart', JSON.stringify(cartItems));

				cartItems = JSON.parse(localStorage.getItem('cart'));
				// Set cart item
				commit(mutations.SET_CART_ITEMS, cartItems)
				resolve(true)
			}catch(err){
				reject(err)
			}
		})
	}
}