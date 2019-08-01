<template>
	<section class="hero is-primary is-fullheight">
	<div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-7-tablet is-6-desktop is-5-widescreen">
          <form action="" class="box" autocomplete="off">
          	<h5 class="subtitle is-5 has-text-dark">Login</h5>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input v-model="form.email" type="email" placeholder="Email" :class="['input', {'is-danger': isError}]" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <p class="help is-danger" v-if="isError">{{errors.email}}</p>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input v-model="form.password" type="password" placeholder="*******" :class="['input', {'is-danger': isError}]" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <p class="help is-danger" v-if="isError">{{errors.password}}</p>
            </div>
             
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-primary" @click="onSubmitClick">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
	import store from '@/store'
	import * as actions from '@/store/action-types'
	import {mapGetters} from 'vuex'

	export default {
		data(){
			return {
				form: {
					email: '',
					password: ''
				}
			}
		},
		mounted(){

		},
		computed: {
			...mapGetters({
				isError: 'isError',
				errors: 'getErrors'
			})
		},
		methods: {
			onSubmitClick(e){
				e.preventDefault()
				// Dispatch action for register customer
				store.dispatch(actions.LOGIN_CUSTOMER, this.form)
			}
		}
	}

</script>