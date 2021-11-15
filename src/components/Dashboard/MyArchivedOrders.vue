<template>
    <div class="px-8">
        <div v-if="archived.length != 0">

            <header class="flex justify-between items-baseline pb-8 text-sm text-gray-400">
                <div>
                    Ordini archiviati: {{ archived.length }}
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-500">ordina per</span>
                    <select v-model="sort" class="border rounded-lg focus:outline-none px-2 py-1.5 cursor-pointer">
                        <option selected value="created_at.desc">Più recenti</option>
                        <option value="created_at.asc">Meno recenti</option>
                    </select>
                </div>
            </header>

            <div v-for="(order, index) in archived" :key="order.id">
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

                        <div>
                            <span class="block text-xs text-gray-400">archiviato il</span>
                            <p class="text-c-dark-gray text-sm">{{ $moment(order.archived_at).format('DD/MM/YYYY - HH:mm') }}</p>
                        </div>
                    </div>

                    <div>
                        <div @click="restoreOrder(order, index)" class="text-gray-500 text-sm">
                            <span class="cursor-pointer">Ripristina ordine</span>
                        </div>
                    </div>
                </div>

                <div v-for="product in order.products" :key="product.id" class="flex justify-between border-b py-6 space-x-8 mb-10">
                    <div class="flex space-x-4 w-3/4">
                        <div class="flex-shrink-0">
                            <div class="flex-none bg-gray-200 w-20 h-20 rounded-lg"></div>
                        </div>
                        <div class="text-sm text-gray-400">
                            <h2 class="text-c-dark-gray mb-2">{{ product.name }}</h2>
                            
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
                                    <span class="text-c-dark-gray text-center">€{{ product.price }}</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs text-center">quantità</span>
                                    <span class="text-c-dark-gray text-center">{{ product.pivot.quantity }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-gray-400 text-center text-sm">Gli ordini archiviati verranno visualizzati qui.</p>
        </div>
    </div>
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