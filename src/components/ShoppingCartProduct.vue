<template>
    <div class="flex space-x-4 p-4 mx-4 rounded-lg odd:bg-gray-100 text-sm">
        <router-link
            @click.native="toggleCart"
            :to="{ name: 'product.show', params: { slug: item.product.slug }}"
        >
            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
        </router-link>

        <div class="w-full flex flex-col space-y-4">
            <header class="flex justify-between items-start space-x-4">
                <div class="flex flex-col space-y-2">
                    <h3 class="text-c-dark-gray text-sm leading-tight">{{ item.product.name }}</h3>
                    <div class="flex items-center space-x-2">
                        <span class="text-xs text-gray-400">{{ $t('quantity') }}</span>
                        <div class="text-gray-500">{{ item.quantity }}</div>
                    </div>
                </div>
                <p class="text-c-dark-gray font-semibold text-sm">€{{ item.product.price }}</p>                
            </header>
            
            <footer class="flex flex-col space-y-1 xs:flex-row xs:items-center xs:space-x-2 xs:space-y-0 text-gray-400 text-xs">
                <div @click="removeFromCart" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                    <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                    <span>{{ $t('remove') }}</span>
                </div>
                <div @click="saveForLater" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                    <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                    <span>{{ $t('save_for_later') }}</span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCartProduct',
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
        saveForLater() {
            this.removeFromCart(this.index, this.item.product)
			this.$store.dispatch('cart/saveForLater', { item: this.item })
		},
	}
}
</script>