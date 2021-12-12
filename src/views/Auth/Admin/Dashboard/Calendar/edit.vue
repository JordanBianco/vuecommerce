<template>
    <div>
        <header class="mb-6 flex items-baseline space-x-4">
            <h2 class="text-xl text-gray-600">Modifica Categoria</h2>
            <!-- Breadcrumb -->
            <div v-if="category" class="text-sm flex items-center space-x-0.5 text-gray-400">
                <router-link class="hover:underline" :to="{ name: 'Calendar' }">Calendar</router-link>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                <router-link class="hover:underline" :to="{ name: 'Manage EventCategory' }">{{ $t('manage_categories') }}</router-link>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"/></svg>
                <span class="text-blue-400">{{ category.name }}</span>
            </div>
        </header>

        <section class="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <section v-if="category" class="space-y-4 text-sm">
                <!-- NAME -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="code">{{ $t('name') }}</label>
                    <input
                        type="text"
                        @focus="errors.name = ''"
                        v-model="category.name"
                        :class="{ 'border-red-500' : errors.name }"
                        class="border border-gray-200 focus:ring-gray-300 w-full rounded-lg p-2 py-1.5 text-sm">
                        <p v-if="errors.name" class="text-xs text-red-500 mt-0.5">{{ errors.name[0] }}</p>
                </div>

                <!-- BACKGROUND COLOR -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="background_color">{{ $t('background_color') }}</label>                        
                        <div class="w-20">
                            <input
                                type="color"
                                @focus="errors.backgroundColor = ''"
                                v-model="category.backgroundColor"
                                class="focus:ring-gray-300 block rounded-lg w-full px-2 py-0.5">
                        </div>
                        <p v-if="errors.backgroundColor" class="text-xs text-red-500 mt-0.5">{{ errors.backgroundColor[0] }}</p>
                </div>

                <!-- TEXT COLOR -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="text_color">{{ $t('text_color') }}</label>
                        <div class="w-20">
                            <input
                                type="color"
                                @focus="errors.textColor = ''"
                                v-model="category.textColor"
                                class="focus:ring-gray-300 block rounded-lg w-full px-2 py-0.5">
                        </div>
                        <p v-if="errors.textColor" class="text-xs text-red-500 mt-0.5">{{ errors.textColor[0] }}</p>
                </div>

                <!-- EXAMPLE -->
                <div class="w-full">
                    <label class="text-gray-400 text-xs" for="example">{{ $t('example') }}</label>
                    <div
                        :style="'background-color:' + category.backgroundColor + ';color:' + category.textColor"
                        class="rounded flex-none px-3 py-1 text-sm max-w-max">
                            Lorem, ipsum dolor 
                    </div>
                </div>

                <button
                    @click="updateEventCategory"
                    class="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-xs text-white px-3 py-2 shadow-sm">
                        {{ $t('update_category') }}    
                </button>
            </section>
            <!-- Loading -->
            <div v-else class="flex justify-center items-center py-36 text-gray-400">
                <img
                    class="animate-spin w-8 h-8"
                    src="https://img.icons8.com/ios/50/BBBBBB/spinning-circle--v1.png"/>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'AdminDashboard.EventCategory.edit',
    props: ['slug'],
    mounted() {
        this.getEventCategory();
    },
    data() {
        return {
            convertedBackgroundColor: '',
            convertedTextColor: ''
        }
    },
    watch: {
        "$route" : {
            deep: true,
            immediate: true,
            handler() {
                this.emptyErrors();
            }
        }
    },
    computed: {
        category() {
            return this.$store.state.event.category
        },
        errors() {
            return this.$store.state.event.errors
        }
    },
    methods: {
        getEventCategory() {
            this.$store.dispatch('event/getEventCategory', {
                slug: this.slug
            })
        },
        updateEventCategory() {
            this.backgroundHexToRgbA(this.category.backgroundColor)
            this.textHexToRgbA(this.category.textColor)

            this.$store.dispatch('event/updateEventCategory', {
                id: this.category.id,
                name: this.category.name,
                backgroundColor: this.convertedBackgroundColor,
                textColor: this.convertedTextColor
            })
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
        emptyErrors() {
            this.$store.dispatch('event/emptyErrors')
        },
    }
}
</script>