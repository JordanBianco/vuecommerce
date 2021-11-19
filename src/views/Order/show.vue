<template>
    <div>
        <div v-if="order">
            <header class="bg-gray-100 p-4 md:px-0">
                <div class="md:px-0 md:w-11/12 md:mx-auto">
                    <span class="block text-xs text-gray-400">{{ $t('order_number') }}</span>
                    <p class="text-c-dark-gray text-sm">{{ order.order_number }}</p>
                </div>
            </header>

            <div class="md:px-0 px-4 md:w-11/12 md:mx-auto">
                <div class="border-b space-y-2 py-6">

                    <div class="flex space-x-2 text-gray-400 text-sm">
                        <div class="flex space-x-1 items-center">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.2,17.41A6,6,0,0,1,14.46,20c-2.68,0-5-2-6-5H14a1,1,0,0,0,0-2H8.05c0-.33-.05-.67-.05-1s0-.67.05-1H14a1,1,0,0,0,0-2H8.47c1-3,3.31-5,6-5A6,6,0,0,1,19.2,6.59a1,1,0,1,0,1.6-1.18A7.92,7.92,0,0,0,14.46,2c-3.76,0-7,2.84-8.07,7H4a1,1,0,0,0,0,2H6.05c0,.33,0,.67,0,1s0,.67,0,1H4a1,1,0,0,0,0,2H6.39c1.09,4.16,4.31,7,8.07,7a7.92,7.92,0,0,0,6.34-3.41,1,1,0,0,0-1.6-1.18Z"/></svg>
                            <span>{{ $t('total') }}</span>
                        </div>
                        <p>{{ order.total }}</p>
                    </div>
                    
                    <div class="flex space-x-2 text-gray-400 text-sm">
                        <div class="flex space-x-1 items-center">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/></svg>
                            <span>{{ $t('order_date') }}</span>
                        </div>
                        <p>{{ $moment(order.created_at).format('DD.MM.YYYY - HH:mm') }}</p>
                    </div>

                    <div v-if="order.archived_at != null" class="flex space-x-2 text-gray-400 text-sm">
                        <div class="flex space-x-1 items-center">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/></svg>
                            <span>{{ $t('archiving_date') }}</span>
                        </div>
                        <p>{{ $moment(order.archived_at).format('DD.MM.YYYY - HH:mm') }}</p>
                    </div>
                </div>

                <!-- Articles -->
                <div v-for="product in order.products" :key="product.id" class="border-b py-6">
                    <div class="flex space-x-4">
                        <div class="flex-shrink-0">
                            <div class="flex-none bg-gray-200 w-16 h-16 xs:w-20 xs:h-20 rounded-lg"></div>
                        </div>
                        <div class="text-sm text-gray-400 lg:mt-0 w-full">
                            <h2 class="text-c-dark-gray mb-2">{{ product.name }}</h2>
                            <p class="leading-tight text-xs lg:text-sm mb-4">{{ product.description }}</p>
                            
                            <div class="mt-4">
                                <div class="flex justify-between items-center space-x-2 bg-gray-100 p-2">
                                    <span class="text-xs">{{ $t('height') }}</span>
                                    <span class="text-gray-600 text-xs">{{ product.height }}cm</span>
                                </div>
                                <div class="flex justify-between items-center space-x-2 bg-gray-50 p-2">
                                    <span class="text-xs">{{ $t('weight') }}</span>
                                    <span class="text-gray-600 text-xs">{{ product.weight }}gr</span>
                                </div>
                                <div class="flex justify-between items-center space-x-2 bg-gray-100 p-2">
                                    <span class="text-xs">{{ $t('price') }}</span>
                                    <span class="text-gray-600 text-xs">€{{ product.price }}</span>
                                </div>
                                <div class="flex justify-between items-center space-x-2 bg-gray-50 p-2">
                                    <span class="text-xs">{{ $t('quantity') }}</span>
                                    <span class="text-gray-600 text-xs">x{{ product.pivot.quantity }}</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center mt-16">
            <img
                class="animate-spin w-10 h-10"
                src="https://img.icons8.com/ios/50/BBBBBB/spinning-circle--v1.png"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Order.show',
    mounted() {
        this.getOrderDetails();
    },
    computed: {
        order() {
            return this.$store.state.order.order
        }
    },
    methods: {
        getOrderDetails() {
            this.$store.dispatch('order/getOrderDetails', {
                slug: this.$route.params.slug
            })
        }
    }
}
</script>