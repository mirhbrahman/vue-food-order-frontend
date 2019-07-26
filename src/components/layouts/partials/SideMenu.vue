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
				<a href="">
					<p class="menu-label has-text-primary">
					{{cat.name}}
				</p>
				</a>
				<ul class="menu-list">
					<li v-for="(subCat, index) in cat.sub_categories" :key="index">
						<a>{{subCat.name}}</a>
						<ul>
							<li v-for="(childCat, index) in subCat.child_categories" :key="index">
								<a>{{childCat.name}}</a>
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