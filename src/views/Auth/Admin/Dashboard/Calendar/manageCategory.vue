<template>
    <div>
        <header class="mb-6">
            <h2 class="text-xl text-gray-600">{{ $t('manage_categories') }}</h2>
        </header>

        <section class="bg-white border border-gray-200 shadow-lg rounded-lg py-6">
            <header class="flex justify-end px-6 pb-6">
                <button
                    @click="toggleCreateMenu"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-full text-xs text-white p-2 shadow-sm hover:shadow-xl">
                        <svg class="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
                </button>
            </header>

            <div v-if="categories">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <!-- Table Row -->
                        <tr class="bg-gray-100 text-gray-600 text-xs">

                            <!-- NOME -->
                            <th class="font-normal text-left uppercase px-4 py-3">
                                <span>{{ $t('name') }}</span>
                            </th>

                            <!-- SFONDO -->
                            <th class="font-normal text-center uppercase px-4 py-3">
                                <span>{{ $t('background_color') }}</span>
                            </th>

                            <!-- TESTO -->
                            <th class="font-normal text-center uppercase px-4 py-3">
                                <span>{{ $t('text_color') }}</span>
                            </th>

                            <!-- DEMO -->
                            <th class="font-normal text-center uppercase px-4 py-3 w-2/6">
                                <span>{{ $t('example') }}</span>
                            </th>

                            <!-- CREATO IL -->
                            <th class="font-normal text-left uppercase px-4 py-3">
                                <div class="max-w-max">
                                    <span>{{ $t('created_at') }}</span>
                                </div>
                            </th>

                            <th class="font-normal text-left uppercase px-4 py-3">
                                <span>{{ $t('actions') }}</span>
                            </th>
                        </tr>
                        <!-- Table Row -->
                        <tr v-for="(category, index) in categories" :key="category.id" class="odd:bg-gray-50 text-xs text-gray-500">
                            <td class="px-4 py-3 whitespace-nowrap">{{ category.name }}</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <div class="flex justify-center">
                                    <div
                                        :style="'background-color:' + category.backgroundColor"
                                        class="w-4 h-4 rounded-full">
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <div class="flex justify-center">
                                    <div
                                        :style="'background-color:' + category.textColor"
                                        class="w-4 h-4 rounded-full">
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <div class="flex justify-center">
                                    <div
                                        :style="'background-color:' + category.backgroundColor + ';color:' + category.textColor"
                                        class="rounded flex-none px-3 py-1">
                                            Lorem, ipsum dolor 
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">{{ $moment(category.created_at).format('DD.MM.YYYY HH:mm') }}</td>
                            <td class="px-4 py-3">
                                <div class="flex items-center space-x-2 text-gray-400 duration-150">
                                    <router-link
                                        :to="{ name: 'eventCategory.edit', params: { slug: category.slug }}"
                                        :title="$t('edit')"
                                        class="hover:text-gray-500 duration-150">
                                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
                                    </router-link>

                                    <div
                                        :title="$t('delete')"
                                        @click="deleteEventCategory(category, index)"
                                        class="cursor-pointer hover:text-gray-500 duration-150">
                                            <svg class="w-5 h-5 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z"/></svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>

        <div
            :class="{ 'translate-x-full' : !showCreateMenu }"
            class="fixed right-0 bg-white xs:w-96 w-full top-0 bottom-0 min-h-screen transform duration-300 ease-in-out z-50">
                <EventCategoryCreate 
                    @closeCreateMenu="toggleCreateMenu"
                    :showCreateMenu="showCreateMenu"
                />
        </div>

        <!-- Overlay -->
        <div
            v-if="showCreateMenu"
            @click="toggleCreateMenu"
            class="fixed inset-0 bg-black opacity-30 z-40"></div>

    </div>
</template>

<script>
import EventCategoryCreate from '@/components/AdminDashboard/EventCategoryCreate'

export default {
    name: 'Admin.Dashboard.Calendar.manageCategory',
    components: {
        EventCategoryCreate
    },
    mounted() {
        this.getEventCategories();
    },
    data() {
        return {
            showCreateMenu: false
        }
    },
    computed: {
        categories() {
            return this.$store.state.event.categories
        }
    },
    methods: {
        getEventCategories() {
            this.$store.dispatch('event/getEventCategories')
        },
        deleteEventCategory(category, index) {
            this.$store.dispatch('event/deleteEventCategory', {
                category: category,
                index: index
            })
        },
        toggleCreateMenu() {
            this.$store.dispatch('event/emptyErrors')
            this.showCreateMenu = ! this.showCreateMenu
        },
    }
}
</script>