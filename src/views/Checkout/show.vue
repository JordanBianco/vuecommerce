<template>
    <div>
        <section class="p-4 md:px-0 md:w-11/12 md:mx-auto">
            <div v-if="items.length > 0">
                <header class="border-b py-4 md:px-0 text-gray-500">
                    <div class="flex items-center justify-between">
                        <span>Checkout</span>
                        <span v-if="items.length > 0" class="text-sm">{{ items.length }} {{ items.length == 1 ? ' articolo' : ' articoli' }}</span>
                    </div>
                </header>
            </div>
        </section>

        <div class="lg:flex lg:space-x-8 md:w-11/12 md:mx-auto px-4 md:px-0 text-sm">

            <!-- Left Side -->
            <div class="w-full lg:w-2/3 text-sm">
                <section class="mb-8">
                    <h2 class="text-c-dark-gray mb-4">Customer details</h2>
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4 lg:justify-between lg:mb-4">
                        
                        <div class="w-full lg:w-1/2 mb-4 lg:mb-0 relative">
                            <label class="text-gray-500 text-xs" for="first_name">First Name</label>
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
                            <label class="text-gray-500 text-xs" for="last_name">Last Name</label>
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

                    <div class="w-full relative">
                        <label class="text-gray-500 text-xs" for="email">Email</label>
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
                    <h2 class="text-c-dark-gray mb-4">Shipping details</h2>
                    <div class="space-y-4">

                        <div class="w-full relative">
                            <label class="text-gray-500 text-xs" for="country">Country</label>
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
                            <label class="text-gray-500 text-xs" for="city">City</label>
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
                            <label class="text-gray-500 text-xs" for="province">Province</label>
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
                            <label class="text-gray-500 text-xs" for="address">Address</label>
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
                            <label class="text-gray-500 text-xs" for="zipcode">Zipcode</label>
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
                            <label class="text-gray-500 text-xs" for="phone">Phone</label>
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
                            <label class="text-gray-500 text-xs" for="phone">Additional Notes</label>
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
                <h2 class="text-c-dark-gray text-sm mb-4">Summary</h2>
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
                            <h3 class="text-c-dark-gray text-sm leading-tight font-semibold mb-1">{{ item.product.name }}</h3>
                            <p class="text-gray-500 text-xs">{{ item.product.description | truncate(80) }}</p>
                            <!-- Prezzo -->
                            <div class="flex items-center justify-between text-gray-500 text-xs pt-2">
                                <p>Price</p>
                                <p>€{{ item.product.price * item.quantity }}</p>
                            </div>
                            <!-- Quantity -->
                            <div class="flex items-center justify-between text-gray-500 text-xs">
                                <p>Quantity</p>
                                <p>{{ item.quantity }}</p>
                            </div>
                        </div>
                </div>
                <footer class="text-gray-500 mt-4 pt-4 md:pt-8 md:mt-8 border-t border-gray-200">
                    <div class="space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span>SubTotale</span>
                            <span>{{ subTotal() }}</span>
                        </div>
                        <div class="flex items-center justify-between text-c-dark-gray">
                            <span class="text-xs">Totale</span>
                            <span class="text-lg font-semibold">€{{ total() }}</span>
                        </div>
                    </div>
                </footer>

                <div class="flex justify-end mt-8">
                    <div class="flex flex-col">
                        <router-link
                            :to="{ name: 'Cart' }"
                            class="text-sm text-gray-500 hover:text-gray-500 text-right mb-1">
                                modifica carrello
                        </router-link>
                        <button @click="placeOrder" class="bg-c-green text-center text-white rounded-lg text-sm w-full md:max-w-max px-4 py-3">
                            Conferma ordine
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Checkout.show',
    mounted() {
        this.$store.dispatch('cart/getItems', {user_id: 1})
    },
    data() {
        return {
            customer: {
                user_id: 1, // fino a sanctum
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
            notes: ''
        }
    },
    computed: {
        items() {
            return this.$store.state.cart.items
        },
        errors() {
            return this.$store.state.order.errors
        }
    },
    watch: {
         "$route": {
            handler: function() {
                this.emptyErrors();
            },
            deep: true,
            immediate: true,
		},
    },
    methods: {
        subTotal() {
            let subTotal = 0

            this.items.forEach(item => {
                subTotal += (item.product.price * item.quantity)
            });

            return '€' + subTotal
        },
        total() {
            let total = 0

            this.items.forEach(item => {
                total += (item.product.price * item.quantity)
            });

            return total
        },
        placeOrder() {
            this.$store.dispatch('order/placeOrder', {
                customer: this.customer,
                items: this.items,
                total: this.total(),
                notes: this.notes
            })
        },
        emptyErrors() {
            this.$store.dispatch('order/emptyErrors')
        }
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