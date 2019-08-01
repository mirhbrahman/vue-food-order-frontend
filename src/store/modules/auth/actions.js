import * as actions from '../../action-types'
import * as mutations from '../../mutation-types'
import setAuthToken from "@/utils/setAuthToken";
import Vue from 'vue'
import router from '@/router'

export default {
	[actions.REGISTER_CUSTOMER]({commit}, payload){
		return new Promise((resolve, reject)=>{
			// Call API to register user
			Vue.axios.post('/customer/register', payload)
			.then(res=>{
				if(res.data.success){
					// Clear errors from state
					commit(mutations.CLEAR_ERRORS)
					resolve(res)
					// Redirect to home
					router.push({name: 'home'})
				}
			})
			.catch(err=>{
				// Set errors to state
				commit(mutations.SET_ERRORS, err.response.data)
				reject(err)
			})
		})
	},
	[actions.LOGIN_CUSTOMER]({commit}, payload){
		return new Promise((resolve, reject)=>{
			// Call API to login user
			Vue.axios.post('/customer/login', payload)
			.then(res=>{
				if(res.data.success){
					// Set token to local storage
          localStorage.setItem("customer_jwt", res.data.token);
          // Set auth token to header auth
          setAuthToken(localStorage.getItem("customer_jwt"));
          // Store customer to state
          commit(mutations.SET_AUTH_CUSTOMER, res.data.customer);
					// Clear errors from state
					commit(mutations.CLEAR_ERRORS)
					resolve(res)
					// Redirect to home
					router.push({name: 'home'})
				}
			})
			.catch(err=>{
				// Set errors to state
				commit(mutations.SET_ERRORS, err.response.data)
				reject(err)
			})
		})
	},
	[actions.LOGOUT_CUSTOMER]({commit}){
		if (localStorage.getItem("customer_jwt")) {
      localStorage.removeItem("customer_jwt");
      commit(mutations.CLEAR_AUTH_CUSTOMER);
      router.push({ name: "home" });
    }
	}
}