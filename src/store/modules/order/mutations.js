import * as mutations from '../../mutation-types'

export default{
	[mutations.SET_ORDERS](state, payload){
		state.orders = payload
	}
}