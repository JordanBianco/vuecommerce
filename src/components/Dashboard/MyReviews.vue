<template>
    <div class="lg:px-8">
        <section v-if="reviews">
            <div v-if="reviews.length != 0">
                <header class="flex flex-col space-y-2 xs:space-y-0 xs:flex-row xs:justify-between xs:items-baseline pb-8 text-sm text-gray-400">
                    <div>
                        {{ reviews.length }} {{ $tc('reviews', reviews.length) }}
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-gray-500">{{ $t('order_by') }}</span>
                        <select v-model="sort" class="border rounded-lg focus:outline-none px-2 py-1.5 cursor-pointer">
                            <option selected value="date.desc">{{ $t('latest') }}</option>
                            <option value="date.asc">{{ $t('older') }}</option>
                            <option value="rating.desc">{{ $t('descending_vote') }}</option>
                            <option value="rating.asc">{{ $t('ascending_vote') }}</option>
                        </select>
                    </div>
                </header>

                <div v-for="review in reviews" :key="review.id" class="flex space-x-4 mb-4 odd:bg-gray-100 rounded-lg p-4">
                    <div class="rounded-lg bg-gray-200 w-20 h-20 flex-none"></div>
                    <div>
                        <h4 class="text-sm text-c-dark-gray font-semibold">{{ review.title }}</h4>
                        <p class="text-sm md:text-xs text-gray-400">{{ review.user.first_name + ' ' + review.user.last_name }}  {{ $moment(review.created_at).format('DD.MM.YYYY') }} - {{ $moment(review.created_at).format('HH:mm') }}</p>
                    
                        <div class="my-2 flex">
                            <svg
                                v-for="index in review.rating"
                                :key="index + uniqid()"
                                class="w-4 h-4 text-c-dark-gray" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                            <svg
                                v-for="index in 5 - review.rating"
                                :key="index + uniqid()"
                                class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                        </div>
                        <p class="text-sm text-gray-500">{{ review.content }}</p>

                        <div class="mt-4 text-xs text-gray-400">
                            <span>{{ $t('review_of') }} <router-link class="cursor-pointer" :to="{ name: 'product.show', params: { slug: review.product.slug }}">{{ review.product.name }}</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="text-gray-400 text-center text-sm">{{ $t('no_my_reviews') }}</p>
            </div>
        </section>
    </div>
</template>

<script>
import uniqid from 'uniqid';

export default {
    name: 'Dashboard.MyReviews',
    mounted() {
        this.getReviews();
    },
    data() {
        return {
            sort: 'date.desc'
        }
    },
    watch: {
        sort() {
            this.getReviews();
        }
    },
    computed: {
        reviews() {
            return this.$store.state.user.reviews
        },
    },
    methods: {
        getReviews() {
            this.$store.dispatch('user/getReviews', {
                sort: this.sort
            })
        },
        uniqid() {
            return uniqid()
        },
    }
}
</script>