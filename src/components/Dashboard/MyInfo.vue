<template>
    <div class="lg:px-8">
        <form v-if="user" @submit.prevent="updateInfo()" class="text-sm">
            <!-- Name -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="first_name">Nome</label>
                <input
                    type="text"
                    @click="errors.first_name = ''"
                    v-model="user.first_name"
                    :class="{ 'border-red-500' : errors.first_name }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.first_name" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.first_name" class="text-xs text-red-500 mt-0.5">{{ errors.first_name[0] }}</p>
            </div>

            <!-- Cognome -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="last_name">Cognome</label>
                <input
                    type="text"
                    @click="errors.last_name = ''"
                    v-model="user.last_name"
                    :class="{ 'border-red-500' : errors.last_name }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.last_name" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.last_name" class="text-xs text-red-500 mt-0.5">{{ errors.last_name[0] }}</p>
            </div>

            <!-- Email -->
            <div class="w-full mb-6 relative">
                <label class="text-gray-400" for="email">Email</label>
                <input
                    type="email"
                    @click="errors.email = ''"
                    v-model="user.email"
                    :class="{ 'border-red-500' : errors.email }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <svg v-if="errors.email" class="text-red-500 w-5 h-5 absolute right-4 top-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
                    <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
            </div>

            <button
                type="submit"
                class="text-center bg-c-dark-gray rounded-lg text-white px-3 py-2">
                    Aggiorna Informazioni    
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.MyInfo',
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
        user() {
            return this.$store.state.user.user
        },
        errors() {
            return this.$store.state.user.errors
        }
    },
    methods: {
        updateInfo() {
            this.$store.dispatch('user/updateInfo', {
                user: this.user
            })
        },
        emptyErrors() {
            this.$store.dispatch('user/emptyErrors')
        }
    }
}
</script>