<template>
    <div>
        <main class="w-full">
            <nav class="w-full border-b">
                <div class="flex items-center justify-between md:w-11/12 md:mx-auto p-4.5 md:px-0">
                    <TheSidebar />

                    <div class="flex items-center space-x-2">
                        <!-- LanguageSwitcher -->
                        <LanguageSwitcher />

                        <div class="text-gray-500 text-sm">
                            {{ name }}
                        </div>
                    </div>
                </div>
            </nav>
            
            <transition name="fade">
                <router-view class="py-10 pl-28 pr-14" :key="$route.path"></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
import TheSidebar from '@/components/Dashboard/TheSidebar'
import LanguageSwitcher from '@/components/Layout/LanguageSwitcher'

export default {
    name: 'Auth.dashboard',
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
        name() {
            return `${this.user.first_name} ${this.user.last_name}`
        },
    },
    methods: {
        getUser() {
            this.$store.dispatch('user/getUser')
        },
        logout() {
            this.$store.dispatch('auth/logout')
        },
    }
}
</script>