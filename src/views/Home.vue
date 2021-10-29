<template>
	<div>
		<HeroHomepage />

		<div class="bg-gray-100 px-4 pt-8 pb-32 md:px-8">
			<div class="py-6 mb-10 text-sm flex items-center space-x-6 overflow-x-auto text-c-light-gray">
				<span class="font-semibold text-c-dark-gray border-b-2 border-c-orange py-2">Frutta</span>
				<span>Verdura</span>
				<span>Carne</span>
				<span>Pesce</span>
				<span>Formaggi</span>
				<span>Dolci</span>
				<span>Bevande</span>
			</div>

			<div class="xs:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 xs:gap-2 md:gap-4 justify-center">
				<SingleProduct
					v-for="(product, index) in products"
					:product="product"
					:index="index"
					:key="product.id"
				/>
			</div>
		</div>

		<div class="hidden md:block mt-20">
			<img src="@/assets/hero.png" alt="" class="">
		</div>
	</div>
</template>

<script>
import HeroHomepage from '@/components/Layout/HeroHomepage'
import SingleProduct from '@/components/SingleProduct'

export default {
	name: 'Home',
	components: {
		HeroHomepage,
		SingleProduct
	},
	mounted() {
		this.$store.dispatch('product/getProducts')
	},
	computed: {
		products() {
			return this.$store.state.product.products
		}
	}
}
</script>
