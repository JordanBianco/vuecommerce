<template>
    <div>
        <section class="p-4 md:px-0 md:w-1/2 lg:w-1/3 xl:w-1/4 md:mx-auto">
            <h2 class="text-gray-500">{{ $t('register') }}</h2>

            <section class="mt-10">
                <div class="w-full mb-6">
                    <label class="text-gray-400 text-sm" for="first_name">{{ $t('first_name') }}</label>
                    <input
                        type="text"
                        @keydown="errors.first_name = ''"
                        v-model="user.first_name"
                        :class="{ 'border-red-500' : errors.first_name }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.first_name" class="text-xs text-red-500 mt-0.5">{{ errors.first_name[0] }}</p>
                </div>
                <div class="w-full mb-6">
                    <label class="text-gray-400 text-sm" for="last_name">{{ $t('last_name') }}</label>
                    <input
                        type="text"
                        @keydown="errors.last_name = ''"
                        v-model="user.last_name"
                        :class="{ 'border-red-500' : errors.last_name }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.last_name" class="text-xs text-red-500 mt-0.5">{{ errors.last_name[0] }}</p>
                </div>
                <div class="w-full mb-6">
                    <label class="text-gray-400 text-sm" for="email">{{ $t('email') }}</label>
                    <input
                        type="email"
                        @keydown="errors.email = ''"
                        v-model="user.email"
                        :class="{ 'border-red-500' : errors.email }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
                </div>
                <div class="w-full mb-8">
                    <label class="text-gray-400 text-sm" for="password">{{ $t('password') }}</label>
                    <input
                        type="password"
                        @keydown="errors.password = ''"
                        v-model="user.password"
                        :class="{ 'border-red-500' : errors.password }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.password" class="text-xs text-red-500 mt-0.5">{{ errors.password[0] }}</p>
                        <p class="text-gray-500 text-xs mt-1">{{ $t('password_suggestion') }}</p>
                </div>

                <p class="text-gray-500 text-sm mb-2">{{ $t('already_signed') }}
                    <router-link :to="{ name: 'Login' }" class="text-c-dark-gray">
                        {{ $t('login') }}
                    </router-link>
                </p> 
                <button
                    @click="register"
                    class="bg-c-dark-gray rounded-lg w-full py-2">
                        <span class="text-c-white text-sm">{{ $t('register') }}</span>
                </button>
            </section>

        </section>
    </div>
</template>

<script>
export default {
    name: 'Auth.register',
    data() {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            },
        }
    },
    watch: {
         "$route": {
            handler: function() {
                this.emptyErrors();
            },
            deep: true,
            immediate: true,
		},
    },
    computed: {
        errors() {
            return this.$store.state.auth.errors
        }
    },
    methods: {
        register() {
            this.$store.dispatch('auth/register', {
                user: this.user
            })
        },
        emptyErrors() {
            this.$store.dispatch('auth/emptyErrors')
        }
    }
}
</script>