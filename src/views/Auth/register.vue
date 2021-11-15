<template>
    <div>
        <section class="p-4 md:px-0 md:w-1/2 lg:w-1/3 xl:w-1/4 md:mx-auto">
            <h2 class="text-gray-500">Registrati</h2>

            <section class="mt-10">
                <div class="w-full mb-6 relative">
                    <label class="text-gray-400 text-sm" for="first_name">Nome</label>
                    <input
                        type="text"
                        @keydown="errors.first_name = ''"
                        v-model="user.first_name"
                        :class="{ 'border-red-500' : errors.first_name }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <svg v-if="errors.first_name" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                        <p v-if="errors.first_name" class="text-xs text-red-500 mt-0.5">{{ errors.first_name[0] }}</p>
                </div>
                <div class="w-full mb-6 relative">
                    <label class="text-gray-400 text-sm" for="last_name">Cognome</label>
                    <input
                        type="text"
                        @keydown="errors.last_name = ''"
                        v-model="user.last_name"
                        :class="{ 'border-red-500' : errors.last_name }"
                        class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                        <svg v-if="errors.last_name" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                        <p v-if="errors.last_name" class="text-xs text-red-500 mt-0.5">{{ errors.last_name[0] }}</p>
                </div>
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
                        <p class="text-gray-500 text-xs mt-1">La password deve essere lunga almeno 8 caratteri e contenere almeno un numero ed un simbolo</p>
                </div>

                <p class="text-gray-500 text-sm mb-2">Hai gà un account? <router-link :to="{ name: 'Login' }" class="text-c-dark-gray">Accedi</router-link></p> 
                <button
                    @click="register"
                    class="bg-c-dark-gray rounded-lg w-full py-2">
                        <span class="text-c-white text-sm">Registrati</span>
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