import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'
import Vue from 'vue'

export default {
	[actions.GET_PRODUCTS]({commit}){
		return new Promise((resolve, reject)=>{
			// Call api to get product
			Vue.axios('/product/products?per_page=6')
			.then(res=>{
				// Set product to product state
				commit(mutations.SET_PRODUCTS, res.data)
				resolve(res)
			})
			.catch(err=>{
				reject(err)
			})
		})
	}
}