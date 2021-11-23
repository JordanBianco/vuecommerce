<template>
    <div>
        <header class="pb-6">
            <h2 class="text-xl text-gray-600">{{ $t('my_data') }}</h2>
        </header>

        <form v-if="user" @submit.prevent="updateInfo()" class="text-sm text-gray-600">
            <!-- Name -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="first_name">{{ $t('first_name') }}</label>
                <input
                    type="text"
                    @click="errors.first_name = ''"
                    v-model="user.first_name"
                    :class="{ 'border-red-500' : errors.first_name }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.first_name" class="text-xs text-red-500 mt-0.5">{{ errors.first_name[0] }}</p>
            </div>

            <!-- Cognome -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="last_name">{{ $t('last_name') }}</label>
                <input
                    type="text"
                    @click="errors.last_name = ''"
                    v-model="user.last_name"
                    :class="{ 'border-red-500' : errors.last_name }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.last_name" class="text-xs text-red-500 mt-0.5">{{ errors.last_name[0] }}</p>
            </div>

            <!-- Email -->
            <div class="w-full mb-6">
                <label class="text-gray-400" for="email">{{ $t('email') }}</label>
                <input
                    type="email"
                    @click="errors.email = ''"
                    v-model="user.email"
                    :class="{ 'border-red-500' : errors.email }"
                    class="border border-gray-200 focus:outline-none w-full rounded-lg p-2 py-1.5">
                    <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
            </div>

            <button
                type="submit"
                class="text-center bg-indigo-400 rounded-lg text-white px-3 py-2 shadow-sm">
                    {{ $t('update_info') }}    
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