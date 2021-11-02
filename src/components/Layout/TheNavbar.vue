<template>
    <nav class="w-full bg-white border-b border-gray-100" :class="{ 'py-5' : $route.path != '/' }">
        <section class="flex items-center justify-between w-10/12 mx-auto">
            <div class="w-1/4">
                <router-link :to="{ name: 'Home' }">
                    <h1 class="font-semibold uppercase text-c-dark-gray">PlantShop</h1>
                </router-link>
            </div>

            <div v-if="$route.path === '/'" class="w-2/4 bg-white px-10 border-b border-gray-100 text-sm flex">
				<div class="py-5 px-4 font-semibold max-w-max border-b-2 border-c-green">Shops</div>
				<div class="py-5 px-4 text-gray-300 max-w-max">Plant Care</div>
				<div class="py-5 px-4 text-gray-300 max-w-max">Workshops</div>
				<div class="py-5 px-4 text-gray-300 max-w-max">Blog</div>
			</div>

            <!-- Right Side -->
            <div class="flex items-center space-x-5 w-1/4 justify-end">
                <!-- Utente -->
                <div class="cursor-pointer">
                    <svg class="text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                </div>

                <!-- Saved Items -->
                <router-link :to="{ name: 'saved.show' }" class="cursor-pointer ">
                    <div class="relative">
                        <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg>
                        <div
                            v-if="savedItems.length > 0"
                            :class="[ savedItems.length > 9 ? '-top-2 -right-4' : '-top-2 -right-4' ]"
                            class="absolute  bg-c-red text-xs text-c-white px-2 py-0.5 text-center rounded-full">
                                {{ savedItems.length }}
                        </div>
                    </div>
                </router-link>

                <!-- Shopping Cart -->
                <div @click="toggleCart" class="cursor-pointer relative">
                    <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"/></svg>
                    <div
                        v-if="items.length > 0"
                        :class="[ items.length > 9 ? '-top-2 -right-4' : '-top-2 -right-3' ]"
                        class="absolute  bg-blue-500 text-xs text-c-white px-2 py-0.5 text-center rounded-full">
                            {{ items.length }}
                    </div>
                </div>

            </div>
        </section>

        <ShoppingCart
            :items="items"
        />

        <div
            @click="toggleCart"
            v-if="isOpen"
            class="z-40 fixed inset-0 bg-black opacity-30"></div>
    </nav>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'

export default {
    name: 'TheNavbar',
    components: {
        ShoppingCart
    },
    mounted() {
        this.$store.dispatch('cart/getItems')
        this.$store.dispatch('cart/getSavedItems')
    },
    computed: {
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
        toggleCart() {
            this.$store.dispatch('cart/toggleCart')
        },
    }
}
</script>
