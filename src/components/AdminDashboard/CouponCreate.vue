<template>
    <div>
        <header class="bg-gray-100 flex justify-end text-sm p-4 text-gray-600">
            <svg @click="$emit('toggleCreateMenu')" class="w-6 h-6 text-gray-400 hover:text-gray-600 duration-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
        </header>

        <section class="p-6 space-y-4 text-sm">
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
                @click="storeCoupon"
                class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                    {{ $t('save') }}    
            </button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.CreateCoupon',
    data() {
        return {
            coupon: {
                code: '',
                description: '',
                discount: '',
            }
        }
    },
    computed: {
        errors() {
            return this.$store.state.coupon.errors
        },
        success() {
            return this.$store.state.coupon.success
        }
    },
    watch: {
        success() {
            if (this.success) {
                this.emptyFields()
                this.$emit('toggleCreateMenu')
                this.setSuccessStatus();
            }
        }
    },
    methods: {
        storeCoupon() {
            this.$store.dispatch('coupon/storeCoupon', {
                coupon: this.coupon
            })
        },
        emptyFields() {
            this.coupon.code = ''
            this.coupon.description = ''
            this.coupon.discount = ''
        },
        setSuccessStatus() {
            this.$store.dispatch('coupon/setSuccessStatus', {value: false})
        },
    }
}
</script>