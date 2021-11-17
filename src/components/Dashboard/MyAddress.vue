<template>
    <div class="lg:px-8">

        <form v-if="user" @submit.prevent="updateAddress()" class="text-sm">
            <!-- Name -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="country">Country</label>
                <input
                    type="text"
                    @click="errors.country = ''"
                    v-model="user.country"
                    :class="{ 'border-red-500' : errors.country }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.country" class="text-xs text-red-500 mt-0.5">{{ errors.country[0] }}</p>
            </div>

            <!-- City -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="city">City</label>
                <input
                    type="text"
                    @click="errors.city = ''"
                    v-model="user.city"
                    :class="{ 'border-red-500' : errors.city }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.city" class="text-xs text-red-500 mt-0.5">{{ errors.city[0] }}</p>
            </div>

            <!-- Province -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="province">Province</label>
                <input
                    type="text"
                    @click="errors.province = ''"
                    v-model="user.province"
                    :class="{ 'border-red-500' : errors.province }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.province" class="text-xs text-red-500 mt-0.5">{{ errors.province[0] }}</p>
            </div>

            <!-- Address -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="address">Address</label>
                <input
                    type="text"
                    @click="errors.address = ''"
                    v-model="user.address"
                    :class="{ 'border-red-500' : errors.address }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.address" class="text-xs text-red-500 mt-0.5">{{ errors.address[0] }}</p>
            </div>

            <!-- Zipcode -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="zipcode">Zipcode</label>
                <input
                    type="text"
                    @click="errors.zipcode = ''"
                    v-model="user.zipcode"
                    :class="{ 'border-red-500' : errors.zipcode }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.zipcode" class="text-xs text-red-500 mt-0.5">{{ errors.zipcode[0] }}</p>
            </div>

            <!-- Phone -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="phone">Phone</label>
                <input
                    type="text"
                    @click="errors.phone = ''"
                    v-model="user.phone"
                    :class="{ 'border-red-500' : errors.phone }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.phone" class="text-xs text-red-500 mt-0.5">{{ errors.phone[0] }}</p>
            </div>

            <button
                type="submit"
                class="text-center bg-c-dark-gray rounded-lg text-white px-3 py-2">
                    Aggiorna Indirizzo    
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.MyAddress',
    watch: {
        "$route.params.slug": {
            handler() {
                this.emptyErrors()
            },
            deep:true,
            immediate:true
        },
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
        errors() {
            return this.$store.state.user.errors
        },
    },
    methods: {
        updateAddress() {
            this.$store.dispatch('user/updateAddress', {
                user: this.user
            })
        },
        emptyErrors() {
            this.$store.dispatch('user/emptyErrors')
        }
    }
}
</script>