<template>
    <!-- Product Details -->
    <div class="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
        <div class="w-full mb-6">
            <label class="text-gray-400 text-xs" for="images">images</label>
            <input
                type="file"
                multiple
                @click="errors.images = ''"
                @change="uploadFile"
                class="border border-gray-200 focus:outline-none focus:ring-0 w-full rounded-lg p-2 text-sm">
                <p v-if="errors.images" class="text-xs text-red-500 mt-0.5">{{ errors.images[0] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.Product.ProductImages',
    props: [
        'product',
        'errors'
    ],
    methods: {
        uploadFile (event) {
            let selectedImages = event.target.files;
            // let reader = event.target.files;

            // reader = new FileReader()
            // reader.onload = (e) => {
            //     this.previews = e.target.result
            // }
            // reader.readAsDataURL(selectedImages[0])

            for (let i = 0; i < selectedImages.length; i++) {
                this.product.images.push(selectedImages[i])
            }
        },
    }
}
</script>