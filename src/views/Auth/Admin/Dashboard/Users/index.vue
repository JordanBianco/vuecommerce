<template>
    <section>
        <header class="pb-6">
            <h2 class="text-xl text-gray-600">Utenti</h2>
        </header>

        <section v-if="users" class="bg-white border border-gray-200 shadow-lg rounded-lg py-6">
            <!-- Headers and filters -->
            <div class="flex flex-col space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6 text-xs px-6">
                <div class="relative w-full md:w-1/3">
                    <input
                        v-model="search"
                        :placeholder="$t('users_placeholder')"
                        type="text"
                        class="py-2 pr-10 border-gray-200 rounded-lg w-full placeholder-gray-300 text-xs focus:ring-gray-300">
                    
                        <svg class="w-4.5 h-4.5 text-gray-300 flex-none absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg>
                </div>

                <div class="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-2 md:space-y-0">
                    <select v-model="email_verified" class="p-2 px-4 border border-gray-200 rounded-lg text-gray-500 text-xs focus:ring-gray-300">
                        <option value="">filtra per</option>
                        <option value="true">Email Verificata</option>
                        <option value="false">Email non verificata</option>
                    </select>

                    <select v-model="perPage" class="p-2 px-4 pr-10 border border-gray-200 rounded-lg text-gray-500 text-xs focus:ring-gray-300">
                        <option value="">{{ $t('results_per_page') }}</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>

                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <tr class="bg-gray-100 text-gray-600 text-xs">
                        
                        <!-- ID -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <div @click="sortBy('id')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>ID</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'id' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'id' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Nome -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <div @click="sortBy('first_name')" class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>{{ $t('first_name') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'first_name' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'first_name' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Cognome -->
                        <th @click="sortBy('last_name')" class="font-normal text-left uppercase px-4 py-3">
                            <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>{{ $t('last_name') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'last_name' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'last_name' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Email -->
                        <th @click="sortBy('email')" class="font-normal text-left uppercase px-4 py-3">
                            <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span>{{ $t('email') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'email' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'email' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Email Verificata -->
                        <th class="font-normal text-left uppercase px-4 py-3">
                            <span>{{ $t('email_verified') }}</span>
                        </th>

                        <!-- Ultimo login -->
                        <th @click="sortBy('last_login_at')" class="font-normal text-left uppercase px-4 py-3">
                            <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span class="whitespace-nowrap">{{ $t('last_login_at') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'last_login_at' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'last_login_at' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <!-- Iscritto il -->
                        <th @click="sortBy('created_at')" class="font-normal text-left uppercase px-4 py-3">
                            <div class="flex space-x-1 items-center cursor-pointer max-w-max">
                                <span class="whitespace-nowrap">{{ $t('registered_on') }}</span>

                                <div class="flex flex-col -space-y-3">
                                    <svg :class="{ 'text-gray-600' : sort == 'created_at' && dir == 'asc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/></svg>
                                    <svg :class="{ 'text-gray-600' : sort == 'created_at' && dir == 'desc' }" class="w-4.5 h-4.5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
                                </div>
                            </div>
                        </th>

                        <th class="font-normal text-left uppercase px-4 py-3">
                            <span>{{ $t('actions') }}</span>
                        </th>
                    </tr>
                    <tr v-for="(user, index) in users.data" :key="user.id" class="odd:bg-gray-50 text-xs text-gray-500 p-3">
                        <td class="px-4 py-3 font-semibold text-blue-400 whitespace-nowrap">#{{ user.id }}</td>
                        <td class="px-4 py-3 whitespace-nowrap">{{ user.first_name }}</td>
                        <td class="px-4 py-3 whitespace-nowrap">{{ user.last_name }}</td>
                        <td class="px-4 py-3 whitespace-nowrap">{{ user.email }}</td>
                        <td class="px-4 py-3 whitespace-nowrap">
                            <div
                                :class="[ user.email_verified_at != null ? 'bg-green-100 text-c-green' : 'bg-red-100 text-red-400' ]"
                                class="max-w-max px-3 py-0.5 rounded-full cursor-default">
                                    {{ user.email_verified_at != null ? $t('yes') : 'No' }}
                            </div>
                        </td>
                        <td class="p-3">
                            <div class="whitespace-nowrap" v-if="user.last_login_at">
                                {{ $moment(user.last_login_at).format('DD.MM.YYYY HH:mm') }}        
                            </div>
                            <div v-else>
                                <span></span>    
                            </div>
                        </td>
                        <td class="p-3 whitespace-nowrap">{{ $moment(user.created_at).format('DD.MM.YYYY HH:mm') }}</td>
                        <td class="p-3">
                            <div class="flex items-center space-x-2 text-gray-400 duration-150">
                                <router-link
                                    :to="{ name: 'user.show', params: { id: user.id }}"
                                    :title="$t('details')"
                                    class="hover:text-gray-500 duration-150">
                                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>
                                </router-link>

                                <router-link
                                    :to="{ name: 'user.edit', params: { id: user.id }}"
                                    :title="$t('edit')"
                                    class="hover:text-gray-500 duration-150">
                                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                </router-link>

                                <div
                                    :title="$t('delete')"
                                    @click="deleteUser(user, index)"
                                    class="cursor-pointer hover:text-gray-500 duration-150">
                                        <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <footer v-if="users.meta"  class="px-4 py-3 flex justify-between items-center text-gray-500">

                    <span class="text-xs block">{{ users.meta.total }} {{ $t('results') }}</span>

                    <!-- Pagination -->
                    <pagination
                        class="flex items-center space-x-4 text-base"
                        :data="users"
                        :limit="3"
                        @pagination-change-page="getUsers">
                            <div
                                class="bg-gray-600 text-white text-sm p-1 rounded-lg"
                                slot="prev-nav">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div
                                class="bg-gray-600 text-white text-sm p-1 rounded-lg"
                                slot="next-nav">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </div>
                    </pagination>
                </footer>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Admin.Dashboard.Users.index',
    mounted() {
        this.getUsers();
    },
    data() {
        return {
            search: '',
            email_verified: '',
            perPage: '',
            sort: 'id',
            dir: 'asc'
        }
    },
    watch: {
        search() {
            this.getUsers()
        },
        email_verified() {
            this.getUsers()
        },
        sort() {
            this.getUsers()
        },
        dir() {
            this.getUsers()
        },
        perPage() {
            this.getUsers()
        },
        page() {
            this.getUsers()
        },        
    },
    computed: {
        users() {
            return this.$store.state.users.users
        }
    },
    methods: {
        getUsers(page = 1) {
            this.$store.dispatch('users/getUsers', {
                search: this.search,
                email_verified: this.email_verified,
                sort: this.sort,
                dir: this.dir,
                perPage: this.perPage,
                page: page
            })
        },
        sortBy(value) {
            if (this.sort == value) {
                this.dir = this.dir == 'desc' ? 'asc' : 'desc' 
            }
            this.sort = value
        },
        deleteUser(user, index) {
            if(confirm('Eliminare ' + user.first_name + ' ' + user.last_name + '?')) {
                this.$store.dispatch('users/deleteUser', {
                    user: user,
                    index: index
                })
            }
        }
    }
}
</script>