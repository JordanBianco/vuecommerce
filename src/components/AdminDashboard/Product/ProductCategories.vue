<template>
    <!-- Product Categories -->
    <div class="bg-white border border-gray-200 shadow-lg rounded-lg p-6">

        <p class="text-xs text-gray-400 mb-4">Puoi scegliere fino a 4 categorie</p>

        <!-- Categorie selezionate -->
        <div class="w-full flex flex-wrap mb-4">
            <div
                v-for="(category, index) in product.categories"
                :key="index"
                class="bg-blue-100 text-blue-500 max-w-max text-xs px-2 py-1 rounded-xl flex items-center space-x-2 m-1">
                    <span>{{category.name}}</span>
                    <div @click="removeCategory(index)" class="p-1 rounded-full hover:bg-blue-200 duration-150 cursor-pointer">
                        <svg class="w-3.5 h-3.5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
                    </div>
            </div>
        </div>

        <!-- Tutte le categorie -->
        <div class="w-full mb-6">
            <div v-if="categories.data" class="flex flex-wrap">
                <div
                    v-for="category in categories.data"
                    :key="category.id"
                    @click="addCategory(category)"
                    class="bg-gray-100 hover:bg-gray-200 duration-150 text-xs text-gray-600 px-2 py-1 max-w-max rounded-xl cursor-pointer mx-1 my-1.5">
                        {{category.name}}
                </div>
            </div>
            <div v-else class="flex justify-center items-center py-4 text-gray-400">
                <img
                    class="animate-spin w-8 h-8"
                    src="https://img.icons8.com/ios/50/BBBBBB/spinning-circle--v1.png"/>
            </div>

            <div class="flex items-center space-x-2 mt-4">
                <div class="w-full relative">
                    <input
                        @click="categoriesErrors.name = ''"
                        class="border border-gray-200 placeholder-gray-300 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-xs"
                        type="text"
                        v-model="category.name"
                        @keypress.enter="storeCategory"
                        placeholder="aggiungi nuova categoria...">
                        <p v-if="categoriesErrors.name" class="absolute text-xs text-red-500 mt-0.5">{{ categoriesErrors.name[0] }}</p>
                </div>

                <button
                    @click="storeCategory"
                    class="text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-white p-2 px-8 text-xs whitespace-nowrap">
                        Nuova categoria
                </button>
            </div>

            <p v-if="errors.categories" class="absolute text-xs text-red-500 mt-0.5">{{ errors.categories[0] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.Product.ProductCategories',
    props: [
        'product',
        'errors'
    ],
    mounted() {
        this.getCategories();
    },
    data() {
        return {
            category: {
                name: ''
            }
        }
    },
    computed: {
        success() {
            return this.$store.state.category.success
        },
        categoriesErrors() {
            return this.$store.state.category.errors
        },
        categories() {
            return this.$store.state.category.categories
        }
    },
    watch: {
        success() {
            if (this.success) {
                this.category.name = ''
                this.resetSuccessStatus()
            }
        }
    },
    methods: {
        getCategories() {
            this.$store.dispatch('category/getCategories')
        },
        addCategory(category) {
            let categoryInList = this.product.categories.find(c => {
                return c == category
            })

            if (!categoryInList) {

                if (this.product.categories.length < 4) {
                    this.product.categories.push(category)
                    return                    
                } else {
                    alert('Puoi aggiungere fino a 4 categorie per prodotto.')
                }
            } else {
                this.product.categories.splice(this.product.categories.indexOf(categoryInList), 1)
            }
        },
        removeCategory(index) {
            this.product.categories.splice(index, 1)
        },
        storeCategory() {
            this.$store.dispatch('category/storeCategory', {
                name: this.category.name
            })
        },
        resetSuccessStatus() {
            this.$store.dispatch('category/resetSuccessStatus')
        }
    }
}
</script>