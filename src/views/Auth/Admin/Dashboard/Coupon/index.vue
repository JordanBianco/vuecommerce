<template>
    <div>
        <header class="pb-6 flex items-center justify-between">
            <h2 class="text-xl text-gray-600">Coupon</h2>
            
        </header>

        <section class="bg-white border border-gray-200 shadow-lg rounded-lg py-6">
            <!-- Header Filter Section -->
            <div class="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6 text-xs px-6">
                <div class="relative w-full md:w-1/3">
                    <input
                        v-model="search"
                        :placeholder="$t('search_coupon_placeholder')"
                        type="text"
                        class="py-2 pr-10 border-gray-200 rounded-lg w-full placeholder-gray-300 text-xs focus:ring-gray-300">
                    
                        <svg class="w-4.5 h-4.5 text-gray-300 flex-none absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
                </div>

                <div class="flex space-x-2 items-center">
                    <select v-model="perPage" class="p-2 pr-10 border border-gray-200 rounded-lg focus:ring-gray-300 text-gray-500 text-xs">
                        <option value="">{{ $t('results_per_page') }}</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                    <button
                        @click="toggleCreateMenu"
                        class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-full text-xs text-white p-2 shadow-sm hover:shadow-xl">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
                            <!-- {{ $t('add_coupon') }} -->
                    </button>
                </div>
            </div>

            <div v-if="coupons">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <!-- Table Row -->
                        <tr class="bg-gray-100 text-gray-600 text-xs">
                            
                            <!-- ID -->
                            <th class="font-normal text-left uppercase px-4 py-3">
                                <div @click="sortBy('id')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                                    <span>ID</span>

                                    <div class="flex flex-col -space-y-3">
                                        <svg :class="{ 'text-gray-600' : sort == 'id' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                        <svg :class="{ 'text-gray-600' : sort == 'id' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                    </div>
                                </div>
                            </th>

                            <!-- CODE -->
                            <th class="font-normal text-left uppercase px-4 py-3">
                                <div class="cursor-pointer max-w-max">
                                    <span>{{ $t('code') }}</span>
                                </div>
                            </th>

                            <!-- DESCRIPTION -->
                            <th class="font-normal text-left uppercase px-4 py-3">
                                <div class="cursor-pointer max-w-max">
                                    <span>{{ $t('description') }}</span>
                                </div>
                            </th>

                            <!-- DISCOUNT -->
                            <th @click="sortBy('discount')" class="font-normal text-left uppercase px-4 py-3">
                                <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                    <span>{{ $t('discount') }}</span>

                                    <div class="flex flex-col -space-y-3">
                                        <svg :class="{ 'text-gray-600' : sort == 'discount' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                        <svg :class="{ 'text-gray-600' : sort == 'discount' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                    </div>
                                </div>
                            </th>

                            <!-- CREATO IL -->
                            <th @click="sortBy('created_at')" class="font-normal text-left uppercase px-4 py-3">
                                <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                    <span class="whitespace-nowrap">{{ $t('created_at') }}</span>

                                    <div class="flex flex-col -space-y-3">
                                        <svg :class="{ 'text-gray-600' : sort == 'created_at' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                        <svg :class="{ 'text-gray-600' : sort == 'created_at' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                    </div>
                                </div>
                            </th>

                            <th class="font-normal text-left uppercase px-4 py-3">
                                <span>{{ $t('actions') }}</span>
                            </th>
                        </tr>
                        <!-- Table Row -->
                        <tr v-for="(coupon, index) in coupons.data" :key="coupon.id" class="odd:bg-gray-50 text-xs text-gray-500">
                            <td class="px-4 py-3 font-semibold text-blue-400 whitespace-nowrap">#{{ coupon.id }}</td>
                            <td class="px-4 py-3 whitespace-nowrap">{{ coupon.code }}</td>
                            <td class="px-4 py-3 whitespace-nowrap">{{ coupon.description }}</td>
                            <td class="px-4 py-3 whitespace-nowrap">{{ coupon.discount }}</td>
                            <td class="px-4 py-3 whitespace-nowrap">{{ $moment(coupon.created_at).format('DD.MM.YYYY HH:mm') }}</td>
                            <td class="px-4 py-3">
                                <div class="flex items-center space-x-2 text-gray-400 duration-150">

                                    <router-link
                                        :to="{ name: 'coupon.edit', params: { slug: coupon.slug }}"
                                        :title="$t('edit')"
                                        class="hover:text-gray-500 duration-150">
                                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                    </router-link>

                                    <div
                                        :title="$t('delete')"
                                        @click="deleteCoupon(coupon, index)"
                                        class="cursor-pointer hover:text-gray-500 duration-150">
                                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <footer v-if="coupons.meta" class="px-4 py-3 text-sm flex items-center justify-between text-gray-400">
                        <!-- Pagination -->
                        <span class="text-xs">{{ coupons.meta.total }} {{ $t('results') }}</span>

                        <pagination
                            class="flex items-center space-x-4"
                            :data="coupons"
                            :limit="3"
                            @pagination-change-page="getCoupons">
                                <div
                                    class="bg-gray-100 text-gray-600 text-sm p-1 rounded-lg shadow"
                                    slot="prev-nav">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div
                                    class="bg-gray-100 text-gray-600 text-sm p-1 rounded-lg shadow"
                                    slot="next-nav">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </div>
                        </pagination>
                    </footer>
                </div>
            </div>
        </section>

        <div
            :class="{ 'translate-x-full' : !showCreateMenu }"
            class="fixed right-0 bg-white xs:w-96 w-full top-0 bottom-0 min-h-screen transform duration-300 ease-in-out z-50">
                <CouponCreate
                        @toggleCreateMenu="toggleCreateMenu"
                    />
        </div>
        <!-- Overlay -->
        <div v-if="showCreateMenu" @click="toggleCreateMenu" class="fixed inset-0 bg-black opacity-30 z-40"></div>

    </div>
</template>

<script>
import CouponCreate from '@/components/AdminDashboard/CouponCreate'

export default {
    name: 'Admin.Dashboard.Coupon.index',
    components: {
        CouponCreate
    },
    mounted() {
        this.getCoupons()
    },
    data() {
        return {
            showCreateMenu: false,
            search: '',
            sort: 'id',
            dir: 'asc',
            perPage: ''
        }
    },
    watch: {
        search() {
            this.getCoupons()
        },
        sort() {
            this.getCoupons()
        },
        dir() {
            this.getCoupons()
        },
        perPage() {
            this.getCoupons()
        },
        page() {
            this.getCoupons()
        },
    },
    computed: {
        coupons() {
            return this.$store.state.coupon.coupons
        }
    },
    methods: {
        getCoupons(page = 1) {
            this.$store.dispatch('coupon/getCoupons', {
                search: this.search,
                perPage: this.perPage,
                sort: this.sort,
                dir: this.dir,
                page: page
            })
        },
        sortBy(value) {
            if (this.sort == value) {
                this.dir = this.dir == 'asc' ? 'desc' : 'asc'
            } else {
                this.dir = this.dir == 'asc' ? 'desc' : 'asc'
                this.sort = value
            }
        },
        toggleCreateMenu() {
            this.$store.dispatch('coupon/emptyCouponErrors')
            this.showCreateMenu = ! this.showCreateMenu
        },
        deleteCoupon(coupon, index) {
            if (confirm('Eliminare coupon?')) {
                this.$store.dispatch('coupon/deleteCoupon', {
                    coupon: coupon,
                    index: index,
                })
            }
        }
    }
}
</script>