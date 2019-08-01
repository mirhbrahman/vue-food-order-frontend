import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
	isError: false,
	errors: {}
}

export default {
	state,
	actions,
	getters,
	mutations
}