<template>
    <div>
        <div class="relative h-55">
            <router-link :to="{ name: 'product.show', params: { slug: product.slug }}">
                <img src="@/assets/plant.jpg" alt="" class="w-full h-full object-cover">
            </router-link>
            <div
                class="absolute cursor-pointer top-4 right-4 p-1"
                :class="[ isInSaved(product) ? 'rounded-full bg-red-200 text-c-red' : 'text-gray-500' ]"
                @click="saveForLater">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
            </div>
        </div>

        <div class="p-4 flex flex-col space-y-3 relative h-45">
            <h3 class="text-c-dark-gray font-semibold md:text-sm leading-tight">{{ product.name | truncate(50) }}</h3>

            <div class="flex items-center space-x-2">
                <div class="flex">
                    <!-- Voto -->
                    <svg
                        v-for="index in avgRatings"
                        :key="index + uniqid()"
                        class="w-5 h-5 md:w-4 md:h-4 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                    
                    <!-- Stelle Rimanenti -->
                    <svg
                        v-for="index in 5 - avgRatings"
                        :key="index + uniqid()"
                        class="w-5 h-5 md:w-4 md:h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                </div>
                <p class="text-gray-400 text-sm md:text-xs"><span class="mr-0.5 text-c-dark-gray font-semibold">{{ product.reviews.length }} </span>{{ product.reviews.length === 1 ? ' recensione' : 'recensioni' }}</p>
            </div>

            <div>
                <p class="text-gray-400 text-xs">Prezzo</p>
                <p class="text-c-dark-gray font-semibold">€{{ product.price }}</p>
            </div>

            <div class="absolute bottom-4 left-4 right-4">
                <button
                    @click="addToCart()"
                    :class="[ isInCart(product) ? 'bg-c-green text-c-white py-2.5' : 'flex justify-between items-center' ]"
                    class="w-full border border-gray-200 rounded-lg px-4 py-2 text-xs">
                        <span>{{ isInCart(product) ? 'aggiunto' : 'aggiungi al carrello' }}</span>
                        <svg :class="{ 'hidden' : isInCart(product) }" class="text-gray-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import uniqid from 'uniqid';

export default {
    name: 'SingleProduct',
    props: ['product', 'index'],
    computed: {
        isAuth() {
            return this.$store.state.auth.auth
        },
        items() {
            return this.$store.state.cart.items
        },
        savedItems() {
            return this.$store.state.cart.savedItems
        },
        avgRatings() {
            let sum = 0;

            if (this.product.reviews.length === 0) {
                return 0
            } else {
                this.product.reviews.filter(review => {
                    sum += review.rating
                })
                return Math.round(sum / this.product.reviews.length)
            }
        },
    },
    methods: {
		addToCart() {
            if (!this.isAuth) {
                this.$router.push({ name: 'Login' })
                return
            }
			this.$store.dispatch('cart/addToCart', { item: {
                    product: this.product,
                    quantity: 1
                }
            })
		},
        saveForLater() {
            if (!this.isAuth) {
                this.$router.push({ name: 'Login' })
                return
            }
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
        uniqid() {
            return uniqid()
        }
	},
    filters: {
        truncate(text, value) {
            if (text.length > value) {
                return text.substring(0, value) + '...'
            } else {
                return text
            }
        }
    }
}
</script>