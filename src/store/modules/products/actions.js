import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'
import Vue from 'vue'

export default {
	[actions.GET_PRODUCT]({commit}, slug){
		return new Promise((resolve, reject)=>{
			// Call api to get single product
			Vue.axios.get(`/product/products/slug/${slug}`)
			.then(res=>{
				// Set product to state
				commit(mutations.SET_PRODUCT, res.data.data)
				resolve(res)
			})
			.catch(err=>{
				reject(err)
			})
		})
	},
	[actions.GET_PRODUCTS]({commit}){
		return new Promise((resolve, reject)=>{
			// Call api to get products
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
	},
	[actions.GET_PRODUCTS_BY_CATEGORY]({commit}, category){
		return new Promise((resolve, reject)=>{
			// Call api to get product by category slug
			Vue.axios.get(`/product/products/category/${category}`)
			.then(res=>{
				// Set prodcts to state
				commit(mutations.SET_PRODUCTS, res.data)
				resolve(res)
			})
			.catch(err=>{
				reject(err)
			})
		})
	},
	[actions.GET_PRODUCTS_BY_SUB_CATEGORY]({commit}, sub_category){
		return new Promise((resolve, reject)=>{
			// Call api to get product by sub-category slug
			Vue.axios.get(`/product/products/sub-category/${sub_category}`)
			.then(res=>{
				// Set prodcts to state
				commit(mutations.SET_PRODUCTS, res.data)
				resolve(res)
			})
			.catch(err=>{
				reject(err)
			})
		})
	},
	[actions.GET_PRODUCTS_BY_CHILD_CATEGORY]({commit}, child_category){
		return new Promise((resolve, reject)=>{
			// Call api to get product by sub-category slug
			Vue.axios.get(`/product/products/child-category/${child_category}`)
			.then(res=>{
				// Set prodcts to state
				commit(mutations.SET_PRODUCTS, res.data)
				resolve(res)
			})
			.catch(err=>{
				reject(err)
			})
		})
	}
}