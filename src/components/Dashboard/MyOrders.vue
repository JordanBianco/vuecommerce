<template>
    <section class="px-8">

        <div v-if="orders.length != 0">

            <header class="flex justify-between items-baseline pb-8 text-sm text-gray-400">
                <div>
                    Ordini: {{ orders.length }}
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-500">ordina per</span>
                    <select v-model="sort" class="border rounded-lg focus:outline-none px-2 py-1.5 cursor-pointer">
                        <option selected value="created_at.desc">Più recenti</option>
                        <option value="created_at.asc">Meno recenti</option>
                    </select>
                </div>
            </header>

            <div v-for="(order, index) in orders" :key="order.id">
                <div class="flex items-center justify-between bg-gray-100 p-4">
                    <div class="flex items-center space-x-10">
                        <div>
                            <span class="block text-xs text-gray-400">numero ordine</span>
                            <p class="text-c-dark-gray text-sm">{{ order.order_number }}</p>
                        </div>

                        <div>
                            <span class="block text-xs text-gray-400">totale</span>
                            <p class="text-c-dark-gray text-sm">€{{ order.total }}</p>
                        </div>

                        <div>
                            <span class="block text-xs text-gray-400">ordine effettuato il</span>
                            <p class="text-c-dark-gray text-sm">{{ $moment(order.created_at).format('DD/MM/YYYY - HH:mm') }}</p>
                        </div>
                    </div>

                    <div>
                        <div @click="archiveOrder(order, index)" class="text-gray-500 text-sm">
                            <span class="cursor-pointer">Archivia ordine</span>
                        </div>
                    </div>
                </div>

                <div v-for="product in order.products" :key="product.id" class="flex justify-between border-b py-6 space-x-8 mb-10">
                    <div class="flex space-x-4 w-3/4">
                        <div class="flex-shrink-0">
                            <div class="flex-none bg-gray-200 w-28 h-28 rounded-lg"></div>
                        </div>
                        <div class="text-sm text-gray-400">
                            <h2 class="text-c-dark-gray mb-2">{{ product.name }}</h2>
                            <p class="text-xs">{{ product.description }}</p>
                            
                            <div class="flex items-center space-x-8 mt-3">
                                <div class="flex flex-col">
                                    <span class="text-xs text-center">altezza</span>
                                    <span class="text-c-dark-gray text-center">{{ product.height }}cm</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs text-center">peso</span>
                                    <span class="text-c-dark-gray text-center">{{ product.weight }}cm</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs text-center">prezzo</span>
                                    <span class="text-c-dark-gray text-center">{{ product.price }}cm</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs text-center">quantità</span>
                                    <span class="text-c-dark-gray text-center">{{ product.pivot.quantity }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/4 flex justify-end">
                        <div v-if="!hasBeenReviewed(product.id)">
                            <router-link :to="{ name: 'Review', params: { slug: product.slug }}" class="text-sm text-gray-400 flex items-center space-x-1">
                                <span>Scrivi una recensione</span>
                                <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                            </router-link>
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