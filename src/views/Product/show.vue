<template>
    <div>
        <div class="flex flex-col md:flex-row md:w-10/12 md:mx-auto md:space-x-6 p-4 md:pt-20">
            <div class="relative md:w-1/2">
                <img :src="product.image_path" :alt="product.name + '_image'" class="w-full h-80 rounded-lg">
                <div class="md:hidden absolute top-4 right-4 flex items-center space-x-2">
                    <!-- Save Item -->
                    <div
                        @click="saveForLater()"
                        class="cursor-pointer"
                        title="Salva per dopo">
                            <svg
                                :class="{ 'text-c-orange' : isInSaved() }"
                                class="text-c-light-gray w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg>
                    </div>
                    <!-- Add To Cart -->
                    <div
                        @click="addToCart()"
                        class="cursor-pointer"
                        title="Aggiungi il carrello">
                            <svg
                                :class="{ 'text-c-orange' : isInCart() }"
                                class="text-c-light-gray w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/></svg>
                    </div>
                </div>
            </div>
            <section class="p-4 md:p-0 md:w-1/2">
                <h2 class="font-bold text-2xl leading-tight">{{ product.name }}</h2>
                
                <div class="flex items-center justify-between my-4">
                    <span class="text-xl">€{{ product.price }}</span>
                    <div class="flex items-center space-x-4">
                        <div
                            v-if="quantity > 1"
                            @click="decrement"
                            class="cursor-pointer bg-c-white text-sm text-c-blue max-w-max border p-2.5 py-1">
                                -
                        </div>
                        <span class="text-c-dark-gray">{{ quantity }}</span>
                        <div
                            @click="increment"
                            class="cursor-pointer bg-c-white text-sm text-c-blue max-w-max border p-2.5 py-1">
                                +
                        </div>
                    </div>
                </div>

                <div class="flex items-center space-x-2 mb-4">
                    <div class="flex">
                        <svg v-for="i in 4" :key="i" class="w-4 h-4 text-c-orange" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                        <svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                    </div>
                    <div class="text-c-light-gray text-sm mt-0.5">102 recensioni</div>
                </div>

                <p class="text-c-light-gray text-sm">{{ product.description }}</p>

                <div class="md:flex md:items-center md:justify-between hidden mt-8">
                    <!-- Add to cart -->
                    <div
                        @click="addToCart()"
                        class="cursor-pointer bg-c-orange rounded-lg p-1.5 flex items-center space-x-2 text-c-white text-sm px-4 max-w-max"
                        title="Aggiungi il carrello">
                            <span>Aggiungi al carrello</span>
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/></svg>
                    </div>
                    <!-- Save Item -->
                    <div
                        @click="saveForLater()"
                        class="cursor-pointer"
                        title="Salva per dopo">
                            <svg
                                :class="{ 'text-c-orange' : isInSaved() }"
                                class="text-c-light-gray w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product.show',
    mounted() {
        this.$store.dispatch('product/getProduct', { slug: this.$route.params.slug })
    },
    data() {
        return {
            quantity: 1,
        }
    },
    computed: {
        product() {
            return this.$store.state.product.product
        },
        items() {
            return this.$store.state.cart.items
        },
        savedItems() {
            return this.$store.state.cart.savedItems
        },
    },
    methods: {
        addToCart() {
			this.$store.dispatch('cart/addToCart', {
				product: this.product,
                quantity: this.quantity
			})
		},
        saveForLater() {
			this.$store.dispatch('cart/saveForLater', {
                item: {
                    product: this.product,
                    quantity: 1
                }
			})
		},
        increment() {
            return this.quantity = this.quantity + 1
        },
        decrement() {
            return this.quantity = this.quantity - 1
        },
        isInCart() {
            return this.items.find(i => {
                return i.product.id === this.product.id
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