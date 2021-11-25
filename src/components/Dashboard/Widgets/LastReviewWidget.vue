<template>
    <section class="shadow-md border border-gray-100 bg-white rounded-lg p-4">
        
        <header class="flex items-center space-x-4">
            <div class="bg-indigo-100 p-1.5 text-indigo-400 rounded-full max-w-max">
                <svg class="w-8 h-8 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
            </div>

            <div class="w-full">
                <span class="block text-gray-600">{{ $t('last_review') }}</span>
                <div class="flex justify-between items-center">
                    <span v-if="last.length != 0" class="block text-sm text-gray-400">{{ $moment(last.created_at).format('DD.MM.YYYY') }}</span>
                </div>
            </div>
        </header>
        
        <div v-if="last.length != 0" class="pt-4 text-sm">
            
            <div class="pb-4">
                <span class="block text-gray-600 leading-tight">{{ last.title }}</span>
                <p class="text-xs text-gray-400 my-3">{{ last.content }}</p>
                <div class="flex">
                    <svg
                        v-for="index in last.rating"
                        :key="index + uniqid()"
                        class="w-4 h-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                    <svg
                        v-for="index in 5 - last.rating"
                        :key="index + uniqid()"
                        class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                </div>
            </div>

            <div class="flex space-x-4 border-t pt-4">
                <div class="bg-gray-200 rounded-lg w-14 h-14 flex-none"></div>
                <div>
                    <span class="block text-gray-600 leading-tight my-1">{{ last.product.name }}</span>
                </div>
            </div>

            <div class="w-full">
                <router-link
                    :to="{ name: 'My Reviews' }"
                    class="block text-center text-xs mt-5 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white px-3 py-3 shadow-sm">
                        {{ $t('my_reviews') }}
                </router-link>
            </div>
        </div>
        <!-- Se non ci sono ordini -->
        <div v-else class="text-center text-sm mt-4 text-gray-400">
            <p>{{ $t('no_last_review') }}</p>
        </div>
    </section>
</template>

<script>
import uniqid from 'uniqid';

export default {
    name: 'Dashboard.Widgets.LastReviewWidget',
    mounted() {
        this.getLastReview();
    },
    computed: {
        last() {
            return this.$store.state.review.last
        }
    },
    methods: {
        getLastReview() {
            this.$store.dispatch('review/getLastReview')
        },
        uniqid() {
            return uniqid();
        }
    }
}
</script>