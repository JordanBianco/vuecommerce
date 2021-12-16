<template>
    <!-- Product Overview -->
    <div class="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
        <div class="bg-gray-100 p-4 text-gray-500 mb-4">
            <span>Anteprima</span>
        </div>

        <span class="text-gray-600 text-xl block">{{ product.name }}</span>

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

        <div class="mt-4">
            <p v-for="(image, index) in product.images" :key="index" class="text-gray-500 text-sm">
                {{ image.name }}
            </p>
            <!-- <img v-for="(preview, index) in previews" :key="index" :src="preview" alt=""> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.Product.ProductOverview',
    props: [
        'product',
        'errors'
    ]
}
</script>