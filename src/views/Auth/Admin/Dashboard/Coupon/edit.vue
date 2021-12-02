<template>
    <div>
        <header class="pb-6">
            <h2 class="text-xl text-gray-600">Modifica coupon</h2>
        </header>

        <section v-if="coupon">
            <!-- Breadcrumb -->
            <div class="text-sm flex items-center space-x-0.5 text-gray-400 mb-10">
                <router-link class="hover:underline" :to="{ name: 'Manage Coupons' }">Coupons</router-link>
                    <span>
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                    </span>
                <span>{{ coupon.code }}</span>
                    <span>
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                    </span>
                <span class="text-blue-400">{{ $t('edit') }}</span>
            </div>

            <section class="space-y-4 text-sm">
                <!-- CODE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="code">{{ $t('code') }}</label>
                    <input
                        type="text"
                        @focus="errors.code = ''"
                        v-model="coupon.code"
                        :class="{ 'border-red-500' : errors.code }"
                        class="border border-gray-200 focus:outline-none focus:border-blue-400 w-full rounded-lg p-2 py-1.5">
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
                        class="border border-gray-200 focus:outline-none focus:border-blue-400 w-full rounded-lg p-2 py-1.5"></textarea>                    
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
                        class="border border-gray-200 focus:outline-none focus:border-blue-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.discount" class="text-xs text-red-500 mt-0.5">{{ errors.discount[0] }}</p>
                </div>

                <button
                    @click="updateCoupon"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                        {{ $t('update_coupon') }}    
                </button>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.Coupon.edit',
    props: ['id'],
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
                id: this.id
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