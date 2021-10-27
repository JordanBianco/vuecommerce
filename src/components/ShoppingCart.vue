<template>
    <aside
        :class="{ 'translate-x-full' : !isOpen }"
        class="md:w-72 w-full overflow-x-hidden fixed transform duration-150 right-0 bottom-0 top-0 h-screen bg-gray-50 text-c-dark-gray z-50">
            <header class="flex items-center justify-between p-4 pt-8">
                <span
                    class="text-c-light-gray text-sm w-full"
                    v-if="!isEmpty">
                        {{ products.length }} {{products.length === 1 ? 'prodotto nel carrello' : 'prodotti nel carrello'}}
                </span>
                <div :class="{ 'flex justify-end w-full' : isEmpty }">
                    <svg @click="toggleCart" class="w-6 h-6 cursor-pointer text-c-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                </div>
            </header>

            <div v-if="products.length > 0" class="overflow-y-auto h-4/5 pb-6">
                <ShoppingCartProduct
                    v-for="(product, index) in products"
                    :key="product.id"
                    :product="product"
                    :index="index"
                />
            </div>
            <div v-else class="flex justify-center p-4">
                <p class="text-c-light-gray">Non hai prodotti nel carrello.</p>
            </div>

            <footer v-if="!isEmpty" class="fixed bottom-0 left-0 right-0 bg-c-blue py-4 rounded-t-xl">                
                <p class="text-center text-sm text-c-light-gray mb-2">modifica carrello</p>
                <div class="flex justify-center ">
                    <div class="flex items-center space-x-2 bg-c-red rounded-lg max-w-max py-2 px-4">
                        <span class="text-c-white text-sm">Procedi al pagamento ({{total}})</span>
                        <svg class="text-c-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                    </div>
                </div>
            </footer>
    </aside>
</template>

<script>
import ShoppingCartProduct from '@/components/ShoppingCartProduct'

export default {
    name: 'ShoppingCart',
    props: ['products'],
    components: {
        ShoppingCartProduct   
    },
    computed: {
        isOpen() {
            return this.$store.state.cart.isOpen
        },
        isEmpty() {
            return this.products.length == 0
        },
        total() {
            console.log('ok')
            return 1
            // this.products.array.forEach(element => {
                
            // });(p => {
                
            // })
        }
    },
    methods: {
        toggleCart() {
            this.$store.dispatch('cart/toggleCart')
        },
    }
}
</script>