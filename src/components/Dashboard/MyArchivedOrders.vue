<template>
    <section class="lg:px-8">

        <div v-if="archived.length != 0">

            <header class="flex flex-col space-y-2 xs:space-y-0 xs:flex-row xs:justify-between xs:items-baseline pb-8 text-sm text-gray-400">
                <div>
                    {{ archived.length }} ordini archiviati
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-500">ordina per</span>
                    <select v-model="sort" class="border rounded-lg focus:outline-none px-2 py-1.5 cursor-pointer">
                        <option selected value="created_at.desc">Più recenti</option>
                        <option value="created_at.asc">Meno recenti</option>
                    </select>
                </div>
            </header>

            <div v-for="(order, index) in archived" :key="order.id" class="mb-10">
                <div class="md:flex md:items-center md:justify-between bg-gray-100 p-4">
                    <div>
                        <span class="block text-xs text-gray-400">numero ordine</span>
                        <p class="text-c-dark-gray text-sm">{{ order.order_number }}</p>
                    </div> 

                    <div class="mt-2 flex items-center space-x-2 text-gray-400 text-xs">
                        <div @click="restoreOrder(order, index)" class="flex items-center space-x-1">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z"/></svg>
                            <span class="cursor-pointer">ripristina</span>
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
                            
                            <!-- Archiviato il -->
                            <div>
                                <p class="text-blue-500 text-xs">archiviato il {{ $moment(order.archived_at).format('DD/MM/YYYY HH:mm') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-gray-400 text-center text-sm">Gli ordini archiviati verranno visualizzati qui.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Dashboard.MyArchivedOrders',
    mounted() {
        this.getArchivedOrders();
    },
    data() {
        return {
            sort: 'created_at.desc'
        }
    },
    watch: {
        sort() {
            this.getArchivedOrders();
        }
    },
    computed: {
        archived() {
            return this.$store.state.order.archived
        },
    },
    methods: {
        getArchivedOrders() {
            this.$store.dispatch('order/getArchivedOrders', {
                sort: this.sort
            })
        },
        restoreOrder(order, index) {
            this.$store.dispatch('order/restoreOrder', {
                order: order,
                index: index
            })
        },
    }
}
</script>