<template>
    <section class="lg:px-8">

        <div v-if="orders.length != 0">

            <header class="flex flex-col space-y-2 xs:space-y-0 xs:flex-row xs:justify-between xs:items-baseline pb-8 text-sm text-gray-400">
                <div>
                    {{ orders.length }} ordini
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-500">ordina per</span>
                    <select v-model="sort" class="border rounded-lg focus:outline-none px-2 py-1.5 cursor-pointer">
                        <option selected value="created_at.desc">Più recenti</option>
                        <option value="created_at.asc">Meno recenti</option>
                    </select>
                </div>
            </header>

            <div v-for="(order, index) in orders" :key="order.id" class="mb-10">
                <div class="md:flex md:items-center md:justify-between bg-gray-100 p-4">
                    <div>
                        <span class="block text-xs text-gray-400">numero ordine</span>
                        <p class="text-c-dark-gray text-sm">{{ order.order_number }}</p>
                    </div> 

                    <div class="mt-2 flex items-center space-x-2 text-gray-400 text-xs">
                        <div @click="archiveOrder(order, index)" class="flex items-center space-x-1">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10,14h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM19,3H5A3,3,0,0,0,2,6V9a1,1,0,0,0,1,1H4v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V10h1a1,1,0,0,0,1-1V6A3,3,0,0,0,19,3ZM18,18a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V10H18ZM20,8H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z"/></svg>
                            <span class="cursor-pointer">archivia</span>
                        </div>
                        <span>|</span>
                        <router-link :to="{ name: 'order.show', params: { slug: order.order_number }}" class="flex items-center space-x-1">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm.38-2.92A1,1,0,0,0,11.8,11l-.18.06-.18.09-.15.12A1,1,0,0,0,11,12a1,1,0,0,0,.29.71,1,1,0,0,0,.33.21A.84.84,0,0,0,12,13a1,1,0,0,0,.71-.29A1,1,0,0,0,13,12a1,1,0,0,0-.29-.71A1.15,1.15,0,0,0,12.38,11.08ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Z"/></svg>
                            <span class="cursor-pointer">dettagli</span>
                        </router-link>
                    </div>
                </div>

                <div v-for="product in order.products" :key="product.id" class="border-b py-6">
                    <div class="flex space-x-4">
                        <div class="flex-shrink-0">
                            <div class="flex-none bg-gray-200 w-16 h-16 xs:w-20 xs:h-20 rounded-lg"></div>
                        </div>
                        <div class="text-sm text-gray-400 lg:mt-0">
                            <h2 class="text-c-dark-gray mb-2">{{ product.name }}</h2>
                            <p class="leading-tight text-xs lg:text-sm mb-4">{{ product.description }}</p>
                            
                            <!-- Review -->
                            <div v-if="!hasBeenReviewed(product.id)">
                                <router-link
                                    :to="{ name: 'Review', params: { slug: product.slug }}"
                                    class="text-sm text-blue-500 flex space-x-2">
                                        <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                        <span>Scrivi una recensione</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-gray-400 text-center text-sm">I tuoi ordini verranno visualizzati qui.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Dashboard.MyOrders',
    mounted() {
        this.getOrders();
        this.getProductsReviewed();
    },
    data() {
        return {
            sort: 'created_at.desc'
        }
    },
    watch: {
        sort() {
            this.getOrders();
        }
    },
    computed: {
        orders() {
            return this.$store.state.order.orders
        },
        productsReviewed() {
            return this.$store.state.order.productsReviewed
        },
    },
    methods: {
        getOrders() {
            this.$store.dispatch('order/getOrders', {
                sort: this.sort
            })
        },
        getProductsReviewed() {
            this.$store.dispatch('order/getProductsReviewed')
        },
        archiveOrder(order, index) {
            this.$store.dispatch('order/archiveOrder', {
                order: order,
                index: index
            })
        },
        hasBeenReviewed(id) {
            if (this.productsReviewed.includes(id)) {
                return true
            }
        }
    }
}
</script>