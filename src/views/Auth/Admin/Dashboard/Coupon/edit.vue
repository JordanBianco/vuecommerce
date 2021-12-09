<template>
    <div>
        <header class="mb-6 flex items-baseline space-x-4">
            <h2 class="text-xl text-gray-600">Modifica coupon</h2>
            <!-- Breadcrumb -->
            <div v-if="coupon" class="text-sm flex items-center space-x-0.5 text-gray-400">
                <router-link class="hover:underline" :to="{ name: 'Manage Coupons' }">Coupons</router-link>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                <span class="text-blue-400">{{ coupon.code }}</span>
            </div>
        </header>

        <section class="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <section v-if="coupon" class="space-y-4 text-sm">
                <!-- CODE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="code">{{ $t('code') }}</label>
                    <input
                        type="text"
                        @focus="errors.code = ''"
                        v-model="coupon.code"
                        :class="{ 'border-red-500' : errors.code }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 py-1.5 text-sm">
                        <p v-if="errors.code" class="text-xs text-red-500 mt-0.5">{{ errors.code[0] }}</p>
                </div>

                <!-- DESRCIPTION -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="description">{{ $t('description') }}</label>
                    <textarea
                        rows="5"
                        @focus="errors.description = ''"
                        v-model="coupon.description"
                        :class="{ 'border-red-500' : errors.description }"
                        class="resize-none border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 py-1.5 text-sm"></textarea>                    
                        <p v-if="errors.description" class="text-xs text-red-500 mt-0.5">{{ errors.description[0] }}</p>
                </div>

                <!-- DISCOUNT -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="discount">{{ $t('discount') }}</label>
                    <input
                        type="text"
                        @focus="errors.discount = ''"
                        v-model="coupon.discount"
                        :class="{ 'border-red-500' : errors.discount }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 py-1.5 text-sm">
                        <p v-if="errors.discount" class="text-xs text-red-500 mt-0.5">{{ errors.discount[0] }}</p>
                </div>

                <button
                    @click="updateCoupon"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                        {{ $t('update_coupon') }}    
                </button>
            </section>
            <!-- Loading -->
            <div v-else class="flex justify-center items-center py-36 text-gray-400">
                <img
                    class="animate-spin w-8 h-8"
                    src="https://img.icons8.com/ios/50/BBBBBB/spinning-circle--v1.png"/>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.Coupon.edit',
    props: ['slug'],
    mounted() {
        this.getCoupon();
    },
    watch: {
        "$route" : {
            deep: true,
            immediate: true,
            handler() {
                this.emptyCouponErrors();
            }
        }
    },
    computed: {
        coupon() {
            return this.$store.state.coupon.coupon
        },
        errors() {
            return this.$store.state.coupon.errors
        }
    },
    methods: {
        getCoupon() {
            this.$store.dispatch('coupon/getCoupon', {
                slug: this.slug
            })
        },
        updateCoupon() {
            this.$store.dispatch('coupon/updateCoupon', {
                coupon: this.coupon
            })
        },
        emptyCouponErrors() {
            this.$store.dispatch('coupon/emptyCouponErrors')
        }
    }
}
</script>