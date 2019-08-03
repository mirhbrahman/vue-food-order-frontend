import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'
import Vue from 'vue'

export default {
	[actions.PLACE_ORDER]({commit}, payload){
		return new Promise((resolve, reject)=>{
			// Get product ids form localstorage
			let cartItems = JSON.parse(localStorage.getItem('cart'))
			payload['cartItems'] = cartItems

			// Call api for place order
			Vue.axios.post('/product/order', payload)
			.then(res=>{
				console.log(res.data)
				resolve(res)
			})
			.catch(err=>{
				commit(mutations.SET_ERRORS, err.response.data)
				reject(err)
			})
		})
	}
}