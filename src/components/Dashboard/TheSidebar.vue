<template>
    <div>
        <div @click="isOpen = ! isOpen" class="fixed top-4.5 left-4">
            <svg class="w-6 h-6 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
        </div>
        <div
            @click="isOpen = false"
            v-if="isOpen"
            class="fixed bg-black opacity-20 inset-0"></div>

        <aside
            @mouseover="isOpen = true"
            @mouseleave="isOpen = false"
            :class="[ isOpen ? 'w-64' : 'lg:w-16 w-0' ]"
            class="fixed left-0 bottom-0 top-0 transition duration-200 transform ease-in-out shadow-xl bg-white text-gray-500 min-h-screen overflow-x-hidden space-y-1 text-sm z-30">
                
                <div class="space-y-1 p-3 pt-8 mt-14 border-t">

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'Dashboard'}"
                        :to="{ name: 'Dashboard' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M22.60107,2.062a1.00088,1.00088,0,0,0-.71289-.71289A11.25224,11.25224,0,0,0,10.46924,4.97217L9.35431,6.296l-2.6048-.62848A2.77733,2.77733,0,0,0,3.36279,7.0249L1.1626,10.9248A.99989.99989,0,0,0,1.82422,12.394l3.07275.65869a13.41952,13.41952,0,0,0-.55517,2.43409,1.00031,1.00031,0,0,0,.28466.83642l3.1001,3.1001a.99941.99941,0,0,0,.707.293c.02881,0,.05762-.00147.08692-.00391a12.16892,12.16892,0,0,0,2.49157-.49l.64368,3.00318a1.0003,1.0003,0,0,0,1.46924.66162l3.90527-2.20264a3.03526,3.03526,0,0,0,1.375-3.30371l-.6687-2.759,1.23706-1.13751A11.20387,11.20387,0,0,0,22.60107,2.062ZM3.57227,10.72314,5.12842,7.96338a.82552.82552,0,0,1,1.06982-.37549l1.71741.4162-.65.77179A13.09523,13.09523,0,0,0,5.67633,11.174Zm12.47021,8.22217L13.32666,20.477l-.4295-2.00464a11.33992,11.33992,0,0,0,2.41339-1.61987l.74353-.68366.40344,1.66462A1.041,1.041,0,0,1,16.04248,18.94531ZM17.65674,11.98l-3.68457,3.38623a9.77348,9.77348,0,0,1-5.17041,2.3042l-2.4043-2.4043a10.932,10.932,0,0,1,2.40088-5.206l1.67834-1.99268a.9635.9635,0,0,0,.07813-.09277L11.98975,6.271a9.27757,9.27757,0,0,1,8.80957-3.12012A9.21808,9.21808,0,0,1,17.65674,11.98Zm-.923-6.16376a1.5,1.5,0,1,0,1.5,1.5A1.49992,1.49992,0,0,0,16.7337,5.81622Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('dashboard') }}</span>
                    </router-link>

                    <div v-if="!isOpen" class="flex justify-center py-4">
                        <svg class="w-5 h-5 text-gray-400 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </div>
                    <div v-else class="px-3 py-4">
                        <span class="block uppercase text-gray-400">Shop</span>
                    </div>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'My Orders'}"
                        :to="{ name: 'My Orders' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('my_orders') }}</span>
                    </router-link>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'My Address'}"
                        :to="{ name: 'My Address' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('my_address') }}</span>
                    </router-link>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'My Reviews'}"
                        :to="{ name: 'My Reviews' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('my_reviews') }}</span>
                    </router-link>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'Archived Orders'}"
                        :to="{ name: 'Archived Orders' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10,14h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM19,3H5A3,3,0,0,0,2,6V9a1,1,0,0,0,1,1H4v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V10h1a1,1,0,0,0,1-1V6A3,3,0,0,0,19,3ZM18,18a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V10H18ZM20,8H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('archived_orders') }}</span>
                    </router-link>

                    <div v-if="!isOpen" class="flex justify-center py-4">
                        <svg class="w-5 h-5 text-gray-400 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </div>
                    <div v-else class="px-3 py-4">
                        <span class="block uppercase text-gray-400">{{ $t('settings') }}</span>
                    </div>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'Personal Info'}"
                        :to="{ name: 'Personal Info' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('my_data') }}</span>
                    </router-link>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'Change Password'}"
                        :to="{ name: 'Change Password' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,6.53,20.29,5.12l1.42-1.41a1,1,0,1,0-1.42-1.42L9.75,12.83a5,5,0,1,0,1.42,1.42l4.88-4.89,1.41,1.42a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L17.46,8l1.42-1.42L20.29,8a1,1,0,0,0,.71.29A1,1,0,0,0,21.71,8,1,1,0,0,0,21.71,6.53ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('change_password') }}</span>
                    </router-link>

                    <div v-if="!isOpen" class="flex justify-center py-4">
                        <svg class="w-5 h-5 text-gray-400 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </div>
                    <div v-else class="px-3 py-4">
                        <span class="block uppercase text-gray-400">{{ $t('actions') }}</span>
                    </div>

                    <router-link
                        :to="{ name: 'Home' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22,7.82a1.25,1.25,0,0,0,0-.19v0h0l-2-5A1,1,0,0,0,19,2H5a1,1,0,0,0-.93.63l-2,5h0v0a1.25,1.25,0,0,0,0,.19A.58.58,0,0,0,2,8H2V8a4,4,0,0,0,2,3.4V21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V11.44A4,4,0,0,0,22,8V8h0A.58.58,0,0,0,22,7.82ZM13,20H11V16h2Zm5,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v5H6V12a4,4,0,0,0,3-1.38,4,4,0,0,0,6,0A4,4,0,0,0,18,12Zm0-10a2,2,0,0,1-2-2,1,1,0,0,0-2,0,2,2,0,0,1-4,0A1,1,0,0,0,8,8a2,2,0,0,1-4,.15L5.68,4H18.32L20,8.15A2,2,0,0,1,18,10Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('back_to_shop')}}</span>
                    </router-link>

                    <button @click="logout" class="text-sm flex items-center space-x-3 p-2 w-full">
                        <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>
                        <span class="whitespace-nowrap" v-if="isOpen">Logout</span>
                    </button>

                    <router-link
                        :class="{ 'bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white shadow' : $route.name == 'Delete Account'}"
                        :to="{ name: 'Delete Account' }"
                        class="flex items-center space-x-3 p-2">
                            <svg class="w-5.5 h-5.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                            <span class="whitespace-nowrap" v-if="isOpen">{{ $t('delete_account') }}</span>
                    </router-link>

                </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.TheSidebar',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        logout() {
            this.$store.dispatch('auth/logout')
        },
    }
}
</script>