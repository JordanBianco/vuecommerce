<template>
    <div>
        <header class="border-b p-4 md:px-0 md:w-10/12 md:mx-auto text-c-light-gray">
            <div class="flex items-center justify-between">
                <span>Carrello</span>
                <span v-if="items.length > 0" class="text-sm">{{ items.length }} {{ items.length == 1 ? ' prodotto' : ' prodotti' }}</span>
            </div>
        </header>

        <section class="p-4 md:px-0 md:w-10/12 md:mx-auto">
            <div v-if="items.length > 0">
                <div
                    v-for="(item, index) in items"
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
                                <h3 class="text-c-dark-gray leading-tight font-semibold mb-1">{{ item.product.name }}</h3>
                                <p class="hidden lg:block text-c-light-gray text-xs">{{ item.product.description | truncate(100) }}</p>
                                <div class="lg:hidden block">
                                    <div class="flex items-center space-x-3 text-xs text-c-light-gray">
                                        <span class="underline" @click="saveForLater(index, item)">salva per dopo</span>
                                        <span class="underline" @click="removeFromCart(index)">rimuovi</span>
                                    </div>
                                </div>
                            </header>
                            <!-- Quantità -->
                            <div class="flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-xs text-c-light-gray md:text-center">Quantità</p>
                                <div class="flex items-center space-x-3">
                                    <div
                                        v-if="item.quantity > 1"
                                        @click="decrementQty(item)"
                                        class="cursor-pointer bg-c-white text-sm text-c-blue max-w-max border p-2 py-0.5">
                                            -
                                    </div>
                                    <span class="text-sm">{{ item.quantity }}</span>
                                    <div
                                        @click="incrementQty(item)"
                                        class="cursor-pointer bg-c-white text-sm text-c-blue max-w-max border p-2 py-0.5">
                                            +
                                    </div>
                                </div>
                            </div>
                            <!-- Prezzo -->
                            <div class="flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-c-light-gray text-xs">Prezzo</p>
                                <p class="text-sm text-c-orange font-semibold">€{{ item.product.price * item.quantity }}</p>
                            </div>
                            <!-- Azioni -->
                            <div class="hidden lg:block md:w-1/5">
                                <div class="flex flex-col space-y-1 text-xs text-c-light-gray">
                                    <p class="underline text-right" @click="saveForLater(index, item)">salva per dopo</p>
                                    <p class="underline text-right" @click="removeFromCart(index)">rimuovi</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div @click="emptyCart" class="flex items-center space-x-2 mb-1 justify-end text-c-light-gray text-sm mt-2">
                    <p>svuota carta</p>
                    <svg class="w-5 h-5  flex-none cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                </div>

                <footer class="text-c-light-gray mt-8 pt-8 border-t border-gray-200">
                    <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                            <span>SubTotale</span>
                            <span>{{ subTotal() }}</span>
                        </div>
                        <div class="flex items-center justify-between text-c-dark-gray font-semibold">
                            <span>Totale</span>
                            <span>{{ total() }}</span>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="" class="bg-c-orange text-center text-c-white rounded-lg text-sm w-full md:max-w-max p-4 py-3 mt-8 shadow-md">
                            Vai al pagamento
                        </router-link>
                    </div>
                </footer>
            </div>
            <div v-else class="flex justify-center pt-10">
                <p class="text-c-light-gray">
                    Non hai prodotti nel carrello.
                    <router-link class="text-blue-400" :to="{ name: 'Home' }">Continua lo shopping</router-link>
                </p>
            </div>
        </section>        
    </div>
</template>

<script>
export default {
    name: 'cart.show',
    computed: {
        items() {
            return this.$store.state.cart.items
        }
    },
    methods: {
        decrementQty(item) {
            this.$store.dispatch('cart/decrementQty', { item: item })
        },
        incrementQty(item) {
            this.$store.dispatch('cart/incrementQty', { item: item })
        },
        removeFromCart(index) {
			this.$store.dispatch('cart/removeFromCart', { index: index })
		},
        saveForLater(index, item) {
            this.$store.dispatch('cart/removeFromCart', { index: index })
			this.$store.dispatch('cart/saveForLater', { item: item })
		},
        emptyCart() {
            if (confirm('Vuoi rimuovere tutti i prodotti dal carrello?')) {
                this.$store.dispatch('cart/emptyCart')
            }
        },
        subTotal() {
            let subTotal = 0

            this.items.forEach(item => {
                subTotal += (item.product.price * item.quantity)
            });

            return '€' + subTotal
        },
        total() {
            let total = 0

            this.items.forEach(item => {
                total += (item.product.price * item.quantity)
            });

            return '€' + total
        }
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