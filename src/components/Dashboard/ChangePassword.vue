<template>
    <div class="lg:px-8">
        <form @submit.prevent="changePassword()" class="text-sm">
            
            <!-- Vecchia Password -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="oldPassword">Vecchia password</label>
                <input
                    type="password"
                    @click="errors.oldPassword = ''"
                    v-model="oldPassword"
                    :class="{ 'border-red-500' : errors.oldPassword }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.oldPassword" class="text-xs text-red-500 mt-0.5">{{ errors.oldPassword[0] }}</p>
            </div>

            <!-- Nuova Password -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="newPassword">Nuova password</label>
                <input
                    type="password"
                    @click="errors.newPassword = ''"
                    v-model="newPassword"
                    :class="{ 'border-red-500' : errors.newPassword }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.newPassword" class="text-xs text-red-500 mt-0.5">{{ errors.newPassword[0] }}</p>
                    <p class="text-gray-500 text-xs mt-1">La password deve essere lunga almeno 8 caratteri e contenere almeno un numero ed un simbolo</p>
            </div>

            <!-- Conferma Nuova Password -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="newPassword_confirmation">Conferma password</label>
                <input
                    type="password"
                    @click="errors.newPassword_confirmation = ''"
                    v-model="newPassword_confirmation"
                    :class="{ 'border-red-500' : errors.newPassword_confirmation }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.newPassword_confirmation" class="text-xs text-red-500 mt-0.5">{{ errors.newPassword_confirmation[0] }}</p>
            </div>

            <button
                type="submit"
                class="text-center bg-c-dark-gray rounded-lg text-white px-3 py-2">
                    Aggiorna Password    
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.ChangePassword',
    data() {
        return {
            oldPassword: '',
            newPassword: '',
            newPassword_confirmation: ''
        }
    },
    watch: {
        "$route.params.slug": {
            handler() {
                this.emptyErrors()
            },
            deep:true,
            immediate:true
        }
    },
    computed: {
        errors() {
            return this.$store.state.user.errors
        }
    },
    methods: {
        changePassword() {
            this.$store.dispatch('user/changePassword', {
                oldPassword: this.oldPassword,
                newPassword: this.newPassword,
                newPassword_confirmation: this.newPassword_confirmation,
            })
        },
        emptyErrors() {
            this.$store.dispatch('user/emptyErrors')
        }
    }
}
</script>