<template>
	<section class="hero main-hero is-medium">
		<div class="hero-body">
			<div class="wrap">
				<div class="search">
					<input type="text" v-model="term" class="searchTerm" placeholder="What are you looking for?" v-on:keyup="autoComplete">
					<button type="submit" class="searchButton" @click="onSerchSubmit">
						<i class="fa fa-search"></i>
					</button>
				</div>
				<div class="box" v-if="results.length">
					<ul class="list-group">
						<li class="list-group-item" v-for="result in results">
							<a class="has-text-primary" @click="onSelectItem(result.name)">{{ result.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import router from '@/router'
	import Vue from 'vue'

	export default{
		data(){
			return {
				term: '',
				results: []
			}
		},
		methods:{
			onSerchSubmit(){
				router.push({name: 'searchProducts', params: {term: this.term}})
			},
			autoComplete(){
				this.results = [];
				if(this.term.length > 2){
					Vue.axios.get(`product/products/search/${this.term}`).then(response => {
						this.results = response.data.data;
					});
				}
			},
			onSelectItem(item){
				this.term = item
				this.results = []
			}
		}
	}
</script>