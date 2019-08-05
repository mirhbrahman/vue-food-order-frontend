<template>
	<div class="">
		<div class="container">
			<div class="columns pt-20">
				<div class="column is-one-quarter">
					<side-menu :onMenuClick="onMenuClick"></side-menu>
				</div>
				<div class="column">
					<basic-info v-if="menuNumber == 1"></basic-info>
					<order-list v-else-if="menuNumber == 2"></order-list>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import store from '../store'
	import * as actions from '../store/action-types'
	import {mapGetters} from 'vuex'

	import SideMenu from '@/components/dash/SideMenu.vue'
	import BasicInfo from '@/components/dash/BasicInfo.vue'
	import OrderList from '@/components/order/OrderList.vue'
	

	export default {
		components: {
			SideMenu,
			BasicInfo,
			OrderList
		},
		data(){
			return {
				menuNumber: 1
			}
		},
		computed: {

		},
		methods: {
			onMenuClick(num){
				this.menuNumber = num
			}
		}
	}
</script>