import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
	cartItems: [],
	cart: {},
	cartCount: 0
};

export default {
	state,
	getters,
	actions,
	mutations
}