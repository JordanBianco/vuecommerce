<template>
    <div
        :class="{ 'translate-x-full' : !showCreateMenu }"
        class="fixed right-0 bg-white xs:w-96 w-full top-0 bottom-0 min-h-screen transform duration-300 ease-in-out z-50 text-sm">
            <header class="bg-gray-100 flex justify-between items-center text-sm text-gray-500 hover:text-gray-600 duration-200 p-4">
                <span>Add new Event</span>                
                <svg
                    @click="closeCreateMenu"
                    class="w-6 h-6 flex-none cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
            </header>

            <section class="p-4 space-y-4 text-sm h-4/5 overflow-y-auto text-gray-500">
                <!-- TITLE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="title">{{ $t('title') }}</label>
                    <input
                        type="text"
                        @focus="errors.title = ''"
                        v-model="event.title"
                        :class="{ 'border-red-500' : errors.title }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 text-sm">
                        <p v-if="errors.title" class="text-xs text-red-500 mt-0.5">{{ errors.title[0] }}</p>
                </div>

                <!-- CATEGORIA -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="event_category_id">{{ $t('category') }}</label>
                    <input
                        @click="errors.event_category_id = ''"
                        @focus="openCategoryMenu = true"
                        @blur="openCategoryMenu = false"
                        type="text"
                        v-model="eventCategory"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 text-sm cursor-default"
                        :class="{ 'border-red-500' : errors.event_category_id }">
                    
                        <transition name="fade">
                            <div v-if="openCategoryMenu" class="bg-white rounded-lg shadow-md mt-2">
                                <div
                                    v-for="category in categories"
                                    :key="category.id"
                                    @click="setEventCategory(category)"
                                    class="px-4 py-2 flex items-center space-x-2 cursor-pointer hover:bg-blue-100 duration-150">
                                        <div
                                            :style="'background-color:' + category.textColor"
                                            class="w-2 h-2 rounded-full flex-none">
                                        </div>
                                        <span class="text-gray-500">{{ category.name }}</span>
                                </div>
                            </div>
                        </transition>
                    <p v-if="errors.event_category_id" class="text-xs text-red-500 mt-0.5">{{ errors.event_category_id[0] }}</p>
                </div>

                <!-- START DATE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="start">Data inizio evento</label>
                    <input
                        type="datetime-local"
                        required
                        @focus="errors.start = ''"
                        v-model="event.start"
                        :class="{ 'border-red-500' : errors.start }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 text-sm">
   
                    <p v-if="errors.start" class="text-xs text-red-500 mt-0.5">{{ errors.start[0] }}</p>
                </div>

                <!-- END DATE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="end">Data fine evento</label>
                    <input
                        type="datetime-local"
                        @focus="errors.end = ''"
                        v-model="event.end"
                        :class="{ 'border-red-500' : errors.end }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 text-sm">
                        <p v-if="errors.end" class="text-xs text-red-500 mt-0.5">{{ errors.end[0] }}</p>
                </div>

                <!-- DESCRIPTION -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="description">{{ $t('description') }}</label>
                    <textarea
                        required
                        rows="4"
                        @focus="errors.description = ''"
                        v-model="event.description"
                        :class="{ 'border-red-500' : errors.description }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 text-sm"></textarea>                    
                        <p v-if="errors.description" class="text-xs text-red-500 mt-0.5">{{ errors.description[0] }}</p>
                </div>

                <button
                    @click="save()"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                        {{ $t('save') }}
                </button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.EventCreate',
    props: [
        'showCreateMenu',
        'event',
        'categories',
    ],
    data() {
        return {
            openCategoryMenu: false,
            eventCategory: ''
        }
    },
    computed: {
        errors() {
            return this.$store.state.event.errors
        },
        success() {
            return this.$store.state.event.success
        }
    },
    watch: {
        success() {
            if (this.success) {
                this.$emit('closeCreateMenu')
                this.setSuccessStatus();
            }
        },
    },
    methods: {
        save() {
            this.$store.dispatch('event/storeEvent', {
                event: this.event
            })
        },
        setSuccessStatus() {
            this.$store.dispatch('event/setSuccessStatus', { value: false })
        },
        setEventCategory(category) {
            this.eventCategory = category.name
            this.event.event_category_id = category.id
        },
        closeCreateMenu() {
            this.$emit('closeCreateMenu')
            this.eventCategory = ''
        }
    }    
}
</script>