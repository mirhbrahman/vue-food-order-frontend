import * as mutations from '../../mutation-types'

export default{
	[mutations.SET_CART_COUNT](state, payload){
		state.cartCount = payload
	},
	[mutations.SET_CART](state, payload){
		state.cart = payload
	},
	[mutations.SET_CART_ITEMS](state, payload){
		state.cartItems = payload
	},
	[mutations.REMOVE_FORM_CART](state, productId){
		state.cart = state.cart.filter(item => item.id != productId)
	},
	[mutations.CLEAR_CART](state){
		state.cart = {}
		state.cartItems = []
		state.cartCount = 0
	}
}