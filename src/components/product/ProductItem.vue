<template>
		<router-link :to="{name: 'singleProduct', params: {slug: product.slug}}">
			<div class="card">
				<div class="card-image">
					<p v-if="product.on_discount" class="product-offer-tag">Offer</p>
					<figure class="image is-4by3">
						<img :src="product.thumb" alt="Placeholder image">
					</figure>
				</div>
				<div class="card-content">

					<div class="content">
						<h6 class="title is-6">{{product.name}}</h6>
						<p>{{product.category.name}} </p>
					</div>
				</div>
				<footer class="card-footer">
					<a class="card-footer-item">
						<a class="button is-primary is-small">
							<i class="fa fa-star" aria-hidden="true"></i> 3.1
						</a>
					</a>

					<div v-if="product.on_discount" class="card-footer-item">
						<span class="has-text-grey-light discount-price">${{product.price}}</span>
						<span><strong class="has-text-danger">${{product.discount_price}}</strong></span>
					</div>
					<div v-else class="card-footer-item">
						<span class="has-text-primary">${{product.price}}</span>
					</div>
				</footer>
			</div>
		</router-link>
</template>

<script>
	export default{
		props: {
			product: Object
		}
	}
</script>