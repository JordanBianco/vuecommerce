<template>
    <div>
        <header class="bg-gray-100 flex justify-between items-center text-sm p-4 text-gray-600">
            <span>{{ $t('order_details') }}</span>
            <svg @click="$emit('toggleOrderDetails')" class="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
        </header>

        <section class="overflow-y-auto pb-20 h-screen">

            <!-- Products -->
            <div class="p-4">
                <span class="block text-xs text-gray-400 mb-1" v-if="order.products">{{ order.products.length }} {{ $tc('items', order.products.length) }}</span>
                <div v-for="product in order.products" :key="product.id" class="pb-8 p-4 rounded-lg odd:bg-gray-100">
                    <div class="flex space-x-4">
                        <div class="flex-shrink-0">
                            <div class="flex-none bg-gray-200 w-16 h-16 xs:w-20 xs:h-20 rounded-lg"></div>
                        </div>
                            
                        <div>
                            <h2 class="text-gray-600 text-sm mb-2">{{ product.name }}</h2>
                            
                            <!-- Review -->
                            <div v-if="!hasBeenReviewed(product.id)">
                                <router-link
                                    :to="{ name: 'Review', params: { slug: product.slug }}"
                                    class="text-sm text-indigo-400 flex space-x-2 max-w-max">
                                        <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                        <span>{{ $t('write_review') }}</span>
                                </router-link>
                            </div>
                            
                            <p class="leading-tight text-xs text-gray-400 mt-2 mb-4">{{ product.description }}</p>
                            
                            <div class="text-gray-400">
                                <div class="flex justify-between items-center">
                                    <span class="text-xs">{{ $t('price') }}</span>
                                    <span class="text-gray-600 text-xs">€{{ product.price }}</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-xs">{{ $t('quantity') }}</span>
                                    <span class="text-gray-600 text-xs">x{{ product.pivot.quantity }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Shipping Address -->
            <div class="p-4">
                <span class="block text-xs text-gray-400 mb-1">{{ $t('shipping_address') }}</span>
                <div class="text-gray-600 text-sm">
                    <span class="block">{{ order.first_name + ' ' + order.last_name }}</span>
                    <span class="block">{{ order.address }}, {{ order.province }}</span>
                    <span class="block">{{ order.city}}, {{ order.country}}</span>
                    <span class="block">{{ order.zipcode }}</span>
                    <span class="block">{{ order.phone }}</span>
                    <span class="block text-indigo-400">{{ order.email }}</span>
                </div>
            </div>

            <!-- Notes -->
            <div class="p-4" v-if="order.notes">
                <span class="block text-xs text-gray-400 mb-1">{{ $t('notes') }}</span>
                <p class="text-sm text-gray-600">{{ order.notes }}</p>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.OrderDetails',
    props: ['order'],
    mounted() {
        this.getProductsReviewed();
    },
    computed: {
        productsReviewed() {
            return this.$store.state.order.productsReviewed
        },
    },
    methods: {
        getProductsReviewed() {
            this.$store.dispatch('order/getProductsReviewed')
        },
        hasBeenReviewed(id) {
            if (this.productsReviewed.includes(id)) {
                return true
            }
        },
    }
}
</script>