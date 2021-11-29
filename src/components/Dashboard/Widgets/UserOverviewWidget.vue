<template>
    <div>
        <div class="bg-white p-6 flex shadow rounded-lg mb-6 h-52">
        
            <div class="flex justify-between items-center w-full">
                <!-- Left Side -->
                <div class="flex space-x-4 items-center w-1/2">
                    <div>
                        <div class="bg-gray-200 rounded-lg w-24 h-24"></div>
                    </div>
                    <div>
                        <h2 class="text-gray-600">{{ user.first_name + ' ' + user.last_name }}</h2>
                        <span class="text-sm block text-gray-400">{{ user.email }}</span>

                        <div class="mt-4 flex items-center space-x-2">
                            <router-link
                                :to="{ name: 'Personal Info' }"
                                class="text-center text-xs bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg text-white px-3 py-2 shadow-sm">
                                    {{ $t('edit')}}
                            </router-link>
                            <button
                                @click="deleteAccount()"
                                class="text-center text-xs border border-red-500 rounded-lg text-red-500 px-3 py-2 shadow-sm">
                                    {{ $t('delete_account')}}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="w-1/2 flex justify-end text-sm">
                    <div class="space-y-2">
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-indigo-400 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                            <span class="text-gray-400">{{ user.country }}, {{ user.city }}, {{ user.province }}</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-indigo-400 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/></svg>
                            <span class="text-gray-400">{{ user.address }}, {{ user.zipcode }}</span>
                        </div>

                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-indigo-400 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"/></svg>
                            <span class="text-gray-400">{{ user.phone }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Widgets.UserOverviewWidget',
    props: ['user'],
    methods: {
        deleteAccount() {
            if (confirm(this.$t('delete_account_confirm'))) {
                this.$store.dispatch('user/deleteAccount')
            }
        }
    }

}
</script>