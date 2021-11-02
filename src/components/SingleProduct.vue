<template>
    <div>
        <div class="relative">
            <router-link :to="{ name: 'product.show', params: { slug: product.slug }}">
                <img src="@/assets/plant.jpg" alt="" class="w-full h-72 xs:h-48 md:h-56 rounded-t-3xl object-cover">
            </router-link>
            <div
                class="absolute cursor-pointer top-4 right-4 p-1"
                :class="[ isInSaved(product) ? 'rounded-full bg-red-200 text-c-red' : 'text-gray-400' ]"
                @click="saveForLater">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
            </div>
        </div>

        <div class="p-4 border border-t-0 border-gray-200 rounded-b-3xl">
            <h3 class="text-c-dark-gray font-semibold">{{ product.name }}</h3>

            <div class="flex items-center space-x-2 mb-3">
                <div class="flex">
                    <svg v-for="i in 4" :key="i" class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                    <svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                </div>
                <div class="text-gray-300 text-sm mt-0.5">102 recensioni</div>
            </div>

            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-300 text-xs">Price</p>
                    <p class="text-c-dark-gray font-semibold">€{{ product.price }}</p>
                </div>

                <button
                    @click="addToCart()"
                    :class="[ isInCart(product) ? 'bg-c-green text-c-white' : '' ]"
                    class="border border-gray-200 rounded-lg px-4 py-1 text-sm">
                        {{ isInCart(product) ? 'Added' : 'Add to cart' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProduct',
    props: ['product', 'index'],
    computed: {
        items() {
            return this.$store.state.cart.items
        },
        savedItems() {
            return this.$store.state.cart.savedItems
        },
    },
    methods: {
		addToCart() {
			this.$store.dispatch('cart/addToCart', { item: {
                    product: this.product,
                    quantity: 1
                }
            })
		},
        saveForLater() {
            if (this.isInSaved()) {
                alert('L\' articolo si trova già nella tua lista.')
                return
            }
			this.$store.dispatch('cart/saveForLater', { item: {
                    product: this.product
                }
            })
		},
        isInCart(product) {
            return this.items.find(function(item) {
                return item.product.id == product.id
            })
        },
        isInSaved() {
            return this.savedItems.find(i => {
                return i.product.id === this.product.id
            })
        },
	}
}
</script>