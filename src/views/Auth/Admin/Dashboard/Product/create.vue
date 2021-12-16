<template>
    <div>        
        <header class="mb-6">
            <h2 class="text-xl text-gray-600">Aggiungi Prodotto</h2>
        </header>
        
        <section class="flex space-x-4">
            <div class="space-y-6 w-1/2">
                <ProductDetails
                    :errors="errors"
                    :product="product"
                />

                <ProductCategories
                    :errors="errors"
                    :product="product"
                />

                <ProductImages
                    :errors="errors"
                    :product="product"
                />
            </div>
            <div class="w-1/2">
                <ProductOverview
                    :errors="errors"
                    :product="product"
                />
            </div>
        </section>

        <div>
            <button
                @click="storeProduct"
                class="text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-white px-3 py-2 mt-6 shadow-sm text-sm">
                    {{ $t('save') }}
            </button>
        </div>
    </div>
</template>

<script>
import ProductDetails from '@/components/AdminDashboard/Product/ProductDetails'
import ProductCategories from '@/components/AdminDashboard/Product/ProductCategories'
import ProductImages from '@/components/AdminDashboard/Product/ProductImages'
import ProductOverview from '@/components/AdminDashboard/Product/ProductOverview'

export default {
    name: 'Admin.Dashboard.Product.create',
    components: {
        ProductDetails,
        ProductCategories,
        ProductImages,
        ProductOverview
    },
    data() {
        return {
            product: {
                name: '',
                description: '',
                height: '',
                weight: '',
                price: '',
                images: [],
                categories: [],
            },
            previews: [],
        }
    },
    computed: {
        errors() {
            return this.$store.state.products.errors
        },
    },
    methods: {
        storeProduct() {
            const formData = new FormData()

            formData.append('name', this.product.name)
            formData.append('description', this.product.description)
            formData.append('height', this.product.height)
            formData.append('weight', this.product.weight)
            formData.append('price', this.product.price)

            for (let i = 0; i < this.product.images.length; i++) {
                formData.append('images[]', this.product.images[i])
            }

            for (let i = 0; i < this.product.categories.length; i++) {
                formData.append('categories[]', this.product.categories[i].id)
            }

            this.$store.dispatch('products/storeProduct', formData)
        },
    }
}
</script>