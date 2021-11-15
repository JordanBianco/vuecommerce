<template>
    <div class="px-8">
        <form v-if="user" @submit.prevent="updateAddress()" class="text-sm">
            <!-- Name -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="country">Country</label>
                <input
                    type="text"
                    @click="errors.country = ''"
                    v-model="user.country"
                    :class="{ 'border-red-500' : errors.country }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.country" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.country" class="text-xs text-red-500 mt-0.5">{{ errors.country[0] }}</p>
            </div>

            <!-- City -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="city">City</label>
                <input
                    type="text"
                    @click="errors.city = ''"
                    v-model="user.city"
                    :class="{ 'border-red-500' : errors.city }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.city" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.city" class="text-xs text-red-500 mt-0.5">{{ errors.city[0] }}</p>
            </div>

            <!-- Province -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="province">Province</label>
                <input
                    type="text"
                    @click="errors.province = ''"
                    v-model="user.province"
                    :class="{ 'border-red-500' : errors.province }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.province" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.province" class="text-xs text-red-500 mt-0.5">{{ errors.province[0] }}</p>
            </div>

            <!-- Address -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="address">Address</label>
                <input
                    type="text"
                    @click="errors.address = ''"
                    v-model="user.address"
                    :class="{ 'border-red-500' : errors.address }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.address" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.address" class="text-xs text-red-500 mt-0.5">{{ errors.address[0] }}</p>
            </div>

            <!-- Zipcode -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="zipcode">Zipcode</label>
                <input
                    type="text"
                    @click="errors.zipcode = ''"
                    v-model="user.zipcode"
                    :class="{ 'border-red-500' : errors.zipcode }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.zipcode" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.zipcode" class="text-xs text-red-500 mt-0.5">{{ errors.zipcode[0] }}</p>
            </div>

            <!-- Phone -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="phone">Phone</label>
                <input
                    type="text"
                    @click="errors.phone = ''"
                    v-model="user.phone"
                    :class="{ 'border-red-500' : errors.phone }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.phone" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
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
        }
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
        errors() {
            return this.$store.state.user.errors
        }
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