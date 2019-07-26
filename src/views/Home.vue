<template>
	<div class="home">
		<search-bar></search-bar>
		<div class="container">
			<div class="columns">
				<div class="column is-two-thirds">
					<most-popular></most-popular>
					<home-products></home-products>
					<news-letter></news-letter>
				</div>
				<div class="column">
					<div class="box">
						<div class="columns">
							<div class="column">
								<img class="offer-image" src="@/assets/images/offer.png"/>
							</div>
							<dir class="column is-three-quarters">
								<h5 class="title is-5 has-text-danger mb-0">OFFER</h5>
								<p>60% off on orders above $99</p>
							</dir>
						</div>
					</div>
					<side-menu></side-menu>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/home/SearchBar.vue'
import MostPopular from '@/components/home/MostPopular.vue'
import HomeProducts from '@/components/home/HomeProducts.vue'
import NewsLetter from '@/components/home/NewsLetter.vue'
import SideMenu from '@/components/layouts/partials/SideMenu.vue'

export default {
	name: 'home',
	components: {
		SearchBar,
		MostPopular,
		HomeProducts,
		NewsLetter,
		SideMenu
	}
}
</script>
