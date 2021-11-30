<template>
    <div class="bg-white p-4 shadow rounded-lg mb-6">
        <header class="flex items-center space-x-4">
            <div class="bg-gradient-to-r from-indigo-400 to-indigo-500 p-1.5 text-white rounded-lg max-w-max shadow">
                <svg class="w-8 h-8 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>

            <div class="w-full">
                <span class="block text-gray-600">{{ user.first_name }} Timeline</span>
            </div>
        </header>

        <section class="mt-8 xs:pl-3">
            <div v-if="activities && activities.length != 0">
                <div v-for="activity in activities" :key="activity.id" class="mb-10">
                    <component
                        :is="activity.description"
                        :activity="activity">
                    </component>
                </div>
            </div>
            <!-- Se non è presente alcun attività -->
            <div v-else class="flex items-center justify-center text-sm text-gray-400 h-72">
                <p>{{ $t('no_activities') }}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Widgets.UserTimelineWidget',
    components: {
        // Orders
        'order_created': () => import('@/components/Dashboard/Activities/order_created'),
        'order_updated': () => import('@/components/Dashboard/Activities/order_updated'),
        // Reviews
        'review_created': () => import('@/components/Dashboard/Activities/review_created'),
        'review_updated': () => import('@/components/Dashboard/Activities/review_updated'),
        'review_deleted': () => import('@/components/Dashboard/Activities/review_deleted'),
        // User
        'user_updated': () => import('@/components/Dashboard/Activities/user_updated'),

    },
    props: ['user'],
    mounted() {
        this.getActivities();
    },
    computed: {
        activities() {
            return this.$store.state.user.activities;
        }
    },
    methods: {
        getActivities() {
            this.$store.dispatch('user/getActivities')
        },
    }

}
</script>