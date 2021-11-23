<template>
    <div>
        <header class="pb-6">
            <h2 class="text-xl text-gray-600">{{ $t('my_reviews') }}</h2>
        </header>

        <div class="mb-6 text-xs">
            <div class="relative w-1/3">
                <input
                    v-model="search"
                    :placeholder="$t('review_placeholder')"
                    type="text"
                    class="p-2 pr-10 border rounded-lg focus:outline-none focus:border-indigo-400 w-full">
                
                    <svg class="w-5 h-5 text-gray-300 flex-none absolute right-3 top-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full">
                <tr class="bg-gray-100 text-gray-600 text-xs border-b">
                    <!-- Articolo -->
                    <th class="font-normal text-left uppercase p-3 w-1/6">
                        <span>{{ $tc('items', 1) }}</span>
                    </th>
                    <!-- Titolo -->
                    <th class="font-normal text-left uppercase p-3 w-1/6">
                        <span>{{ $t('title') }}</span>
                    </th>
                    <!-- Contenuto -->
                    <th class="font-normal text-left uppercase p-3 w-2/6">
                        <span>{{ $t('content') }}</span>
                    </th>
                    <!-- Voto -->
                    <th @click="sortBy('rating')" class="font-normal text-left uppercase p-3 w-1/6">
                        <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span class="whitespace-nowrap">{{ $t('rating') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-700' : sort == 'rating' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-700' : sort == 'rating' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>
                    <!-- Data review -->
                    <th class="font-normal text-left uppercase p-3 w-1/6">
                        <div @click="sortBy('created_at')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                            <span>{{ $t('review_date') }}</span>

                            <div class="flex flex-col -space-y-2.5">
                                <svg :class="{ 'text-gray-700' : sort == 'created_at' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                <svg :class="{ 'text-gray-700' : sort == 'created_at' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                            </div>
                        </div>
                    </th>
                    <!-- Azioni -->
                    <th class="font-normal text-left uppercase p-3 w-1/6">
                        <span>{{ $t('actions') }}</span>
                    </th>
                </tr>

                <tr v-for="(review, index) in reviews" :key="review.id" class="odd:bg-gray-100 last:border-b text-xs text-gray-400 p-3">
                    <td class="p-3 text-indigo-400">
                        <router-link class="hover:underline" :to="{ name: 'product.show', params: { slug: review.product.slug }}">
                            {{ review.product.name }}
                        </router-link>
                    </td>
                    <td class="p-3">{{ review.title }}</td>
                    <td class="p-3">{{ review.content }}</td>
                    <td class="p-3">
                        <div class="flex">
                            <svg
                                v-for="index in review.rating"
                                :key="index + uniqid()"
                                class="w-4 h-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                            <svg
                                v-for="index in 5 - review.rating"
                                :key="index + uniqid()"
                                class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                        </div>
                    </td>
                    <td class="p-3 whitespace-nowrap">{{ $moment(review.created_at).format('DD.MM.YYYY HH:mm') }}</td>
                    <td class="p-3">
                        <div class="flex items-center space-x-2 text-gray-500">
                            <div @click="selectReview(review)" :title="$t('edit')" class="cursor-pointer">
                                <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"/></svg>
                            </div>
                            <div @click="deleteReview(review, index)" :title="$t('delete')" class="cursor-pointer">
                                <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <footer class="mt-4 text-xs text-gray-400 flex justify-end">
                <span class="block">{{ $t('results') }} {{ reviews.length }}</span>
            </footer>
        </div>

        <!-- Side Order Details -->
        <div
            :class="{ 'translate-x-full' : !editReview }"
            class="fixed right-0 bg-white xs:w-120 w-full top-0 bottom-0 min-h-screen transform duration-300 ease-in-out z-50">
                <EditReview
                    @toggleEditReview="toggleEditReview"
                    :review="selectedReview"
                />
        </div>
        <!-- Overlay -->
        <div v-if="editReview" @click="toggleEditReview" class="fixed inset-0 bg-black opacity-30 z-40"></div>
    </div>
</template>

<script>
import uniqid from 'uniqid';
import EditReview from '@/components/Dashboard/EditReview';

export default {
    name: 'Dashboard.MyReviews',
    components: {
        EditReview
    },
    mounted() {
        this.getReviews();
    },
    data() {
        return {
            search: '',
            sort: 'created_at',
            dir: 'desc',
            editReview: false,
            selectedReview: {}
        }
    },
    watch: {
        search() {
            this.getReviews();
        },
        sort() {
            this.getReviews();
        },
        dir() {
            this.getReviews();
        },
    },
    computed: {
        reviews() {
            return this.$store.state.review.reviews
        },
    },
    methods: {
        getReviews() {
            this.$store.dispatch('review/getReviews', {
                search: this.search,
                sort: this.sort,
                dir: this.dir,
            })
        },
        sortBy(value) {
            if (this.sort == value) {
                this.dir = this.dir == 'asc' ? 'desc' : 'asc'
            } else {
                this.dir = this.dir == 'asc' ? 'desc' : 'asc'
                this.sort = value
            }
        },
        deleteReview(review, index) {
            if (confirm(this.$t('delete_review_confirm'))) {
                this.$store.dispatch('review/deleteReview', {
                    review: review,
                    index: index
                })
            }
        },
        selectReview(review) {
            this.selectedReview = review
            this.editReview = true
        },
        toggleEditReview() {
            this.editReview = ! this.editReview
        },
        uniqid() {
            return uniqid()
        },
    }
}
</script>