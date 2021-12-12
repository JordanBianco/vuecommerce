<template>
    <div>
        <header class="mb-6 text-gray-200">
            <h2 class="text-xl text-gray-600">{{ $t('calendar') }}</h2>
        </header>

        <div class="flex bg-white shadow-lg rounded-lg border border-gray-200">
            <!-- Impostazione e filtri calendario -->
            <aside class="w-1/4 space-y-8 p-6 border-r border-gray-100">
                <button
                    @click="openCreateMenu()"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-sm text-white py-2 w-full hover:shadow-md">
                        Add event
                </button>
                <section v-if="categories">
                    <h3 class="text-gray-400 text-sm mb-4">{{ $tc('categories', categories.length) }}</h3>

                    <div
                        v-for="category in categories"
                        :key="category.id"
                        class="flex items-center space-x-2 mb-2">
                            <input
                                :value="category.id"
                                v-model="selectedCategories"
                                type="checkbox"
                                :style="'color:' + category.textColor"
                                class="w-4 h-4 rounded border border-gray-300 focus:ring-transparent">

                            <span class="text-gray-500 text-sm">{{ category.name }}</span>
                    </div>

                    <router-link
                        :to="{ name: 'Manage EventCategory' }"
                        class="block text-xs text-gray-400 mt-4">
                            gestisci categorie
                    </router-link>
                </section>
                    
                <section class="mb-6">
                    <span class="text-sm text-gray-400 mb-2 block">Mostra Eventi</span>
                    <div class="flex items-center space-x-2 mb-2">
                        <input
                            v-model="display"
                            type="radio"
                            value="auto"
                            name="displayEvent"
                            class="w-4 h-4 rounded-md border border-gray-300 text-blue-400 focus:ring-transparent">
                        <label for="displayEvent" class="text-gray-500 text-sm">Auto</label>
                    </div>
                    <div class="flex items-center space-x-2 mb-2">
                        <input
                            v-model="display"
                            type="radio"
                            value="block"
                            name="displayEvent"
                            class="w-4 h-4 rounded-md border border-gray-300 text-blue-400 focus:ring-transparent">
                        <label for="displayEvent" class="text-gray-500 text-sm">Blocco</label>
                    </div>
                </section>

                <section class="mb-4">
                    <span class="text-sm text-gray-400 mb-2 block">Mostra Orario</span>
                    <div class="flex items-center space-x-2 mb-2">
                        <input
                            v-model="displayTime"
                            type="radio"
                            :value="true"
                            name="displayEventTime"
                            class="w-4 h-4 rounded-md border border-gray-300 text-blue-400 focus:ring-transparent">
                        <label for="displayEventTime" class="text-gray-500 text-sm">Sì</label>
                    </div>
                    <div class="flex items-center space-x-2 mb-2">
                        <input
                            v-model="displayTime"
                            type="radio"
                            :value="false"
                            name="displayEventTime"
                            class="w-4 h-4 rounded-md border border-gray-300 text-blue-400 focus:ring-transparent">
                        <label for="displayEventTime" class="text-gray-500 text-sm">No</label>
                    </div>
                </section>
            </aside>

            <div class="w-full pt-7">
                <FullCalendar
                    :options="calendarOptions"
                />
            </div>
        </div>

        <EventCreate
            @closeCreateMenu='closeMenu'
            :showCreateMenu="showCreateMenu"
            :event="event"
            :categories="categories"
        />

        <EventUpdate
            @closeUpdateMenu="closeMenu"
            :showUpdateMenu="showUpdateMenu"
            :selectedEvent="selectedEvent"
            :categories="categories"
        />

        <!-- Overlay -->
        <div
            v-if="showCreateMenu || showUpdateMenu"
            @click="closeMenu"
            class="fixed inset-0 bg-black opacity-30 z-40 py-2">
        </div>
    </div>
</template>

<script>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';

import EventCreate from '@/components/AdminDashboard/EventCreate'
import EventUpdate from '@/components/AdminDashboard/EventUpdate'

export default {
    name: 'Admin.Dashboard.Calendar.index',
    components: {
        FullCalendar,
        EventCreate,
        EventUpdate
    },
    mounted() {
        this.getEvents();
        this.getEventCategories();
    },
    data() {
        return {
            showCreateMenu: false,
            showUpdateMenu: false,

            selectedEvent: {},
            selectedCategories: [],
            
            event: {
                title: '',
                event_category_id: '',
                description: '',
                start: '',
                end: '',
            },

            display: 'auto',
            displayTime: true,
            
        }
    },
    watch: {
        selectedCategories() {
            this.getEvents()
        },
        showCreateMenu() {
            if (!this.showCreateMenu) {
                this.emptyErrors()
            }
        },
    },
    computed: {
        calendarOptions() {
            return {
                initialView: 'dayGridMonth',
                plugins: [
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin,
                    listPlugin
                ],
                editable: true,
                dateClick: this.handleDateClick,
                eventClick: this.handleEventClick,
                eventDrop: this.handleEventDrop,
                events: this.events,
                displayEventTime: this.displayTime,
                eventDisplay: this.display,
                eventTimeFormat: { // '14:30'
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                },
                headerToolbar: {
                    start: 'prev next title',
                    center: '',
                    end: 'dayGridMonth listMonth'
                },
            } 
        },
        events() {
            return this.$store.state.event.events
        },
        categories() {
            return this.$store.state.event.categories
        }
    },
    methods: {
        handleDateClick: function(arg) {
            this.openCreateMenu()
            this.event.start = this.$moment(arg.date).format('yyyy-MM-DDTHH:mm') // formato richiesto da chrome
            this.event.end = this.$moment(arg.date).format('yyyy-MM-DDTHH:mm') // formato richiesto da chrome
        },
        handleEventClick: function(arg) {
            this.openUpdateMenu()
            this.selectedEvent = arg
        },
        handleEventDrop: function(info) {
            // Se utente droppa un elemento in un'altro giorno, cambio la data di inizio e fine evento
            this.$store.dispatch('event/updateStartDate', {
                id: info.event.id,
                start: this.$moment(info.event.start).format('yyyy-MM-DDTHH:mm'),
            })
        },
        openCreateMenu() {
            this.showCreateMenu = true
        },
        openUpdateMenu() {
            this.showUpdateMenu = true
        },
        closeMenu() {
            this.showCreateMenu = false
            this.showUpdateMenu = false
            this.emptyFields()
        },
        getEvents() {
            this.$store.dispatch('event/getEvents', {
                categories: this.selectedCategories
            })
        },
        getEventCategories() {
            this.$store.dispatch('event/getEventCategories')
        },
        emptyFields() {
            this.event.title = ''
            this.event.event_category_id = ''
            this.event.description = ''
            this.event.start = ''
            this.event.end = ''
            this.selectedEvent = {}
        },
        emptyErrors() {
            this.$store.dispatch('event/emptyErrors')
        },
    }
}
</script>