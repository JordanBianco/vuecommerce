<template>
    <div>
        <section class="lg:flex lg:space-x-6">
            <!-- Left Side -->
            <div class="lg:w-72%">
                <UserOverviewWidget :user="user" />
                <UserTimelineWidget :user="user" />
            </div>

            <!-- Right Side -->
            <div class="lg:w-28%">
                <div class="flex flex-col space-y-6">
                    <WeatherWidget />
                    <LastOrderWidget />
                    <LastReviewWidget />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import UserOverviewWidget from '@/components/Dashboard/Widgets/UserOverviewWidget'
import UserTimelineWidget from '@/components/Dashboard/Widgets/UserTimelineWidget'
import WeatherWidget from '@/components/Dashboard/Widgets/WeatherWidget'
import LastOrderWidget from '@/components/Dashboard/Widgets/LastOrderWidget'
import LastReviewWidget from '@/components/Dashboard/Widgets/LastReviewWidget'

export default {
    name: 'User.Dashboard.Overview',
    components: {
        UserOverviewWidget,
        UserTimelineWidget,
        WeatherWidget,
        LastOrderWidget,
        LastReviewWidget
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
    },
}
</script>