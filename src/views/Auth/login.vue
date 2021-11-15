<template>
    <div>
        <section class="p-4 py-20 md:px-0 md:w-1/2 lg:w-1/3 xl:w-1/4 md:mx-auto">
            <h2 class="text-c-dark-gray font-bold text-2xl">Bentornato</h2>
            <p class="text-gray-400 text-sm">Effettua l'accesso</p>

            <section class="mt-10">
                <div class="w-full mb-6 relative">
                    <label class="text-gray-400 text-sm" for="email">Indirizzo email</label>
                    <input
                        type="email"
                        @keydown="errors.email = ''"
                        v-model="user.email"
                        :class="{ 'border-red-500' : errors.email }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <svg v-if="errors.email" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                        <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
                </div>
                <div class="w-full mb-8 relative">
                    <label class="text-gray-400 text-sm" for="password">Password</label>
                    <input
                        type="password"
                        @keydown="errors.password = ''"
                        v-model="user.password"
                        :class="{ 'border-red-500' : errors.password }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <svg v-if="errors.password" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
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