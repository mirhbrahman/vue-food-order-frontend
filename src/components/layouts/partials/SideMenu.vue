<template>
	<div class="box">
		<div class="side-search-wrap field has-addons">
			<div class="control side-serch-input">
				<input class="input" v-model="term" v-on:keyup="autoComplete" type="text" placeholder="Find food">
			</div>
			<div class="control">
				<button @click="onSerchSubmit" type="submit" class="button is-primary">
					<i class="fa fa-search"></i>
				</button>
			</div>
		</div>
		<div class="box" v-if="results.length">
					<ul class="list-group">
						<li class="list-group-item" v-for="result in results">
							<a v-if="!noDataFound" class="has-text-primary" @click="onSelectItem(result.name)">{{ result.name }}</a>
							<p v-else>{{ result.name }}</p>
						</li>
					</ul>
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
	import router from '@/router'
	import Vue from 'vue'

	export default{
		data(){
			return {
				term: '',
				results: [],
				noDataFound: false
			}
		},
		computed: {
			...mapGetters({
				categories: 'getCategories'
			})
		},
		methods: {
			onSerchSubmit(){
				router.push({name: 'searchProducts', params: {term: this.term}})
			},
			autoComplete(){
				this.results = [];
				if(this.term.length > 2){
					Vue.axios.get(`product/products/search/${this.term}`).then(response => {
						if(!response.data.data){
							this.noDataFound = true
							this.results = [{name: 'No data found!'}];
						}else{
							this.noDataFound = false
							this.results = response.data.data;
						}
					});
				}
			},
			onSelectItem(item){
				this.term = item
				this.results = []
			}
		},

	}
</script>