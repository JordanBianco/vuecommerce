<template>
    <div>
        <div v-if="product" >
            <div class="flex flex-col md:flex-row md:w-11/12 md:mx-auto md:space-x-6 p-4 md:py-20">
                <div class="relative md:w-1/2">
                    <div class="w-full h-80 rounded-lg bg-gray-200"></div>
                    <!-- <img :src="product.image_path" :alt="product.name + '_image'" class="w-full h-80 rounded-lg"> -->
                </div>
                <section class="p-4 md:p-0 md:w-1/2">
                    <h2 class="font-bold text-2xl leading-tight">{{ product.name }}</h2>

                    <div class="flex items-center space-x-2 mt-2 flex-wrap">
                        <router-link
                            :to="{ name: 'category.show', params: { slug: category.slug } }"
                            class="text-sm text-gray-400 hover:text-c-dark-gray transition duration-150"
                            v-for="category in product.categories"
                            :key="category.id">
                                {{ category.name }}
                        </router-link>
                    </div>
                    
                    <div class="flex items-center justify-between my-4">
                        <span class="text-xl">€{{ product.price }}</span>
                        <div class="flex items-center space-x-4">
                            <div
                                v-if="quantity > 1"
                                @click="decrement"
                                class="cursor-pointer bg-c-white text-sm text-c-dark-gray max-w-max border border-gray-200 p-2.5 py-1">
                                    -
                            </div>
                            <span class="text-c-dark-gray">{{ quantity }}</span>
                            <div
                                @click="increment"
                                class="cursor-pointer bg-c-white text-sm text-c-dark-gray max-w-max border border-gray-200 p-2.5 py-1">
                                    +
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-2.5 my-6">
                        <div class="flex">
                            <!-- Voto -->
                            <svg
                                v-for="index in avgRatings"
                                :key="index + uniqid()"
                                class="w-5 h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                            
                            <!-- Stelle Rimanenti -->
                            <svg
                                v-for="index in 5 - avgRatings"
                                :key="index + uniqid()"
                                class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                        </div>
                        <p class="text-gray-400 text-sm mt-0.5"><span class="text-c-dark-gray font-semibold">{{ product.reviews.length }} </span>{{ product.reviews.length === 1 ? ' recensione' : 'recensioni' }}</p>
                    </div>

                    <p class="text-gray-500 text-sm">{{ product.description }}</p>

                    <div class="flex items-center space-x-2 mt-8">
                        <!-- Add to cart -->
                        <button
                            @click="addToCart()"
                            class="max-w-max border border-gray-200 rounded-lg px-4 py-2 text-xs flex items-center justify-between">
                                <span>aggiungi al carrello</span>
                                <svg class="text-gray-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
                        </button>
                        <!-- Save Item -->
                        <div
                            class="cursor-pointer p-2"
                            :class="[ isInSaved(product) ? 'rounded-full bg-red-200 text-c-red' : 'text-gray-400' ]"
                            @click="saveForLater()">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Reviews -->
            <section class="md:w-11/12 md:mx-auto p-4 pt-20">
                <h2 class="text-gray-500 font-thin text-lg mb-4">Recensioni</h2>

                <section v-if="reviews.length != 0">
                    <header class="md:flex md:items-center md:space-x-4 md:space-y-0 space-y-2 mb-6">
                        <div
                            @click="setSort('created_at.desc')"
                            :class="[  sort === 'created_at.desc' ? 'bg-c-dark-gray text-white' : 'text-gray-500' ]"
                            class="border text-xs rounded-full px-4 py-2 max-w-max cursor-pointer">
                                Più recenti
                        </div>
                        <div
                            @click="setSort('created_at.asc')"
                            :class="[  sort === 'created_at.asc' ? 'bg-c-dark-gray text-white' : 'text-gray-500' ]"
                            class="border text-xs rounded-full px-4 py-2 max-w-max cursor-pointer">
                                Meno recenti
                        </div>
                        <div
                            @click="setSort('rating.desc')"
                            :class="[  sort === 'rating.desc' ? 'bg-c-dark-gray text-white' : 'text-gray-500' ]"
                            class="border text-xs rounded-full px-4 py-2 max-w-max cursor-pointer">
                                Voto decrescente
                        </div>
                        <div
                            @click="setSort('rating.asc')"
                            :class="[  sort === 'rating.asc' ? 'bg-c-dark-gray text-white' : 'text-gray-500' ]"
                            class="border text-xs rounded-full px-4 py-2 max-w-max cursor-pointer">
                                Voto crescente
                        </div>
                    </header>

                    <div v-for="review in reviews" :key="review.id" class="flex space-x-4 my-2 odd:bg-gray-100 rounded-lg p-4">
                        <div class="rounded-lg bg-gray-200 w-14 h-14 flex-none"></div>
                        <div>
                            <h4 class="text-sm text-c-dark-gray font-semibold">{{ review.title }}</h4>
                            <p class="text-sm md:text-xs text-gray-400">{{ review.user.first_name + ' ' + review.user.last_name }} il {{ $moment(review.created_at).format('DD.MM.YYYY') }} alle {{ $moment(review.created_at).format('HH:mm') }}</p>
                        
                            <div class="my-2 flex">
                                <svg
                                    v-for="index in review.rating"
                                    :key="index + uniqid()"
                                    class="w-4 h-4 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                <svg
                                    v-for="index in 5 - review.rating"
                                    :key="index + uniqid()"
                                    class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                            </div>
                            <p class="text-sm text-gray-500">{{ review.content }}</p>
                        </div>
                    </div>
                </section>
                <div v-else>
                    <p class="text-gray-400 text-sm">Non ci sono recensioni per questo articolo.</p>
                </div>
            </section>

            <!-- Potrebbero interessarti -->
            <section class="md:w-11/12 md:mx-auto p-4 pt-20" v-if="similar && similar.length != 0">
                <h2 class="text-gray-500 font-thin text-lg mb-4">Potrebbero interessarti</h2>
                
                <div class="flex space-x-8 overflow-x-auto overflow-y-hidden pb-10">
                    <div
                        v-for="(product) in similar"
                        :key="product.id"
                        class="w-64 h-72">
                            <div class="h-55 w-64">
                                <router-link :to="{ name: 'product.show', params: { slug: product.slug }}">
                                    <img src="@/assets/plant.jpg" alt="" class="object-cover w-full h-full">
                                </router-link>
                            </div>
                            <div class="p-4 relative h-45">
                                <h4 class="leading-tight text-sm">{{ product.name }}</h4>
                                <p class="text-xs text-gray-400 my-2">{{ product.description | truncate(60) }}</p>

                                <div class="absolute bottom-0 left-4 right-4">
                                    <div class="flex items-center justify-between">
                                        <span class="font-semibold text-c-dark-gray text-sm">€{{ product.price }}</span>    
                                        <router-link
                                            class="flex items-center space-x-2 text-gray-400 text-sm"
                                            :to="{ name: 'product.show', params: { slug: product.slug }}">
                                                <span>Visualizza</span>
                                                <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import uniqid from 'uniqid';

export default {
    name: 'product.show',
    mounted() {
        this.getProduct();
        this.getSimilarProducts();
        this.getReviews();
    },
    data() {
        return {
            quantity: 1,
            sort: 'created_at.desc'
        }
    },
    watch: {
        "$route.params.slug": {
            handler: function() {
                this.getProduct();
                this.getSimilarProducts();
                this.getReviews();
            },
            deep: true,
            immediate: true,
		},
        sort() {
            this.getReviews();
        }
    },
    computed: {
        isAuth() {
            return this.$store.state.auth.auth
        },
        product() {
            return this.$store.state.product.product
        },
        similar() {
            return this.$store.state.product.similar
        },
        reviews() {
            return this.$store.state.product.reviews
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
        getProduct() {
            this.$store.dispatch('product/getProduct', { slug: this.$route.params.slug })
        },
        getSimilarProducts() {
            this.$store.dispatch('product/getSimilarProducts', { slug: this.$route.params.slug })
        },
        getReviews() {
            this.$store.dispatch('product/getReviews', {
                slug: this.$route.params.slug,
                sort: this.sort    
            })
        },
        addToCart() {
            if (!this.isAuth) {
                this.$router.push({ name: 'Login' })
                return
            }
            this.$store.dispatch('cart/addToCart', { item: {
                product: this.product,
                quantity: this.quantity
            }})
		},
        saveForLater() {
            if (!this.isAuth) {
                this.$router.push({ name: 'Login' })
                return
            }
			this.$store.dispatch('cart/saveForLater', {
                item: {
                    product: this.product,
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
        uniqid() {
            return uniqid()
        },
        setSort(value) {
            this.sort = value
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