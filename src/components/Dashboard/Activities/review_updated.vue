<template>
    <div v-if="activity.subject" class="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-x-10 sm:space-y-0">
        <div class="flex space-x-4 xs:space-x-8">
            <div class="w-2.5 h-2.5 ring-4 ring-blue-200 bg-blue-500 rounded-full flex-none mt-2"></div>

            <div class="w-full">
                <span class="text-sm leading-tight block text-gray-600">{{ $t('review_updated') }}
                    <router-link class="hover:underline" :to="{ name: 'product.show', params: { slug: activity.subject.product.slug} }">"{{ activity.subject.product.name }}"</router-link>
                </span>
                <span
                    @click="toggleShowChanges"
                    class="text-xs text-gray-400 cursor-pointer">
                        {{ showChanges ? $t('hide_changes') : $t('show_changes') }}
                </span>

                <transition name="fade">
                    <section v-if="showChanges" class="mt-2 bg-gray-50 p-4 rounded-lg">

                        <!-- Content -->
                        <div v-if="activity.changes.before.content" class="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-8 md:space-y-0 py-2">
                            <!-- Content Before -->
                            <div class="flex flex-col md:w-1/2">
                                <span class="text-xs text-gray-400">{{ $t('content') }}</span>
                                <div class="flex space-x-2">
                                    <span class="text-red-400 block text-lg">-</span>
                                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.content }}</p>
                                </div>
                            </div>

                            <!-- Content After -->
                            <div class="flex flex-col md:w-1/2">
                                <span class="text-xs text-gray-400">{{ $t('content') }}</span>
                                <div class="flex items-start space-x-2">
                                    <span class="text-c-green block text-lg">+</span>
                                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.content }}</p>
                                </div>
                            </div>
                        </div> <!-- Fine Content -->

                        <!-- Rating -->
                        <div v-if="activity.changes.before.rating" class="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-8 md:space-y-0 py-2">
                            <!-- Rating Before -->
                            <div class="flex flex-col md:w-1/2">
                                <span class="text-xs text-gray-400">{{ $t('rating') }}</span>
                                <div class="flex space-x-2">
                                    <span class="text-red-400 block text-lg">-</span>
                                    <div class="flex mt-1.5">
                                        <svg
                                            v-for="index in activity.changes.before.rating"
                                            :key="index + $uniqid()"
                                            class="w-4 h-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        <svg
                                            v-for="index in (5 - activity.changes.before.rating)"
                                            :key="index + $uniqid()"
                                            class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <!-- Rating After -->
                            <div class="flex flex-col md:w-1/2">
                                <span class="text-xs text-gray-400">{{ $t('rating') }}</span>
                                <div class="flex space-x-2">
                                    <span class="text-c-green block text-lg">+</span>
                                    <div class="flex mt-1.5">
                                        <svg
                                            v-for="index in activity.changes.after.rating"
                                            :key="index + $uniqid()"
                                            class="w-4 h-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                        <svg
                                            v-for="index in (5 - activity.changes.after.rating)"
                                            :key="index + $uniqid()"
                                            class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="currentColor" d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- Fine Rating -->

                    </section>
                </transition>
            </div>
        </div>

        <span class="block text-gray-400 text-xs whitespace-nowrap ml-6 xs:ml-11 sm:ml-0">{{ $moment(activity.created_at).fromNow() }}</span>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Activities.review_updated',
    props: ['activity'],
    data() {
        return {
            showChanges: false
        }
    },
    methods: {
        toggleShowChanges() {
            this.showChanges = ! this.showChanges
        }
    }
}
</script>