<template>
    <div>
        <header class="bg-gray-100 flex justify-end text-sm p-4 text-gray-600">
            <svg @click="$emit('toggleEditReview')" class="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
        </header>

        <section class="overflow-y-auto pb-20 h-screen p-4 text-sm text-gray-600">
            <div class="mb-6">
                <label class="text-gray-400" for="title">{{ $t('title') }}</label>
                <input
                    v-model="review.title"
                    type="text"
                    :class="{ 'border-red-500' : errors.title }"
                    class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.title" class="text-xs text-red-500 mt-0.5">{{ errors.title[0] }}</p>
            </div>

            <div class="mb-6">
                <label class="text-gray-400" for="content">{{ $t('content') }}</label>
                <textarea
                    v-model="review.content"
                    :class="{ 'border-red-500' : errors.content }"
                    class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5"
                    rows="6"></textarea>
                    <p v-if="errors.content" class="text-xs text-red-500 mt-0.5">{{ errors.content[0] }}</p>
            </div>

            <div class="mb-8">
                <label class="text-gray-400" for="rating">{{ $t('rating') }}</label>
                <div class="flex">
                    <svg
                        @click="setRating(i)"
                        :class="{ 'text-indigo-400' : i <= review.rating }"
                        v-for="i in 5"
                        :key="i"
                        class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                </div>
            </div>

            <footer>
                <button
                    @click="updateReview()"
                    class="text-center bg-indigo-400 rounded-lg text-white px-3 py-2 shadow-sm">
                        {{ $t('save_changes') }}    
                </button>
            </footer>
        </section>
    </div>
</template>

<script>
import uniqid from 'uniqid';

export default {
    name: 'Dashboard.EditReview',
    props: ['review'],
    computed: {
        errors() {
            return this.$store.state.review.errors
        },
        success() {
            return this.$store.state.review.success
        },
    },
    watch: {
        success() {
            if (this.success) {
                this.$emit('toggleEditReview')
                this.setSuccessStatus();
            }
        }
    },
    methods: {
        updateReview() {
            this.$store.dispatch('review/updateReview', {
                review: this.review
            })
        },
        uniqid() {
            return uniqid()
        },
        setRating(i) {
            this.review.rating = i
        },
        setSuccessStatus() {
            this.$store.dispatch('review/setSuccessStatus', {value: false})
        },
    }
}
</script>