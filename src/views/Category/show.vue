<template>
    <div>
        <div v-if="products">
            <div class="md:flex md:w-11/12 md:mx-auto lg:space-x-8 px-4 md:px-0">

                <aside class="lg:w-1/4 xl:w-1/5 border-r border-gray-200 min-h-screen text-sm hidden lg:block">
                    <header class="border-b border-gray-200 py-4 mb-10">
                        <span class="font-thin text-base text-c-dark-gray">{{ $t('filters') }}</span>
                    </header>
                    <section class="pr-4">
                    <!-- Valutazione -->
                        <div class="mb-10">
                            <h3 class="xl:text-base font-thin text-c-dark-gray mb-4">{{ $t('ratings') }}</h3>
                            <section class="space-y-1.5 xl:space-y-2">
                                <!-- 1 star -->
                                <div @click="setRatingsFilterValue('1')" class="flex items-center justify-between">
                                    <div class="flex">
                                        <svg class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        <svg v-for="i in 4" :key="i + '-1'" class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                    <span :class="{ 'underline text-c-dark-gray' : ratings === '1' }" class="text-sm text-gray-400 cursor-pointer">{{ $t('1_star') }}</span>
                                </div>
                                <!-- 2 stars -->
                                <div @click="setRatingsFilterValue('2')" class="flex items-center justify-between">
                                    <div class="flex">
                                        <svg v-for="i in 2" :key="i + '-2'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        <svg v-for="i in 3" :key="i + '-3'" class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                    <span :class="{ 'underline text-c-dark-gray' : ratings === '2' }" class="text-sm text-gray-400 cursor-pointer">{{ $t('2_stars') }}</span>
                                </div>
                                <!-- 3 stars -->
                                <div @click="setRatingsFilterValue('3')" class="flex items-center justify-between">
                                    <div class="flex">
                                        <svg v-for="i in 3" :key="i + '-4'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        <svg v-for="i in 2" :key="i + '-5'" class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                    <span :class="{ 'underline text-c-dark-gray' : ratings === '3' }" class="text-sm text-gray-400 cursor-pointer">{{ $t('3_stars') }}</span>
                                </div>
                                <!-- 4 stars -->
                                <div @click="setRatingsFilterValue('4')" class="flex items-center justify-between">
                                    <div class="flex">
                                        <svg v-for="i in 4" :key="i + '-6'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        <svg class="w-4 h-4 xl:w-5 xl:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                    <span :class="{ 'underline text-c-dark-gray' : ratings === '4' }" class="text-sm text-gray-400 cursor-pointer">{{ $t('4_stars') }}</span>
                                </div>
                                <!-- 5 stars -->
                                <div @click="setRatingsFilterValue('5')" class="flex items-center justify-between">
                                    <div class="flex">
                                        <svg v-for="i in 5" :key="i + '-7'" class="w-4 h-4 xl:w-5 xl:h-5 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                    <span :class="{ 'underline text-c-dark-gray' : ratings === '5' }" class="text-sm text-gray-400 cursor-pointer">{{ $t('5_stars') }}</span>
                                </div>
                            </section>
                        </div>
                        <!-- Price Range -->
                        <div class="pr-4">
                            <span class="block font-thin text-base text-c-dark-gray mb-4">{{ $t('price_range') }}</span>
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
                            <button @click="setPrice()" class="bg-c-dark-gray text-white text-xs xl:text-sm px-4 py-2 rounded-lg mt-4 max-w-max">{{ $t('select') }}</button>

                            
                            <div class="mt-4">
                                <p v-if="errors.min_price" class="text-red-500 text-xs">{{ errors.min_price[0] }}</p>
                                <p v-if="errors.max_price" class="text-red-500 text-xs">{{ errors.max_price[0] }}</p>
                            </div>
                        </div>
                    </section>
                </aside>

                <div class="lg:w-3/4 xl:w-4/5 py-8 w-full">

                    <div class="flex justify-between items-center text-gray-400 text-sm mb-6">
                        <div class="space-x-2">
                            <router-link :to="{ name: 'Home' }" class="text-c-dark-gray">Home</router-link>
                            <span>|</span>
                            <span>{{ $route.params.slug }}</span>
                        </div>
                        <p v-if="products.meta">{{ products.meta.total }} {{ $tc('items', products.meta.total) }}</p>
                    </div>

                    <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6 md:justify-center">
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
            ratings: ''
        }
    },
    watch: {
		ratings() {
			this.getProducts();
		},
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
                ratings: this.ratings,
                page: page
            })
        },
        setPrice() {
			this.getProducts();
		},
        setRatingsFilterValue(value) {
			if (this.ratings == value) {
				this.ratings = ''
			} else {
				this.ratings = value
			}
		},
        cleanErrors() {
			this.$store.dispatch('category/cleanErrors')
		},
    }
}
</script>
