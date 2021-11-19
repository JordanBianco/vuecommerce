<template>
    <nav class="w-full bg-white border-b border-gray-200 py-5">
        <section class="flex items-center justify-between md:w-11/12 md:mx-auto px-4 md:px-0">
            <!-- Left Side -->
            <div class="w-3/4 flex items-center space-x-4">
                <div class="flex space-x-2 items-center">
                    <svg @click="toggleSidemenu()" class="w-6 h-6 text-c-dark-gray lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                    <router-link :to="{ name: 'Home' }" class="flex items-center space-x-2">
                        <div class="flex items-center -space-x-1">
                            <div class="rounded-full bg-c-green w-5 h-5"></div>
                            <div class="rounded-full bg-c-blue w-5 h-5"></div>
                        </div>
                        <h1 class="uppercase font-semibold text-c-dark-gray">VueShop</h1>
                    </router-link>
                </div>

                <span class="text-c-dark-gray hidden lg:block">|</span>                

                <!-- hidden on mobile -->
                <div class="items-center space-x-4 text-sm hidden lg:flex font-thin">
                    <div class="font-semibold text-c-dark-gray">{{ $t('shop') }}</div>
                    <div class="text-gray-400">{{ $t('plant_care') }}</div>
                    <div class="text-gray-400">{{ $t('blog') }}</div>
                </div>
            </div>

            <!-- Right Side -->
            <div class="w-1/4 flex items-center space-x-4 justify-end">
                
                <!-- LanguageSwitcher -->
                <LanguageSwitcher />

                <!-- Utente -->
                <router-link
                    class="text-gray-500 text-sm"
                    :to="{ name: 'Dashboard', query: { view: 'orders' }}">
                        <svg class="text-gray-400 cursor-pointer w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                </router-link>

                <!-- Saved Items -->
                <router-link :to="{ name: 'Saved' }" class="cursor-pointer">
                    <div class="relative">
                        <svg class="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                        <div
                            v-if="savedItems.length > 0"
                            class="absolute -top-2 -right-3 bg-c-red text-xs text-c-white flex justify-center items-center rounded-full w-5 h-5">
                                {{ savedItems.length }}
                        </div>
                    </div>
                </router-link>

                <!-- Shopping Cart -->
                <div @click="toggleCart" class="cursor-pointer relative">
                    <svg class="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"/></svg>
                    <div
                        v-if="items.length > 0"
                        class="absolute -top-2 -right-3 bg-c-green text-xs text-c-white flex justify-center items-center rounded-full w-5 h-5">
                            {{ items.length }}
                    </div>
                </div>

            </div>
        </section>

        <Sidebar
            @toggleSidemenu="toggleSidemenu"
            :open="isSidemenuOpen"/>

        <transition name="fade">
            <div
                @click="toggleSidemenu()"
                v-if="isSidemenuOpen"
                class="z-40 fixed inset-0 bg-black opacity-30"></div>
        </transition>

        <ShoppingCart
            :items="items"
        />

        <transition name="fade">
            <div
                @click="toggleCart()"
                v-if="isOpen"
                class="z-40 fixed inset-0 bg-black opacity-30"></div>
        </transition>
    </nav>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'
import Sidebar from '@/components/Layout/Sidebar'
import LanguageSwitcher from '@/components/Layout/LanguageSwitcher'

export default {
    name: 'TheNavbar',
    components: {
        ShoppingCart,
        Sidebar,
        LanguageSwitcher
    },
    mounted() {
        if (this.isAuth) {
            this.getItems();
            this.getSavedItems();
        }
    },
    data() {
        return {
            isSidemenuOpen: false,
            isUserMenuOpen: false,
        }
    },
    watch: {
        isAuth() {
            if (this.isAuth) {
                this.getItems();
                this.getSavedItems();
            }              
        }
    },
    computed: {
        isAuth() {
            return this.$store.state.auth.auth
        },
        isOpen() {
            return this.$store.state.cart.isOpen
        },
        items() {
            return this.$store.state.cart.items
        },
        savedItems() {
            return this.$store.state.cart.savedItems
        },
    },
    methods: {
        getItems() {
            this.$store.dispatch('cart/getItems')
        },
        getSavedItems() {
            this.$store.dispatch('cart/getSavedItems')
        },
        toggleCart() {
            if (!this.isAuth) {
                this.$router.push({ name: 'Login' })
                return
            }
            this.$store.dispatch('cart/toggleCart')
        },
        toggleSidemenu() {
            this.isSidemenuOpen = ! this.isSidemenuOpen
        },
    }
}
</script>
