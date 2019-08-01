import * as mutations from '@/store/mutation-types'

export default {
	[mutations.SET_ERRORS](state, payload){
		state.isError = true
		state.errors = payload
	},
	[mutations.CLEAR_ERRORS](state){
		state.isError = false
		state.errors = {}
	}
}