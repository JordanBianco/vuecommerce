<template>
    <div>
        <header class="bg-gray-100 flex justify-end text-sm p-4 text-gray-600">
            <svg @click="$emit('toggleOrderDetails')" class="w-6 h-6 text-gray-400 hover:text-gray-600 duration-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
        </header>

        <section class="overflow-y-auto pb-20 h-screen">

            <!-- Products -->
            <div class="p-4">
                
                <header class="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg mb-4 shadow">
                    <div class="rounded-lg p-1.5 bg-gradient-to-r from-indigo-400 to-indigo-500 max-w-max">
                        <svg class="w-5.5 h-5.5 flex-none text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
                    </div>
                    <span class="block text-gray-600" v-if="order.products">{{ order.products.length }} {{ $tc('items', order.products.length) }}</span>
                </header>

                
                
                <div v-for="product in order.products" :key="product.id" class="pb-8 p-4 rounded-lg odd:bg-gray-100">
                    <div class="flex space-x-4">
                        <div class="flex-shrink-0">
                            <div class="flex-none bg-gray-200 w-16 h-16 xs:w-20 xs:h-20 rounded-lg"></div>
                        </div>
                            
                        <div>
                            <div class="flex justify-between space-x-8">
                                <h2 class="text-gray-600 text-sm mb-2">{{ product.name }}</h2>
                            
                                <!-- Review -->
                                <div v-if="!hasBeenReviewed(product.id)">
                                    <router-link
                                        :title="$t('write_review')"
                                        :to="{ name: 'Review', params: { slug: product.slug }}"
                                        class="text-sm text-indigo-400 flex space-x-2 max-w-max">
                                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                    </router-link>
                                </div>
                            </div>
                            
                            <p class="leading-tight text-xs text-gray-400 mb-4">{{ product.description }}</p>
                            
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
                <header class="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg mb-4 shadow">
                    <div class="rounded-lg p-1.5 bg-gradient-to-r from-indigo-400 to-indigo-500 max-w-max">
                        <svg class="w-5 h-5 text-white flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                    </div>
                    <span class="block text-gray-600 text-sm">{{ $t('shipping_address') }}</span>
                </header>

                <div class="text-sm text-gray-500 space-y-3">
                    <span class="block cursor-default">
                        {{ order.first_name + ' ' + order.last_name }}
                    </span>

                    <span class="block cursor-default">
                        {{ order.address }}, {{ order.province }}
                    </span>

                    <span class="block cursor-default">
                        {{ order.city}}, {{ order.country}}
                    </span>

                    <span class="block cursor-default">
                        {{ order.zipcode }}
                    </span>

                    <span class="block cursor-default">
                        {{ order.phone }}
                    </span>

                    <span class="block cursor-default">
                        {{ order.email }}
                    </span>
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