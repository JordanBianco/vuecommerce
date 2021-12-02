<template>
    <div>
        <TheNavbar />

        <section class="p-4 md:px-0 md:w-11/12 md:mx-auto">
            <div v-if="items.length > 0">
                <header class="border-b py-4 md:px-0 text-gray-500">
                    <div class="flex items-center justify-between">
                        <span>{{ $t('checkout') }}</span>
                        <span v-if="items.length > 0" class="text-sm">
                            {{ items.length }} {{ $tc('items', items.length) }}
                        </span>
                    </div>
                </header>
            </div>
        </section>

        <div class="lg:flex lg:space-x-8 md:w-11/12 md:mx-auto px-4 md:px-0 text-sm">

            <!-- Left Side -->
            <div class="w-full lg:w-2/3 text-sm">
                <section class="mb-8">
                    <h2 class="text-gray-500 bg-gray-100 p-4 mb-4">{{ $t('customer_details') }}</h2>
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4 lg:justify-between lg:mb-4">
                        
                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0 relative">
                            <label class="text-gray-400 text-sm" for="first_name">{{ $t('first_name') }}</label>
                            <input
                                @keydown="errors.first_name = ''"
                                v-model="customer.first_name"
                                type="text"
                                :class="{ 'border-red-500' : errors.first_name }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.first_name" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.first_name" class="text-xs text-red-500 mt-0.5">{{ errors.first_name[0] }}</p>
                        </div>

                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0 relative">
                            <label class="text-gray-400 text-sm" for="last_name">{{ $t('last_name') }}</label>
                            <input
                                @keydown="errors.last_name = ''"
                                v-model="customer.last_name"
                                type="text"
                                :class="{ 'border-red-500' : errors.last_name }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.last_name" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.last_name" class="text-xs text-red-500 mt-0.5">{{ errors.last_name[0] }}</p>
                        </div>
                    </div>

                    <div class="w-full relative mb-4">
                        <label class="text-gray-400 text-sm" for="email">{{ $t('email') }}</label>
                        <input
                            @keydown="errors.email = ''"
                            v-model="customer.email"
                            type="email"
                            :class="{ 'border-red-500' : errors.email }"
                            class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                            <svg v-if="errors.email" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                            <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
                    </div>
                </section>

                <section>
                    <h2 class="text-gray-500 mb-4 p-4 bg-gray-100">{{ $t('shipping_details') }}</h2>
                    <div class="space-y-4">

                        <div class="w-full relative">
                            <label class="text-gray-400 text-sm" for="country">{{ $t('country') }}</label>
                            <input
                                @keydown="errors.country = ''"
                                v-model="customer.country"
                                type="text"
                                :class="{ 'border-red-500' : errors.country }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.country" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.country" class="text-xs text-red-500 mt-0.5">{{ errors.country[0] }}</p>
                        </div>

                        <div class="w-full relative">
                            <label class="text-gray-400 text-sm" for="city">{{ $t('city') }}</label>
                            <input
                                @keydown="errors.city = ''"
                                v-model="customer.city"
                                type="text"
                                :class="{ 'border-red-500' : errors.city }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.city" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.city" class="text-xs text-red-500 mt-0.5">{{ errors.city[0] }}</p>
                        </div>

                        <div class="w-full relative">
                            <label class="text-gray-400 text-sm" for="province">{{ $t('province') }}</label>
                            <input
                                @keydown="errors.province = ''"
                                v-model="customer.province"
                                type="text"
                                :class="{ 'border-red-500' : errors.province }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.province" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.province" class="text-xs text-red-500 mt-0.5">{{ errors.province[0] }}</p>
                        </div>
                        
                        <div class="w-full relative">
                            <label class="text-gray-400 text-sm" for="address">{{ $t('address') }}</label>
                            <input
                                @keydown="errors.address = ''"
                                v-model="customer.address"
                                type="text"
                                :class="{ 'border-red-500' : errors.address }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.address" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.address" class="text-xs text-red-500 mt-0.5">{{ errors.address[0] }}</p>
                        </div>

                        <div class="w-full relative">
                            <label class="text-gray-400 text-sm" for="zipcode">{{ $t('zipcode') }}</label>
                            <input
                                @keydown="errors.zipcode = ''"
                                v-model="customer.zipcode"
                                type="text"
                                :class="{ 'border-red-500' : errors.zipcode }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.zipcode" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.zipcode" class="text-xs text-red-500 mt-0.5">{{ errors.zipcode[0] }}</p>
                        </div>

                        <div class="w-full relative">
                            <label class="text-gray-400 text-sm" for="phone">{{ $t('phone') }}</label>
                            <input
                                @keydown="errors.phone = ''"
                                v-model="customer.phone"
                                type="text"
                                :class="{ 'border-red-500' : errors.phone }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2">
                                <svg v-if="errors.phone" class="text-red-500 w-5 h-5 absolute right-2 top-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                                <p v-if="errors.phone" class="text-xs text-red-500 mt-0.5">{{ errors.phone[0] }}</p>
                        </div>

                        <div class="w-full">
                            <label class="text-gray-400 text-sm" for="phone">{{ $t('notes') }}</label>
                            <textarea
                                v-model="notes"
                                rows="3"
                                :class="{ 'border-red-500' : errors.notes }"
                                class="border border-gray-200 focus:outline-none w-full rounded-lg p-2"></textarea>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Summary -->
            <section class="w-full lg:w-1/3 border-t pt-8 mt-8 lg:border-0 lg:pt-0 lg:mt-0">
                <h2 class="text-gray-500 mb-4 p-4 bg-gray-100">{{ $t('summary') }}</h2>
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="flex space-x-4 p-4 odd:bg-gray-100 rounded-lg">
                        <!-- Left Side -->
                        <router-link :to="{ name: 'product.show', params: { slug: item.product.slug }}">
                            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
                        </router-link>
                        <!-- Right Side -->
                        <div class="w-full flex flex-col space-y-1 justify-between">
                            <!-- Nome -->
                            <h3 class="text-c-dark-gray text-sm leading-tight mb-1">{{ item.product.name }}</h3>
                            <p class="text-gray-500 text-xs">{{ item.product.description | truncate(80) }}</p>
                            <!-- Prezzo -->
                            <div class="flex items-center justify-between text-gray-500 text-xs pt-2">
                                <p>{{ $t('price') }}</p>
                                <p>€{{ item.product.price * item.quantity }}</p>
                            </div>
                            <!-- Quantity -->
                            <div class="flex items-center justify-between text-gray-500 text-xs">
                                <p>{{ $t('quantity') }}</p>
                                <p>{{ item.quantity }}</p>
                            </div>
                        </div>
                </div>

                <footer class="text-gray-500 mt-4 pt-4 md:pt-8 md:mt-8 border-t border-gray-200">
                    <!-- Spedizione gratis -->
                    <div
                        v-if="freeShipping > subTotal"
                        class="bg-blue-100 text-blue-500 text-xs flex space-x-2 px-4 py-6 mb-4 items-start">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                            <span>{{ $t('free_shipping') }}</span>
                    </div>

                    <!-- Codice Sconto -->
                    <div
                        v-if="isFirstPurchase"
                        class="bg-green-100 text-c-green text-xs flex space-x-2 px-4 py-6 mb-4 items-start">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75781,10.75781a3,3,0,1,0-3-3A3.00328,3.00328,0,0,0,7.75781,10.75781Zm0-4a1,1,0,1,1-1,1A1.00067,1.00067,0,0,1,7.75781,6.75781Zm8.48438,6.48438a3,3,0,1,0,3,3A3.00328,3.00328,0,0,0,16.24219,13.24219Zm0,4a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,16.24219,17.24219ZM19.707,4.293a.99962.99962,0,0,0-1.41406,0l-14,14A.99989.99989,0,1,0,5.707,19.707l14-14A.99962.99962,0,0,0,19.707,4.293Z"/></svg>
                            <span>{{ $t('first_purchase') }}</span>
                    </div>

                    <div class="text-gray-400">
                        <!-- Subtotale -->
                        <div class="flex items-center justify-between text-xs mb-2">
                            <span>{{ $t('subtotal') }}</span>
                            <span>€{{ subTotal }}</span>
                        </div>
                        
                        <!-- Spedizione -->
                        <div class="flex items-center justify-between text-xs mb-2">
                            <span>{{ $t('shipping') }}</span>
                            <span>{{ freeShipping > subTotal ?  '€' + shipping : $t('free') }}</span>
                        </div>

                        <!-- Sconto -->
                        <div v-if="coupon.length != 0" class="flex items-center justify-between text-xs mb-2 border border-green-200 text-c-green p-2 py-4">
                            <span>{{ $t('discount_code') }} "{{ coupon.code }}"</span>
                            <span>-{{ coupon.discount }}%</span>
                        </div>

                        <!-- Totale -->
                        <div class="flex items-center justify-between text-c-dark-gray mt-4">
                            <span class="text-sm">{{ $t('total') }}</span>
                            <span class="text-lg font-semibold">€{{ total }}</span>
                        </div>
                    </div>
                </footer>

                <div v-if="coupon.length == 0" class="mt-6">
                    <div @click="showCoupon = ! showCoupon" class="flex items-center justify-between text-gray-400 mb-1">
                        <p>{{ $t('have_coupon') }}</p>
                        <svg :class="[ !showCoupon ? 'rotate-180' : '' ]" class="w-6 h-6 flex-none transform transition duration-150 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                    </div>
                    <transition v-if="showCoupon" name="fade">
                       <div>
                           <div class="flex items-center space-x-2">
                                <input
                                    @click="couponErrors.coupon = ''"
                                    type="text"
                                    v-model="couponName"
                                    class="border border-gray-200 rounded-lg p-2 focus:outline-none w-full">
                                <button @click="verifyCoupon" class="px-3 py-2.5 bg-c-dark-gray text-white text-xs rounded-lg focus:outline-none">
                                    {{ $t('verify') }}
                                </button>
                        </div>
                        <p v-if="couponErrors.coupon" class="text-red-500 text-xs mt-0.5">{{ couponErrors.coupon[0] }}</p>
                       </div>
                    </transition>
                </div>

                <div class="flex justify-end mt-6">
                    <div class="w-full">
                        <div class="flex justify-end mb-1">
                            <router-link
                                :to="{ name: 'Cart' }"
                                class="text-sm text-gray-400 max-w-max">
                                    {{ $t('edit_cart') }}
                            </router-link>
                        </div>
                        <div class="flex justify-end">
                            <button
                                @click="placeOrder"
                                class="bg-c-green text-center text-white rounded-lg text-sm w-full md:max-w-max lg:max-w-full px-4 py-3">
                                    {{ $t('confirm_order')}}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <TheFooter />
    </div>
</template>

<script>
import TheNavbar from '@/components/Layout/TheNavbar'
import TheFooter from '@/components/Layout/TheFooter'

export default {
    name: 'Checkout.show',
    components: {
        TheNavbar,
        TheFooter,
    },
    mounted() {
        this.$store.dispatch('cart/getItems', {user_id: 1})
        this.setFields();
    },
    data() {
        return {
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                country: '',
                city: '',
                province: '',
                address: '',
                zipcode: '',
                phone: '',
            },
            notes: '',
            freeShipping: 2999, // sopra i 30 spedizione gratuita
            shipping: 395,
            showCoupon: false,
            couponName: '',
        }
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
        items() {
            return this.$store.state.cart.items
        },
        errors() {
            return this.$store.state.order.errors
        },
        couponErrors() {
            return this.$store.state.coupon.errors
        },
        isFirstPurchase() {
			return this.$store.state.user.user.orders_count == 0
		},
        coupon() {
            return this.$store.state.coupon.coupon
        },
        subTotal() {
            let subTotal = 0

            this.items.forEach(item => {
                subTotal += (item.product.price * item.quantity)
            });

            return subTotal
        },
        total() {
            let total = 0

            this.items.forEach(item => {
                total += (item.product.price * item.quantity)
            });

            // Coupon se ci sono
            if (this.coupon.discount) {
                total = total - (total * this.coupon.discount / 100)
            }

            // Applico spese spedizione
            if (total < this.freeShipping) {
                total += this.shipping
            }

            return total
        },
    },
    watch: {
         "$route": {
            handler: function() {
                this.emptyErrors();
                this.emptyCouponErrors();
                this.deleteCoupon();
            },
            deep: true,
            immediate: true,
		},
    },
    methods: {
        placeOrder() {
            this.$store.dispatch('order/placeOrder', {
                user_id: this.user.id,
                customer: this.customer,
                items: this.items,
                total: this.total,
                notes: this.notes
            })
        },
        setFields() {
            this.customer.first_name = this.user.first_name
            this.customer.last_name = this.user.last_name
            this.customer.email = this.user.email
            this.customer.country = this.user.country
            this.customer.city = this.user.city
            this.customer.province = this.user.province
            this.customer.address = this.user.address
            this.customer.zipcode = this.user.zipcode
            this.customer.phone = this.user.phone
        },
        deleteCoupon() {
            this.$store.dispatch('coupon/deleteCoupon')
        },
        verifyCoupon() {
            this.$store.dispatch('coupon/verifyCoupon', { coupon: this.couponName})
        },
        emptyErrors() {
            this.$store.dispatch('order/emptyErrors')
        },
        emptyCouponErrors() {
            this.$store.dispatch('coupon/emptyCouponErrors')
        },
    },
    filters: {
        truncate(text, value) {
            if (text.length > value) {
                return text.substring(0, value) + '...'
            } else {
                return text
            }
        }
    }
}
</script>