<template>
    <div>
        <div class="md:w-11/12 md:mx-auto p-4 md:px-0 flex justify-between items-center border-b">
            <div>
                <span class="block text-xs text-gray-400">Dashboard</span>
                <span v-if="user" class="block text-c-dark-gray">{{ name }}</span>
            </div>

            <button @click="logout" class="text-sm">
                <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>
            </button>
        </div>

        <div class="flex flex-col space-y-10 lg:space-y-0 lg:flex-row md:w-11/12 md:mx-auto p-4 md:px-0 mt-8">
            <aside class="lg:border-r lg:min-h-screen lg:w-1/5 w-full lg:border-b-0 border-b pb-10">
                <div class="space-y-4">
                    <router-link
                        :to="{ name: 'Dashboard', query: { view: 'orders' }}"
                        exact-active-class="text-gray-600"
                        class="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer max-w-max transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
                            <span>I miei ordini</span>
                    </router-link>

                    <router-link
                        :to="{ name: 'Dashboard', query: { view: 'address' }}"
                        exact-active-class="text-gray-600"
                        class="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer max-w-max transition duration-200">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                            <span>Il mio indirizzo</span>
                    </router-link>

                    <router-link
                        :to="{ name: 'Dashboard', query: { view: 'reviews' }}"
                        exact-active-class="text-gray-600"
                        class="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer max-w-max transition duration-200">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                            <span>Le mie recensioni</span>
                    </router-link>

                    <router-link
                        :to="{ name: 'Dashboard', query: { view: 'archived' }}"
                        exact-active-class="text-gray-600"
                        class="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer max-w-max transition duration-200">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10,14h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM19,3H5A3,3,0,0,0,2,6V9a1,1,0,0,0,1,1H4v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V10h1a1,1,0,0,0,1-1V6A3,3,0,0,0,19,3ZM18,18a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V10H18ZM20,8H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z"/></svg>
                            <span>Ordini archiviati</span>
                    </router-link>
                </div>

                <div class="mt-10 space-y-4">
                    <h3 class="xl:text-base font-thin text-gray-400 mb-4">Profilo</h3>

                    <router-link
                        :to="{ name: 'Dashboard', query: { view: 'info' }}"
                        exact-active-class="text-gray-600"
                        class="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer max-w-max transition duration-200">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                            <span>I miei dati personali</span>
                    </router-link>

                    <router-link
                        :to="{ name: 'Dashboard', query: { view: 'change-password' }}"
                        exact-active-class="text-gray-600"
                        class="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer max-w-max transition duration-200">
                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,6.53,20.29,5.12l1.42-1.41a1,1,0,1,0-1.42-1.42L9.75,12.83a5,5,0,1,0,1.42,1.42l4.88-4.89,1.41,1.42a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L17.46,8l1.42-1.42L20.29,8a1,1,0,0,0,.71.29A1,1,0,0,0,21.71,8,1,1,0,0,0,21.71,6.53ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Z"/></svg>
                            <span>Cambio password</span>
                    </router-link>
                </div>
            </aside>

            <main class="lg:w-4/5 w-full">
                <MyOrders v-if="$route.query.view == 'orders'" />
                <MyAddress v-if="$route.query.view == 'address'" />
                <MyReviews v-if="$route.query.view == 'reviews'" />
                <MyArchivedOrders v-if="$route.query.view == 'archived'" />
                <MyInfo v-if="$route.query.view == 'info'" />
                <ChangePassword v-if="$route.query.view == 'change-password'" />
            </main>
        </div>
    </div>
</template>

<script>
import MyOrders from '@/components/Dashboard/MyOrders'
import MyAddress from '@/components/Dashboard/MyAddress'
import MyReviews from '@/components/Dashboard/MyReviews'
import MyArchivedOrders from '@/components/Dashboard/MyArchivedOrders'
import MyInfo from '@/components/Dashboard/MyInfo'
import ChangePassword from '@/components/Dashboard/ChangePassword'

export default {
    name: 'Auth.dashboard',
    components: {
        MyOrders,
        MyAddress,
        MyReviews,
        MyArchivedOrders,
        MyInfo,
        ChangePassword,
    },
    mounted() {
        this.getUser();
        
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
        name() {
            return `${this.user.first_name} ${this.user.last_name}`
        },
    },
    methods: {
        getUser() {
            this.$store.dispatch('user/getUser')
        },
        logout() {
            this.$store.dispatch('auth/logout')
        },
    }
}
</script>