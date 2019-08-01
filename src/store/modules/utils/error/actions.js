import * as actions from '@/store/action-types'
import * as mutations from '@/store/mutation-types'
import Vue from 'vue'
import router from '@/router'

export default {
	[actions.SET_ERRORS]({commit}, payload){
		// Set errors to state
		commit(mutations.SET_ERRORS, payload)
	}
}