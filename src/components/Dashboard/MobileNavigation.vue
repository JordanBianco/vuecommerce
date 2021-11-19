<template>
    <div class="lg:hidden">
        
        <section class="p-4 bg-gray-100 w-full fixed bottom-0 left-0 right-0 border-t transition duration-200 z-30">
            <div
                @click="toggleMenu()"
                class="flex justify-center text-gray-600 cursor-pointer transition duration-200">
                    <div class="max-w-max">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
            </div>
        </section>

        <div
            :class="[ !show ? 'translate-y-full' : '' ]"
            class="text-xs transform transition duration-200 bg-gray-50 border-t p-4 min-h-screen fixed bottom-0 left-0 right-0 z-20">
                
                 <div class="md:w-11/12 md:mx-auto p-4 md:px-0 flex justify-between items-center border-b">
                    <div>
                        <span class="block text-xs text-gray-400">Dashboard</span>
                        <span v-if="name" class="block text-base text-c-dark-gray">{{ name }}</span>
                    </div>

                    <button @click="logout" class="text-sm">
                        <svg class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>
                    </button>
                </div>
                
                <div class="grid grid-cols-3 grid-rows-2 gap-2 gap-y-6 mt-6">
                    <router-link
                        @click.native="toggleMenu()"
                        :to="{ name: 'Dashboard', query: { view: 'orders' }}"
                        exact-active-class="text-gray-600"
                        class="flex flex-col items-center text-gray-400 cursor-pointer transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
                            <span class="text-center mt-1 leading-tight">{{ $t('my_orders') }}</span>
                    </router-link>

                    <router-link
                        @click.native="toggleMenu()"
                        :to="{ name: 'Dashboard', query: { view: 'address' }}"
                        exact-active-class="text-gray-600"
                        class="flex flex-col items-center text-gray-400 cursor-pointer transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z"/></svg>
                            <span class="text-center mt-1 leading-tight">{{ $t('my_address') }}</span>
                    </router-link>

                    <router-link
                        @click.native="toggleMenu()"
                        :to="{ name: 'Dashboard', query: { view: 'reviews' }}"
                        exact-active-class="text-gray-600"
                        class="flex flex-col items-center text-gray-400 cursor-pointer transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                            <span class="text-center mt-1 leading-tight">{{ $t('my_reviews') }}</span>
                    </router-link>

                    <router-link
                        @click.native="toggleMenu()"
                        :to="{ name: 'Dashboard', query: { view: 'archived' }}"
                        exact-active-class="text-gray-600"
                        class="flex flex-col items-center text-gray-400 cursor-pointer transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10,14h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM19,3H5A3,3,0,0,0,2,6V9a1,1,0,0,0,1,1H4v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V10h1a1,1,0,0,0,1-1V6A3,3,0,0,0,19,3ZM18,18a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V10H18ZM20,8H4V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1Z"/></svg>
                            <span class="text-center mt-1 leading-tight">{{ $t('archived_orders') }}</span>
                    </router-link>

                    <router-link
                        @click.native="toggleMenu()"
                        :to="{ name: 'Dashboard', query: { view: 'info' }}"
                        exact-active-class="text-gray-600"
                        class="flex flex-col items-center text-gray-400 cursor-pointer transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                            <span class="text-center mt-1 leading-tight">{{ $t('my_data') }}</span>
                    </router-link>

                    <router-link
                        @click.native="toggleMenu()"
                        :to="{ name: 'Dashboard', query: { view: 'change-password' }}"
                        exact-active-class="text-gray-600"
                        class="flex flex-col items-center text-gray-400 cursor-pointer transition duration-200">
                            <svg class="w-6 h-6 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,6.53,20.29,5.12l1.42-1.41a1,1,0,1,0-1.42-1.42L9.75,12.83a5,5,0,1,0,1.42,1.42l4.88-4.89,1.41,1.42a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L17.46,8l1.42-1.42L20.29,8a1,1,0,0,0,.71.29A1,1,0,0,0,21.71,8,1,1,0,0,0,21.71,6.53ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Z"/></svg>
                            <span class="text-center mt-1 leading-tight">{{ $t('change_password') }}</span>
                    </router-link>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.MobileNavigation',
    props: ['name'],
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleMenu() {
            this.show = ! this.show
        },
        logout() {
            this.$store.dispatch('auth/logout')
        },
    }
}
</script>