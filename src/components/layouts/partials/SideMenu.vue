<template>
	<div class="box">
		<div class="side-search-wrap field has-addons">
			<div class="control side-serch-input">
				<input class="input" type="text" placeholder="Find food">
			</div>
			<div class="control">
				<button type="submit" class="button is-primary">
					<i class="fa fa-search"></i>
				</button>
			</div>
		</div>
		<hr>
		<aside class="menu">
			<div v-for="(cat, index) in categories" :key="index">
				<router-link :to="{name: 'categoryProducts', params: {category: cat.slug}}">
					<p class="menu-label has-text-primary">
						{{cat.name}}
					</p>
				</router-link>
				<ul class="menu-list">
					<li v-for="(subCat, index) in cat.sub_categories" :key="index">
						<router-link  class="" :to="{name: 'subCategoryProducts', params: {sub_category: subCat.slug}}">{{subCat.name}}
						</router-link>
						<ul>
							<li v-for="(childCat, index) in subCat.child_categories" :key="index">
								<router-link  class="navbar-content has-text-dark" :to="{name: 'childCategoryProducts', params: {child_category: childCat.slug}}">{{childCat.name}}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>

		</aside>
	</div>
</template>

<script>
	import store from '../../../store'
	import { mapGetters } from 'vuex'
	export default{
		computed: {
			...mapGetters({
				categories: 'getCategories'
			})
		}
	}
</script>