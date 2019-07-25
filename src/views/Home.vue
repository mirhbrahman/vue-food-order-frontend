<template>
	<div class="home">
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="wrap">
					<div class="search">
						<input type="text" class="searchTerm" placeholder="What are you looking for?">
						<button type="submit" class="searchButton">
							<i class="fa fa-search"></i>
						</button>
					</div>
				</div>
			</div>
		</section>
		
		<div class="container">
			<div class="columns">
				<div class="column is-two-thirds">
					<section>
						<div class="box">
							<h5 class="subtitle is-5">Most Popular</h5>

							<div class="columns">
								<div class="column">
									<div class="card">
										<div class="card-image">
											<figure class="image is-4by3">
												<img src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Placeholder image">
											</figure>
										</div>
										<div class="card-content">

											<div class="content">
												<h6 class="title is-6">Title 6</h6>
												<p>Sub title</p>
											</div>
										</div>
										<footer class="card-footer">
											<a class="card-footer-item">
												<a class="button is-primary is-small">
													<i class="fa fa-star" aria-hidden="true"></i> 3.1
												</a>
											</a>
											<a href="#" class="card-footer-item has-text-primary">$99.00</a>
										</footer>
									</div>
								</div>

								<div class="column">
									<div class="card">
										<div class="card-image">
											<figure class="image is-4by3">
												<img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" alt="Placeholder image">
											</figure>
										</div>
										<div class="card-content">

											<div class="content">
												<h6 class="title is-6">Title 6</h6>
												<p>Sub title</p>
											</div>
										</div>
										<footer class="card-footer">
											<a class="card-footer-item">
												<a class="button is-primary is-small">
													<i class="fa fa-star" aria-hidden="true"></i> 3.1
												</a>
											</a>
											<a href="#" class="card-footer-item has-text-primary">$99.00</a>
										</footer>
									</div>
								</div>
								<div class="column">
									<div class="card">
										<div class="card-image">
											<figure class="image is-4by3">
												<img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Placeholder image">
											</figure>
										</div>
										<div class="card-content">

											<div class="content">
												<h6 class="title is-6">Title 6</h6>
												<p>Sub title</p>
											</div>
										</div>
										<footer class="card-footer">
											<a class="card-footer-item">
												<a class="button is-primary is-small">
													<i class="fa fa-star" aria-hidden="true"></i> 3.1
												</a>
											</a>
											<a href="#" class="card-footer-item has-text-primary">$99.00</a>
										</footer>
									</div>
								</div>
							</div>
						</div>
						
					</section>
				</div>
				<div class="column">
					<div class="box">
						<h5 class="title is-5 has-text-danger mb-0">OFFER</h5>
						<p>60% off on orders above $99</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>
