<template>
    <!-- Product Details -->
    <div class="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
        <div class="w-full mb-4">
            <label class="text-gray-400 text-xs" for="name">{{ $t('name') }}</label>
            <input
                type="text"
                @click="errors.name = ''"
                v-model="product.name"
                class="border border-gray-200 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-sm">
                <p v-if="errors.name" class="text-xs text-red-500 mt-0.5">{{ errors.name[0] }}</p>
        </div>

        <div class="w-full mb-4">
            <label class="text-gray-400 text-xs" for="description">{{ $t('description') }}</label>
            <textarea
                v-model="product.description"
                @click="errors.description = ''"
                class="border border-gray-200 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-sm resize-none"
                rows="6"></textarea>
                <p v-if="errors.description" class="text-xs text-red-500 mt-0.5">{{ errors.description[0] }}</p>
        </div>

        <div class="w-full flex items-center space-x-4 mb-4">
            <div class="w-1/2">
                <label class="text-gray-400 text-xs" for="height">{{ $t('height') }}</label>
                <input
                    type="number"
                    @click="errors.height = ''"
                    v-model="product.height"
                    class="border border-gray-200 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-sm">
                    <p v-if="errors.height" class="text-xs text-red-500 mt-0.5">{{ errors.height[0] }}</p>
            </div>

            <div class="w-1/2">
                <label class="text-gray-400 text-xs" for="weight">{{ $t('weight') }}</label>
                <input
                    type="number"
                    @click="errors.weight = ''"
                    v-model="product.weight"
                    class="border border-gray-200 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-sm">
                    <p v-if="errors.weight" class="text-xs text-red-500 mt-0.5">{{ errors.weight[0] }}</p>
            </div>
        </div>

        <div class="w-full mb-4">
            <label class="text-gray-400 text-xs" for="price">{{ $t('price') }}</label>
            <input
                type="number"
                @click="errors.price = ''"
                v-model="product.price"
                class="border border-gray-200 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-sm">
                <p v-if="errors.price" class="text-xs text-red-500 mt-0.5">{{ errors.price[0] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.Product.ProductDetails',
    props: [
        'product',
        'errors'
    ],
}
</script>