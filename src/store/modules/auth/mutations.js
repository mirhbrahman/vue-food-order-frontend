import * as mutations from '../../mutation-types'

export default {
	[mutations.SET_AUTH_CUSTOMER](state, payload){
		state.isLogin = true
		state.authCustomer = payload
	},
	[mutations.CLEAR_AUTH_CUSTOMER](state, payload){
		state.isLogin = false
		state.authCustomer = {}
	}
}