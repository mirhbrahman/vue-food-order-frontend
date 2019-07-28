import * as mutations from '../../mutation-types'

export default {
	[mutations.SET_PRODUCT](state, payload){
		state.product = payload
	},
	[mutations.SET_PRODUCTS](state, payload){
		state.products = payload
	}
}