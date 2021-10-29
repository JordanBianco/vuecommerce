<template>
    <div class="relative mb-6 xs:mb-0">
        <router-link :to="{ name: 'product.show', params: { id: product.id }}">
            <div class="bg-gray-200 w-full h-72 xs:h-48 xs:w-48 md:h-56 md:w-56 xl:w-full rounded-lg shadow-md"></div>
        </router-link>

        <div class="absolute left-4 top-4">
            <router-link :to="{ name: 'product.show', params: { id: product.id }}">
                <h3 class="text-c-dark-gray">{{ product.name }}</h3>
                <p class="text-c-light-gray text-xs">Prezzo</p>
                <p class="text-sm text-c-dark-gray font-semibold mt-1"><span class="text-c-orange">€</span>{{ product.price }}</p>
            </router-link>
        </div>

        <transition name="fade">
            <div
                v-if="isAdded(index)"
                class="text-xs absolute bottom-12 right-4 text-indigo-500 bg-indigo-200 max-w-max p-1 px-2 rounded-lg">
                    Aggiunto al carrello
            </div>
        </transition>

        <div @click="addToCart()" class="absolute bottom-4 right-4 cursor-pointer" title="Aggiungi il carrello">
            <svg class="text-c-orange w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProduct',
    props: ['product', 'index'],
    data() {
        return {
            added: -1
        }
    },
    methods: {
		addToCart() {
            this.added = this.index

			this.$store.dispatch('cart/addToCart', {
				product: this.product,
                quantity: 1
			})
		},
        isAdded(index) {
            this.hideMessage();
            return this.added == index
        },
        hideMessage() {
            setTimeout(() => {
                this.added = -1
            }, 2200);
        }
	}
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>