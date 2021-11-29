<template>
    <div>
        <div v-if="product">
            <div v-if="hasBeenPurchased()">
                <div v-if="!hasBeenReviewed()" class="md:w-11/12 md:mx-auto p-4 md:px-0">
                    <h2 class="text-gray-500">{{ $t('new_review') }}</h2>

                    <div class="flex flex-col space-y-2 xs:space-y-0 xs:flex-row xs:space-x-4 py-8">
                        <div class="xs:w-20 xs:h-20 w-full h-40 flex-none rounded-lg bg-gray-200"></div>
                        <div>
                            <h3 class="text-c-dark-gray">{{ product.name }}</h3>
                            <h3 class="text-sm text-gray-400">{{ product.description }}</h3>
                        </div>
                    </div>        

                    <div class="border-t pt-8 text-sm">

                        <form @submit.prevent="postReview">

                            <div class="w-full mb-6">
                                <label class="text-gray-400 text-sm" for="content">{{ $t('content') }} <small>({{ $t('optional') }})</small></label>
                                <textarea
                                    v-model="review.content"
                                    @keydown="errors.content = ''"
                                    :class="{ 'border-red-500' : errors.content }"
                                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5"
                                    rows="3"></textarea>
                                    <p v-if="errors.content" class="text-xs text-red-500 mt-0.5">{{ errors.content[0] }}</p>
                                    <p class="text-xs text-gray-400">{{ $t('content_suggestion') }}</p>
                            </div>

                            <div class="mb-6">
                                <div class="flex space-x-1">
                                    <svg
                                        @click="setRating(i)"
                                        :class="{ 'text-c-dark-gray' : i <= review.rating }"
                                        v-for="i in 5"
                                        :key="i"
                                        class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                </div>
                                <p v-if="errors.rating" class="text-xs text-red-500 mt-1">{{ errors.rating[0] }}</p>
                            </div>

                            <button
                                class="text-sm md:max-w-max w-full bg-c-dark-gray rounded-lg text-white py-2 px-3"
                                type="submit">
                                    {{ $t('send') }}
                            </button>
                        </form>
                    </div>
                </div>
                <div v-else class="text-sm text-center text-gray-400 py-10">
                    <p>{{ $t('already_reviewed_err') }}</p>
                </div>
            </div>
            <div v-else class="text-sm text-center text-gray-400 py-10">
                <p>{{ $t('review_err') }}</p>
            </div>
        </div>
        <div v-else class="flex justify-center mt-16">
            <img
                class="animate-spin w-10 h-10"
                src="https://img.icons8.com/ios/50/BBBBBB/spinning-circle--v1.png"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Review.show',
    mounted() {
        this.getProduct();
        this.getProductsReviewed();
        this.getPurchasedProducts();
    },
    data() {
        return {
            review: {
                content: '',
                rating: '',
            }
        }
    },
    watch: {
        "$route.params.slug": {
            handler() {
                this.emptyErrors()
            },
            deep:true,
            immediate:true
        }
    },
    computed: {
        product() {
            return this.$store.state.product.product
        },
        productsReviewed() {
            return this.$store.state.order.productsReviewed
        },
        purchasedProducts() {
            return this.$store.state.order.purchasedProducts
        },
        errors() {
            return this.$store.state.review.errors
        }
    },
    methods: {
        getProduct() {
            this.$store.dispatch('product/getProduct', { slug: this.$route.params.slug })
        },
        getProductsReviewed() {
            this.$store.dispatch('order/getProductsReviewed')
        },
        getPurchasedProducts() {
            this.$store.dispatch('order/getPurchasedProducts')
        },
        postReview() {
            this.$store.dispatch('review/postReview', { 
                product_id: this.product.id,
                review: this.review
            })       
        },
        emptyErrors() {
            this.$store.dispatch('review/emptyErrors')
        },
        setRating(i) {
            this.review.rating = i
        },
        hasBeenReviewed() {
            if (this.productsReviewed.includes(this.product.id)) {
                return true
            }
        },
        hasBeenPurchased() {
            let ids = []

            this.purchasedProducts.filter(order => {
                order.products.filter(p => {
                    ids.push(p.id)
                })
            });

            if (ids.includes(this.product.id)) {
                return true
            }
        }
    }
}
</script>