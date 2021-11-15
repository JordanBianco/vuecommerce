<template>
    <aside
        :class="{ 'translate-x-full' : !isOpen }"
        class="w-full xs:w-4/5 md:w-96 overflow-x-hidden fixed transform duration-200 right-0 bottom-0 top-0 h-screen bg-gray-50 text-c-dark-gray z-50 ease-linear">
            <header class="flex items-center justify-between px-6 pt-5 mb-4">
                <span
                    class="text-gray-500 text-sm w-full"
                    v-if="!isEmpty">
                        {{ items.length }} {{items.length === 1 ? 'articolo nel carrello' : 'articoli nel carrello'}}
                </span>
                <div :class="{ 'flex justify-end w-full' : isEmpty }">
                    <svg @click="toggleCart" class="w-6 h-6 cursor-pointer text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                </div>
            </header>

            <div v-if="items.length > 0" class="overflow-y-auto h-4/5 pb-20">
                <ShoppingCartProduct
                    v-for="(item, index) in items"
                    :key="item.id"
                    :item="item"
                    :index="index"
                />
            </div>
            <div v-else class="flex justify-center p-4">
                <p class="text-gray-500">Non hai articoli nel carrello.</p>
            </div>

            <footer v-if="!isEmpty" class="fixed bottom-0 left-0 right-0">
                <div class="bg-gray-100 p-4 py-6 flex flex-col items-center justify-center">
                    <div
                        v-if="freeShipping > subTotal"
                        class="bg-blue-100 text-blue-500 text-xs flex space-x-2 p-4 mb-4">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                            <span>Se il tuo ordine raggiunge i € 30,00 la spedizione è gratuita</span>
                    </div>

                    <router-link
                        @click.native="toggleCart"
                        :to="{ name: 'Cart' }"
                        class="text-base text-center w-full bg-c-dark-gray rounded-lg text-white py-3">
                            Carrello <small>(€{{ subTotal }})</small>
                    </router-link>
                </div>
            </footer>
    </aside>
</template>

<script>
import ShoppingCartProduct from '@/components/ShoppingCartProduct'

export default {
    name: 'ShoppingCart',
    props: ['items'],
    components: {
        ShoppingCartProduct
    },
    data() {
        return {
            freeShipping: 2999
        }
    },
    computed: {
        isOpen() {
            return this.$store.state.cart.isOpen
        },
        isEmpty() {
            return this.items.length == 0
        },
        subTotal() {
            let subTotal = 0

            this.items.forEach(item => {
                subTotal += (item.product.price * item.quantity)
            });

            return subTotal
        }
    },
    methods: {
        toggleCart() {
            this.$store.dispatch('cart/toggleCart')
        },
    }
}
</script>