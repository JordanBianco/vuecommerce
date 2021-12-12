<template>
    <div
        :class="{ 'translate-x-full' : !showCreateMenu }"
        class="fixed right-0 bg-white xs:w-96 w-full top-0 bottom-0 min-h-screen transform duration-300 ease-in-out z-50 text-sm">
            <header class="bg-gray-100 flex justify-between items-center text-sm text-gray-500 hover:text-gray-600 duration-200 p-4">
                <span>Add new Event Category</span>                
                <svg
                    @click="closeCreateMenu"
                    class="w-6 h-6 flex-none cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
            </header>

            <section class="p-4 space-y-4 text-sm h-4/5 overflow-y-auto text-gray-500">
                <!-- NAME -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="title">{{ $t('name') }}</label>
                    <input
                        type="text"
                        @focus="errors.name = ''"
                        v-model="eventCategory.name"
                        :class="{ 'border-red-500' : errors.name }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 text-sm">
                        <p v-if="errors.name" class="text-xs text-red-500 mt-0.5">{{ errors.name[0] }}</p>
                </div>

                <!-- BACKGROUND COLOR -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="background_color">{{ $t('background_color') }}</label>
                        <div class="w-1/3">
                            <input
                                type="color"
                                @focus="errors.backgroundColor = ''"
                                v-model="eventCategory.backgroundColor"
                                class="focus:ring-gray-300 block rounded-lg w-full px-2 py-0.5">
                        </div>
                        <p v-if="errors.backgroundColor" class="text-xs text-red-500 mt-0.5">{{ errors.backgroundColor[0] }}</p>
                </div>

                <!-- TEXT COLOR -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="text_color">{{ $t('text_color') }}</label>
                        <div class="w-1/3">
                            <input
                                type="color"
                                @focus="errors.textColor = ''"
                                v-model="eventCategory.textColor"
                                class="focus:ring-gray-300 block rounded-lg w-full px-2 py-0.5">
                        </div>
                        <p v-if="errors.textColor" class="text-xs text-red-500 mt-0.5">{{ errors.textColor[0] }}</p>
                </div>

                <!-- EXAMPLE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="example">{{ $t('example') }}</label>
                    <div
                        :style="'background-color:' + eventCategory.backgroundColor + ';color:' + eventCategory.textColor"
                        class="rounded flex-none px-3 py-1 text-sm max-w-max">
                            Lorem, ipsum dolor 
                    </div>
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
    name: 'AdminDashboard.EventCategoryCreate',
    props: [
        'showCreateMenu'
    ],
    data() {
        return {
            eventCategory: {
                name: '',
                backgroundColor: '',
                textColor: '',
            },
            convertedBackgroundColor: '',
            convertedTextColor: ''
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
        showCreateMenu() {
            this.emptyFields()
        }
    },
    methods: {
        save() {
            if (this.eventCategory.backgroundColor && this.eventCategory.textColor) {
                this.backgroundHexToRgbA(this.eventCategory.backgroundColor)
                this.textHexToRgbA(this.eventCategory.textColor)
            }

            this.$store.dispatch('event/storeEventCategory', {
                name: this.eventCategory.name,
                backgroundColor: this.convertedBackgroundColor,
                textColor: this.convertedTextColor
            })
        },
        setSuccessStatus() {
            this.$store.dispatch('event/setSuccessStatus', { value: false })
        },
        closeCreateMenu() {
            this.$emit('closeCreateMenu')
        },
        emptyFields() {
            this.eventCategory.name = ''
            this.eventCategory.backgroundColor = ''
            this.eventCategory.textColor = ''
        },
        backgroundHexToRgbA(hex){
            let h = hex.replace('#', '')

            var rgbaHex = h.match(/.{1,2}/g);
            
            var rgba = [
                parseInt(rgbaHex[0], 16),
                parseInt(rgbaHex[1], 16),
                parseInt(rgbaHex[2], 16)
            ];
            
            this.convertedBackgroundColor = 'rgba(' + rgba + ')'
        },
        textHexToRgbA(hex){
            let h = hex.replace('#', '')

            var rgbaHex = h.match(/.{1,2}/g);

            var rgba = [
                parseInt(rgbaHex[0], 16),
                parseInt(rgbaHex[1], 16),
                parseInt(rgbaHex[2], 16)
            ];
            
            this.convertedTextColor = 'rgba(' + rgba + ')'
        },
    }    
}
</script>