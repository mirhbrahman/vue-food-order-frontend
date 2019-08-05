<template>
	<section class="box">
		<h5 class="subtitle is-5">Dashboard</h5>
		<p>Welcom {{ customer.name }}</p>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				customer : 'getAuthCustomer'
			})
		}
	}
</script>