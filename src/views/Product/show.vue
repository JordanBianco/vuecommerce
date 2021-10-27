<template>
    <div>
        <div class="relative">
            <div class="bg-gray-200 w-full h-80"></div>

            <div @click="addToCart()" class="absolute top-4 right-4 cursor-pointer bg-c-red rounded-full p-1.5" title="Aggiungi il carrello">
                <svg class="text-c-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"/></svg>
            </div>
        </div>
        <section class="p-4">
            <h2 class="font-bold text-2xl">{{ product.name }}</h2>
            
            <div class="flex items-start justify-between my-4">
                <span class="text-xl">€{{ product.price }}</span>
                <div class="flex items-center space-x-4">
                    <div v-if="product.quantity > 1" @click="decrement" class="shadow-md bg-c-red px-2 text-c-white rounded-full">-</div>
                    <span class="text-c-dark-gray">{{ product.quantity }}</span>
                    <div @click="increment" class="shadow-md bg-c-red px-2 text-c-white rounded-full">+</div>
                </div>
            </div>

        <div class="flex items-center space-x-2 mb-4">
            <div class="flex">
                <svg v-for="i in 4" :key="i" class="w-4 h-4 text-c-orange" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                <svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
            </div>
            <div class="text-c-light-gray text-sm mt-0.5">102 recensioni</div>
        </div>

            <p class="text-c-light-gray text-sm">{{ product.description }}</p>
        </section>

        <transition name="fade">
            <div
                v-if="added"
                class="text-xs absolute bottom-20 right-4 text-indigo-500 bg-indigo-200 max-w-max p-1 px-2 rounded-lg">
                    Aggiunto al carrello
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'product.show',
    mounted() {
        this.getProduct();
    },
    data() {
        return {
            added: false,
            product: {
                "id":2,
                "brand_id":2,
                "name":"Skivee",
                "description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                "price":"15,30",
                "image":"http://dummyimage.com/x.png/cc0000/ffffff",
                "quantity":1
            }
        }
    },
    computed: {
        // product() {
        //     return this.$store.state.products.product
        // }
    },
    methods: {
        getProduct() {
            this.$store.dispatch('product/getProduct', { id:  this.$route.params.id })
        },
        addToCart() {
            this.isAdded();

			this.$store.dispatch('cart/addToCart', {
				product: this.product,
			})
		},
        isAdded() {
            this.added = true

            setTimeout(() => {
                this.added = false
            }, 2200);
        },
        increment() {
            return this.product.quantity = this.product.quantity + 1
        },
        decrement() {
            return this.product.quantity = this.product.quantity - 1
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