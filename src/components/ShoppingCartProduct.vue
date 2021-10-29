<template>
    <div class="flex space-x-4 p-4 mx-4 rounded-lg odd:bg-gray-100 text-sm">
        <router-link
            @click.native="toggleCart"
            :to="{ name: 'product.show', params: { id: item.product.id }}"
        >
            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
        </router-link>
        <div class="relative w-full flex flex-col justify-between">
            <div>
                <header class="flex justify-between">
                    <h3 class="text-c-dark leading-tight mb-1">{{ item.product.name }}</h3>
                    <svg @click="removeFromCart" class="w-5 h-5 text-c-light-gray flex-none cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                </header>
                <p class="text-c-light-gray text-xs">Prezzo</p>
                <p class="text-sm text-c-orange font-semibold">€{{ item.product.price }}</p>
            </div>

            <p class="text-xs text-c-light-gray align-bottom">Quantità {{ item.quantity }}</p>
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
			})
		},
        toggleCart() {
            this.$store.dispatch('cart/toggleCart')
        },
	}
}
</script>