<template>
    <div>
        <div v-if="product">        
            <section class="bg-white border border-gray-200 shadow-lg rounded-lg py-6">
                <div class="flex space-x-10 p-6">
                    <!-- Images Section -->
                    <div class="w-1/2">
                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="i in 5" :key="i">
                                <img
                                    class="object-cover h-full w-full"
                                    v-for="image in product.images"
                                    :key="image.id"
                                    :src="url(image)"
                                    :alt="product.name + '_image'">
                            </div>
                        </div>
                    </div>

                    <!-- Info -->
                    <div class="w-1/2">
                        <h2 class="text-gray-600 text-xl block">{{ product.name }}</h2>

                        <div class="my-3 flex items-center space-x-2">
                            <div v-for="(category) in product.categories" :key="category.id" class="text-gray-400 text-sm">
                                {{ category.name }}
                            </div>
                        </div>

                        <p class="text-gray-400 text-sm">{{ product.description }}</p>

                        <div v-if="product.height" class="flex justify-between items-center mt-4">
                            <span class="text-sm text-gray-500">Altezza</span>
                            <span>{{ product.height }}</span>
                        </div>
                        <div v-if="product.weight" class="flex justify-between items-center my-2">
                            <span class="text-sm text-gray-500">Peso</span>
                            <span>{{ product.weight }}</span>
                        </div>
                        <div v-if="product.price" class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">Prezzo</span>
                            <span>€{{ product.price }}</span>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin.Dashboard.Product.show',
    props: ['slug'],
    mounted() {
        this.getProduct()
    },
    computed: {
        product() {
            return this.$store.state.products.product
        }
    },
    methods: {
        getProduct() {
            this.$store.dispatch('products/getProduct', {
                slug: this.slug
            })
        },
        url(image) {
            return 'http://localhost:8000/storage/' + image.url
        }
    }
}
</script>