<template>
<!-- v-if="$route.path === '/'" -->
    <nav class="shadow-md fixed bottom-4 left-4 right-4 py-4 bg-c-blue text-c-white rounded-lg">
        <section class="w-4/5 mx-auto flex items-center justify-between ">
            <!-- Home -->
            <router-link :to="{ name: 'Home' }" exact-active-class="text-c-orange" class="cursor-pointer text-c-light-gray">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"/></svg>
            </router-link>

            <!-- User -->
            <div class="cursor-pointer">
                <svg class="text-c-light-gray w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
            </div>

            <!-- Saved Items -->
            <router-link :to="{ name: 'saved.show' }" class="cursor-pointer ">
                <div class="relative">
                    <svg class="text-c-light-gray w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg>
                    <div
                        v-if="savedItems.length > 0"
                        :class="[ savedItems.length > 9 ? '-top-2 -right-4' : '-top-2 -right-3' ]"
                        class="absolute  bg-c-orange text-xs text-c-white px-2 py-0.5 text-center rounded-full">
                            {{ savedItems.length }}
                    </div>
                </div>
            </router-link>

            <!-- Shopping Cart -->
            <div @click="toggleCart" class="cursor-pointer relative">
                <svg class="text-c-light-gray w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/></svg>
                <div
                    v-if="items.length > 0"
                    :class="[ items.length > 9 ? '-top-2 -right-4' : '-top-2 -right-3' ]"
                    class="absolute  bg-c-red text-xs text-c-white px-2 py-0.5 text-center rounded-full">
                        {{ items.length }}
                </div>
            </div>
        </section>

        <!-- <ShoppingCart
            :items="items"
        /> -->
        {{ items }}

    </nav>
</template>

<script>
// import ShoppingCart from '@/components/ShoppingCart'

export default {
    name: 'MobileNavbar',
    components: {
        // ShoppingCart
    },
    mounted() {
        this.$store.dispatch('cart/getItems')
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
