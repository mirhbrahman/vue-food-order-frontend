<template>
	<section class="box">
		<aside class="menu">
			<ul class="menu-list">
				<li><a @click="onSideMenuClick(1)">Dashboard</a></li>
				<li><a @click="onSideMenuClick(2)">My Orders</a></li>
			</ul>
		</aside>
	</section>
</template>

<script>
	export default {
		props: ['onMenuClick'],
		methods: {
			onSideMenuClick(num){
				this.onMenuClick(num)
			}
		}
	}
</script>