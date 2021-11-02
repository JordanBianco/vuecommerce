<template>
	<div>
		<!-- <HeroHomepage /> -->
		<div class="flex w-10/12 mx-auto space-x-8">

			<aside class="w-1/5 border-r border-gray-100 h-screen text-sm">
				<header class="border-b border-gray-100 py-4 mb-8">
					<span class="font-semibold">Filter</span>
				</header>
				<!-- Categories -->
				<div class="mb-8 pr-4">
					<span class="font-semibold block mb-4">Categories</span>
					<div v-for="category in categories" :key="category.id" class="space-x-2 mb-1">
						<input type="checkbox">
						<span class="text-gray-400">{{ category.name }}</span>
					</div>
				</div>
				<!-- Price Range -->
				<div class="pr-4">
					<span class="font-semibold block mb-4">Price range</span>
					<div class="flex items-center space-x-2">
						<input type="text" placeholder="Min" class="focus:outline-none bg-gray-100 text-gray-400 w-full rounded-lg p-2">
						<input placeholder="Max" class="focus:outline-none bg-gray-100 text-gray-400 w-full rounded-lg p-2">
					</div>
					<button class="bg-c-green text-white px-4 py-2 rounded-lg mt-4 w-full">Set price</button>
				</div>
			</aside>

			<div class="w-4/5 py-8">
				<section class="mb-8">
					<div class="relative text-sm mb-4">
						<input
							v-model="search"
							placeholder="Cerca prodotti..."
							type="text"
							class="w-full rounded-xl bg-gray-50 py-2 pl-10 placeholder-gray-300 focus:outline-none">

						<div class="absolute top-2 left-3">
							<svg class="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
						</div>
					</div>

					<p v-if="search" class="text-gray-300 text-sm">Search results for: <span class="text-c-dark-gray">"{{ search }}"</span></p>
				</section>

				<div class="xs:grid xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-2 md:gap-8 justify-center">
					<SingleProduct
						v-for="(product, index) in products"
						:product="product"
						:index="index"
						:key="product.id"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import HeroHomepage from '@/components/Layout/HeroHomepage'
import SingleProduct from '@/components/SingleProduct'

export default {
	name: 'Home',
	components: {
		// HeroHomepage,
		SingleProduct
	},
	data() {
		return {
			search: ''
		}
	},
	watch: {
		search() {
			this.getProducts();
		}
	},
	mounted() {
		this.getProducts();
		this.$store.dispatch('category/getCategories')
	},
	computed: {
		categories() {
			return this.$store.state.category.categories
		},
		products() {
			return this.$store.state.product.products
		},
	},
	methods: {
		getProducts() {
			this.$store.dispatch('product/getProducts', {
				search: this.search
			})
		}
	}
}
</script>
