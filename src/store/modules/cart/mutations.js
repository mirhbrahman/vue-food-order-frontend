import * as mutations from '../../mutation-types'

export default{
	[mutations.SET_CART_COUNT](state, payload){
		state.cartCount = payload
	}
}