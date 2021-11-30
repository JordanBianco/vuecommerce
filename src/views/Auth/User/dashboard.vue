<template>
    <div>
        <main v-if="user" class="w-full">
            <nav class="w-full border-b fixed top-0 z-20 bg-white">
                <div class="flex items-center justify-between md:w-11/12 md:mx-auto p-4.5 md:px-0">
                    <TheSidebar />

                    <div class="flex items-center space-x-2">
                        <LanguageSwitcher />

                        <div class="text-gray-500 text-sm">
                            {{ this.user.first_name + ' ' + this.user.last_name }}
                        </div>
                    </div>
                </div>
            </nav>
            
            <transition name="fade">
                <router-view class="lg:pl-28 pt-24 pb-12 lg:pr-14 p-6 bg-gray-50 min-h-screen" :key="$route.path"></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
import TheSidebar from '@/components/Dashboard/TheSidebar'
import LanguageSwitcher from '@/components/Layout/LanguageSwitcher'

export default {
    name: 'Auth.User.dashboard',
    components: {
        TheSidebar,
        LanguageSwitcher
    },
    mounted() {
        this.getUser();
        
    },
    computed: {
        user() {
            return this.$store.state.user.user
        },
    },
    methods: {
        getUser() {
            this.$store.dispatch('user/getUser')
        },
    }
}
</script>