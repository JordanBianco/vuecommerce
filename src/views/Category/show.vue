<template>
    <div>
        <div v-if="products">
            <div class="md:flex md:w-11/12 md:mx-auto lg:space-x-8 px-4 md:px-0">

                <aside class="lg:w-1/4 xl:w-1/5 border-r border-gray-200 h-screen text-sm hidden lg:block">
                    <header class="border-b border-gray-200 py-4 mb-8">
                        <span class="font-semibold">Filter</span>
                    </header>
                    <!-- Heigth -->
                    <!-- <div class="mb-8 pr-4">
                        <h3 class="font-semibold block mb-4">Plant size</h3>
                        <div class="flex items-center space-x-1">
                            <div
                                @click="selectSize('xs')"
                                :class="{ 'bg-gray-300' : sizeView === 'xs' }"
                                class="cursor-pointer bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                                    XS
                            </div>
                            <div
                                @click="selectSize('s')"
                                :class="{ 'bg-gray-300' : sizeView === 's' }"
                                class="cursor-pointer bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                                    S
                            </div>
                            <div
                                @click="selectSize('m')"
                                :class="{ 'bg-gray-300' : sizeView === 'm' }"
                                class="cursor-pointer bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                                    M
                            </div>
                            <div
                                @click="selectSize('l')"
                                :class="{ 'bg-gray-300' : sizeView === 'l' }"
                                class="cursor-pointer bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                                    L
                            </div>
                            <div
                                @click="selectSize('xl')"
                                :class="{ 'bg-gray-300' : sizeView === 'xl' }"
                                class="cursor-pointer bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                                    XL
                            </div>
                        </div>

                        <div class="mt-6">
                            <p v-if="sizeView == 'xs'" class="text-gray-500 text-sm">Da 2 a 15cm</p>
                            <p v-if="sizeView == 's'" class="text-gray-500 text-sm">Da 16 a 35cm</p>
                            <p v-if="sizeView == 'm'" class="text-gray-500 text-sm">Da 36 a 50cm</p>
                            <p v-if="sizeView == 'l'" class="text-gray-500 text-sm">Da 51 a 100cm</p>
                            <p v-if="sizeView == 'xl'" class="text-gray-500 text-sm">Dai 101cm</p>
                        </div>
                    </div> -->
                    <!-- Price Range -->
                    <div class="pr-4">
                        <span class="font-semibold block mb-4">Price range</span>
                        <div class="flex items-center space-x-2">
                            <input
                                @click="cleanErrors()"
                                v-model="min"
                                placeholder="Min"
                                class="focus:outline-none bg-gray-100 text-gray-400 w-full rounded-lg p-2">
                            <input
                                @click="cleanErrors()"
                                v-model="max"
                                placeholder="Max"
                                class="focus:outline-none bg-gray-100 text-gray-400 w-full rounded-lg p-2">
                        </div>
                        <button @click="setPrice()" class="bg-c-green text-white px-4 py-2 rounded-lg mt-4 w-full">Set price</button>
                        
                        <div class="mt-4">
                            <p v-if="errors.min_price" class="text-red-500 text-xs">{{ errors.min_price[0] }}</p>
                            <p v-if="errors.max_price" class="text-red-500 text-xs">{{ errors.max_price[0] }}</p>
                        </div>

                    </div>
                </aside>

                <div class="lg:w-3/4 xl:w-4/5 py-8 w-full">

                    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                        <SingleProduct
                            v-for="(product, index) in products.data"
                            :product="product"
                            :index="index"
                            :key="product.id"
                        />
                    </div>

                    <!-- Pagination -->
                    <pagination
                        class="mt-8 flex items-center space-x-4 text-base text-gray-500"
                        :data="products"
                        :limit="3"
                        @pagination-change-page="getProducts">
                            <div
                                class="bg-c-green text-white text-sm p-1 px-4 rounded-lg"
                                slot="prev-nav">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div
                                class="bg-c-green text-white text-sm p-1 px-4 rounded-lg"
                                slot="next-nav">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                    </pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct'

export default {
    name: 'category.show',
    components: {
        SingleProduct
    },
    mounted() {
        this.getProducts();
    },
    data() {
        return {
            min: '',
            max: '',
        }
    },
    computed: {
        products() {
            return this.$store.state.category.products
        },
        errors() {
            return this.$store.state.category.errors
        }
    },
    methods: {
        getProducts(page = 1) {
            this.$store.dispatch('category/getProducts', { 
                slug: this.$route.params.slug,
                min: this.min,
                max: this.max,
                page: page
            })
        },
        setPrice() {
			this.getProducts();
		},
        cleanErrors() {
			this.$store.dispatch('category/cleanErrors')
		},
    }
}
</script>
