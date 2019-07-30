<template>
	<div class="container">
		<section class="mt-30">
		<div class="columns is-multiline">
			<div v-if="products" v-for="(product, index) in products.data" :key="index" class="column is-one-third">
				<product-item :product="product"></product-item>
			</div>
		</div>
	</section>
	</div>
</template>

<script>
	import store from '../../store'
	import * as actions from '../../store/action-types'
	import {mapGetters} from 'vuex'

	import ProductItem from '@/components/product/ProductItem'

	export default{
		components: {
			ProductItem
		},
		mounted(){
			store.dispatch(actions.GET_PRODUCTS)
		},
		computed:{
			...mapGetters({
				products: 'getProducts'
			})
		}
	}
</script>