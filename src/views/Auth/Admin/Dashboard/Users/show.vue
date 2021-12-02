<template>
    <div>
        <section v-if="user" class="space-y-16">
            <div class="bg-white p-6 shadow rounded-lg">
                <div class="flex flex-row space-x-4">
                    <div>
                        <div class="bg-gray-200 rounded-lg lg:w-28 lg:h-28 w-36 h-36"></div>
                    </div>
                    <div class="flex items-start justify-between w-full">
                        <div>
                            <h2 class="text-gray-600 mt-2 xl:mt-0">{{ user.first_name + ' ' + user.last_name }}</h2>
                            <span class="text-sm block text-gray-400">{{ user.email }}</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <router-link
                                :title="$t('edit')"
                                :to="{ name: 'user.edit', params: { id: user.id }}"
                                class="text-gray-400 hover:text-gray-500 duration-150">
                                    <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                            </router-link>

                            <div
                                :title="$t('delete')"
                                @click="deleteUser(user)"
                                class="cursor-pointer text-gray-400 hover:text-gray-500 duration-150">
                                    <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-sm text-gray-600 mt-6">
                    <div class="space-y-2">
                        <div class="flex items-center space-x-2">
                            <div class="bg-gray-100 p-1.5 rounded-lg">
                                <svg class="w-4.5 h-4.5 text-gray-600 flex-none mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                            </div>
                            <span class="text-gray-400">{{ user.country }}, {{ user.city }}, {{ user.province }}</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <div class="bg-gray-100 p-1.5 rounded-lg">
                                <svg class="w-4.5 h-4.5 text-gray-600 flex-none mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/></svg>
                            </div>
                            <span class="text-gray-400">{{ user.address }}, {{ user.zipcode }}</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <div class="bg-gray-100 p-1.5 rounded-lg">
                                <svg class="w-4.5 h-4.5 text-gray-600 flex-none mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"/></svg>
                            </div>
                            <span class="text-gray-400">{{ user.phone }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <section v-if="orders">

                <header class="pb-6">
                    <h2 class="text-lg text-gray-600">{{ user.first_name }} {{ $tc('orders', orders.data.length) }}</h2>
                </header>

                <div class="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6 text-xs">
                    <div class="relative w-full md:w-1/3">
                        <input
                            v-model="search"
                            :placeholder="$t('search_placeholder')"
                            type="text"
                            class="p-2 pr-10 border rounded-lg focus:outline-none focus:border-indigo-400 w-full">
                        
                            <svg class="w-5 h-5 text-gray-300 flex-none absolute right-3 top-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
                    </div>

                    <div class="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-2 md:space-y-0">
                        <select v-model="fstatus" class="p-2 px-4 border rounded-lg focus:outline-none focus:border-indigo-400 text-gray-600">
                            <option value="">{{ $t('status') }}</option>
                            <option value="pending">pending</option>
                            <option value="in transit">in transit</option>
                            <option value="complete">complete</option>
                            <option value="canceled">canceled</option>
                        </select>

                        <select v-model="perPage" class="p-2 px-4 border rounded-lg focus:outline-none focus:border-indigo-400 text-gray-600">
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
                        </tr>
                        <tr v-for="(order) in orders.data" :key="order.id" class="odd:bg-gray-100 last:border-b text-xs text-gray-400 p-3">
                            <td class="p-3 text-indigo-400 whitespace-nowrap">{{ order.order_number }}</td>
                            <td class="p-3 whitespace-nowrap">{{ order.address }}</td>
                            <td class="p-3">€{{ order.total }}</td>
                            <td class="p-3 whitespace-nowrap">{{ $moment(order.created_at).format('DD.MM.YYYY HH:mm') }}</td>
                            <td class="p-3">
                                <div :class="status(order)" class="p-1 px-2.5 text-xxs rounded-full max-w-max whitespace-nowrap">
                                    {{ order.status }}
                                </div>
                            </td>
                        </tr>
                    </table>

                    <footer v-if="orders.meta"  class="mt-8 flex justify-between items-center text-gray-500">
                        <span class="text-xs block">{{ $t('results') }} {{ orders.meta.total }}</span>
                        <!-- Pagination -->
                        <pagination
                            class="flex items-center space-x-4 text-base"
                            :data="orders"
                            :limit="3"
                            @pagination-change-page="getUserOrders">
                                <div
                                    class="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-sm p-1 rounded-lg"
                                    slot="prev-nav">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div
                                    class="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-sm p-1 rounded-lg"
                                    slot="next-nav">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </div>
                        </pagination>
                    </footer>
                </div>

            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Admin.Dashboard.Users.show',
    props: ['id'],
    mounted() {
        this.getUser();
        this.getUserOrders();
    },
    data() {
        return {
            search: '',
            fstatus: '',
            sort: 'created_at',
            dir: 'desc',
            perPage: '',
        }
    },
    watch: {
        search() {
            this.getUserOrders();
        },
        sort() {
            this.getUserOrders();
        },
        dir() {
            this.getUserOrders();
        },
        fstatus() {
            this.getUserOrders();
        },
        perPage() {
			this.getUserOrders();
		},
    },
    computed: {
        user() {
            return this.$store.state.users.user
        },
        orders() {
            return this.$store.state.users.orders
        },
    },
    methods: {
        getUser() {
            this.$store.dispatch('users/getUser', {
                id: this.id
            })
        },
        getUserOrders(page = 1) {
            this.$store.dispatch('users/getUserOrders', {
                id: this.id,
                search: this.search,
                fstatus: this.fstatus,
                sort: this.sort,
                dir: this.dir,
                perPage: this.perPage,
                page: page
            })
        },
        deleteUser(user) {
            if(confirm('Eliminare ' + user.first_name + ' ' + user.last_name + '?')) {
                this.$store.dispatch('users/deleteUser', {
                    user: user,
                })
            }
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
    }
}
</script>