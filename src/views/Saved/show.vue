<template>
    <div>
        <section class="p-4 md:px-0 md:w-11/12 md:mx-auto">
            <div v-if="savedItems.length > 0">
                <header class="border-b py-4 md:px-0 text-gray-400">
                    <div class="flex items-center justify-between">
                        <span>{{ $t('saved_items') }}</span>
                        <span v-if="savedItems.length > 0" class="text-sm">{{ savedItems.length }} {{ $tc('items', savedItems.length) }}</span>
                    </div>
                </header>

                <div
                    v-for="(item, index) in savedItems"
                    :key="index"
                    class="flex space-x-4 p-4 py-6 odd:bg-gray-100 rounded-lg">
                        <!-- Left Side -->
                        <router-link :to="{ name: 'product.show', params: { slug: item.product.slug }}">
                            <div class="flex-none bg-gray-200 h-20 w-20 rounded-lg"></div>
                        </router-link>
                        <!-- Right Side -->
                        <div class="w-full flex flex-col space-y-1 md:flex-row md:space-y-0 justify-between">

                            <header class="flex flex-col justify-between md:block mb-4 md:mb-0 md:w-2/5">
                                <!-- Nome e Prezzo -->
                                <div class="flex justify-between space-x-4 text-sm mb-1.5">
                                    <h3 class="text-c-dark-gray leading-tight">{{ item.product.name }}</h3>
                                    <span class="md:hidden text-c-dark-gray font-semibold">€{{ item.product.price }}</span>
                                </div>                                

                                <!-- Descrizione -->
                                <p class="hidden lg:block text-gray-400 text-xs">{{ item.product.description | truncate(250) }}</p>
                               
                                <!-- Azioni -->
                                <div class="lg:hidden block mt-2">
                                    <div class="flex flex-col space-y-1.5 text-xs text-gray-400">
                                        <div @click="moveToCart(index, item)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                            <svg class="text-gray-400 w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"/></svg>
                                            <span>{{ $t('add_to_cart') }}</span>
                                        </div>
                                        <div @click="removeFromSaved(index, item)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                            <svg class="text-gray-400 w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                                            <span>{{ $t('remove_from_saved') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <!-- Prezzo -->
                            <div class="hidden md:flex flex-row justify-between items-center md:flex-col md:justify-start md:space-y-2 md:w-1/5">
                                <p class="text-gray-400 text-xs">{{ $t('price') }}</p>
                                <p class="text-sm text-c-dark-gray font-semibold">€{{ item.product.price }}</p>
                            </div>
                            <!-- Azioni -->
                            <div class="hidden lg:block">
                                <div class="flex flex-col space-y-2 text-xs text-gray-400">
                                    <div @click="moveToCart(index, item)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                        <svg class="text-gray-400 w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"/></svg>
                                        <span>{{ $t('add_to_cart') }}</span>
                                    </div>
                                    <div @click="removeFromSaved(index, item)" class="flex items-center space-x-0.5 cursor-pointer max-w-max">
                                        <svg class="w-4 h-4 text-gray-400 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                                        <span>{{ $t('remove_from_saved') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <!-- Empty Saved -->
                <div class="flex justify-end border-t mt-6 py-6">
                    <div @click="emptySaved" class="flex items-center space-x-2 max-w-max text-gray-400 text-sm cursor-pointer">
                        <span>{{ $t('empty_list') }}</span>
                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                    </div>
                </div>

            </div>
            <div v-else class="flex justify-center pt-10">
                <p class="text-gray-400">
                    {{ $t('no_saved_items') }}
                    <router-link class="text-c-dark-gray text-center block" :to="{ name: 'Home' }">
                        {{ $t('continue_shopping') }}
                    </router-link>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'saved.show',
    mounted() {
        this.$store.dispatch('cart/getSavedItems')
    },
    computed: {
        savedItems() {
            return this.$store.state.cart.savedItems
        }
    },
    methods: {
        removeFromSaved(index, item) {
			this.$store.dispatch('cart/removeFromSaved', {
				index: index,
                item: item
			})
		},
        moveToCart(index, item) {
            this.removeFromSaved(index, item)
			this.$store.dispatch('cart/addToCart', { item: {
                    product: item.product,
                    quantity: 1
                }
            })
		},
        emptySaved() {
            if (confirm(this.$t('empty_saved_confirm'))) {
                this.$store.dispatch('cart/emptySaved')
            }
        },
    },
    filters: {
        truncate(text, value) {
            if (text.length > value) {
                return text.substring(0, value) + '...'
            } else {
                return text
            }
        }
    }
}
</script>