<template>
    <div>
        <div class="flex justify-center text-sm bg-green-100 border-t border-green-200 text-c-green py-6 z-50">
            <div class="flex w-11/12 mx-auto justify-between items-start space-x-8">
                <span class="whitespace-nowrap">{{ notification.message }}</span>
            
                <div class="flex-shrink-0">
                    <svg
                        @click="removeNotification"
                        class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['notification', 'index'],
    data() {
        return {
            timeout: null
        }
    },
    created() {
        this.timeout = setTimeout(() => {
            this.removeNotification();
        }, 3000)
    },
    beforeDestroy() {
        clearTimeout(this.timeout);
    },
    methods: {
        removeNotification() {
            this.$store.dispatch('notification/removeNotification', this.index)
        }
    },
}
</script>