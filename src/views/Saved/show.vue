<template>
    <div>
        <header class="border-b p-4 md:px-0 md:w-10/12 md:mx-auto text-c-light-gray">
            <div class="flex items-center justify-between">
                <span>Prodotti salvati per dopo</span>
                <span v-if="savedItems.length > 0" class="text-sm">{{ savedItems.length }} {{ savedItems.length == 1 ? ' prodotto' : ' prodotti' }}</span>
            </div>
        </header>

        <section class="p-4 md:px-0 md:w-10/12 md:mx-auto">
            <div v-if="savedItems.length > 0">
                <div
                    v-for="(item, index) in savedItems"
                    :key="index"
                    class="flex space-x-4 p-4 odd:bg-gray-100 rounded-lg">
                        <!-- Left Side -->
                        <router-link
                            @click.native="toggleCart"
                            :to="{ name: 'product.show', params: { id: item.product.id }}"
                        >
                            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
                        </router-link>
                        <!-- Right Side -->
                        <div class="w-full flex flex-col space-y-1 md:flex-row md:space-y-0 justify-between">
                            <!-- Nome -->
                            <header class="flex flex-col justify-between md:block mb-4 md:mb-0 md:w-2/5">
                                <h3 class="text-c-dark-gray leading-tight font-semibold mb-2">{{ item.product.name }}</h3>
                                <p class="hidden lg:block text-c-light-gray text-xs">{{ item.product.description | truncate(100) }}</p>
                                <div class="lg:hidden block">
                                    <div class="flex flex-col space-y-1 text-xs text-c-light-gray">
                                        <span class="underline" @click="moveToCart(index, item)">aggiungi al carrello</span>
                                        <span class="underline" @click="removeFromSaved(index)">rimuovi</span>
                                    </div>
                                </div>
                            </header>
                            <!-- Prezzo -->
                            <div class="flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-c-light-gray text-xs">Prezzo</p>
                                <p class="text-sm text-c-orange font-semibold">€{{ item.product.price * item.quantity }}</p>
                            </div>
                            <!-- Azioni -->
                            <div class="hidden lg:block md:w-1/5">
                                <div class="flex flex-col space-y-1 text-xs text-c-light-gray">
                                    <p class="underline text-right" @click="moveToCart(index, item)">aggiungi al carrello</p>
                                    <p class="underline text-right" @click="removeFromSaved(index)">rimuovi</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div @click="emptySaved" class="flex items-center space-x-2 mb-1 justify-end text-c-light-gray text-sm mt-2">
                    <p>svuota carta</p>
                    <svg class="w-5 h-5  flex-none cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                </div>
            </div>
            <div v-else class="flex justify-center pt-10">
                <p class="text-c-light-gray">
                    Non hai prodotti salvati.
                    <router-link class="text-blue-400" :to="{ name: 'Home' }">Continua lo shopping</router-link>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'saved.show',
    computed: {
        savedItems() {
            return this.$store.state.cart.savedItems
        }
    },
    methods: {
        removeFromSaved(index) {
			this.$store.dispatch('cart/removeFromSaved', {
				index: index,
			})
		},
        moveToCart(index, item) {
			this.$store.dispatch('cart/moveToCart', {
				index: index,
                item: item
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
            if (text) {
                if (text.length > value) {
                    return text.substring(0, value) + '...'
                }
            }
        }
    }
}
</script>