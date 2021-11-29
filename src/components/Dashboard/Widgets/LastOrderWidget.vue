<template>
    <section class="shadow bg-white rounded-lg p-4">
        
        <header class="flex items-center space-x-4">
            <div class="bg-gradient-to-r from-indigo-400 to-indigo-500 p-1.5 text-white rounded-lg max-w-max shadow">
                <svg class="w-7 h-7 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
            </div>

            <span class="block text-gray-600">{{ $t('last_purchase') }}</span>
        </header>
            
        <div v-if="last && last.length != 0" class="pt-4 text-sm">

            <div class="flex justify-between items-center">
                <span class="block text-sm text-gray-400">{{ $moment(last.created_at).format('DD.MM.YYYY') }}</span>
                <span :class="status(last)" class="px-2 py-1 rounded-full text-xxs">{{ last.status }}</span>
            </div>
            
            <div v-for="product in last.products" :key="product.id" class="mb-2 bg-gray-50 p-4 rounded-lg my-4">
                <div class="flex space-x-4">
                    <div class="bg-gray-200 rounded-lg w-14 h-14 flex-none"></div>
                    <div>
                        <span class="block text-gray-600 leading-tight my-1">{{ product.name }}</span>
                        <span class="block text-gray-400">x{{ product.pivot.quantity }}</span>
                        <span class="block text-gray-400">€{{ product.price }}</span>
                    </div>
                </div>
            </div>

            <div class="mb-4 text-sm flex justify-between items-center">
                <span class="text-gray-400">{{ $t('total') }}</span>
                <span class="text-gray-600">€{{ last.total }}</span>
            </div>

            <div class="w-full">
                <router-link
                    :to="{ name: 'My Orders' }"
                    class="block text-center text-xs mt-5 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white px-3 py-3 shadow-sm">
                        {{ $t('my_orders') }}
                </router-link>
            </div>
        </div>

        <!-- Se non ci sono ordini -->
        <div v-else class="flex items-center justify-center text-sm text-gray-400 h-28">
            <p>{{ $t('no_last_purchase') }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Dashboard.Widgets.LastOrderWidget',
    mounted() {
        this.getLastOrder();
    },
    computed: {
        last() {
            return this.$store.state.order.last
        }
    },
    methods: {
        getLastOrder() {
            this.$store.dispatch('order/getLastOrder')
        },
        status(order) {
            switch (order.status) {
                case 'pending':
                    return 'bg-yellow-100 text-yellow-600'            
                case 'in transit':
                    return 'bg-blue-100 text-blue-600'
                case 'complete':
                    return 'bg-green-100 text-c-green'
                case 'canceled':
                    return 'bg-red-100 text-red-600'
            }
        },
    }
}
</script>