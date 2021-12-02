<template>
    <div>
        <section v-if="user">
            <header class="pb-6">
                <h2 class="text-xl text-gray-600">Modifica utente</h2>
            </header>

            <!-- Breadcrumb -->
            <div class="text-sm flex items-center space-x-1 text-gray-400 mb-10">
                <router-link class="hover:underline" :to="{ name: 'Manage Users' }">Utenti</router-link>
                    <span class="text-xxs">/</span>
                <router-link class="hover:underline" :to="{ name: 'user.show', params: { id: id }}">{{ user.first_name + ' ' + user.last_name }}</router-link>
                    <span class="text-xxs">/</span>
                <span class="text-blue-400">{{ $t('edit') }}</span>
            </div>

            <div class="border-b border-gray-200 w-full flex items-center mb-8 text-sm">
                <div
                    @click="selectView('data')"
                    class="pr-4 pb-4 cursor-pointer text-gray-400"
                    :class="{ 'text-gray-600' : view == 'data' }">
                        <span>{{ $t('personal_data') }}</span>
                </div>

                <div
                    @click="selectView('address')"
                    class="pr-4 pb-4 cursor-pointer text-gray-400"
                    :class="{ 'text-gray-600' : view == 'address' }">
                        <span>{{ $t('address') }}</span>
                </div>
            </div>

            <section v-if="view === 'data'" class="space-y-4 text-sm">
                <!-- Name -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="first_name">{{ $t('first_name') }}</label>
                    <input
                        type="text"
                        @focus="errors.first_name = ''"
                        v-model="user.first_name"
                        :class="{ 'border-red-500' : errors.first_name }"
                        class="border border-gray-200 focus:outline-none focus:border-blue-300 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.first_name" class="text-xs text-red-500 mt-0.5">{{ errors.first_name[0] }}</p>
                </div>
                <!-- Cognome -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="last_name">{{ $t('last_name') }}</label>
                    <input
                        type="text"
                        @focus="errors.last_name = ''"
                        v-model="user.last_name"
                        :class="{ 'border-red-500' : errors.last_name }"
                        class="border border-gray-200 focus:outline-none focus:border-blue-300 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.last_name" class="text-xs text-red-500 mt-0.5">{{ errors.last_name[0] }}</p>
                </div>
                <!-- Email -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="email">{{ $t('email') }}</label>
                    <input
                        type="email"
                        @focus="errors.email = ''"
                        v-model="user.email"
                        :class="{ 'border-red-500' : errors.email }"
                        class="border border-gray-200 focus:outline-none focus:border-blue-300 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email[0] }}</p>
                </div>

                <button
                    @click="updateInfo"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                        {{ $t('update_info') }}    
                </button>
            </section>

            <section v-if="view === 'address'" class="space-y-4 text-sm">
                <!-- Country -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="country">{{ $t('country') }}</label>
                    <input
                        type="text"
                        @focus="errors.country = ''"
                        v-model="user.country"
                        :class="{ 'border-red-500' : errors.country }"
                        class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.country" class="text-xs text-red-500 mt-0.5">{{ errors.country[0] }}</p>
                </div>

                <!-- City -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="city">{{ $t('city') }}</label>
                    <input
                        type="text"
                        @focus="errors.city = ''"
                        v-model="user.city"
                        :class="{ 'border-red-500' : errors.city }"
                        class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.city" class="text-xs text-red-500 mt-0.5">{{ errors.city[0] }}</p>
                </div>

                <!-- Province -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="province">{{ $t('province') }}</label>
                    <input
                        type="text"
                        @focus="errors.province = ''"
                        v-model="user.province"
                        :class="{ 'border-red-500' : errors.province }"
                        class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.province" class="text-xs text-red-500 mt-0.5">{{ errors.province[0] }}</p>
                </div>

                <!-- Address -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="address">{{ $t('address') }}</label>
                    <input
                        type="text"
                        @focus="errors.address = ''"
                        v-model="user.address"
                        :class="{ 'border-red-500' : errors.address }"
                        class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.address" class="text-xs text-red-500 mt-0.5">{{ errors.address[0] }}</p>
                </div>

                <!-- Zipcode -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="zipcode">{{ $t('zipcode') }}</label>
                    <input
                        type="text"
                        @focus="errors.zipcode = ''"
                        v-model="user.zipcode"
                        :class="{ 'border-red-500' : errors.zipcode }"
                        class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.zipcode" class="text-xs text-red-500 mt-0.5">{{ errors.zipcode[0] }}</p>
                </div>

                <!-- Phone -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="phone">{{ $t('phone') }}</label>
                    <input
                        type="text"
                        @focus="errors.phone = ''"
                        v-model="user.phone"
                        :class="{ 'border-red-500' : errors.phone }"
                        class="border border-gray-200 focus:outline-none focus:border-indigo-400 w-full rounded-lg p-2 py-1.5">
                        <p v-if="errors.phone" class="text-xs text-red-500 mt-0.5">{{ errors.phone[0] }}</p>
                </div>

                <button
                    @click="updateAddress"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                        {{ $t('update_address') }}    
                </button>
            </section>

        </section>
    </div>
</template>

<script>
export default {
    name: 'Admin.Dashboard.Users.edit',
    props: ['id'],
    mounted() {
        this.getUser();
    },
    data() {
        return {
            view: 'data'
        }
    },
    watch: {
        "$route" : {
            deep: true,
            immediate: true,
            handler() {
                this.cleanErrors();
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.users.user
        },
        errors() {
            return this.$store.state.users.errors
        }
    },
    methods: {
        getUser() {
            this.$store.dispatch('users/getUser', {
                id: this.id
            })
        },
        selectView(value) {
            this.view = value
        },
        updateInfo() {
            this.$store.dispatch('users/updateInfo', {
                user: this.user
            })
        },
        updateAddress() {
            this.$store.dispatch('users/updateAddress', {
                user: this.user
            })
        },
        cleanErrors() {
            this.$store.dispatch('users/clearErrors')
        }
    }
}
</script>