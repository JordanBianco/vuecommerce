<template>
    <div class="flex space-x-4 p-4 mx-4 rounded-lg odd:bg-gray-100 text-sm">
        <router-link
            @click.native="toggleCart"
            :to="{ name: 'product.show', params: { slug: item.product.slug }}"
        >
            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
        </router-link>

        <div class="relative w-full flex flex-col">
            <div class="flex justify-between items-start space-x-4">
                <div class="flex flex-col space-y-2">
                    <h3 class="text-c-dark-gray font-semibold text-sm leading-tight">{{ item.product.name }}</h3>
                    <p class="text-gray-600 text-sm">€{{ item.product.price }}</p>
                    <p @click="removeFromCart" class="text-xs text-gray-500 underline cursor-pointer">remove</p>
                </div>
                <p class="border text-xs bg-gray-50 px-2.5 py-1">{{ item.quantity }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProduct',
    props: ['item', 'index'],
    methods: {
        removeFromCart() {
			this.$store.dispatch('cart/removeFromCart', {
                index: this.index,
                product_id: this.item.product.id
            })
		},
        toggleCart() {
            this.$store.dispatch('cart/toggleCart')
        },
	}
}
</script>