<template>
    <div>
        <header class="pb-6 flex items-center justify-between">
            <h2 class="text-xl text-gray-600">{{ $t('products') }}</h2>
        </header>

        <section class="bg-white border border-gray-200 shadow-lg rounded-lg py-6">
            <!-- Header Filter Section -->
            <div class="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6 text-xs px-6">
                <div class="relative w-full md:w-1/3">
                    <input
                        v-model="search"
                        :placeholder="$t('search_products_placeholder')"
                        type="text"
                        class="py-2 pr-10 border-gray-200 rounded-lg w-full placeholder-gray-300 text-xs focus:ring-gray-300">
                    
                        <svg class="w-4.5 h-4.5 text-gray-300 flex-none absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
                </div>

                <div class="flex space-x-2 items-center">
                    <select v-model="perPage" class="p-2 pr-10 border border-gray-200 rounded-lg focus:ring-gray-300 text-gray-500 text-xs">
                        <option value="">{{ $t('results_per_page') }}</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>

                    <router-link
                        :to="{ name: 'Create Product' }"
                        class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-full text-xs text-white p-2 shadow-sm hover:shadow-xl">
                            <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
                    </router-link>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <tr class="bg-gray-100 text-gray-600 text-xs">
                        
                        <!-- ID -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <div @click="sortBy('id')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>ID</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'id' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'id' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Image -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <span>{{ $t('image') }}</span>
                        </th>

                        <!-- Nome -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <div @click="sortBy('name')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>{{ $t('name') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'name' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'name' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Media Recensioni -->
                        <th @click="sortBy('weight')" class="font-normal text-left uppercase px-4 py-3 whitespace-nowrap">
                            <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>{{ $t('avg_reviews') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'weight' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'weight' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Descrizione -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <span>{{ $t('description') }}</span>
                        </th>

                        <!-- Categorie -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <span>{{ $t('categories') }}</span>
                        </th>

                        <!-- Prezzo -->
                        <th @click="sortBy('price')" class="font-normal text-left uppercase px-4 py-3">
                            <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>{{ $t('price') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'price' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'price' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- AZIONI -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <span>{{ $t('actions') }}</span>
                        </th>
                    </tr>
                    <tr v-for="(product, index) in products.data" :key="product.id" class="odd:bg-gray-50 text-xs text-gray-500 p-3">
                        <td class="px-4 py-3 font-semibold text-blue-400 whitespace-nowrap">#{{ product.id }}</td>
                        <td>
                            <div class="w-20 h-20">
                                <img
                                    class="object-cover h-full w-full"
                                    v-for="image in product.images"
                                    :key="image.id"
                                    :src="url(image)"
                                    alt="">
                            </div>
                        </td>
                        <td class="px-4 py-3">{{ product.name }}</td>
                        <td class="px-4 py-3 whitespace-nowrap">
                            <div v-if="product.average" class="flex">
                                <svg
                                    v-for="index in parseInt(product.average)"
                                    :key="index + $uniqid()"
                                    class="w-4 h-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                <svg
                                    v-for="index in 5 - parseInt(product.average)"
                                    :key="index + $uniqid()"
                                    class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                            </div>
                        </td>
                        <td class="px-4 py-3">{{ product.description }}</td>
                        <td class="px-4 py-3">
                            <div
                                v-for="category in product.categories"
                                :key="category.id"
                                class="bg-indigo-100 text-indigo-500 px-2 py-0.5 rounded-lg max-w-max mb-1">
                                    {{ category.name }}
                            </div>
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap">€{{ product.price }}</td>
                        <td class="p-3">
                            <div class="flex items-center space-x-2 text-gray-400 duration-150">
                                <router-link
                                    :to="{ name: 'admin.product.show', params: { slug: product.slug }}"
                                    :title="$t('details')"
                                    class="hover:text-gray-500 duration-150">
                                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>
                                </router-link>

                                <!-- <router-link
                                    :to="{ name: 'admin.product.edit', params: { id: product.id }}"
                                    :title="$t('edit')"
                                    class="hover:text-gray-500 duration-150">
                                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                </router-link> -->

                                <div
                                    :title="$t('delete')"
                                    @click="deleteProduct(product, index)"
                                    class="cursor-pointer hover:text-gray-500 duration-150">
                                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <footer v-if="products.meta"  class="px-4 py-3 flex justify-between items-center text-gray-500">

                    <span class="text-xs block">{{ products.meta.total }} {{ $t('results') }}</span>

                    <!-- Pagination -->
                    <pagination
                        class="flex items-center space-x-4 text-base"
                        :data="products"
                        :limit="3"
                        @pagination-change-page="getProducts">
                            <div
                                class="bg-gray-600 text-white text-sm p-1 rounded-lg"
                                slot="prev-nav">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div
                                class="bg-gray-600 text-white text-sm p-1 rounded-lg"
                                slot="next-nav">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                    </pagination>
                </footer>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: 'Admin.Dashboard.Product.index',
    mounted() {
        this.getProducts()
    },
    data() {
        return {
            search: '',
            perPage: '',
            sort: 'id',
            dir: 'asc'
        }
    },
    computed: {
        products() {
            return this.$store.state.products.products
        }
    },
    watch: {
        page() {
            this.getProducts()
        },
        perPage() {
            this.getProducts()
        },
        search() {
            this.getProducts()
        },
        sort() {
            this.getProducts()
        },
        dir() {
            this.getProducts()
        }
    },
    methods: {
        getProducts(page = 1) {
            this.$store.dispatch('products/getProducts', {
                search: this.search,
                sort: this.sort,
                dir: this.dir,
                perPage: this.perPage,
                page: page
            })
        },
        deleteProduct(product, index) {
            console.log(product, index)
        },
        sortBy(value) {
            if (this.sort == value) {
                this.dir = this.dir == 'desc' ? 'asc' : 'desc' 
            }
            this.sort = value
        },
        url(image) {
            return 'http://localhost:8000/storage/' + image.url
        }
    }
}
</script>