<template>
    <div>
        <section class="flex">
            <div class="p-4 w-72%">
                <UserOverviewWidget :user="user" />

                <UserTimelineWidget :user="user" />
            </div>

            <!-- Right Side -->
            <div class="w-28% p-4">
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
    name: 'Dashboard.Dashboard',
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
<!--
    <div class="grid grid-cols-3 gap-4">
            <div class="shadow bg-white rounded-lg p-4 col-span-1 row-span-1">
                <div class="flex items-start space-x-4">
                    <div class="bg-indigo-100 p-1.5 text-indigo-400 rounded-full max-w-max">
                        <svg class="w-8 h-8 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
                    </div>
                    <div class="">
                        <span class="block text-gray-700 font-semibold text-lg">{{ user.orders_count }}</span>
                        <span class="block text-gray-400">{{ $tc('orders', user.orders_count) }}</span>
                    </div>
                </div>
            </div>

            <div class="shadow bg-white rounded-lg p-4 col-span-1 row-span-1">
                <div class="flex space-x-4">
                    <div class="bg-indigo-100 p-3 text-indigo-500 rounded-full max-w-max">
                        <svg class="w-7 h-7 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                    </div>
                    <div class="">
                        <span class="block text-gray-700 font-semibold text-lg">{{ user.reviews_count }}</span>
                        <span class="block text-gray-400">{{ $tc('reviews', user.reviews_count) }}</span>
                    </div>
                </div>
            </div>

            <div class="shadow bg-white rounded-lg p-4 col-span-1 row-span-1">
                <div class="flex space-x-4">
                    <div class="bg-indigo-100 p-3 text-indigo-500 rounded-full max-w-max">
                        <svg class="w-7 h-7 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.49,7.52a.19.19,0,0,1,0-.08.17.17,0,0,1,0-.07l0-.09-.06-.15,0,0h0l0,0,0,0a.48.48,0,0,0-.09-.11l-.09-.08h0l-.05,0,0,0L16.26,4.45h0l-3.72-2.3A.85.85,0,0,0,12.25,2h-.08a.82.82,0,0,0-.27,0h-.1a1.13,1.13,0,0,0-.33.13L4,6.78l-.09.07-.09.08L3.72,7l-.05.06,0,0-.06.15,0,.09v.06a.69.69,0,0,0,0,.2v8.73a1,1,0,0,0,.47.85l7.5,4.64h0l0,0,.15.06.08,0a.86.86,0,0,0,.52,0l.08,0,.15-.06,0,0h0L20,17.21a1,1,0,0,0,.47-.85V7.63S20.49,7.56,20.49,7.52ZM12,4.17l1.78,1.1L8.19,8.73,6.4,7.63Zm-1,15L5.5,15.81V9.42l5.5,3.4Zm1-8.11L10.09,9.91l5.59-3.47L17.6,7.63Zm6.5,4.72L13,19.2V12.82l5.5-3.4Z"/></svg>
                    </div>
                    <div class="">
                        <span class="block text-gray-700 font-semibold text-lg">{{ user.orders_count }}</span>
                        <span class="block text-gray-400">{{ $tc('orders', user.orders_count) }}</span>
                    </div>
                </div>
            </div>
    </div>-->
