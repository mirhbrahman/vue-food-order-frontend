import Vue from 'vue'
import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'

export default {
	[actions.GET_CATEGORIES]({commit}){
		return new Promise((resolve, reject)=>{
			// Call API for categories
			Vue.axios.get('/category/categories?sub_categories')
			.then(res=>{
				if(res.data.success){
					// Set all categories to categories state
					commit(mutations.SET_CATEGORIES, res.data.categories)
					resolve(res)
				}
			})
			.catch(err=>{
				reject(err)
			})
		})
	}
}