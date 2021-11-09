<template>
    <div>
        <section class="p-4 md:px-0 md:w-11/12 md:mx-auto">
            <div v-if="savedItems.length > 0">
                <header class="border-b py-4 md:px-0 text-gray-500">
                    <div class="flex items-center justify-between">
                        <span>Articoli salvati</span>
                        <span v-if="savedItems.length > 0" class="text-sm">{{ savedItems.length }} {{ savedItems.length == 1 ? ' articolo' : ' articoli' }}</span>
                    </div>
                </header>

                <div
                    v-for="(item, index) in savedItems"
                    :key="index"
                    class="flex space-x-4 p-4 py-6 odd:bg-gray-100 rounded-lg">
                        <!-- Left Side -->
                        <router-link :to="{ name: 'product.show', params: { slug: item.product.slug }}">
                            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
                        </router-link>
                        <!-- Right Side -->
                        <div class="w-full flex flex-col space-y-1 md:flex-row md:space-y-0 justify-between">
                            <!-- Nome -->
                            <header class="flex flex-col justify-between md:block mb-4 md:mb-0 md:w-2/5">
                                <h3 class="text-c-dark-gray leading-tight font-semibold mb-2">{{ item.product.name }}</h3>
                                <p class="hidden lg:block text-gray-500 text-sm leading-tight">{{ item.product.description | truncate(250) }}</p>
                                <div class="lg:hidden block">
                                    <div class="flex flex-col space-y-1 text-xs text-gray-500">
                                        <span class="underline cursor-pointer" @click="moveToCart(index, item)">aggiungi al carrello</span>
                                        <span class="underline cursor-pointer" @click="removeFromSaved(index, item)">rimuovi</span>
                                    </div>
                                </div>
                            </header>
                            <!-- Prezzo -->
                            <div class="flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-gray-500 text-xs">Prezzo</p>
                                <p class="text-sm text-c-dark-gray font-semibold">€{{ item.product.price }}</p>
                            </div>
                            <!-- Azioni -->
                            <div class="hidden lg:block md:w-1/5">
                                <div class="flex flex-col space-y-1 text-xs text-gray-500">
                                    <span class="underline cursor-pointer text-right" @click="moveToCart(index, item)">aggiungi al carrello</span>
                                    <span class="underline cursor-pointer text-right" @click="removeFromSaved(index, item)">rimuovi</span>
                                </div>
                            </div>
                        </div>
                </div>

                <!-- Empty Saved -->
                <div class="flex justify-end py-6">
                    <div @click="emptySaved" class="flex items-center space-x-2 max-w-max text-gray-500 text-sm cursor-pointer">
                        <span>svuota lista</span>
                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                    </div>
                </div>

            </div>
            <div v-else class="flex justify-center pt-10 text-sm">
                <p class="text-gray-400">
                    Non hai prodotti salvati.
                    <router-link class="text-c-green" :to="{ name: 'Home' }">
                        Continua lo shopping
                    </router-link>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'saved.show',
    mounted() {
        this.$store.dispatch('cart/getSavedItems')
    },
    computed: {
        savedItems() {
            return this.$store.state.cart.savedItems
        }
    },
    methods: {
        removeFromSaved(index, item) {
			this.$store.dispatch('cart/removeFromSaved', {
				index: index,
                item: item
			})
		},
        moveToCart(index, item) {
            this.removeFromSaved(index, item)
			this.$store.dispatch('cart/addToCart', { item: {
                    product: item.product,
                    quantity: 1
                }
            })
		},
        emptySaved() {
            if (confirm('Vuoi rimuovere tutti i prodotti dalla lista "salvati per dopo"?')) {
                this.$store.dispatch('cart/emptySaved')
            }
        },
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