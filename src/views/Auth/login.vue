<template>
    <div>
        <section class="p-4 py-20 md:px-0 md:w-1/2 lg:w-1/3 xl:w-1/4 md:mx-auto">
            <h2 class="text-c-dark-gray font-bold text-2xl">Bentornato</h2>
            <p class="text-gray-400 text-sm">Effettua l'accesso</p>

            <section class="mt-10">
                <div class="w-full mb-6">
                    <label class="text-gray-400 text-sm" for="email">Indirizzo email</label>
                    <input
                        type="email"
                        @keydown="errors.email = ''"
                        v-model="user.email"
                        :class="{ 'border-red-500' : errors.email }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
                </div>
                <div class="w-full mb-8">
                    <label class="text-gray-400 text-sm" for="password">Password</label>
                    <input
                        type="password"
                        @keydown="errors.password = ''"
                        v-model="user.password"
                        :class="{ 'border-red-500' : errors.password }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.password" class="text-xs text-red-500 mt-0.5">{{ errors.password[0] }}</p>
                </div>

                <p class="text-gray-500 text-sm mb-2">Non hai un account? <router-link :to="{ name: 'Register' }" class="text-c-dark-gray">Registrati</router-link></p> 
                <button
                    @click="login"
                    class="bg-c-dark-gray rounded-lg w-full py-2">
                        <span class="text-c-white text-sm">Accedi</span>
                </button>
            </section>

        </section>
    </div>
</template>

<script>
export default {
    name: 'Auth.login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
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
        login() {
            this.$store.dispatch('auth/login', {
                user: this.user
            })
        },
        emptyErrors() {
            this.$store.dispatch('auth/emptyErrors')
        }
    }
}
</script>