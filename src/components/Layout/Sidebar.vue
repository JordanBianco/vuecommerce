<template>
    <div
        :class="{ '-translate-x-full' : !open }"
        class="fixed left-0 bottom-0 top-0 min-h-screen w-full xs:w-72 bg-gray-50 z-50 overflow-x-hidden transform duration-200">
        <header class="flex justify-end px-6 pt-5 mb-4">
            <svg
                @click="toggleSidemenu"
                class="w-6 h-6 cursor-pointer text-c-dark-gray flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
        </header>
        
        <div class="text-sm flex flex-col w-full">
            <div class="px-6 py-2 font-semibold border-l-4 border-c-green bg-gray-100 w-full">{{ $t('shop') }}</div>
            <div class="px-6 py-2 text-gray-400">{{ $t('plant_care') }}</div>
            <div class="px-6 py-2 text-gray-400">{{ $t('blog') }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: ['open'],
    methods: {
        toggleSidemenu() {
            this.$emit('toggleSidemenu')
        }
    }
}
</script>