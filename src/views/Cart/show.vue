<template>
    <div>
        <TheNavbar />

        <section class="p-4 md:px-0 md:w-11/12 md:mx-auto">
            <div v-if="items.length > 0">
                <header class="border-b py-4 md:px-0 text-gray-400">
                    <div class="flex items-center justify-between">
                        <span>{{ $t('cart') }}</span>
                        <span v-if="items.length > 0" class="text-sm">{{ items.length }}  {{ $tc('items', items.length) }}</span>
                    </div>
                </header>
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="flex space-x-4 p-4 odd:bg-gray-100 rounded-lg">
                        <!-- Left Side -->
                        <router-link :to="{ name: 'product.show', params: { slug: item.product.slug }}">
                            <div class="flex-none bg-gray-200 h-20 w-16 xs:w-20 rounded-lg"></div>
                        </router-link>
                        <!-- Right Side -->
                        <div class="w-full flex flex-col space-y-1 md:flex-row md:space-y-0 justify-between">

                            <header class="flex flex-col justify-between md:block mb-4 md:mb-0 md:w-2/5">
                                <!-- Nome e Prezzo -->
                                <div class="flex justify-between space-x-4 text-sm mb-1.5">
                                    <h3 class="text-c-dark-gray leading-tight">{{ item.product.name }}</h3>
                                    <span class="md:hidden text-c-dark-gray font-semibold">€{{ item.product.price * item.quantity }}</span>
                                </div>
                                

                                <!-- Descrizione -->
                                <p class="hidden lg:block text-gray-400 text-xs">{{ item.product.description | truncate(200) }}</p>
                                
                                <!-- Azioni -->
                                <div class="lg:hidden block mt-2">
                                    <div class="flex flex-col space-y-1.5 text-xs text-gray-400">
                                        <div @click="saveForLater(index, item)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                            <svg class="text-gray-400 w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                            <span>{{ $t('save_for_later') }}</span>
                                        </div>
                                        <div @click="removeFromCart(index, item.product)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                            <svg class="text-gray-400 w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                                            <span>{{ $t('remove') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <!-- Quantità -->
                            <div class="flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-xs text-gray-400 md:text-center">{{ $t('quantity') }}</p>
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
                            <div class="hidden md:flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-gray-400 text-xs">{{ $t('price') }}</p>
                                <p class="text-sm text-c-dark-gray font-semibold">€{{ item.product.price * item.quantity }}</p>
                            </div>
                            <!-- Azioni -->
                            <div class="hidden lg:block">
                                <div class="flex flex-col space-y-2 text-xs text-gray-400">
                                    <div @click="saveForLater(index, item)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                        <svg class="text-gray-400 w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                                        <span>{{ $t('save_for_later') }}</span>
                                    </div>
                                    <div @click="removeFromCart(index, item.product)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                        <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                                        <span>{{ $t('remove') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <!-- Empty Cart -->
                <div class="flex justify-end py-6 mt-6 border-t">
                    <div @click="emptyCart" class="flex items-center space-x-2 max-w-max text-gray-400 text-sm cursor-pointer">
                        <span>{{ $t('empty_cart') }}</span>
                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                    </div>
                </div>

                <footer class="text-gray-400 border-t border-gray-200 pt-6">
                    <div class="space-y-2">
                        <!-- Spedizione gratis -->
                        <div
                            v-if="freeShipping > subTotal()"
                            class="bg-blue-100 text-blue-500 text-sm flex space-x-2 px-4 py-6 mb-4 items-start md:items-center">
                                <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                                <span>{{ $t('free_shipping') }}</span>
                        </div>
                        <!-- Subtotale -->
                        <div class="flex items-center justify-between text-sm">
                            <span>{{ $t('subtotal') }}</span>
                            <span>€{{ subTotal() }}</span>
                        </div>
                        <!-- Spedizione -->
                        <div class="flex items-center justify-between text-sm">
                            <span>{{ $t('shipping') }}</span>
                            <span>{{ freeShipping > subTotal() ?  '€' + shipping : 'gratis' }}</span>
                        </div>
                        <!-- Totale -->
                        <div class="flex items-center justify-between text-c-dark-gray font-semibold">
                            <span>{{ $t('total') }}</span>
                            <span>€{{ total() }}</span>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link :to="{ name: 'Checkout' }" class="bg-c-green text-center text-white rounded-lg text-sm w-full md:max-w-max px-4 py-3 mt-8">
                            {{ $t('proceed') }}
                        </router-link>
                    </div>
                </footer>
            </div>
            <div v-else class="flex justify-center min-h-screen pt-10">
                <p class="text-gray-400">
                    {{ $t('no_cart_items') }}
                    <router-link class="text-c-dark-gray block text-center" :to="{ name: 'Home' }">
                        {{ $t('continue_shopping') }}
                    </router-link>
                </p>
            </div>
        </section>

        <TheFooter />
    </div>
</template>

<script>
import TheNavbar from '@/components/Layout/TheNavbar'
import TheFooter from '@/components/Layout/TheFooter'

export default {
    name: 'cart.show',
    components: {
        TheNavbar,
        TheFooter,
    },
    mounted() {
        this.$store.dispatch('cart/getItems', {user_id: 1})
    },
    data() {
        return {
            freeShipping: 2999, // sopra i 30 spedizione gratuita
            shipping: 395,
        }
    },
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
        removeFromCart(index, product) {
			this.$store.dispatch('cart/removeFromCart', { 
                index: index,
                product_id: product.id
            })
		},
        saveForLater(index, item) {
            this.removeFromCart(index, item.product)
			this.$store.dispatch('cart/saveForLater', { item: item })
		},
        emptyCart() {
            if (confirm(this.$t('empty_cart_confirm'))) {
                this.$store.dispatch('cart/emptyCart')
            }
        },
        subTotal() {
            let subTotal = 0

            this.items.forEach(item => {
                subTotal += (item.product.price * item.quantity)
            });

            return subTotal
        },
        total() {
            let total = 0
            
            this.items.forEach(item => {
                total += (item.product.price * item.quantity)
            });

            if (total < this.freeShipping) {
                total += this.shipping
            }
            
            return total
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