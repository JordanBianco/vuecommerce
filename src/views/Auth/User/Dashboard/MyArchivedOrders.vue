<template>
    <section>
        <header class="pb-6">
            <h2 class="text-xl text-gray-600">{{ $t('archived_orders') }}</h2>
        </header>

        <div class="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6">
            <div class="relative w-full md:w-1/3">
                <input
                    v-model="search"
                    :placeholder="$t('search_placeholder')"
                    type="text"
                    class="py-1.5 pr-10 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 w-full placeholder-gray-300 text-xs">
                
                    <svg class="w-4.5 h-4.5 text-gray-300 flex-none absolute right-3 top-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
            </div>

            <div class="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-2 md:space-y-0">
                <select v-model="fstatus" class="p-2 px-4 border border-gray-200 rounded-lg focus:outline-none text-gray-500 text-xs">
                    <option value="">{{ $t('status') }}</option>
                    <option value="pending">pending</option>
                    <option value="in transit">in transit</option>
                    <option value="complete">complete</option>
                    <option value="canceled">canceled</option>
                </select>

                <select v-model="perPage" class="p-2 px-4 pr-10 border border-gray-200 rounded-lg focus:outline-none text-gray-500 text-xs">
                    <option value="">{{ $t('results_per_page') }}</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>

        <div class="overflow-x-auto pb-8">
            <table class="w-full">
                <tr class="bg-gray-100 text-gray-600 text-xs border-b">
                    
                    <!-- Numero Ordine -->
                    <th class="font-normal text-left uppercase p-3">
                        <div @click="sortBy('order_number')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span>#{{ $t('order_number') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-600' : sort == 'order_number' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-600' : sort == 'order_number' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>
                    
                    <!-- Indirizzo spedizione -->
                    <th class="font-normal text-left uppercase p-3">
                        <span>{{ $t('shipping_address') }}</span>
                    </th>
                    
                    <!-- Totale -->
                    <th class="font-normal text-left uppercase p-3">
                        <div @click="sortBy('total')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span>{{ $t('total') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-600' : sort == 'total' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-600' : sort == 'total' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>

                    <!-- Data Acquisto -->
                    <th class="font-normal text-left uppercase p-3">
                        <div @click="sortBy('created_at')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span class="whitespace-nowrap">{{ $t('purchase_date') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-600' : sort == 'created_at' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-600' : sort == 'created_at' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>

                    <!-- Data Archiviazione -->
                    <th class="font-normal text-left uppercase p-3">
                        <div @click="sortBy('archived_at')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span class="whitespace-nowrap">{{ $t('archiving_date') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-600' : sort == 'archived_at' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-600' : sort == 'archived_at' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>

                    <!-- Stato -->
                    <th class="font-normal text-left uppercase p-3">
                        <div @click="sortBy('status')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span>{{ $t('status') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-600' : sort == 'status' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-600' : sort == 'status' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>
                    
                    <!-- Actions -->
                    <th class="font-normal text-left uppercase p-3">
                        <span>{{ $t('actions') }}</span>
                    </th>
                </tr>
                <tr v-for="(order, index) in archived.data" :key="order.id" class="odd:bg-gray-100 last:border-b text-xs text-gray-400 p-3">
                    <td class="p-3 text-indigo-400 whitespace-nowrap">{{ order.order_number }}</td>
                    <td class="p-3 whitespace-nowrap">{{ order.address }}</td>
                    <td class="p-3">€{{ order.total }}</td>
                    <td class="p-3 whitespace-nowrap">{{ $moment(order.created_at).format('DD.MM.YYYY HH:mm') }}</td>
                    <td class="p-3 whitespace-nowrap">{{ $moment(order.archived_at).format('DD.MM.YYYY HH:mm') }}</td>
                    <td class="p-3">
                        <div :class="status(order)" class="p-1 px-2.5 text-xs rounded-full max-w-max whitespace-nowrap">
                            {{ order.status }}
                        </div>
                    </td>
                    <td class="p-3">
                        <div class="flex items-center space-x-2 text-gray-500">
                            <div :title="$t('restore')" @click="restoreOrder(order, index)" class="cursor-pointer">
                                <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z"/></svg>
                            </div>
                            <div :title="$t('details')" @click="selectOrder(order)" class="cursor-pointer">
                                <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm.38-2.92A1,1,0,0,0,11.8,11l-.18.06-.18.09-.15.12A1,1,0,0,0,11,12a1,1,0,0,0,.29.71,1,1,0,0,0,.33.21A.84.84,0,0,0,12,13a1,1,0,0,0,.71-.29A1,1,0,0,0,13,12a1,1,0,0,0-.29-.71A1.15,1.15,0,0,0,12.38,11.08ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Z"/></svg>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

            <footer v-if="archived.meta"  class="mt-8 flex justify-between items-center text-gray-500">
                
                <span class="text-xs block">{{ $t('results') }} {{ archived.meta.total }}</span>

                <!-- Pagination -->
                <pagination
                    class="flex items-center space-x-4 text-base"
                    :data="archived"
                    :limit="3"
                    @pagination-change-page="getArchivedOrders">
                        <div
                            class="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white text-sm p-1 rounded-lg"
                            slot="prev-nav">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div
                            class="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white text-sm p-1 rounded-lg"
                            slot="next-nav">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                </pagination>
            </footer>

        </div>

        <!-- Side Order Details -->
        <div
            :class="{ 'translate-x-full' : !orderDetails }"
            class="fixed right-0 bg-white xs:w-120 w-full top-0 bottom-0 min-h-screen transform duration-300 ease-in-out z-50">
                <OrderDetails
                    @toggleOrderDetails="toggleOrderDetails"
                    :order="selectedOrder"
                />
        </div>
        <!-- Overlay -->
        <div v-if="orderDetails" @click="toggleOrderDetails" class="fixed inset-0 bg-black opacity-30 z-40"></div>

    </section>
</template>

<script>
import OrderDetails from '@/components/Dashboard/OrderDetails'

export default {
    name: 'User.Dashboard.MyArchivedOrders',
    components: {
        OrderDetails
    },
    mounted() {
        this.getArchivedOrders();
    },
    data() {
        return {
            search: '',
            sort: 'created_at',
            dir: 'desc',
            fstatus: '',
            selectedOrder: {},
            orderDetails: false,
            perPage: ''
        }
    },
    watch: {
        search() {
            if (this.search.length <= 6) {
                return
            }
            this.getArchivedOrders();
            
        },
        sort() {
            this.getArchivedOrders();
        },
        dir() {
            this.getArchivedOrders();
        },
        fstatus() {
            this.getArchivedOrders();
        },
        perPage() {
			this.getArchivedOrders();
		},
    },
    computed: {
        archived() {
            return this.$store.state.order.archived
        },
    },
    methods: {
        getArchivedOrders(page = 1) {
            this.$store.dispatch('order/getArchivedOrders', {
                search: this.search,
                fstatus: this.fstatus,
                sort: this.sort,
                dir: this.dir,
                perPage: this.perPage,
                page: page,
            })
        },
        restoreOrder(order, index) {
            this.$store.dispatch('order/restoreOrder', {
                order: order,
                index: index
            })

            this.getArchivedOrders()
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
        sortBy(value) {
            if (this.sort == value) {
                this.dir = this.dir == 'asc' ? 'desc' : 'asc'
            } else {
                this.dir = this.dir == 'asc' ? 'desc' : 'asc'
                this.sort = value
            }
        },
        selectOrder(order) {
            this.selectedOrder = order
            this.orderDetails = true
        },
        toggleOrderDetails() {
            this.orderDetails = ! this.orderDetails
        },
    }
}
</script>